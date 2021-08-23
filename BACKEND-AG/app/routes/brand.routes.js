const express = require('express');
const app = express();

const brandRoute = express.Router();
let brand = require('../models/brand');

// Add Book
brandRoute.route('/add-brand').post((req, res, next) => {
    brand.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Book
brandRoute.route('/').get((req, res) => {
    brand.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
brandRoute.route('/read-brand/:id').get((req, res) => {
    brand.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
brandRoute.route('/update-brand/:id').put((req, res, next) => {
    brand.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Brand updated successfully!')
    }
  })
})

// Delete Book
brandRoute.route('/delete-brand/:id').delete((req, res, next) => {
    brand.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = brandRoute;