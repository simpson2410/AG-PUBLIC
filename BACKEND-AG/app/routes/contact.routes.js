const express = require('express');
const app = express();

const contactRoute = express.Router();
let contact = require('../models/contact');

// Add Book
contactRoute.route('/add-contact').post((req, res, next) => {
  contact.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Book
contactRoute.route('/').get((req, res) => {
  contact.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
contactRoute.route('/read-contact/:id').get((req, res) => {
  contact.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
contactRoute.route('/update-contact/:id').put((req, res, next) => {
  contact.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('contact updated successfully!')
    }
  })
})

// Delete Book
contactRoute.route('/delete-contact/:id').delete((req, res, next) => {
  contact.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = contactRoute;