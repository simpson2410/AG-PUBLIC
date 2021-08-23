const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contact = new Schema({

  name: {
    type: String
  },
  address: {
    type: String
  },
  message: {
    type: String
  },
  phonenum: [
    {
      type: mongoose.Schema.Types.Number,
      ref: "phonenum"
    }
  ],
}, {
  collection: 'contact'
})

module.exports = mongoose.model('contact', contact)