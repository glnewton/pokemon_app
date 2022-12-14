
require('dotenv').config();

// Dependencies & Imports
const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const methodOverride =require('method-override')

// Global Configuration Variables 
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI
const db = mongoose.connection;

// add and configure Swagger to this project


// Swagger Docs
// const swaggerJSDoc = require('swagger-jsdoc');  
// const swaggerUi = require('swagger-ui-express'),
// swaggerDocument = require('./swagger.json');

// Set up Express Middleware

const app = express();
      app.use('/public', express.static('public'))
      app.use(express.urlencoded({extended: false}));
      app.use(methodOverride('_method'))
      app.set('view engine', 'jsx');
      app.engine('jsx', require('express-react-views').createEngine());

// Connect to Mongo & Set Up Mongoose

mongoose.connect(MONGO_URI);
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
db.once('open', ()=> {
    console.log('Connected to MongoDB')
})
mongoose.set('strictQuery', true);

// Connection Error/Success -- Define callback functions for various events

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", MONGO_URI))
db.on("close", () => console.log("mongo disconnected"))

// Root Route -- WORKS

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
});

// Index route = Show all records -- WORKS


app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, pokemonItems) => {
    res.render('Index', { pokemon : pokemonItems});
    });
});

// New - Get a form to create a new record -- WORKS
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// app.get('/pokemon/new/seed', (req, res) => {
//     res.render('New');
// });

// app.get('/fruits/seed', (req, res)=>{
//     Fruit.create([
//         {
//             name:'grapefruit',
//             color:'pink',
//             readyToEat:true
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat:false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat:true
//         }
//     ], (err, data)=>{
//         res.redirect('/fruits');
//     })
// });


// Delete - Delete this one record

app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon');//redirect back to pokemon index
    });
});


///***

// Deleting a tweet - DON'T USE THIS, instead use findByIdAndRemove()
// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// Update - Modifying a record

app.put('/pokemon/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon)=>{
       console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`);
    });
});

// Updating a tweet
// Tweet.findOneAndUpdate(
//     { title: "Vespa" }, // first arg: search criteria
//     { sponsored: false })// 2nd arg: what we are updating
//     //{ new: true }) // 3rd arg(optional): to show changes
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//    db.close()
//   })

///***

// Create - send the filled form to db and create a new record -- WORKS

app.post('/pokemon/', (req, res) => { 
    Pokemon.create(req.body, (err, createdPokemon) => {
      res.redirect('/pokemon');  
    })
});

// Edit - Get the form with the record to update

app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{ //find the pokemon
      if(!err){
        res.render(
    		  'Edit',
    		{
    			pokemon: foundPokemon //pass in the found fruit so we can prefill the form
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

///***

// Show route - Show me a particular record  -- WORKS use pokemon/6393639edb35fccc0ef247ae

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon});
    });
});

// app.use(
//     '/api-docs',
//     swaggerUi.serve, 
//     swaggerUi.setup(swaggerDocument)
//   );

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});