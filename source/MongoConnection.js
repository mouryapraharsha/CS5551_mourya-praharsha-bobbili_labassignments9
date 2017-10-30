
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://mourya:root@ds141185.mlab.com:41185/assignment9';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

