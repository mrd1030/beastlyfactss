// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_breezy_baron_strucker.sql';
import m0001 from './0001_absurd_susan_delgado.sql';
import m0002 from './0002_solid_boomer.sql';
import m0003 from './0003_quiet_companion.sql';
import m0004 from './0004_tender_terrier.sql';
import m0005 from './0005_gentle_gecko.sql';

export default {
  journal,
  migrations: {
    m0000,
    m0001,
    m0002,
    m0003,
    m0004,
    m0005,
  },
};