import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//this function returns a promise
//we can use try{} catch {} with synchornous code too without using
//async await
//outside control and code is correct and that is when we use try catch
//throw creates a new error. manually create an error

async function loadPage() {
  try {
    //throw 'error1';
    //goes directly to catch and ignore the rest.

    await loadProductsFetch();
 
    const value = await new Promise((resolve, reject)=> {
      //throw 'error2';
      loadCart(()=> {
        //throw does not work in future. so we cannot have it here. 
        //reject('error3');
        resolve('value3');
      });
    });

  } catch (error){
    console.log('unexpected error. please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();

  //eturn 'value2';
  //converts to resolve(value2);
}

loadPage();
 //.then((value)=> {
    //console.log('next step');
    //console.log(value);


/*

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

*/

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
