const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let brand = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
}, {
  collection: 'brand'
})

module.exports = mongoose.model('brand', brand)