
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

// Set up Middleware

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Setting up Mongoose

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('Connected to MongoDB')
})
mongoose.set('strictQuery', true);

const db = mongoose.connection;

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


// Delete - Delete this one record

///***

// Update - Modifying a record

///***

// Create - send the filled form to db and create a new record

app.post('/pokemon/', (req, res) => { 
    Pokemon.create(req.body, (err, createdPokemon) => {
      res.redirect('/pokemon');  
    })
});

// Edit - Get the form with the record to update

///***

// Show route - Show me a particular record  -- WORKS use pokemon/6393639edb35fccc0ef247ae

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon});
    });
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});