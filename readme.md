# Xpresser Sql Plugin

For sql support using **knex** ORM library. (**objection**)

### Config
Add to your configuration using key `database`
```javascript
{
  database: {
    startOnBoot: true,
    config: {
        // Knex configurations here.      
    }   
  }
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

