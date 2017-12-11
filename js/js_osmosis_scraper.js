var osmosis = require('osmosis');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Tobi:manu8452@ds135186.mlab.com:35186/esljobs";

osmosis
.get('http://www.eslcafe.com/joblist/')
.find('dd')
.set({
        'position': "strong a",
        'location': "strong a",
        'apply': "strong a@href"})
.follow('@href')
.set({
        'description': "blockquote p"
    })

.data(function(data) {
    MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  	db.collection("esljobs").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
})

