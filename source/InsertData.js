
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://mourya:root@ds141185.mlab.com:41185/assignment9';
var insertDocument = function(db, callback) {
    db.collection('lab9').insertOne( {
        "fname" : "mourya",
        "lname" : "bobbili",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"mbfz7@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});