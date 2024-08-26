import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

Promise.all ([
loadProductsFetch(),
  new Promise((resolve)=> {
    loadCart(()=> {
      resolve();
    });
  })

]).then(()=> {
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve)=> {
//runs the fuctions immediatley. resolve is a function similar to done.
//runs a asynchronous funcion
//use resolve to wait for a code to finish
  loadProducts(()=> {
    resolve('value1');
    //share value between two steps of promise
  });

}).then((value)=> {
  console.log(value);

  return new Promise((resolve)=> {
    loadCart(()=> {
    //call resolve to go to next step
        resolve();
    });
  });

}).then(()=> {
    renderOrderSummary();
    renderPaymentSummary();
});

*/
/*
the nest line does not run after the promise. it creates a seperate line of code.
loadProducts(()=>{
    resolve();
    next steps. 
})
    runs at the same time as
loadProducts(()=> {
    renderOrderSummary();
    renderPaymentSummary();
})

it does mmultiple things at the same time. next step is done on the side. 
*/

/*
callback
loadProducts(()=> {
    //anonymous function to run in the future
  loadCart(()=> {
    renderOrderSummary();
    renderPaymentSummary();
  });
});

*/
