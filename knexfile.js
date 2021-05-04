// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/dbd.sqlite'
    },
    migrations: {
      directory: './src/db/migrations/dev',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/dbs.sqlite'
    },
    migrations: {
      directory: './src/db/migrations/st',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/db.sqlite'
    },
    migrations: {
      directory: './src/db/migrations',
    },
    useNullAsDefault: true,
  },

};
