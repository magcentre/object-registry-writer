const DEFAULT_CONFIG_VERSION = 'v1.0.0';

module.exports = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5001,
}
