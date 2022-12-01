const express = require('express');
const app = express();
const PORT = 3000;
//const fruits = require('./models/fruits.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');;
});    

// app.get('/fruits/:indexOfFruitsArray', function(req, res){
//     res.render('Show', { //second param must be an object
//         fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     });
// });   

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});