import React from 'react';
import { Icon } from 'lucide-react';
import { chameleon, frogFace, hedgehog, spider } from '@lucide/lab';

// Animals lucide itself doesn't draw, from lucide's own lab set (same line
// style and license). Wrapped as components so they drop in anywhere a
// lucide icon does.
export const Chameleon = (props) => <Icon iconNode={chameleon} {...props} />;
export const FrogFace = (props) => <Icon iconNode={frogFace} {...props} />;
export const Hedgehog = (props) => <Icon iconNode={hedgehog} {...props} />;
export const Spider = (props) => <Icon iconNode={spider} {...props} />;
