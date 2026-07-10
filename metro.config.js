const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow src/db/migrations/migrations.js to `import` .sql files directly
// (paired with the inline-import babel plugin in babel.config.js).
config.resolver.sourceExts.push('sql');

// expo-sqlite's web worker imports its wa-sqlite wasm binary directly;
// treat it as a bundled asset so Metro's web build can resolve it.
config.resolver.assetExts.push('wasm');

module.exports = config;
