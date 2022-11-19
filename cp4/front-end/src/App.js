import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [products, setProducts] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  
  
  
  //breakfast funcitons
  const fetchBreakfast = async() => {
    try {      
      const response = await axios.get("/api/breakfast");
      setBreakfast(response.data);
      //fetchTotal();
    } catch(error) {
      setError("error retrieving breakfast: " + error);
    }
  }
  
  const addBreakfast = async(product) => {
    try {
      await axios.post("/api/breakfast/" + product.id);
    } catch(error) {
      setError("error adding a product to breakfast" + error);
    }
  }
  
  const upOneBreakfast = async(item) => {
    try {
      let newQuant = item.quantity + 1;
      await axios.put("/api/breakfast/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the breakfast" + error);
    }
  }
  
  const downOneBreakfast = async(item) => {
    try {
      let newQuant = item.quantity - 1;
      await axios.put("/api/breakfast/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the breakfast" + error);
    }
  }
  
  const removeOneBreakfast = async(item) => {
    try {
      await axios.put("/api/breakfast/" + item.id + "/" + 0);
    } catch(error) {
      setError("error decrementing a product in the breakfast" + error);
    }
  }
  
  const addToBreakfast = async(product) => {
    await addBreakfast(product);
    fetchBreakfast();
    
    
  }
  
  const upOneCountBreakfast = async(item) => {
    await upOneBreakfast(item);
    fetchBreakfast();
    
  }
  
  const downOneCountBreakfast = async(item) => {
    await downOneBreakfast(item);
    fetchBreakfast();
    
  }
  
  const removeItemBreakfast = async(item) => {
    await removeOneBreakfast(item);
    fetchBreakfast();
  }
  
  
  //lunch funcitons
  const fetchLunch = async() => {
    try {      
      const response = await axios.get("/api/lunch");
      setLunch(response.data);
      //fetchTotal();
    } catch(error) {
      setError("error retrieving lunch: " + error);
    }
  }
  
  const addLunch = async(product) => {
    try {
      await axios.post("/api/lunch/" + product.id);
    } catch(error) {
      setError("error adding a product to lunch" + error);
    }
  }
  
  const upOneLunch = async(item) => {
    try {
      let newQuant = item.quantity + 1;
      await axios.put("/api/lunch/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the lunch" + error);
    }
  }
  
  const downOneLunch = async(item) => {
    try {
      let newQuant = item.quantity - 1;
      await axios.put("/api/lunch/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the lunch" + error);
    }
  }
  
  const removeOneLunch = async(item) => {
    try {
      await axios.put("/api/lunch/" + item.id + "/" + 0);
    } catch(error) {
      setError("error decrementing a product in the lunch" + error);
    }
  }
  
  const addToLunch = async(product) => {
    await addLunch(product);
    fetchLunch();
    
    
  }
  
  const upOneCountLunch = async(item) => {
    await upOneLunch(item);
    fetchLunch();
    
  }
  
  const downOneCountLunch = async(item) => {
    await downOneLunch(item);
    fetchLunch();
    
  }
  
  const removeItemLunch = async(item) => {
    await removeOneLunch(item);
    fetchLunch();
  
  }
  
  
  
  
  
  
  
  
  //dinner funcitons
  const fetchDinner = async() => {
    try {      
      const response = await axios.get("/api/dinner");
      setDinner(response.data);
      //fetchTotal();
    } catch(error) {
      setError("error retrieving dinner: " + error);
    }
  }
  
  const addDinner = async(product) => {
    try {
      await axios.post("/api/dinner/" + product.id);
    } catch(error) {
      setError("error adding a product to dinner" + error);
    }
  }
  
  const upOneDinner = async(item) => {
    try {
      let newQuant = item.quantity + 1;
      await axios.put("/api/dinner/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const downOneDinner = async(item) => {
    try {
      let newQuant = item.quantity - 1;
      await axios.put("/api/dinner/" + item.id + "/" + newQuant);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const removeOneDinner = async(item) => {
    try {
      await axios.put("/api/dinner/" + item.id + "/" + 0);
    } catch(error) {
      setError("error decrementing a product in the dinner" + error);
    }
  }
  
  const addToDinner = async(product) => {
    await addDinner(product);
    fetchDinner();
    
    
  }
  
  const upOneCountDinner = async(item) => {
    await upOneDinner(item);
    fetchDinner();
    
  }
  
  const downOneCountDinner = async(item) => {
    await downOneDinner(item);
    fetchDinner();
    
  }
  
  const removeItemDinner = async(item) => {
    await removeOneDinner(item);
    fetchDinner();
    
  }
  
  
  
  //productFuncitons
  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  
  const createProduct = async() => {
    try {
      await axios.post("/api/products", {name: name, calories: calories});
    } catch(error) {
      setError("error adding a product: " + error);
    }
  }
  const deleteOneProduct = async(product) => {
    try {
      await axios.delete("/api/products/" + product.id);
    } catch(error) {
      setError("error deleting a product" + error);
    }
  }
  
  useEffect(() => {
    fetchProducts();
  },[]);

  const addProduct = async(e) => {
    e.preventDefault();
    await createProduct();
    fetchProducts();
    setName("");
    setCalories("");
  }
  
  const thisProduct = async(item) => {
    try {
      return axios.get("/api/products/" + item.id);
    } catch(error) {
      setError("error getting a product" + error);
    }
  }
  
  const getProduct = async(item) => {
    return thisProduct(item);
  }
  
  
  
  
  
  
  
  function findIndexOfProduct(id) {
    //let foundIndex = 0;
    for (let i = 0; i < products.length; i++) {
      if (products.at(i).id === id) {
        return i;
      }
    }
  }
  
  
  function getMealTotal(curMeal) {
    let total = 0;
    for (let i = 0; i < curMeal.length; i++) {
      total += curMeal.at(i).quantity*products.at(findIndexOfProduct(curMeal.at(i).id)).calories;
    }
    
    return total;
  }
  

  // render results
  return (
    <div className="App">
      {error}
      
      <h1>DAILY MEAL PLANNER</h1>
      
      <div class = 'meal'>
      <div class = 'breakfast'>
      <h2>Breakfast</h2>
      <h4>Total calories: {getMealTotal(breakfast)}</h4>
      {breakfast.map( item => (
        <div key={item.id}>
          <p>{item.quantity} {products.at(findIndexOfProduct(item.id)).name}s, {item.quantity*products.at(findIndexOfProduct(item.id)).calories} calories
          <button onClick={e => upOneCountBreakfast(item)}>+</button>
          <button onClick={e => downOneCountBreakfast(item)}>-</button>
          <button onClick={e => removeItemBreakfast(item)}>Remove</button>
          </p>
        </div>
      ))}
      
      </div>
      
      <div class = 'lunch'>
      <h2>Lunch</h2>
      <h4>Total calories: {getMealTotal(lunch)}</h4>
      {lunch.map( item => (
        <div key={item.id}>
          <p>{item.quantity} {products.at(findIndexOfProduct(item.id)).name}s, {item.quantity*products.at(findIndexOfProduct(item.id)).calories} calories
          <button onClick={e => upOneCountLunch(item)}>+</button>
          <button onClick={e => downOneCountLunch(item)}>-</button>
          <button onClick={e => removeItemLunch(item)}>Remove</button>
          </p>
        </div>
      ))}
      
      </div>
      
      <div class = 'dinner'>
      <h2>Dinner</h2>
      <h4>Total calories: {getMealTotal(dinner)}</h4>
      {dinner.map( item => (
        <div key={item.id}>
          <p>{item.quantity} {products.at(findIndexOfProduct(item.id)).name}s, {item.quantity*products.at(findIndexOfProduct(item.id)).calories} calories
          <button onClick={e => upOneCountDinner(item)}>+</button>
          <button onClick={e => downOneCountDinner(item)}>-</button>
          <button onClick={e => removeItemDinner(item)}>Remove</button>
          </p>
        </div>
      ))}
      
      </div>
      </div>
      
      
      
      <h3>Todays's calorie total: {getMealTotal(breakfast)+getMealTotal(lunch)+getMealTotal(dinner)}</h3>
      <br></br>
      
      <h3>Log an Item</h3>
      <form onSubmit={addProduct}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Calories:
            <input value={calories} onChange={e=>setCalories(e.target.value)}></input>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      
      <h3>Logged Items</h3>
      {products.map( product => (
        <div key={product.id} className="product">
          <p>{product.name}, {product.calories} calories <button onClick={e => addToBreakfast(product)}>Add to Breakfast</button>
          <button onClick={e => addToLunch(product)}>Add to Lunch</button>
          <button onClick={e => addToDinner(product)}>Add to Dinner</button>
          
          </p>
        </div>
      ))}   
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer>
      <a href = "https://github.com/hpertab/MealTrackingApp.git">GitHub Code</a>
      <p>Hana Pertab and Brianna White</p>
    </footer>
    </div>
    
    
  );
}

export default App;



/*

<button onClick={e => deleteProduct(product)}>Delete</button>
const deleteProduct = async(product) => {
    let found = false;
    for (let i = 0; i < breakfast.length; i++) {
      if (breakfast.at(i).id == product.id) {
        found = true;
      }
    }
    if (found) {
      await removeItemById(product.id);
    }
    await deleteOneProduct(product);
    
    fetchProducts();
    fetchBreakfast();
  }
  
  
  const removeItemById = async(id) => {
    await removeOneById(id);
  }
  
  const removeOneById = async(id) => {
    try {
      await axios.put("/api/breakfast/" + id + "/" + 0);
    } catch(error) {
      setError("error decrementing a product in the breakfast" + error);
    }
  }
  
  
  
  
  
  <div class = 'meal'>
      <div class = 'breakfast'>
      <h4>Breakfast calories total: {getMealTotal(breakfast)}</h4>
      </div>
      
      <div class = 'lunch'>
      <h4>Lunch calories total: {getMealTotal(lunch)}</h4>
      </div>
      
      <div class = 'dinner'>
      <h4>Dinner calories total: {getMealTotal(dinner)}</h4>
      </div>
      </div>
  */