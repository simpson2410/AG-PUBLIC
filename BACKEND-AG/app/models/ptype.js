const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ptype = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
}, {
  collection: 'ptype'
})

module.exports = mongoose.model('ptype', ptype)