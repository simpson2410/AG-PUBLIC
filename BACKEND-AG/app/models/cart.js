const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cart = new Schema({   
  productId: {
    type: String
  },
  price: {
    type: String
  },

  quantity: {
    type: String
  },

  username: {
    type: String
  },
}, {
  collection: 'cart'
})

module.exports = mongoose.model('cart', cart)