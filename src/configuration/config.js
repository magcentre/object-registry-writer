const DEFAULT_CONFIG_VERSION = 'v1.0.0';

module.exports = {
  env: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5001,
  database: {
    host: process.env.dbhost,
    port: process.env.dbport,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname,
  }
}
