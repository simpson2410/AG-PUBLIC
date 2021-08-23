const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  urlImage: {
    type: String
  },
  quantity: {
    type: String
  },
  ptype: 
    {
      type:Number,
    }
  ,
  brand: {
    type: Number
  },
}, {
  collection: 'product'
})

module.exports = mongoose.model('product', product)