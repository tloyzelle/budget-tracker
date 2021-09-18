var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect("mongodb://localhost/transaction",
    {useNewUrlParser: true,
    useFindandModify: false,
    useUnifiedTopology: true}
);

var transactionSeed = [
    {
      name: "Food",
      value: 200,
      date: new Date(Date.now())
    },
    {
        name: "New Tires",
        value: 800,
        date: new Date(Date.now())
    },
    {
        name: "Phone Bill",
        value: 60,
        date: new Date(Date.now())
    }
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " updated");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });