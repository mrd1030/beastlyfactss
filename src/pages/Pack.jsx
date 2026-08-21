import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Heart, Share2, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { facts } from '@/lib/data/facts';
import { imagePathFor } from '@/lib/data/factImages';
import { useFavoritesCtx, ACHIEVEMENTS } from '@/lib/FavoritesContext';
import FactCard from '@/components/shared/FactCard';
import FactModal from '@/components/shared/FactModal';
import ImageLightbox from '@/components/shared/ImageLightbox';
import ClearPackDialog from '@/components/layout/ClearPackDialog';
import NotificationOptIn from '@/components/pack/NotificationOptIn';
import QuizTradingCard from '@/components/pack/QuizTradingCard';
import AchievementDialog from '@/components/pack/AchievementDialog';


const CONTENT_TYPE_META = {
  guide: { emoji: '📖', label: 'Guide' },
  encyclopedia: { emoji: '🦎', label: 'Encyclopedia' },
  beastlypedia: { emoji: '🎴', label: 'Beastfile' },
  article: { emoji: '📰', label: 'Article' },
};

export default function Pack() {
  const { favorites } = useFavoritesCtx();
  const [selectedFact, setSelectedFact] = useState(null);
  const [imageFact, setImageFact] = useState(null);
  const {
    savedQuizResults, removeQuizResult, unlockedAchievements, streak, achievementState,
    savedContent, removeSavedContent,
  } = useFavoritesCtx();
  const [openAchievement, setOpenAchievement] = useState(null);
  const savedFacts = facts.filter(f => favorites.includes(f.id));
  // Most recently saved first, same ordering as the quiz results shelf.
  const sortedSavedContent = [...savedContent].sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1));
  const [confirmingId, setConfirmingId] = useState(null);
  // Keyed by `${type}-${id}` rather than id alone: content ids are slugs and
  // aren't unique across types (a guide and an encyclopedia entry can share
  // an id), and this is a separate list from the quiz results above anyway.
  const [confirmingContentKey, setConfirmingContentKey] = useState(null);

  // Results are no longer capped, so a long-standing collection could otherwise
  // push everything below it off the page. One full row is shown by default and
  // the rest collapse behind a toggle.
  const QUIZ_PREVIEW_COUNT = 6;
  const [showAllQuizzes, setShowAllQuizzes] = useState(false);
  const hiddenQuizCount = savedQuizResults.length - QUIZ_PREVIEW_COUNT;
  const visibleQuizResults = showAllQuizzes
    ? savedQuizResults
    : savedQuizResults.slice(0, QUIZ_PREVIEW_COUNT);

  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 pb-16">
      <Helmet>
        <title>My Beast Pack | Beastly Facts</title>
        <meta name="description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts. Heart any fact to save it here." />
        <link rel="canonical" href="https://beastlyfacts.com/pack/" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="My Beast Pack | Beastly Facts" />
        <meta property="og:description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts." />
        <meta property="og:url" content="https://beastlyfacts.com/pack/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="My Beast Pack | Beastly Facts" />
        <meta name="twitter:description" content="Your personal collection of saved animal facts and quiz results on Beastly Facts." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-3xl mb-2 block">❤️</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
            My Beast Pack
          </h1>
          <p className="text-sm text-muted-foreground font-body max-w-lg">
            Your personal collection of favorite facts! Tap the heart on any fact to save it here. 🐾
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-xl text-foreground">🏆 Achievements</h2>
            {streak >= 2 && (
              <span className="text-xs font-body font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                {`🔥 ${streak}-day streak`}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {ACHIEVEMENTS.map(a => {
              const unlocked = unlockedAchievements.some(u => u.id === a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setOpenAchievement(a)}
                  aria-label={`${a.title}, ${unlocked ? 'earned' : 'locked'}. Tap for details.`}
                  className={`text-center rounded-2xl p-3 border transition-all hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    unlocked
                      ? 'bg-secondary/5 border-secondary/30'
                      : 'bg-muted/40 border-border opacity-40 grayscale hover:opacity-60'
                  }`}
                >
                  <span className="text-2xl block mb-1">{a.emoji}</span>
                  <p className="text-[11px] font-body font-bold text-foreground leading-tight">{a.title}</p>
                </button>
              );
            })}
          </div>
        </div>

{/* Saved Quiz Results */}
{savedQuizResults.length > 0 && (
  <div className="mt-10 mb-8">
    <div className="flex items-baseline gap-2 mb-4">
      <h2 className="font-display font-bold text-xl text-foreground">🧩 Saved Quiz Results</h2>
      <span className="text-sm text-muted-foreground font-body tabular-nums">
        {savedQuizResults.length}
      </span>
    </div>
    {/* Tighter and denser than the fact grid: these are meant to read as a
        shelf of small collectible cards, so more of them fit per row. */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {visibleQuizResults.map((qr) => {
        const isAnimalCard = qr.type === 'animal-quiz';

        const handleShareQuiz = () => {
          // An animal card has a score and a page worth linking to; the
          // personality result has neither, so they get different wording.
          const text = isAnimalCard
            ? `${qr.animalEmoji || '🐾'} I scored ${qr.score}/${qr.total} on the ${qr.animalName} quiz on BeastlyFacts! Think you can beat me?`
            : `${qr.emoji} I got ${qr.title} on BeastlyFacts!\n\n${qr.description}\n\nFind out your result at ${window.location.origin}/quiz`;
          const url = isAnimalCard
            ? `${window.location.origin}/encyclopedia/animal/${qr.animalId}/`
            : `${window.location.origin}/quiz/`;

          if (navigator.share) {
            navigator.share({ title: qr.title, text, url }).catch(() => {});
          } else {
            navigator.clipboard.writeText(`${text} ${url}`);
          }
        };
        // Shared by both card shapes so the confirmation behaves identically
        // whichever one is on screen.
        const removeSlot = (
<div className="absolute top-3 right-3 z-10">
  {!confirmingId || confirmingId !== qr.id ? (
    <button 
      onClick={() => setConfirmingId(qr.id)}
      className="w-11 h-11 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-red-400 hover:text-red-500 hover:bg-red-500/10 transition-colors text-lg leading-none"
      title="Remove from Pack"
    >
      ×
    </button>
  ) : (
    // === Styled Confirmation Popup ===
    <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-3 shadow-xl text-sm w-[210px]">
      <p className="text-red-400 text-xs mb-2">Remove this result from your Pack?</p>
      
      <div className="flex gap-2">
        <button
          onClick={() => {
            removeQuizResult(qr.id);
            setConfirmingId(null);
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1.5 rounded-md transition-colors"
        >
          Yes, Remove
        </button>
        
        <button
          onClick={() => setConfirmingId(null)}
          className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-bold py-1.5 rounded-md transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )}
</div>
        );

        if (isAnimalCard) {
          return (
            <QuizTradingCard
              key={qr.id}
              result={qr}
              onShare={handleShareQuiz}
              removeSlot={removeSlot}
            />
          );
        }

        return (
          <div key={qr.id} className="bg-card border border-border rounded-2xl p-5 relative">
            {removeSlot}
            <span className="text-4xl block mb-2">{qr.emoji}</span>
            <h3 className="font-display font-bold text-lg pr-6">{qr.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{qr.description}</p>

            <div className="flex items-center gap-2 mt-4">
              {/* Share Button */}
              <button
                onClick={handleShareQuiz}
                className="flex items-center gap-1.5 text-xs font-body font-bold px-3 py-1.5 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>

              <span className="text-[10px] text-muted-foreground">
                {`Saved ${new Date(qr.savedAt).toLocaleDateString()}`}
              </span>
            </div>
          </div>
        );
      })}
    </div>

    {hiddenQuizCount > 0 && (
      <button
        onClick={() => setShowAllQuizzes(v => !v)}
        aria-expanded={showAllQuizzes}
        className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-body font-bold py-2.5 rounded-xl border border-border bg-card hover:bg-accent text-foreground transition-colors"
      >
        {showAllQuizzes
          ? <>Show fewer <ChevronUp className="w-3.5 h-3.5" /></>
          : <>{`Show all ${savedQuizResults.length} cards`} <ChevronDown className="w-3.5 h-3.5" /></>}
      </button>
    )}
  </div>
)}

{/* Saved Guides & Articles - kept as a thin list rather than image cards
    like the facts grid below: these span four different content types
    (guide/encyclopedia/beastlypedia/article) with no shared photo, and a
    scannable list stays readable as the collection grows. */}
{sortedSavedContent.length > 0 && (
  <div className="mt-10 mb-8">
    <div className="flex items-baseline gap-2 mb-4">
      <h2 className="font-display font-bold text-xl text-foreground">📚 Saved Guides &amp; Articles</h2>
      <span className="text-sm text-muted-foreground font-body tabular-nums">
        {sortedSavedContent.length}
      </span>
    </div>
    <div className="flex flex-col gap-2">
      {sortedSavedContent.map((item) => {
        const meta = CONTENT_TYPE_META[item.type] || { emoji: '🔖', label: item.type };
        const key = `${item.type}-${item.id}`;
        const confirming = confirmingContentKey === key;
        return (
          <div
            key={key}
            className="group flex items-center gap-3 bg-card border border-border rounded-xl pl-3 pr-2 py-2.5 hover:border-secondary/40 transition-colors"
          >
            <span className="text-xl flex-shrink-0" aria-hidden="true">{meta.emoji}</span>
            <Link to={item.url} className="min-w-0 flex-1">
              <p className="text-sm font-body font-bold text-foreground truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground font-body truncate">
                {item.subtitle ? `${meta.label} · ${item.subtitle}` : meta.label}
              </p>
            </Link>
            {confirming ? (
              <div className="flex-shrink-0 flex items-center gap-1">
                <span className="text-[11px] text-muted-foreground font-body mr-0.5 hidden sm:inline">Remove?</span>
                <button
                  onClick={() => { removeSavedContent(item.type, item.id); setConfirmingContentKey(null); }}
                  className="text-[11px] font-body font-bold text-destructive px-2 py-1 rounded-lg hover:bg-destructive/10 transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => setConfirmingContentKey(null)}
                  className="text-[11px] font-body font-bold text-muted-foreground px-2 py-1 rounded-lg hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmingContentKey(key)}
                aria-label={`Remove ${item.title} from your Pack`}
                className="flex-shrink-0 w-11 h-11 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  </div>
)}
        {savedFacts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {savedFacts.map((fact, i) => (
              <FactCard key={fact.id} fact={fact} index={i} onOpen={setSelectedFact} onOpenImage={setImageFact} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <motion.span
              className="text-6xl block mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              💔
            </motion.span>
            <h2 className="font-display font-bold text-xl text-foreground mb-2">
              Your pack is empty!
            </h2>
            <p className="text-sm text-muted-foreground font-body mb-6 max-w-sm mx-auto">
              Go explore some facts and tap the ❤️ to start building your collection!
            </p>
            <Link to="/facts/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-secondary text-secondary-foreground font-body font-bold text-sm py-3 px-6 rounded-xl inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Browse Facts
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      <FactModal fact={selectedFact} onClose={() => setSelectedFact(null)} onOpenImage={setImageFact} />
      <ImageLightbox fact={imageFact} imagePath={imagePathFor(imageFact)} onClose={() => setImageFact(null)} />
      <AchievementDialog
        achievement={openAchievement}
        unlocked={openAchievement ? unlockedAchievements.some(u => u.id === openAchievement.id) : false}
        state={achievementState}
        onClose={() => setOpenAchievement(null)}
      />

      {/* Mobile-only, renders nothing on desktop/unsupported browsers - see
          NotificationOptIn's own gating. */}
      <div className="mt-16 max-w-7xl mx-auto">
        <NotificationOptIn />
      </div>

      {/* Pack management section */}
      <div className="mt-8 pt-8 border-t border-border max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-base text-foreground mb-1">Pack Management</h2>
        <p className="text-xs text-muted-foreground font-body mb-4">Manage your Beast Pack collection.</p>
        <ClearPackDialog />
      </div>
    </div>
  );
}