import React from 'react';
import { Icon } from 'lucide-react';
import { chameleon, elephantFace, featherText, foxFaceTail, frogFace, hedgehog, spider, targetArrow, whale } from '@lucide/lab';

// Icons lucide itself doesn't draw, from lucide's own lab set (same line
// style and license). Wrapped as components so they drop in anywhere a
// lucide icon does.
export const Chameleon = (props) => <Icon iconNode={chameleon} {...props} />;
export const ElephantFace = (props) => <Icon iconNode={elephantFace} {...props} />;
export const FeatherText = (props) => <Icon iconNode={featherText} {...props} />;
export const FoxFaceTail = (props) => <Icon iconNode={foxFaceTail} {...props} />;
export const FrogFace = (props) => <Icon iconNode={frogFace} {...props} />;
export const Hedgehog = (props) => <Icon iconNode={hedgehog} {...props} />;
export const Spider = (props) => <Icon iconNode={spider} {...props} />;
export const TargetArrow = (props) => <Icon iconNode={targetArrow} {...props} />;
export const Whale = (props) => <Icon iconNode={whale} {...props} />;
