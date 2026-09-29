import {
  ADULT_AGE_DAYS, AGE_SPEED, CONDITIONS, DUSTS, ENRICHMENT, GROWTH, GUIDES, HANDLE_LENGTHS, INSECTS,
  LIGHTS_OFF, LIGHTS_ON, MARKS, GROWTH_BANDS, MBD_STAGES, VET_COOLDOWN_HOURS, PLANTS, RANGES, SETTLE_DAYS, START_AGE_DAYS, STARTER_SETUP,
  SUBSTRATES, TANKS, UVB_MOUNTS, UVB_TYPES, BIO_ESTABLISH_DAYS, TANK_SLOTS,
} from '@/lib/critterKeeper/rules';
import { DECOR } from '@/lib/critterKeeper/sprites/items';

// The simulation. State is a plain object kept in localStorage. tick() runs
// it forward hour by hour to "now", so the dragon keeps living while the
// page is closed; act() applies one care action and says what happened.

const HOUR = 3600e3;
const DAY = 24 * HOUR;
const MAX_CATCH_UP = 21 * DAY;

const clamp = (v, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, v));
const within = (list, now, span) => (list || []).filter((t) => now - t < span);

export function ageDays(s, now) {
  return START_AGE_DAYS + ((now - s.adoptedAt) / DAY) * AGE_SPEED;
}
export const stageOf = (s, now) => (ageDays(s, now) >= ADULT_AGE_DAYS ? 'adult' : 'juvenile');
export const daysHome = (s, now) => (now - s.adoptedAt) / DAY;

export function isDay(t) {
  const h = new Date(t).getHours();
  return h >= LIGHTS_ON && h < LIGHTS_OFF;
}

function dayKey(t) {
  const d = new Date(t);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function baskRange(s, now) {
  return RANGES[stageOf(s, now)].basking;
}

export function bulbAgeMonths(s, now) {
  return (((now - s.bulbAt) / DAY) * AGE_SPEED) / 30.4;
}

// How much usable UVB reaches him, 0 to 1.
export function uvbStrength(s, now) {
  const type = UVB_TYPES[s.setup.uvb];
  let f = type.factor * UVB_MOUNTS[s.setup.mount].factor;
  if (type.lifeMonths && bulbAgeMonths(s, now) > type.lifeMonths) f *= 0.35;
  return f;
}

export const tooSmall = (s, now) => ageDays(s, now) > TANKS[s.setup.tank].outgrownAt;

function growthTarget(age) {
  for (let i = 1; i < GROWTH.length; i++) {
    const [a1, w1] = GROWTH[i];
    const [a0, w0] = GROWTH[i - 1];
    if (age <= a1) return w0 + ((w1 - w0) * (age - a0)) / (a1 - a0);
  }
  return GROWTH[GROWTH.length - 1][1];
}

function log(s, t, text, tone = 'info', guide = null) {
  s.log = [{ t, text, tone, guide }, ...(s.log || [])].slice(0, 40);
}

function addCond(s, id, t) {
  if (s.cond[id]) return;
  s.cond[id] = { since: t };
  const c = CONDITIONS[id];
  log(s, t, `${c.label}: ${id === 'mbd' ? mbdSymptoms(s) : c.symptoms}`, 'bad', c.guide);
}
function dropCond(s, id, t, text) {
  if (!s.cond[id]) return;
  delete s.cond[id];
  if (text) log(s, t, text, 'good');
}

export function mbdSymptoms(s) {
  let text = MBD_STAGES[0][1];
  for (const [below, symptom] of MBD_STAGES) if (s.h.bone < below) text = symptom;
  return text;
}

export function health(s) {
  let hp = 100;
  for (const id of Object.keys(s.cond)) {
    let w = CONDITIONS[id].weight;
    if (id === 'mbd') w = s.h.bone < 25 ? 55 : s.h.bone < 40 ? 40 : w;
    hp -= w;
  }
  if (s.m.full < 10) hp -= 10;
  // Hidden risk shows before symptoms do, so health slides first and a
  // problem can be caught early.
  const { h } = s;
  let risk = h.resp * 0.15 + h.gut * 0.15;
  if (h.bone < 85) risk += (85 - h.bone) * 0.4;
  if (h.stress > 30) risk += (h.stress - 30) * 0.3;
  if (h.calcium < 15) risk += 4;
  if (s.m.water < 40) risk += (40 - s.m.water) * 0.3;
  hp -= Math.min(risk, 45);
  hp -= 5 * (s.marks || []).length;
  return clamp(Math.round(hp));
}

export function needsVet(s) {
  return Object.keys(s.cond).some((id) => CONDITIONS[id].vet)
    || (s.cond.mbd && s.h.bone < 40)
    || (s.cond.impaction && s.h.gut >= 90)
    || health(s) <= 30;
}

export function newGame(name, now) {
  const s = {
    v: 1,
    name: name.trim().slice(0, 20) || 'Dex',
    adoptedAt: now,
    lastTick: now,
    setup: { ...STARTER_SETUP },
    bulbAt: now,
    m: { full: 60, water: 60, trust: 15, fun: 60, clean: 90 },
    h: { bone: 85, calcium: 30, gut: 0, resp: 0, fat: 0, stress: 10, weight: growthTarget(START_AGE_DAYS) },
    poops: 0,
    decor: {},
    free: {},
    bio: null,
    poopAt: null,
    poopKind: 'normal',
    lastStool: null,
    lastPoopTime: now,
    lastInsects: null,
    waterAt: now,
    logs: { d3: [], treats: [], fruit: [], soaks: [], handles: [], rearrange: [] },
    shed: { next: now + 3 * DAY, until: null, soaked: false },
    cond: {},
    toeLoss: false,
    marks: [],
    lastVet: 0,
    parasitesAt: null,
    vetVisits: 0,
    streak: 0,
    bestStreak: 0,
    dayKey: dayKey(now),
    today: freshToday(now),
    weights: [],
    lastDust: 0,
    dayOk: true,
    log: [],
  };
  log(s, now, `${s.name} is home! The pet store starter kit came with him. Check the tank before anything else.`, 'info', 'tank');
  return s;
}

function step(s, t, dt) {
  const stage = stageOf(s, t);
  const day = isDay(t);
  const [bmin, bmax] = RANGES[stage].basking;
  const warm = s.setup.basking >= bmin;
  const shedding = s.shed.until && t < s.shed.until;
  const small = tooSmall(s, t);
  const { m, h } = s;

  m.full -= dt * (stage === 'adult' ? 100 / 72 : 100 / 40) * (shedding ? 0.6 : 1);
  m.water -= dt * (t - s.waterAt < DAY ? 0.7 : 1.4);
  // Decor in the tank keeps him busier between play sessions.
  const items = placedDecor(s);
  m.fun -= dt * (100 / 72) * (small ? 1.6 : 1) * Math.max(0.55, 1 - 0.12 * items.length);
  const crew = bioReady(s, t);
  m.clean -= dt * (crew ? 0.15 : 0.4 + 0.4 * s.poops);
  // An established cleanup crew breaks down waste on its own, slowly.
  if (crew && s.poops > 0 && Math.random() < 0.15 * dt) s.poops -= 1;
  if (s.bio && !s.bio.ready && crew) {
    s.bio.ready = true;
    log(s, t, 'The cleanup crew is established. The isopods and springtails now break down waste, though you still pick up any feces you can see.', 'good');
  }
  if (m.fun < 20 || m.full < 10) m.trust -= 0.1 * dt;

  // Calcium and UVB build bone; missing either wears it down, fastest in
  // juveniles.
  h.calcium -= dt * (stage === 'adult' ? 100 / 140 : 100 / 60);
  const uvb = uvbStrength(s, t);
  const bulbLife = UVB_TYPES[s.setup.uvb].lifeMonths;
  if (bulbLife && !s.bulbWarned && bulbAgeMonths(s, t) > bulbLife) {
    s.bulbWarned = true;
    log(s, t, `His UVB tube is past ${bulbLife} months old. Output fades before the light visibly dims, so it is time to replace it.`, 'warn', 'uvb');
  }
  const lowCal = h.calcium <= 15;
  const young = stage === 'juvenile' ? 1.5 : 1;
  if (day) {
    if (uvb >= 0.8 && !lowCal) h.bone += 0.3 * dt;
    else h.bone -= dt * ((1 - uvb) * 0.25 + (lowCal ? 0.12 : 0)) * young;
  } else if (lowCal) {
    h.bone -= 0.06 * dt * young;
  }

  // Loose substrate gets swallowed with food; a warm basking spot keeps
  // digestion moving.
  // Up the branch on his own: a 25% chance each daytime hour, for half an hour.
  if (day && s.free?.branch && !(s.perchUntil > t) && Math.random() < 0.25 * dt) {
    s.perchUntil = t + 30 * 60e3;
    m.fun += 10;
  }

  const sub = SUBSTRATES[s.setup.substrate];
  if (day && sub.loose) h.gut += sub.gut * dt;
  if (day && warm) h.gut -= 0.3 * dt;

  const hum = s.setup.humidity;
  let damp = hum > RANGES.humidity[1] ? (hum - RANGES.humidity[1]) * 0.04 : 0;
  if (s.setup.cool < RANGES.cool[0] || !warm) damp += 0.3;
  h.resp = damp > 0 ? h.resp + damp * dt : h.resp - 0.5 * dt;

  // No hide, or a tank he has outgrown, keeps him on edge.
  const edgy = (small ? 0.3 : 0) + (hides(s) === 0 ? 0.15 : 0);
  h.stress += edgy ? edgy * dt : -1 * dt;
  if (m.full < 10) h.fat -= 0.2 * dt;
  else if (h.fat > 0) h.fat -= 0.03 * dt;

  if (day && !s.cond.burn) {
    const risk = s.setup.heat === 'rock' ? 0.012 : s.setup.basking >= 120 ? 0.03 : 0;
    if (Math.random() < risk * dt) addCond(s, 'burn', t);
  }

  // Grows toward the growth guide's weight for his age while fed, and
  // loses weight while starving.
  if (m.full < 10) h.weight -= h.weight * 0.0015 * dt;
  else h.weight += (growthTarget(ageDays(s, t)) * (1 + h.fat / 200) * (h.bone < 40 ? 0.9 : 1) - h.weight) * 0.01 * dt;

  if (s.poopAt && t >= s.poopAt && h.gut < 70) {
    s.poops += 1;
    s.lastStool = { at: t, kind: s.poopKind };
    s.lastPoopTime = t;
    s.poopAt = null;
  }
  if (s.parasitesAt && t >= s.parasitesAt) {
    s.parasitesAt = null;
    addCond(s, 'parasites', t);
  }

  if (!s.shed.until && t >= s.shed.next) {
    s.shed = { ...s.shed, until: t + 36 * HOUR, soaked: false };
    log(s, t, `${s.name} is starting to shed and his colors look dull. Appetite drops during a shed. Never peel it.`, 'info', 'health');
  } else if (s.shed.until && t >= s.shed.until) {
    if (!s.shed.soaked && m.water < 50) addCond(s, 'stuckShed', t);
    else log(s, t, 'His shed came off cleanly.', 'good');
    s.shed = { next: t + (stage === 'adult' ? 12 : 5) * DAY, until: null, soaked: false };
  }
  if (s.cond.stuckShed && t - s.cond.stuckShed.since > 2 * DAY) {
    delete s.cond.stuckShed;
    s.toeLoss = true;
    if (!s.marks.includes('toe')) s.marks.push('toe');
    log(s, t, 'Stuck shed cut off the circulation and he lost the tip of a toe. Lost tissue does not grow back.', 'bad', 'health');
  }

  for (const k of Object.keys(m)) m[k] = clamp(m[k]);
  h.bone = clamp(h.bone);
  h.calcium = clamp(h.calcium);
  h.gut = clamp(h.gut);
  h.resp = clamp(h.resp, 0, 120);
  h.stress = clamp(h.stress);
  h.fat = clamp(h.fat, -40, 50);

  if (m.water < 25) addCond(s, 'dehydration', t);
  else if (m.water > 60) dropCond(s, 'dehydration', t, 'His skin looks smooth again. He is hydrated.');
  if (h.gut >= 70) addCond(s, 'impaction', t);
  else if (h.gut < 40) dropCond(s, 'impaction', t, 'He passed a stool. The impaction cleared.');
  if (h.bone < 60) addCond(s, 'mbd', t);
  if (h.bone < 40 && !s.marks.includes('jaw')) {
    s.marks.push('jaw');
    log(s, t, `${s.name}'s lower jaw is softening and healing crooked. It will stay that way for life.`, 'bad', 'uvb');
  }
  else if (h.bone >= 70) dropCond(s, 'mbd', t, 'His bones are getting stronger.');
  if (h.resp >= 100) addCond(s, 'respiratory', t);
  if (h.stress >= 50) addCond(s, 'stress', t);
  else if (h.stress < 25) dropCond(s, 'stress', t, 'His beard is back to its normal color.');
  if (h.fat >= 25) addCond(s, 'obesity', t);
  else if (h.fat < 15) dropCond(s, 'obesity', t, 'He is back to a healthy weight.');
  const d3 = within(s.logs.d3, t, 7 * DAY).length;
  if (d3 >= 5) addCond(s, 'd3', t);
  else if (d3 <= 2) dropCond(s, 'd3', t);

  const key = dayKey(t);
  if (key !== s.dayKey) {
    // The day that just ended keeps the streak only if its checklist was done.
    if (checklistDone(s, t)) {
      s.streak += 1;
      s.bestStreak = Math.max(s.bestStreak, s.streak);
    } else {
      s.streak = 0;
    }
    s.dayKey = key;
    s.today = freshToday(t);
  }
}

export function tick(state, now) {
  if (!state) return state;
  const s = JSON.parse(JSON.stringify(state));
  // A clock that went backward (a changed device clock) restarts from now
  // instead of freezing him until real time catches up.
  if (s.lastTick > now) s.lastTick = now;
  s.marks = s.marks || [];
  if (s.toeLoss && !s.marks.includes('toe')) s.marks.push('toe');
  s.decor = s.decor || {};
  s.today = s.today || freshToday(s.lastTick);
  s.weights = s.weights || [];
  s.free = s.free || {};
  s.bio = s.bio || null;
  // Saves from before free placement kept the branch or hammock in a
  // 'hang' slot; it moves to a free spot the tank picks (x: null).
  if (s.decor.hang) {
    s.free[s.decor.hang] = { x: null, y: null, rot: 0 };
    delete s.decor.hang;
  }
  let t = Math.max(s.lastTick, now - MAX_CATCH_UP);
  while (t < now) {
    const span = Math.min(HOUR, now - t);
    t += span;
    step(s, t, span / HOUR);
  }
  s.lastTick = now;
  return s;
}

// Decor that is actually in a slot this tank has.
export function placedDecor(s) {
  const slots = TANK_SLOTS[s.setup.tank] || [];
  const floor = Object.entries(s.decor || {}).filter(([slot, id]) => slots.includes(slot) && DECOR[id]).map(([, id]) => id);
  return [...floor, ...Object.keys(s.free || {}).filter((id) => DECOR[id]?.free)];
}
export const hides = (s) => placedDecor(s).filter((id) => DECOR[id].hide).length;

// The bioactive cleanup crew works once it has had time to establish, and
// only in a tank big enough for 4 to 6 inches of substrate.
export function bioReady(s, t) {
  return s.setup.substrate === 'bioactive' && s.setup.tank === '120' && !!s.bio && t - s.bio.since >= BIO_ESTABLISH_DAYS * DAY;
}

function setupChange(s, now, opts) {
  const parts = [];
  // A different kind of UVB means a new bulb.
  if (opts.uvb && opts.uvb !== s.setup.uvb) {
    s.bulbAt = now;
    s.bulbWarned = false;
  }
  // A different kind of UVB means a new bulb.
  if (opts.uvb && opts.uvb !== s.setup.uvb) {
    s.bulbAt = now;
    s.bulbWarned = false;
  }
  const wasBio = s.setup.substrate === 'bioactive';
  s.setup = { ...s.setup, ...opts };
  parts.push({ text: 'Tank updated.', tone: 'good' });
  if (s.setup.substrate === 'bioactive' && !wasBio) {
    s.bio = { since: now, ready: false };
    parts.push({ text: 'Bioactive is in. The isopods and springtails need a few weeks to establish before they keep up with waste.', tone: 'info', guide: 'bioactive' });
  }
  if (s.setup.substrate !== 'bioactive') s.bio = null;
  if (s.setup.substrate === 'bioactive' && s.setup.tank !== '120') {
    parts.push({ text: 'Bioactive needs a 4x2x2 or larger, for 4 to 6 inches of substrate.', tone: 'warn', guide: 'bioactive' });
  }
  return parts;
}

// Moving decor counts as rearranging: great now and then, stressful when
// constant. One drag session (an hour) counts once.
function decorChange(s, now, { decor, free, layers }) {
  const before = placedDecor(s).length;
  if (decor) s.decor = decor;
  if (free) s.free = free;
  if (layers) s.layers = layers;
  const after = placedDecor(s).length;
  if (now - (s.logs.rearrange.at(-1) || 0) < 3600e3) {
    s.logs.rearrange[s.logs.rearrange.length - 1] = now;
    return [{ text: after > before ? 'Added to the tank.' : 'Tank rearranged.', tone: 'good', quiet: true }];
  }
  const recent = within(s.logs.rearrange, now, 7 * DAY).length;
  s.logs.rearrange.push(now);
  // Setting up in the first week never counts against him.
  if (recent && after <= before && daysHome(s, now) >= SETTLE_DAYS) {
    s.h.stress += 15;
    return [{ text: 'He already had a new layout this week. Rearrange occasionally, not constantly.', tone: 'warn', guide: 'enrichment' }];
  }
  s.m.fun += 15;
  return [{ text: 'He explores the new layout, climbing everything.', tone: 'good' }];
}

// ---- Care actions ----

const TONE_RANK = { good: 0, info: 1, warn: 2, bad: 3 };

function result(s, now, parts, guide) {
  const worst = parts.reduce((w, p) => (TONE_RANK[p.tone] > TONE_RANK[w] ? p.tone : w), 'good');
  const text = parts.map((p) => p.text).join(' ');
  const g = guide || parts.find((p) => p.guide && p.tone !== 'good')?.guide || parts.find((p) => p.guide)?.guide || null;
  // Quiet parts (another move in the same rearranging session) skip the log.
  if (!parts.every((p) => p.quiet)) log(s, now, text, worst, g);
  return { state: s, msg: { text, tone: worst, guide: g } };
}

const asleep = (s) => ({ text: `${s.name} is asleep. The lights are off until ${LIGHTS_ON}:00.`, tone: 'info' });

function feedInsects(s, now, { insect, size, dust }) {
  const ins = INSECTS[insect];
  const stage = stageOf(s, now);
  if (!isDay(now)) return [{ ...asleep(s), text: `${asleep(s).text} Dragons need their basking heat to digest, so feed during the day.`, guide: 'feeding' }];
  if (ins.kind === 'toxic') {
    addCond(s, 'poisoned', now);
    return [{ text: 'Fireflies are toxic to bearded dragons, and a single one can kill. Get him to a vet now.', tone: 'bad', guide: 'foods' }];
  }
  if (s.shed.until && now < s.shed.until && Math.random() < 0.5) {
    return [{ text: 'He is shedding and not interested. Appetite drops during a shed.', tone: 'info', guide: 'health' }];
  }
  if (s.m.full >= 85) return [{ text: 'He is full and ignores them.', tone: 'info', guide: 'feeding' }];

  const parts = [];
  const [bmin, bmax] = baskRange(s, now);
  if (s.setup.basking < bmin) {
    s.m.full += 12;
    s.h.gut += 10;
    s.poopAt = s.poopAt || now + 30 * HOUR;
    s.poopKind = 'undigested';
    parts.push({ text: `He picks at a couple and walks off. His basking spot is ${s.setup.basking}°F, below the ${bmin} to ${bmax}°F he needs to digest.`, tone: 'warn', guide: 'tank' });
  } else {
    s.m.full += stage === 'adult' ? 45 : 65;
    s.poopAt = s.poopAt || now + (stage === 'adult' ? 30 : 14) * HOUR;
    s.poopKind = 'normal';
    parts.push({ text: `${s.name} snaps up the ${ins.label.toLowerCase()}.`, tone: 'good' });
  }
  if (stage === 'adult' && s.lastInsects && now - s.lastInsects < DAY) {
    s.h.fat += 3;
    parts.push({ text: 'Adults need insects only a few times a week. Greens are most of an adult diet.', tone: 'warn', guide: 'feeding' });
  }
  s.lastInsects = now;
  if (ins.water) s.m.water += ins.water;
  if (ins.fat) s.h.fat += ins.fat;

  if (size === 'big') {
    s.h.gut += 30;
    parts.push({ text: 'He struggles to swallow them. Prey should be no wider than the space between his eyes.', tone: 'warn', guide: 'feeding' });
  }
  if (ins.kind === 'adultOnly' && stage === 'juvenile') {
    s.h.gut += 15;
    parts.push({ text: 'Superworms are for adults only. A juvenile has a hard time passing them.', tone: 'warn', guide: 'feeding' });
  }
  if (ins.kind === 'treat') {
    s.logs.treats.push(now);
    const n = within(s.logs.treats, now, 7 * DAY).length;
    parts.push(n > 3
      ? { text: `That is ${n} waxworm meals this week. They are treats, a few per week at most.`, tone: 'warn', guide: 'feeding' }
      : { text: 'Waxworms are treats. Keep them to a few a week.', tone: 'info', guide: 'feeding' });
  }
  if (ins.kind === 'wild') {
    s.parasitesAt = s.parasitesAt || now + 20 * HOUR;
    parts.push({ text: 'Wild-caught insects can carry parasites and pesticides. Feed captive-bred insects.', tone: 'warn', guide: 'foods' });
  }

  s.today.fed = true;
  parts.push(...applyDust(s, now, dust, stage));
  return parts;
}

function applyDust(s, now, dust, stage) {
  const parts = [];
  if (dust && dust !== 'none') {
    s.today.dusted = true;
    s.lastDust = now;
  }
  if (dust === 'calcium') s.h.calcium += 35;
  if (dust === 'd3') {
    s.h.calcium += 35;
    s.logs.d3.push(now);
    const n = within(s.logs.d3, now, 7 * DAY).length;
    if (n >= 4) parts.push({ text: `That is calcium with D3 ${n} times this week. A couple of times a week is enough. Use plain calcium otherwise.`, tone: 'warn', guide: 'feeding' });
  }
  if (dust === 'none' && stage === 'juvenile' && s.h.calcium < 30) {
    parts.push({ text: 'Juveniles need calcium dusted on most feedings.', tone: 'warn', guide: 'feeding' });
  }
  return parts;
}

// Why he cannot be fed right now, or null if he can.
export function feedBlock(s, now) {
  if (needsVet(s)) return `${s.name} needs a vet before anything else.`;
  if (!isDay(now)) return `${s.name} is asleep. Feed him during the day, when his basking heat lets him digest.`;
  if (s.m.full >= 85) return 'He is full right now. Try again later.';
  return null;
}

// Tong Time: the mini game's result. Right-size prey fills him up; prey
// wider than the space between his eyes adds impaction risk; a firefly
// poisons him. Tong-feeding also counts as enrichment (foraging).
function tongs(s, now, { good = 0, small = 0, big = 0, firefly = 0, dust = 'calcium' }) {
  if (!isDay(now)) return [asleep(s)];
  if (firefly) {
    addCond(s, 'poisoned', now);
    return [{ text: 'You fed him a firefly. A single firefly can kill a bearded dragon. Get him to a vet now.', tone: 'bad', guide: 'foods' }];
  }
  const eaten = good + small + big;
  if (!eaten) return [{ text: 'He did not get anything that round.', tone: 'info', quiet: true }];
  const stage = stageOf(s, now);
  const parts = [];
  const [bmin, bmax] = baskRange(s, now);
  const per = stage === 'adult' ? 5 : 7;
  if (s.setup.basking < bmin) {
    s.m.full += eaten * 2;
    s.h.gut += 10;
    s.poopAt = s.poopAt || now + 30 * HOUR;
    s.poopKind = 'undigested';
    parts.push({ text: `He takes a few and loses interest. His basking spot is ${s.setup.basking}°F, below the ${bmin} to ${bmax}°F he needs to digest.`, tone: 'warn', guide: 'tank' });
  } else {
    s.m.full += good * per + (small + big) * Math.round(per / 2);
    s.poopAt = s.poopAt || now + (stage === 'adult' ? 30 : 14) * HOUR;
    s.poopKind = 'normal';
    parts.push({ text: `Tong-fed ${eaten} insect${eaten === 1 ? '' : 's'}. Hand-feeding with tongs doubles as enrichment.`, tone: 'good' });
  }
  s.m.fun += 10;
  s.lastInsects = now;
  s.today.fed = true;
  if (big) {
    s.h.gut += 8 * big;
    parts.push({ text: `${big} of those ${big === 1 ? 'was' : 'were'} too big. Prey should be no wider than the space between his eyes.`, tone: 'warn', guide: 'feeding' });
  }
  parts.push(...applyDust(s, now, dust, stage));
  return parts;
}

// The growth guide's weight range for an age in days, interpolated.
export function growthBand(age) {
  const m = age / 30.4;
  const B = GROWTH_BANDS;
  if (m <= B[0][0]) return [B[0][1], B[0][2]];
  for (let i = 1; i < B.length; i++) {
    if (m <= B[i][0]) {
      const f = (m - B[i - 1][0]) / (B[i][0] - B[i - 1][0]);
      return [Math.round(B[i - 1][1] + (B[i][1] - B[i - 1][1]) * f), Math.round(B[i - 1][2] + (B[i][2] - B[i - 1][2]) * f)];
    }
  }
  return [B.at(-1)[1], B.at(-1)[2]];
}

// The weekly weigh-in. One real day is one dragon week, so it is once a day.
function weigh(s, now) {
  const last = s.weights.at(-1);
  if (last && dayKey(last.t) === dayKey(now)) return [{ text: `Already weighed today: ${last.g} g. Once a week (once a day here) is the routine.`, tone: 'info', guide: 'growth' }];
  const age = ageDays(s, now);
  const g = Math.max(1, Math.round(s.h.weight * (1 + (Math.random() - 0.5) * 0.03)));
  const parts = [];
  const [lo, hi] = growthBand(age);
  const months = Math.round(age / 30.4);
  if (g < lo || g > hi) parts.push({ text: `${g} g at ${months} months, ${g < lo ? 'under' : 'over'} the usual ${lo} to ${hi} g. Ranges are wide and plenty of healthy dragons fall outside them. The trend over the weeks matters more.`, tone: 'info', guide: 'growth' });
  else parts.push({ text: `${g} g at ${months} months, inside the ${lo} to ${hi} g range for his age.`, tone: 'good' });
  if (s.today.fed) parts.push({ text: 'Tip: weigh before his first meal, so a full stomach does not skew the reading.', tone: 'info', guide: 'growth' });
  const stage = stageOf(s, now);
  const back = s.weights.filter((w) => now - w.t >= 3 * DAY && now - w.t <= 5 * DAY);
  if (stage === 'juvenile' && back.length && g <= Math.max(...back.map((w) => w.g))) {
    parts.push({ text: 'His weight has not gone up in about three weeks. A juvenile stuck for three to four weeks needs a vet check.', tone: 'warn', guide: 'growth' });
  }
  const recent = s.weights.filter((w) => now - w.t <= 6 * DAY);
  if (stage === 'adult' && recent.length && g < Math.max(...recent.map((w) => w.g)) * 0.9) {
    parts.push({ text: 'He has lost about a tenth of his weight. Outside a laying cycle, that is a vet visit.', tone: 'warn', guide: 'growth' });
  }
  s.weights = [...s.weights, { t: now, age, g }].slice(-120);
  s.today.weighed = true;
  return parts;
}

function serveSalad(s, now, { plants = [], dust, mist }) {
  if (!isDay(now)) return [asleep(s)];
  if (!plants.length) return [{ text: 'Pick at least one thing for the salad.', tone: 'info' }];
  const picks = plants.map((id) => PLANTS[id]);
  const toxic = picks.find((p) => p.kind === 'toxic');
  if (toxic) {
    addCond(s, 'poisoned', now);
    return [{ text: `${toxic.label} is toxic to bearded dragons. Get him to a vet now.`, tone: 'bad', guide: 'foods' }];
  }
  if (s.m.full >= 90) return [{ text: 'He is full and ignores it.', tone: 'info' }];
  if (ageDays(s, now) < 180 && Math.random() < 0.5) {
    return [{ text: 'He sniffs the salad and walks away. Juveniles often skip salad until about 6 months. Keep offering it.', tone: 'info', guide: 'feeding' }];
  }
  const parts = [];
  const stage = stageOf(s, now);
  const real = picks.filter((p) => ['staple', 'occasional', 'oxalate'].includes(p.kind));
  s.m.full += real.length ? (stage === 'adult' ? 40 : 15) : 3;
  s.m.water += 6;
  parts.push({ text: 'He eats his greens.', tone: 'good' });
  if (picks.some((p) => p.kind === 'iceberg')) {
    s.poopKind = 'runny';
    parts.push({ text: 'Iceberg lettuce is mostly water and causes runny stool. Skip it.', tone: 'warn', guide: 'foods' });
  }
  if (picks.some((p) => p.kind === 'oxalate')) {
    s.h.calcium -= 15;
    parts.push({ text: 'Spinach is high in oxalates, which bind calcium. Serve it rarely.', tone: 'warn', guide: 'foods' });
  }
  if (picks.some((p) => p.kind === 'fruit')) {
    s.h.fat += 3;
    s.logs.fruit.push(now);
    const n = within(s.logs.fruit, now, 7 * DAY).length;
    if (n > 2) parts.push({ text: `Fruit ${n} times this week. Once or twice a week at most.`, tone: 'warn', guide: 'foods' });
  }
  if (dust) {
    s.h.calcium += 20;
    s.today.dusted = true;
    s.lastDust = now;
  }
  if (real.length) s.today.fed = true;
  if (mist) {
    s.m.water += 10;
    parts.push({ text: 'Misting the salad is how he gets extra water without making the tank humid.', tone: 'good' });
  }
  return parts;
}

function soak(s, now) {
  if (within(s.logs.soaks, now, DAY).length) {
    s.h.stress += 10;
    return [{ text: 'He already had a soak today. Once or twice a week is plenty.', tone: 'warn', guide: 'feeding' }];
  }
  s.logs.soaks.push(now);
  s.m.water += 35;
  s.h.gut -= 15;
  const parts = [{ text: 'A 15 to 20 minute lukewarm soak, no deeper than his chest.', tone: 'good' }];
  if (s.shed.until && now < s.shed.until) {
    s.shed.soaked = true;
    parts.push({ text: 'It helps his shed come off.', tone: 'good' });
  }
  if (s.cond.stuckShed) {
    delete s.cond.stuckShed;
    parts.push({ text: 'The stuck shed on his toes loosens and slides off.', tone: 'good' });
  }
  return parts;
}

function handle(s, now, { length }) {
  if (!isDay(now)) return [asleep(s)];
  const parts = [];
  if (daysHome(s, now) < SETTLE_DAYS) {
    s.h.stress += 30;
    s.m.trust -= 5;
    const left = Math.ceil(SETTLE_DAYS - daysHome(s, now));
    return [{ text: `He puffs up and darkens his beard. He is still settling in: wait 7 to 14 days after bringing a dragon home before handling. (${left} more day${left === 1 ? '' : 's'})`, tone: 'warn', guide: 'handling' }];
  }
  s.logs.handles.push(now);
  if (s.cond.stress) {
    s.h.stress += 10;
    return [{ text: 'His beard is black and he is backing away. End the session and let him calm down.', tone: 'warn', guide: 'handling' }];
  }
  const L = HANDLE_LENGTHS[length];
  if (length === 'long') {
    s.h.stress += 20;
    s.m.trust += 2;
    parts.push({ text: `After ${L.minutes} minutes he has cooled down and his beard is darkening. Build up to about 10 to 15 minutes.`, tone: 'warn', guide: 'handling' });
  } else {
    s.m.trust += length === 'right' ? (s.m.trust < 50 ? 8 : 5) : 4;
    s.m.fun += length === 'right' ? 10 : 4;
    parts.push({ text: `${L.minutes} calm minutes, lifted from underneath with his chest and legs supported. Wash your hands after.`, tone: 'good' });
  }
  if (within(s.logs.handles, now, DAY).length > 2) {
    s.h.stress += 10;
    parts.push({ text: 'That is a lot of handling for one day.', tone: 'warn', guide: 'handling' });
  }
  if (s.shed.until && now < s.shed.until) parts.push({ text: 'He is shedding. Leave the loose skin alone.', tone: 'info' });
  return parts;
}

function enrich(s, now, { kind }) {
  if (!isDay(now)) return [asleep(s)];
  const E = ENRICHMENT[kind];
  if (kind === 'dig' && !placedDecor(s).includes('digbox')) {
    return [{ text: 'Put a dig box in the tank first: drag it in from the items under the tank.', tone: 'info', guide: 'enrichment' }];
  }
  if (kind === 'roam' && daysHome(s, now) < SETTLE_DAYS) {
    s.h.stress += 10;
    return [{ text: 'He is still settling in. Give him a week in his tank first.', tone: 'warn', guide: 'handling' }];
  }
  s.m.fun += kind === 'roam' ? 35 : 30;
  if (kind === 'roam') s.h.fat -= 3;
  if (kind === 'hunt') s.m.full += 5;
  const lines = {
    dig: 'He digs happily in his dig box of topsoil and play sand.',
    roam: 'He explores a warm, escape-proof room while you watch.',
    hunt: 'He chases down live insects, which is great exercise.',
  };
  return [{ text: lines[kind] || `${E.label}: done.`, tone: 'good' }];
}

export function stoolReport(s, now) {
  const since = (now - s.lastPoopTime) / DAY;
  const threshold = stageOf(s, now) === 'adult' ? 4 : 3;
  if (since >= threshold) return { text: `No stool in ${Math.floor(since)} days.`, tone: 'bad' };
  if (!s.lastStool) return { text: 'No stool yet.', tone: 'info' };
  const kinds = {
    normal: { text: 'Normal stool: a firm brown part and a white urate.', tone: 'good' },
    runny: { text: 'Runny stool.', tone: 'warn' },
    undigested: { text: 'Undigested insect parts in his stool. His basking spot is too cold.', tone: 'warn' },
  };
  return kinds[s.lastStool.kind] || kinds.normal;
}

function clean(s, now) {
  s.today.tray = true;
  const had = s.poops;
  s.poops = 0;
  s.m.clean = 100;
  const stool = stoolReport(s, now);
  return [{ text: had ? `Spot cleaned. ${stool.text}` : `Nothing to pick up. ${stool.text}`, tone: stool.tone === 'good' ? 'good' : stool.tone, guide: 'growth' }];
}

export function vetReadyAt(s) {
  // Poisoning and burns are emergencies: no waiting.
  if (s.cond.poisoned || s.cond.burn) return 0;
  return (s.lastVet || 0) + VET_COOLDOWN_HOURS * 3600e3;
}

function vet(s, now) {
  const treated = Object.keys(s.cond).filter((id) => id !== 'obesity');
  if (!treated.length && health(s) > 30) return [{ text: 'The vet says he looks healthy. Nothing to treat.', tone: 'good' }];
  const ready = vetReadyAt(s);
  if (now < ready) {
    const at = new Date(ready).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return [{ text: `The vet can see him again at ${at}. Until then, fix what you can: the cause is usually in the tank or the diet.`, tone: 'warn', guide: 'health' }];
  }
  s.vetVisits += 1;
  s.lastVet = now;
  s.streak = 0;
  s.dayOk = false;
  for (const id of treated) delete s.cond[id];
  s.h.resp = Math.min(s.h.resp, 30);
  s.h.gut = Math.min(s.h.gut, 20);
  s.h.bone = Math.max(s.h.bone, 62);
  s.h.stress = Math.min(s.h.stress, 20);
  s.m.water = Math.max(s.m.water, 70);
  s.parasitesAt = null;
  if (treated.includes('d3')) s.logs.d3 = [];
  const causes = treated.map((id) => CONDITIONS[id].cause).filter(Boolean);
  return [
    { text: `The vet treated ${s.name} for ${treated.map((id) => CONDITIONS[id].label.toLowerCase()).join(', ')}. A vet visit resets his healthy-day streak.`, tone: 'info' },
    ...(causes.length ? [{ text: `If the cause stays, it comes back. ${causes.join(' ')}`, tone: 'warn', guide: CONDITIONS[treated[0]].guide }] : []),
  ];
}

export function act(state, type, opts = {}, now = Date.now()) {
  const s = tick(state, now);
  if (s.today.key !== dayKey(now)) s.today = freshToday(now);
  if (needsVet(s) && !['vet', 'setup', 'fixnext', 'decor', 'bulb', 'water', 'clean'].includes(type)) {
    return { state: s, msg: { text: `${s.name} needs a vet before anything else.`, tone: 'bad', guide: 'health' } };
  }
  let parts;
  switch (type) {
    case 'insects': parts = feedInsects(s, now, opts); break;
    case 'salad': parts = serveSalad(s, now, opts); break;
    case 'water':
      s.waterAt = now;
      s.m.water += 10;
      parts = [{ text: 'Fresh water in a shallow dish. Refresh it daily.', tone: 'good' }];
      break;
    case 'soak': parts = soak(s, now); break;
    case 'handle': parts = handle(s, now, opts); break;
    case 'enrich': parts = enrich(s, now, opts); break;
    case 'clean': parts = clean(s, now); break;
    case 'weigh': parts = weigh(s, now); break;
    case 'tongs': parts = tongs(s, now, opts); break;
    case 'bulb':
      s.bulbAt = now;
      s.bulbWarned = false;
      parts = [{ text: 'New UVB bulb in. Output fades before the light visibly dims, so tubes need replacing every 6 to 12 months.', tone: 'good', guide: 'uvb' }];
      break;
    case 'setup': parts = setupChange(s, now, opts); break;
    case 'fixnext': {
      const fix = nextFix(s, now);
      if (!fix) parts = [{ text: 'Everything in the tank checks out.', tone: 'good' }];
      else if (!fix.setup) parts = [{ text: fix.text, tone: 'info', guide: fix.guide }];
      else parts = [{ text: fix.text, tone: 'good', guide: fix.guide }, ...setupChange(s, now, fix.setup).slice(1)];
      break;
    }
    case 'decor': parts = decorChange(s, now, opts); break;
    case 'vet': parts = vet(s, now); break;
    default: return { state: s, msg: null };
  }
  for (const k of Object.keys(s.m)) s.m[k] = clamp(s.m[k]);
  s.h.gut = clamp(s.h.gut);
  s.h.calcium = clamp(s.h.calcium);
  s.h.stress = clamp(s.h.stress);
  s.h.fat = clamp(s.h.fat, -40, 50);
  return result(s, now, parts);
}

// What a thermometer and a look at the tank would tell you.
export function tankChecks(s, now) {
  const [bmin, bmax] = baskRange(s, now);
  const st = s.setup;
  const judge = (v, [lo, hi]) => (v < lo ? 'low' : v > hi ? 'high' : 'ok');
  const uvb = uvbStrength(s, now);
  const type = UVB_TYPES[st.uvb];
  const age = bulbAgeMonths(s, now);
  return [
    { id: 'basking', label: 'Basking spot', value: `${st.basking}°F`, target: `${bmin} to ${bmax}°F`, state: judge(st.basking, [bmin, bmax]) },
    { id: 'cool', label: 'Cool side', value: `${st.cool}°F`, target: `${RANGES.cool[0]} to ${RANGES.cool[1]}°F`, state: judge(st.cool, RANGES.cool) },
    { id: 'humidity', label: 'Humidity', value: `${st.humidity}%`, target: `${RANGES.humidity[0]} to ${RANGES.humidity[1]}%`, state: judge(st.humidity, RANGES.humidity) },
    {
      id: 'uvb', label: 'UVB',
      value: uvb >= 0.8 ? 'Strong' : uvb > 0 ? 'Weak' : 'None reaching him',
      target: type.lifeMonths ? `Bulb age ${Math.floor(age)} of ${type.lifeMonths} months` : 'T5 HO tube over mesh',
      state: uvb >= 0.8 ? 'ok' : 'low',
    },
    { id: 'heat', label: 'Heat source', value: st.heat === 'rock' ? 'Heat rock' : 'Halogen bulb', target: 'Overhead bulb, no heat rocks', state: st.heat === 'rock' ? 'high' : 'ok' },
    st.substrate === 'bioactive'
      ? {
        id: 'substrate', label: 'Substrate', value: 'Bioactive',
        target: st.tank !== '120' ? 'Needs a 4x2x2 or larger' : bioReady(s, now) ? 'Cleanup crew established' : 'Cleanup crew establishing',
        state: st.tank !== '120' ? 'low' : 'ok',
      }
      : { id: 'substrate', label: 'Substrate', value: SUBSTRATES[st.substrate].label, target: 'Tile or paper towel', state: SUBSTRATES[st.substrate].loose ? 'high' : 'ok' },
    { id: 'hides', label: 'Hides', value: `${hides(s)}`, target: 'One on the warm end and one on the cool end', state: hides(s) >= 2 ? 'ok' : 'low' },
    { id: 'tank', label: 'Tank', value: TANKS[st.tank].label, target: '4x2x2 ft for an adult', state: tooSmall(s, now) ? 'low' : 'ok' },
  ];
}

function freshToday(t) {
  return { key: dayKey(t), fed: false, dusted: false, weighed: false, tray: false };
}

// Today's care checklist. Adults are dusted two or three times a week, so
// for them a dusting in the last three days counts.
export function checklist(s, now) {
  const t = s.today || freshToday(now);
  const adult = stageOf(s, now) === 'adult';
  return [
    { id: 'fed', label: 'Fed', done: t.fed, action: adult ? 'salad' : 'insects', hint: adult ? 'serve his salad.' : 'feed him insects.' },
    { id: 'dusted', label: 'Dusted', done: t.dusted || (adult && now - (s.lastDust || 0) < 3 * DAY), action: 'insects', hint: 'dust his food with calcium.' },
    { id: 'weighed', label: 'Weighed', done: t.weighed, action: 'weigh', hint: 'weigh him (his weekly weigh-in).' },
    { id: 'tray', label: 'Tray', done: t.tray, action: 'clean', hint: 'check his tray and spot clean.' },
  ];
}

function checklistDone(s, now) {
  return checklist(s, now).every((c) => c.done);
}

// The basic setup, one fix at a time, each with the reason from the guides.
export function nextFix(s, now) {
  const st = s.setup;
  const [bmin, bmax] = baskRange(s, now);
  const mid = (a, b) => Math.round((a + b) / 2);
  if (st.uvb !== 't5') return { setup: { uvb: 't5' }, text: 'Put in a T5 HO UVB tube with a reflector. Without UVB he cannot use calcium, which leads to metabolic bone disease.', guide: 'uvb' };
  if (st.mount !== 'mesh') return { setup: { mount: 'mesh' }, text: 'Moved the UVB tube over the mesh. Glass and plastic block UVB.', guide: 'uvb' };
  if (st.heat === 'rock') return { setup: { heat: 'halogen' }, text: 'Swapped the heat rock for a halogen basking bulb above him. Heat rocks cause burns.', guide: 'health' };
  if (st.basking < bmin || st.basking > bmax) return { setup: { basking: mid(bmin, bmax) }, text: `Set the basking spot to ${mid(bmin, bmax)}°F. He needs ${bmin} to ${bmax}°F to digest.`, guide: 'tank' };
  if (SUBSTRATES[st.substrate].loose && st.substrate !== 'bioactive') return { setup: { substrate: 'tile' }, text: 'Swapped the loose substrate for tile. Loose substrate can be swallowed and cause impaction.', guide: 'tank' };
  if (st.humidity < RANGES.humidity[0] || st.humidity > RANGES.humidity[1]) return { setup: { humidity: 35 }, text: 'Brought humidity to 35%. Too damp and he risks a respiratory infection.', guide: 'tank' };
  if (st.cool < RANGES.cool[0] || st.cool > RANGES.cool[1]) return { setup: { cool: 80 }, text: 'Set the cool side to 80°F, inside the 75 to 85°F range, so he can cool off.', guide: 'tank' };
  if (st.tank !== '120') return { setup: { tank: '120' }, text: 'Moved him into a 4x2x2 tank, the adult minimum. A cramped tank stresses him.', guide: 'tank' };
  if (hides(s) < 2) return { text: 'Add hides with Decorate: one on the warm end and one on the cool end.', guide: 'enrichment' };
  return null;
}

// The one thing most worth doing right now, for the line under the tank.
export function nextStep(s, now) {
  if (needsVet(s)) return { text: `${s.name} needs a vet.`, action: 'vet' };
  const fix = nextFix(s, now);
  if (fix) return { text: fix.setup ? 'Something in his tank is wrong. Check the tank.' : 'He needs hides: one warm, one cool.', action: fix.setup ? 'tank' : 'decorate' };
  if (!isDay(now)) return { text: 'He is asleep. Let him rest until the lights come on.', action: null };
  const adult = stageOf(s, now) === 'adult';
  if (s.m.full < 35) return { text: adult ? 'He is hungry. Serve him a salad.' : 'He is hungry. Feed him insects.', action: adult ? 'salad' : 'insects' };
  if (s.m.water < 40) return { text: 'He could use water. Refresh his dish.', action: 'water' };
  if (s.poops > 0 || s.m.clean < 40) return { text: 'Time to spot clean the tank.', action: 'clean' };
  if (s.m.fun < 35) return { text: 'He is bored. Give him some enrichment.', action: 'enrich' };
  if (daysHome(s, now) >= SETTLE_DAYS && s.m.trust < 40) return { text: 'Build trust: handle him for about 15 minutes.', action: 'handle' };
  const todo = checklist(s, now).find((c) => !c.done);
  if (todo) return { text: `Today's care: ${todo.hint}`, action: todo.action };
  return { text: 'All good for now. Check back later.', action: null };
}

export function mood(s, now) {
  if (needsVet(s)) return { emoji: '🚑', text: 'Needs a vet' };
  if (!isDay(now)) return { emoji: '😴', text: `Asleep. Lights on at ${LIGHTS_ON}:00` };
  if (s.cond.stress) return { emoji: '😤', text: 'Black beard, stressed' };
  if (s.shed.until && now < s.shed.until) return { emoji: '🐍', text: 'Shedding' };
  if (Object.keys(s.cond).length) return { emoji: '🤒', text: 'Not feeling well' };
  if (s.m.full < 25) return { emoji: '🍽️', text: 'Hungry, pacing the glass' };
  if (s.m.fun < 20) return { emoji: '🥱', text: 'Bored, glass surfing' };
  if (s.perchUntil > now && s.free?.branch) return { emoji: '🌿', text: 'Perched on his branch' };
  if (s.setup.basking < baskRange(s, now)[0]) return { emoji: '🥶', text: 'Cold and sluggish' };
  return { emoji: '☀️', text: 'Basking under his lamp' };
}

export { DUSTS, GUIDES };
