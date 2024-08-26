const xhr = new XMLHttpRequest();
xhr.addEventListener('load', ()=> {
    //after the response loaded and it will not be undefined
    console.log(xhr.response);
});
//type of http message, where to send this http message. we need to
//use an URL (address for intenet). locate another computer. 
//asynchronous code. it does not wait for line to finish then immediately goes to next line. xhr.send. 
//add event listener to wait.

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();
