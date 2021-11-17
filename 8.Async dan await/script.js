// async dan await
// instead of doing this with promises:
let p = new Promise( (resolve,reject) => {
    let total = 3;
    if(total == 2){
        resolve(`Here's your gift`);
    }else{
        reject('Sorry i deny :(');
    }
});

p
    .then(function(message){
        console.log(message);
    }).catch(function(message){
        console.log(message);
    }).finally(function(){
        console.log('selesai');
    });

// menggunakan async dan await:
// dalam kasus ini janji terpenuhi
async function Gift(){
    let gift = new Promise((resolve,reject)=>{
        resolve('Heres your gift');   
    })
    console.log(await gift);
}
Gift();


function janji(){
    let promise = new Promise((resolve, reject)=>{
        let hasil = 4;
        if(hasil == 4){
            resolve('promise resolve');
        }else{
            reject('promise reject');
        }
    })
    promise.then((pesan)=>console.log(pesan))
        .catch((pesan)=>console.log(pesan));
}

janji();



// async dan await
// asychronous 'i'll do it later'.
// 1.dengan menggunakan Async Await, kita bisa membuat kode Asynchronous dengan gaya Synchronous.
// 2.Await digunakan untuk mendapatkan value hasil dari Function yang mengembalikan Promise.
// 3.Menggunakan Async Await contoh:
async function onSearch(keyword){
    const product = await searchProducts(keyword);
    // hasil dari method searchProducts() adalah promises.

    clearProducts();
    displayProducts();
}
// 4.Lihat definisi no:3 kode diatas terlihat seperti berjalan secara Synchronous PADAHAL SEBENARNYA kode diatas berjalan secara Asynchronous.









// w3schools Async and Await
// "async and await make promises easier to write"
// 1.async makes a function return a Promise
// 2.await makes a function wait for a Promise
// 1.Async membuat sebuah function mengembalikan promise.
// 2.Await membuat sebuah function menunggu promise.
// Async Syntax
// The keyword async before a function makes the function return a promise:
// Example
// async function myFunction() {
//   return "Hello";
// }
// Is the same as:

// async function myFunction() {
//   return Promise.resolve("Hello");
// }

// Here is how to use the Promise:

// myFunction().then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// Example
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

async function myFunction() {
  return "Hello";
}

// myFunction().then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

// Or simpler, since you expect a normal value (a normal response, not an error):

// Example
myFunction().then(
  function(value) {myDisplayer(value);}
);







// Await Syntax
// kata await sebelum function membuat si function menunggu untuk promises:
// let value = await promise;
// The await keyword can only be used inside an async function.
// Example
// Let's go slowly and learn how to use it.

// Basic Syntax
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

// Waiting for a Timeout
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

// contoh menunggu file:
// async function getFile() {
//     let myPromise = new Promise(function(resolve) {
//       let req = new XMLHttpRequest();
//       req.open('GET', "mycar.html");
//       req.onload = function() {
//         if (req.status == 200) {
//           resolve(req.response);
//         } else {
//           resolve("File not Found");
//         }
//       };
//       req.send();
//     });
//     document.getElementById("demo2").innerHTML = await myPromise;
//   }
  
//   getFile();

  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo2").innerHTML = await myPromise;
  }
  
  getFile();

















