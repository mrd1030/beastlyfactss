import React from 'react';
import { Icon } from 'lucide-react';
import { chameleon, elephantFace, featherText, foxFaceTail, frogFace, hedgehog, spider, targetArrow, whale } from '@lucide/lab';

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
