const express = require('express');
const app = express();
const db = require("../models");
const cartRoute = express.Router();
let cart = require('../models/cart');
let product = require('../models/product');
const dbConfig = require('../config/db.config');
// Add Book
cartRoute.route('/add-cart').post((req, res, next) => {
    cart.create(req.body, (error, data) => {
    if (error) {
      console.log('addcart',error)
      return next(error)
    } else {
      console.log('addcart',data)
      res.json(data)
    }
  })
});
//
cartRoute.post("/cart", async (req, res) => {
	const { productId,price, quantity,username} = req.body
	// Simple validation
  if (!productId)
		return res
			.status(400)
			.json({ success: false, message: 'id is required' })
  if (!price)
      return res
        .status(400)
        .json({ success: false, message: 'price is required' })
  if (!quantity)
        return res
          .status(400)
          .json({ success: false, message: 'quantity is required' })
  if (!username)
          return res
            .status(400)
            .json({ success: false, message: 'username is required' })
        console.log('tb',productId)
	try {
		const newcart = new cart({
      productId,price, quantity,username
		})
		await newcart.save()
		res.json({ success: true, message: 'Add Success!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Connect Fail' })
	}    
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
cartRoute.route('/cart/:username').get((req, res) => {
  cart.find({username :req.params.username}, (error, data) => {
  if (error) {
    console.log(error);
    return next(error);
  } else {
    res.json(data)
  }
})
console.log(req.params.username)
});

// cartRoute.route('/cart/:username').get((req, res) => {
//   cart.aggregate([
//     { 
//       $lookup: {
//       from: "product",
//       localField: "productId",
//       foreignField: "_id",
//       as: "detail"
//       },
//      }
//     ]).find({username :req.params.username}, (error, data) => {
//         if (error) {
//           console.log(error);
//           return next(error);
//         } else {
//           res.json(data)
//         }
//       })
//       console.log(req.params.username)
//       })
module.exports = cartRoute;
