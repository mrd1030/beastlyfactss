import type { ImageResizeMode } from 'react-native';

export const guideImageMap: Record<string, number> = {
  'ackie-monitor': require('../../assets/guides/ackie-monitor.jpg'),
  'african-fat-tail': require('../../assets/guides/african-fat-tail.jpg'),
  'african-grey': require('../../assets/guides/african-grey.jpg'),
  'angelfish': require('../../assets/guides/angelfish.jpg'),
  'axolotl': require('../../assets/guides/axolotl.jpg'),
  'ball-python': require('../../assets/guides/ball-python.jpg'),
  'bearded-dragon': require('../../assets/guides/bearded-dragon.jpg'),
  'betta-fish': require('../../assets/guides/betta-fish.jpg'),
  'blue-tongue-skink': require('../../assets/guides/blue-tongue-skink.jpg'),
  'boa-constrictor': require('../../assets/guides/boa-constrictor.jpg'),
  'box-turtle': require('../../assets/guides/box-turtle.jpg'),
  'budgie': require('../../assets/guides/budgie.jpg'),
  'california-kingsnake': require('../../assets/guides/california-kingsnake.jpg'),
  'canary': require('../../assets/guides/canary.jpg'),
  'chameleon': require('../../assets/guides/chameleon.jpg'),
  'chinchilla': require('../../assets/guides/chinchilla.jpg'),
  'cockatiel': require('../../assets/guides/cockatiel.jpg'),
  'cockatoo': require('../../assets/guides/cockatoo.jpg'),
  'conure': require('../../assets/guides/conure.jpg'),
  'corn-snake': require('../../assets/guides/corn-snake.jpg'),
  'corydoras-catfish': require('../../assets/guides/corydoras-catfish.jpg'),
  'crested-gecko': require('../../assets/guides/crested-gecko.jpg'),
  'emperor-scorpion': require('../../assets/guides/emperor-scorpion.jpg'),
  'ferret': require('../../assets/guides/ferret.jpg'),
  'fire-belly-toad': require('../../assets/guides/fire-belly-toad.jpg'),
  'gargoyle-gecko': require('../../assets/guides/gargoyle-gecko.jpg'),
  'goldfish': require('../../assets/guides/goldfish.jpg'),
  'green-anole': require('../../assets/guides/green-anole.jpg'),
  'guinea-pig': require('../../assets/guides/guinea-pig.jpg'),
  'guppy': require('../../assets/guides/guppy.jpg'),
  'hamster': require('../../assets/guides/hamster.jpg'),
  'hedgehog': require('../../assets/guides/hedgehog.jpg'),
  'hermit-crab': require('../../assets/guides/hermit-crab.jpg'),
  'hissing-cockroach': require('../../assets/guides/hissing-cockroach.jpg'),
  'hognose-snake': require('../../assets/guides/hognose-snake.jpg'),
  'jumping-spider': require('../../assets/guides/jumping-spider.jpg'),
  'koi': require('../../assets/guides/koi.jpg'),
  'leaf-tailed-gecko': require('../../assets/guides/leaf-tailed-gecko.jpg'),
  'leopard-gecko': require('../../assets/guides/leopard-gecko.jpg'),
  'lovebird': require('../../assets/guides/lovebird.jpg'),
  'milk-snake': require('../../assets/guides/milk-snake.jpg'),
  'millipede': require('../../assets/guides/millipede.jpg'),
  'mourning-gecko': require('../../assets/guides/mourning-gecko.jpg'),
  'neon-tetra': require('../../assets/guides/neon-tetra.jpg'),
  'oscar': require('../../assets/guides/oscar.jpg'),
  'pacman-frog': require('../../assets/guides/pacman-frog.jpg'),
  'praying-mantis': require('../../assets/guides/praying-mantis.jpg'),
  'rabbit': require('../../assets/guides/rabbit.jpg'),
  'red-eared-slider': require('../../assets/guides/red-eared-slider.jpg'),
  'russian-tortoise': require('../../assets/guides/russian-tortoise.jpg'),
  'savannah-monitor': require('../../assets/guides/savannah-monitor.jpg'),
  'stick-insect': require('../../assets/guides/stick-insect.jpg'),
  'sugar-glider': require('../../assets/guides/sugar-glider.jpg'),
  'sulcata-tortoise': require('../../assets/guides/sulcata-tortoise.jpg'),
  'tarantula': require('../../assets/guides/tarantula.jpg'),
  'tegu': require('../../assets/guides/tegu.jpg'),
  'tiger-salamander': require('../../assets/guides/tiger-salamander.jpg'),
  'tokay-gecko': require('../../assets/guides/tokay-gecko.jpg'),
  'uromastyx': require('../../assets/guides/uromastyx.jpg'),
  'veiled-chameleon': require('../../assets/guides/veiled-chameleon.jpg'),
  'whites-tree-frog': require('../../assets/guides/whites-tree-frog.jpg'),
};

export function getGuideImageSource(id?: string | null): number | null {
  if (!id) return null;
  return guideImageMap[id] ?? null;
}

export function getGuideImageResizeMode(id?: string | null): ImageResizeMode {
  if (id === 'tegu') {
    return 'contain';
  }
  return 'cover';
}
