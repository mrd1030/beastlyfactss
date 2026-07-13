// https://orm.drizzle.team/docs/get-started-sqlite#expo-sqlite
// Lets src/db/migrations/migrations.js `import`  the raw generated .sql
// migration files as strings so drizzle's expo-sqlite migrator can run
// them at app start.
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['inline-import', { extensions: ['.sql'] }]],
  };
};
