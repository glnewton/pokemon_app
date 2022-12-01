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

app.get('/pokemon/:id', function(req, res){
    //res.send(req.params.id);
    res.render('Show', { 
        pokemon: pokemon[req.params.id
    ]});
});    

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});