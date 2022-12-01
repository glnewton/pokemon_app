const express = require('express');
const app = express();
const PORT = 3000;

const pokemon = require('./models/pokemon.js')
//const Index =require('./views/Index.jsx')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
});

// app.get('/pokemon', function(req, res){
//     res.send(pokemon);
// }); 

app.get('/pokemon', function(req, res){
    res.render('Index', { pokemon: pokemon });
});   

// app.get('/pokemon/:indexOfPokemonArray', function(req, res){
//     res.render('Show', { //second param must be an object
//         pokemon: fruits[req.params.indexOfPokemonArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfPokemonArray]
//     });
// });  

// app.get('/pokemon', function(req, res){
//     res.render('Index', {pokemon: pokemon});
// });     



// app.get('/fruits/:indexOfPokemonArray', function(req, res){
//     res.render('Show', { //second param must be an object
//         fruit: fruits[req.params.indexOfPokemonArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfPokemonArray]
//     });
// });   

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});