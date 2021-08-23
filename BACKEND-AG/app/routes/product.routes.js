const express = require('express');
const app = express();

const productRoute = express.Router();
let product = require('../models/product');

// Add Book
productRoute.route('/add-product').post((req, res, next) => {
    product.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Book
productRoute.route('/').get((req, res) => {
    product.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
productRoute.route('/read-product/:id').get((req, res) => {
    product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

productRoute.route('/loaiSP/:ptype').get((req, res) => {
  product.find({ptype :req.params.ptype}, (error, data) => {
  if (error) {
    console.log(error);
    return next(error);
  } else {
    res.json(data)
  }
})
console.log(req.params.ptype)
})

// Update Book
productRoute.route('/update-product/:id').put((req, res, next) => {
    product.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('product updated successfully!')
    }
  })
})

// Delete Book
productRoute.route('/delete-product/:id').delete((req, res, next) => {
    product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = productRoute;
