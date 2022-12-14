
const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    sku: {type: String, required: true},
    color: {type: String, required: false},
    quantity: {type: Boolean, required: false}
})

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
