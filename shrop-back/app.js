const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PRODUCT_DATA_FILE = path.join(__dirname, 'article-data.json');
const CART_DATA_FILE = path.join(__dirname, 'cart-data.json');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
//   res.setHeader('Pragma', 'no-cache');
//   res.setHeader('Expires', '0');
//   next();
// });
app.use(cors({
  origin: '*'
}))

app.post('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      const cartProducts = JSON.parse(data);
      const newCartProduct = { 
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image_tag: req.body.image_tag, 
        quantity: 1 
      };
      let cartProductExists = false;
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === newCartProduct.id) {
          cartProduct.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) cartProducts.push(newCartProduct);
      fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cartProducts);
      });
    });
  });

app.delete('/cart/delete', (req, res) => {
fs.readFile(CART_DATA_FILE, (err, data) => {
    let cartProducts = JSON.parse(data);
    cartProducts.map((cartProduct) => {
    if (cartProduct.id == req.body.id && cartProduct.quantity > 1) {
        cartProduct.quantity--;
    } else if (cartProduct.id == req.body.id && cartProduct.quantity == 1) {
        const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === req.body.id);
        cartProducts.splice(cartIndexToRemove, 1);
    }
    });
    fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(cartProducts);
    });
});
});

app.delete('/cart/delete/all', (req, res) => {
    fs.readFile(CART_DATA_FILE, () => {
      let emptyCart = [];
      fs.writeFile(CART_DATA_FILE, JSON.stringify(emptyCart, null, 4), () => {
        res.json(emptyCart);
      });
    });
  });

app.get('/products', (req, res) => {
fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
});
});

app.get('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});