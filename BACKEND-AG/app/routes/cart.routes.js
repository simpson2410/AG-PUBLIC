const express = require('express');
const app = express();

const cartRoute = express.Router();
let cart = require('../models/cart');

// Add Book
cartRoute.route('/add-cart').post((req, res, next) => {
    cart.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Book
cartRoute.route('/').get((req, res) => {
    cart.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
cartRoute.route('/read-cart/:id').get((req, res) => {
    cart.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Book
cartRoute.route('/update-cart/:id').put((req, res, next) => {
    cart.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('cart updated successfully!')
    }
  })
})

// Delete Book
cartRoute.route('/delete-cart/:id').delete((req, res, next) => {
    cart.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cartRoute;
