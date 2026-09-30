// 16x16 pixel icons for the two pixel games in the menu, Beastle and Critter
// Keeper. Every other menu item uses a lucide line icon (see MenuIcon in
// Navbar.jsx), so pixel art in the menu always points at something you can
// play. Each icon is 16 rows of 16 palette keys; '.' is empty. Drawn as SVG
// runs by PixelIcon, so they render crisp at any size and come out identical
// in the prerender and the client.

export const PIXEL_PALETTE = {
  k: '#2a211c', // outline
  w: '#fbf7ef', // paper white
  s: '#a9b1ad', // light gray
  S: '#6d7773', // gray
  t: '#48b08f', // teal
  T: '#2e7d66', // dark teal
  g: '#f0c24b', // gold
  G: '#c08a25', // dark gold
  o: '#ec8452', // orange
  O: '#b9582f', // dark orange
};

export const PIXEL_ICONS = {
  beastle: [
    '................',
    'kkkkkkk..kkkkkkk',
    'ktttttk..kgggggk',
    'ktttttk..kgggggk',
    'ktttttk..kgggggk',
    'ktttttk..kgggggk',
    'kTTTTTk..kGGGGGk',
    'kkkkkkk..kkkkkkk',
    '................',
    'kkkkkkk..kkkkkkk',
    'ksssssk..ktttttk',
    'ksssssk..ktttttk',
    'ksssssk..ktttttk',
    'ksssssk..ktttttk',
    'kSSSSSk..kTTTTTk',
    'kkkkkkk..kkkkkkk',
  ],
  critterKeeper: [
    '................',
    '................',
    '..........kkkk..',
    '.........koooOk.',
    '.....O.O.kowkook',
    '....koOoOoooooOk',
    '...koooooooooook',
    '..kooooooooooOkk',
    'kkkoooooooooOk..',
    'kOOOOOOOOOOOk...',
    '.kkkOOkkkOOk....',
    '....kOOk.kOOk...',
    '....kkkk.kkkk...',
    '................',
    '................',
    '................',
  ],
};
