// Exercise 1: Products
// 1 Create an object representing a product in an e-shop. Give it these properties

// name - name of the product
// price - the price of the product in euros
// quantity - number of items available in the store
// Create an array containing at least 7 different products.

class Item {
    constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }
    sell() {
      this.quantity -= 1;
      
    }
    store(count) {
      this.quantity += count;
    }
}

const apple = new Item ('apple', 5, 100);
const orange = new Item ('orange', 3, 200);
const cherry = new Item ('cherry', 4, 300);
const lemon = new Item ('lemon', 1, 200);
const avocado = new Item ('avocado', 4, 90);
const pomelo = new Item ('pomelo', 6, 100);
const lime = new Item ('lime', 2, 200);


const fruits = [apple, orange, cherry, lemon, avocado, pomelo, lime];

document.addEventListener('DOMContentLoaded', () => {
   const items = document.querySelector('.storeItems');
   
  
    for (const fruit of fruits) {
    
    const newElm = document.createElement('div');
    
      newElm.innerHTML = (
      `<li>Product: ${fruit.name}, price: ${fruit.price},quantity:  <span id='elm'>${fruit.quantity}</span>
      <button class='btn' >Buy</button>` )
    
      const btn = newElm.querySelector('.btn');
      const elm = newElm.querySelector('#elm');
     
      btn.addEventListener('click', () => {
        fruit.sell()
         elm.textContent = fruit.quantity;
      });

      items.appendChild(newElm);
    };
})
    