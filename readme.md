# Xpresser Sql Plugin

For sql support using **knex** ORM library. (**objection**)

### Config
Add to your configuration using key `database`
```javascript
{
  database: {
    startOnBoot: true,
    config: {
        // knex databse connection here.
    }
  }
}
```

To see all knex configurations check out [knex documentation](http://knexjs.org/)

#### Sql Server Config
Knex configuration for Sql Server
```javascript
const config = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'your_database_user',
        password : 'your_database_password',
        database : 'myapp_test'
    }
}
```

#### Sqlite Config
Knex configuration for sqlite
```javascript
const config = {
    client: 'sqlite3',
    connection: () => ({
        filename: '/path/to/database.sqlite'
    })
}
```

### plugin.json
Add `npm://@xpresser/sql` to plugins array in your plugins.json file.

### Cli commands
For cli migration commands add to your `use-xjs-cli.json`
```json
{
  "extensions": [
    "npm://@xpresser/sql"
  ]
}
```
You should now be able to see migration commands when you run `xjs` in your project root folder.

