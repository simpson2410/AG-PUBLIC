const express = require('express');
const app = express();

const ptypeRoute = express.Router();
let ptype = require('../models/ptype');

// Add Book
ptypeRoute.route('/add-ptype').post((req, res, next) => {
    ptype.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Book
ptypeRoute.route('/').get((req, res) => {
    ptype.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
ptypeRoute.route('/read-ptype/:id').get((req, res) => {
    ptype.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
ptypeRoute.route('/update-ptype/:id').put((req, res, next) => {
    ptype.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('ptype updated successfully!')
    }
  })
})

// Delete Book
ptypeRoute.route('/delete-ptype/:id').delete((req, res, next) => {
    ptype.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = ptypeRoute;