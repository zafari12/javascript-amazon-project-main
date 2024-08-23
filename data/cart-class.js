
//object generator
class Cart {

  cartItems;
  //cartItems =  undefined;
  #localStorageKey;

  constructor(localStorageKey) {

   this.#localStorageKey = localStorageKey; 
   //businessCart.localStorageKey = 'Cart-business'; 

   this.#loadFromStorage();
   //businessCart.loadFromStorage();

  }
  
#loadFromStorage() {
   this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
 
    if (!this.cartItems) {
       this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
      }, {
           productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
           quantity: 1,
           deliveryOptionId: '2'
      }];
    }
 }

 saveToStorage(){
   localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
 }

 addToCart (productId) {
   let matchingItem;
 
   this.cartItems.forEach((cartItem)=> {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
   });
 
   if (matchingItem) {
      matchingItem.quantity += 1;
   }
   else {
      this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
     });
   }

   this.saveToStorage();
}

removeFromCart(productId){
  const newCart = [];

  this.cartItems.forEach((cartItem) => {
     if(cartItem.productId !== productId) {
        newCart.push(cartItem);
     }
  });

  this.cartItems = newCart;

  this.saveToStorage();
}

updateDeliveryOption (productId, deliveryOptionId){
 
   let matchingItem;

   this.cartItems.forEach((cartItem)=> {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
   });

   matchingItem.deliveryOptionId = deliveryOptionId;

   this.saveToStorage();
}


}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

//cart.localStorageKey = 'aaa';
//not supposed to do it. 

 console.log(cart);
 console.log(businessCart);

 console.log(businessCart instanceof Cart);

 //object oriented programming organizing our code into objects 
 //class helps us to generate these objects. easier to create these objects. 
 //benefits: cleaner than a function. 
 //extra features: consturactor, after we create object, we run setup code. constructor (){} works like a normal method. run automatically to put the setup code. 
 /* 
 private properties: cannot be used outside of the class
 only accessed inside a class. 
 private methods. which properties or methods to use outside of the class. 
 */