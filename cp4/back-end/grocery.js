const express = require('express');
const bodyParser = require("body-parser");
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let products = [];
let breakfast = [];
let lunch = [];
let dinner = [];
let id = 0;



//breakfast stuff
app.get('/api/breakfast', (req, res) => {
  console.log("In breakfast get");
  res.send(breakfast);
});

app.get('/api/breakfast/:id', (req, res) => {
  console.log("In get");
  let itemID = parseInt(req.params.id);
  //const foundProduct = products.find(element => element.id === productID);
  /*let foundProduct = products.find((productID) => {
      return product.id === productID;
    });*/
  let curItem = breakfast.find((element) => element.id === itemID);
 /*products = products.filter(product => product.id === productID);
  let curProduct = products[0];*/
  res.send(curItem);
});

app.post('/api/breakfast/:id', (req, res) => {
  console.log("In breakfast post");
  id = parseInt(req.params.id);
  const foundItem = breakfast.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity += 1;
    res.send(foundItem);
  }
  else {
    let item = {
     id: id,
     quantity: 1
    };
    breakfast.unshift(item);
    res.send(item);
  }
});


app.put('/api/breakfast/:id/:quantity', (req, res) => {
  console.log("In breakfast post");
  id = parseInt(req.params.id);
  let quantity = parseInt(req.params.quantity);
  const foundItem = breakfast.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity = quantity;
    res.send(foundItem);
    if (quantity == 0) {
      breakfast = breakfast.filter(item => item.id !== id);
    }
  }
  else {
    res.status(404)
      .send("Sorry, that product is not in the breakfast.");
    return;
  }
});



app.delete('/api/breakfast/:id', (req, res) => {
  console.log("In delete");
  let id = req.params.id;
  breakfast = breakfast.filter(item => item.id !== id);
  res.sendStatus(200);
});



//lunch stuff
app.get('/api/lunch', (req, res) => {
  console.log("In lunch get");
  res.send(lunch);
});

app.get('/api/lunch/:id', (req, res) => {
  console.log("In get");
  let itemID = parseInt(req.params.id);
  //const foundProduct = products.find(element => element.id === productID);
  /*let foundProduct = products.find((productID) => {
      return product.id === productID;
    });*/
  let curItem = lunch.find((element) => element.id === itemID);
 /*products = products.filter(product => product.id === productID);
  let curProduct = products[0];*/
  res.send(curItem);
});

app.post('/api/lunch/:id', (req, res) => {
  console.log("In lunch post");
  id = parseInt(req.params.id);
  const foundItem = lunch.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity += 1;
    res.send(foundItem);
  }
  else {
    let item = {
     id: id,
     quantity: 1
    };
    lunch.unshift(item);
    res.send(item);
  }
});


app.put('/api/lunch/:id/:quantity', (req, res) => {
  console.log("In lunch post");
  id = parseInt(req.params.id);
  let quantity = parseInt(req.params.quantity);
  const foundItem = lunch.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity = quantity;
    res.send(foundItem);
    if (quantity == 0) {
      lunch = lunch.filter(item => item.id !== id);
    }
  }
  else {
    res.status(404)
      .send("Sorry, that product is not in the lunch.");
    return;
  }
});



app.delete('/api/lunch/:id', (req, res) => {
  console.log("In delete");
  let id = req.params.id;
  lunch = lunch.filter(item => item.id !== id);
  res.sendStatus(200);
});






//dinner stuff
app.get('/api/dinner', (req, res) => {
  console.log("In dinner get");
  res.send(dinner);
});

app.get('/api/dinner/:id', (req, res) => {
  console.log("In get");
  let itemID = parseInt(req.params.id);
  //const foundProduct = products.find(element => element.id === productID);
  /*let foundProduct = products.find((productID) => {
      return product.id === productID;
    });*/
  let curItem = dinner.find((element) => element.id === itemID);
 /*products = products.filter(product => product.id === productID);
  let curProduct = products[0];*/
  res.send(curItem);
});

app.post('/api/dinner/:id', (req, res) => {
  console.log("In dinner post");
  id = parseInt(req.params.id);
  const foundItem = dinner.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity += 1;
    res.send(foundItem);
  }
  else {
    let item = {
     id: id,
     quantity: 1
    };
    dinner.unshift(item);
    res.send(item);
  }
});


app.put('/api/dinner/:id/:quantity', (req, res) => {
  console.log("In dinner post");
  id = parseInt(req.params.id);
  let quantity = parseInt(req.params.quantity);
  const foundItem = dinner.find(item => item.id == id);
  if(foundItem){
    foundItem.quantity = quantity;
    res.send(foundItem);
    if (quantity == 0) {
      dinner = dinner.filter(item => item.id !== id);
    }
  }
  else {
    res.status(404)
      .send("Sorry, that product is not in the dinner.");
    return;
  }
});



app.delete('/api/dinner/:id', (req, res) => {
  console.log("In delete");
  let id = req.params.id;
  dinner = dinner.filter(item => item.id !== id);
  res.sendStatus(200);
});











//products stuff

app.get('/api/products', (req, res) => {
  console.log("In get");
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  console.log("In get");
  let productID = parseInt(req.params.id);
  //const foundProduct = products.find(element => element.id === productID);
  /*let foundProduct = products.find((productID) => {
      return product.id === productID;
    });*/
  let curProduct = products.find((element) => element.id === productID);
 /*products = products.filter(product => product.id === productID);
  let curProduct = products[0];*/
  res.send(curProduct);
});

app.post('/api/products', (req, res) => {
  console.log("In post");
  id = id + 1;
  let product = {
    id: id,
    name: req.body.name,
    calories: req.body.calories
  };
  products.unshift(product);
  res.send(product);
});

app.delete('/api/products/:id', (req, res) => {
  console.log("In delete");
  let id = parseInt(req.params.id);
  let removeIndex = products.map(ticket => {
      return ticket.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  products.splice(removeIndex, 1);
  //products = products.filter(product => product.id !== id);
  res.sendStatus(200);
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
