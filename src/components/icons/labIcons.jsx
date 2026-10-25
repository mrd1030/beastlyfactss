import React from 'react';
import { Icon } from 'lucide-react';
import { anteater, axolotl, crocodile, giraffe, lemur, llama, monkey, numbat, otter, pangolin, rhino, sloth, snake, wombat } from './dayIconNodes';
import { bat, bearFace, bee, catBig, chameleon, elephant, elephantFace, featherText, foxFaceTail, frogFace, hedgehog, horseHead, penguin, shark, spider, targetArrow, whale } from '@lucide/lab';

// Icons lucide itself doesn't draw, from lucide's own lab set (same line
// style and license). Wrapped as components so they drop in anywhere a
// lucide icon does.
export const Chameleon = (props) => <Icon iconNode={chameleon} {...props} />;

// Neither lucide nor the lab set has a gecko, so it is drawn here on the
// same 24px grid and 2px round stroke.
const gecko = [
  ['path', { key: 'g1', d: 'M12 2.5c-1.4 0-2.3 1.1-2.3 2.6S10.6 8 12 8s2.3-1.4 2.3-2.9-.9-2.6-2.3-2.6z' }],
  ['path', { key: 'g2', d: 'M12 8c-1.3 0-2 1.6-2 4s.7 4.5 2 4.5 2-2.1 2-4.5-.7-4-2-4z' }],
  ['path', { key: 'g3', d: 'M12 16.5c0 2.2.8 3.8 2.8 4.5' }],
  ['path', { key: 'g4', d: 'M10.2 9.8 7.5 8.3 6.8 6.5' }],
  ['path', { key: 'g5', d: 'm13.8 9.8 2.7-1.5.7-1.8' }],
  ['path', { key: 'g6', d: 'm10.2 14.4-2.7 1.4-.7 1.8' }],
  ['path', { key: 'g7', d: 'm13.8 14.4 2.7 1.4.7 1.8' }],
];
export const Gecko = (props) => <Icon iconNode={gecko} {...props} />;
export const ElephantFace = (props) => <Icon iconNode={elephantFace} {...props} />;
export const FeatherText = (props) => <Icon iconNode={featherText} {...props} />;
export const FoxFaceTail = (props) => <Icon iconNode={foxFaceTail} {...props} />;
export const FrogFace = (props) => <Icon iconNode={frogFace} {...props} />;
export const Hedgehog = (props) => <Icon iconNode={hedgehog} {...props} />;
export const Spider = (props) => <Icon iconNode={spider} {...props} />;
export const TargetArrow = (props) => <Icon iconNode={targetArrow} {...props} />;
export const Whale = (props) => <Icon iconNode={whale} {...props} />;
export const Bat = (props) => <Icon iconNode={bat} {...props} />;
export const BearFace = (props) => <Icon iconNode={bearFace} {...props} />;
export const Bee = (props) => <Icon iconNode={bee} {...props} />;
export const CatBig = (props) => <Icon iconNode={catBig} {...props} />;
export const Elephant = (props) => <Icon iconNode={elephant} {...props} />;
export const HorseHead = (props) => <Icon iconNode={horseHead} {...props} />;
export const Penguin = (props) => <Icon iconNode={penguin} {...props} />;
export const Shark = (props) => <Icon iconNode={shark} {...props} />;

// Animal-day icons drawn in dayIconNodes.js (see scripts/icon-sheet.mjs).
export const Lemur = (props) => <Icon iconNode={lemur} {...props} />;
export const Numbat = (props) => <Icon iconNode={numbat} {...props} />;
export const Sloth = (props) => <Icon iconNode={sloth} {...props} />;
export const Wombat = (props) => <Icon iconNode={wombat} {...props} />;
export const Anteater = (props) => <Icon iconNode={anteater} {...props} />;
export const Monkey = (props) => <Icon iconNode={monkey} {...props} />;
export const Llama = (props) => <Icon iconNode={llama} {...props} />;
export const Crocodile = (props) => <Icon iconNode={crocodile} {...props} />;
export const Pangolin = (props) => <Icon iconNode={pangolin} {...props} />;
export const Otter = (props) => <Icon iconNode={otter} {...props} />;
export const Snake = (props) => <Icon iconNode={snake} {...props} />;
export const Rhino = (props) => <Icon iconNode={rhino} {...props} />;
export const Giraffe = (props) => <Icon iconNode={giraffe} {...props} />;
export const Axolotl = (props) => <Icon iconNode={axolotl} {...props} />;
