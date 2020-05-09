# Xpresser Sql Plugin

For sql support using **knex** ORM library. (**objection**)

### Setup
1. Install `@xpresser/sql` in your project
2. Add `npm://@xpresser/sql` to plugins array in your plugins.json file.

Note: if you don't have a plugins.json file in your project create one in your **backend** folder.
**backend/plugins.json**
```json
[
  "npm://@xpresser/sql"
]
```

### Config
Add to your configuration using key `database`
```javascript
{
  database: {
    startOnBoot: true,
    config: {
        // knex database connection here.
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

