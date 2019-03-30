const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27000/quotes', {useNewUrlParser: true});


var quoteSchema = new mongoose.Schema({
    quote: String,
    number: String,
    author: String
});

const Quote = mongoose.model('Quote', quoteSchema);

//adding a quotes to database
    // var q = new Quote({
    //     quote: "What contemptible scoundrel has stolen the cork to my lunch?",
    //     number: "10",
    //     author: "W.C. Fields"
    // });

    // q.save(function(err, name){
    //     if(err){
    //         console.log("== Error ==")
    //     } else {
    //         console.log("Saved Successfully");
    //         console.log(q);
    //     }
    // });

 //=======================

//retrieving a name to database 


Quote.find({},function(err, returnQuote){
    if(err){
        console.log("== Error ==")
    } else {
        console.log("Display Quotes");
        console.log(returnQuote);
    }
});