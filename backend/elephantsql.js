var pg = require('pg');

var conString = "postgres://iljfhnxk:cHlQMs7x2ffLTIpHUY_BFB5ULa237G6o@bubble.db.elephantsql.com/iljfhnxk"
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});