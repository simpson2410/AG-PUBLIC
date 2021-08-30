const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cart = new Schema({   
  name: {
    type: String
  },
  price: {
    type: String
  },

  quantity: {
    type: String
  },

  user_ID: {
    type: String
  },
}, {
  collection: 'cart'
})

module.exports = mongoose.model('cart', cart)