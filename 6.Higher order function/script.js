// === HIGHER ORDER FUNCTION dan CALLBACK
// daftar isi:
// Higher-order function
// Callback Function
// Higher-order function pre-requisite
// Functional Programming
// Apa itu First-class function?
// First-Class Function
// Higher-Order Functions
// array methos, map(), filter(), reduce()




// == Higher Order Function ==
// function yang menerima function sebagai argument ataupun function sebagai nilai return dari function tersebut.
// pada Javascript sebuah function disebut 'first class function' artinya inti dari javascript itu sebenarya function.
// 'Javascript memberlakukan function sebagai object'

// == Callback function ==
// callback adalah sebuah function yang akan dijalankan setelah function utamanya selesai dijalankan.



// == Higher order function pre-requisites ==
// *Functional programming
// *Konsep First class function

// == Apa itu Functional Programming? ==
// Ketentuan sederhananya adalah, Functional programming merupakan bentuk pemprograman dimana kamu bisa pass functions sebagai parameter untuk functions lainnya dan juga mengembalikan functions tersebut sebagai values. pada Functional programming, kita berpikir dan kode dalam kondisi/ketentuan Functions.

// == First-Class functions ==
// Kalau kamu sedang mempelajari Javascript, kamu mungkin mendengar bahwa Javascript memberlakukan functions sebagai first-class citizens.
// Itu karena pada Javascript Functions adalah object.

// didalam Javascript Functions adalah special type of objects. Mereka adalah Function objects. Sebagai contoh:

function greeting(){
    console.log('Hello world');
}
greeting();
// output: 'Hello world'
// untuk membuktikan bahwa function adalah object pada Javascript, kita bisa menambahkan properties pada function seperti berikut
greeting.lang = 'English';
console.log(greeting.lang);
// output: 'English'
// catatan: meskipun kode diatas valid pada Javascript, tapi ini dinilai sebagai penulisan yang harmful. Seharusnya kita tidak memberikan random properties kepada function object, gunakan object jika memang diperlukan.

// pada Javascript apapun yang bisa kita lakukan dengan type lainnya seperti object, string, ataupun number, kita bisa melakukannya dengan function. Kamu bisa memberikan function(callback) argument kepada function lainnya, menyimpannya pada variable dan menggunakannya ditempat lainnya. Inilah kenapa functions pada Javascript juga dikenal sebagai First-class functions.

// = Menyimpan Functions pada variables =
// kita dapat menyimpan functions pada variable di Javascript. Contoh:
const square = function(x){
    return x * x;
}
console.log(square(5));
// output: 25
// kita juga bisa memberi/menggunakan function tersebut ke sekitarnya contoh:
const foo = square;
console.log(foo(6));

// = Passing function sebagai parameters =
// kita bisa mem-pas functions sebagai parameters untuk function lainnya, contoh:
function formalGreeting(){
    console.log('How are you?');
}

function casualGreeting(){
    console.log("Hey what's up?");
}

function greet(type, formalGreeting, casualGreeting){
    if(type == 'formal'){
        formalGreeting();
    }else if(type == 'casual'){
        casualGreeting();
    }
}
greet('formal', formalGreeting, casualGreeting);
// Sekarang kita sudah tahu apa itu First-class function. Ayo lanjut mendalami apa itu Higher order function.

// == Higher-Order Functions ==
// Higher Order Functions adalah Functions yang mengoperasi pada functions lain, entah memberlakukannya sebagai arguments atau mengembalikannya. Bahasa gampangnya, 
// Higher Order Functions adalah sebuah functions yang menerima Function sebagai argument ataupun mengembalikan/meng-returns sebuah functions sebagai output.
// sebagai contoh, Array.prototype.map, Array.prototype,filter dan Array.prototype.reduce adalah beberapa contoh Higher-order functions yang sudah tersedia pada bahasa (Javascript).

// = Higher-Order functions beraksi =
// Mari lihat beberapa contoh dari built-in Higher-order-functions dan lihat perbandingannya dengan yang menggunakan Higher-order-function dan tanpa menggunakan Higher-order Functions.

// = Array.prototype.map =  
// map() method membuat array baru dengan memanggil callback function yang telah disediakan sebagai argument pada setiap element didalam input array. map() method akan menngambil setiap nilai kembalian/return dari callback function dan membuat array baru menggunakan/dari values tersebut.
// callback functions yang dikirim/pass kepada method map() menerima 3 arguments: element,index dan array.
// lihat contohnya:

// contoh 1:
// kita ambil kasus dimaana kita mempunyai array dan ingin mengkalikan 2 setiap element yang berada didalam arraynya, kemudian taro element yang telah dikali 2 kedalam array baru
// tanpa Higher-Order Functions
const arr1 = [1,2,3];
const arr2 = [];
for(i=0; i<arr1.length; i++){
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

// dengan Higher order function map
const arr3 = [1,2,3];
const arr4 = arr3.map(function(item){
    return item * 2;
});
console.log(arr4);

// kita bisa memperpendek syntaxnya dengan arrow function
const arr5 = [1,2,3];
const arr6 = arr5.map( item => item * 2);
console.log(arr6);

// contoh 2:
// kasus ini kita mempunyai array dengan isi tahun ulang tahun dari beberapa orang dan kita ingin mengetahui berap usia dari orang-orang ini.
// rumus 1975 - 2021 = 46
// tahunLahir - tahunSekarang = hasilUmur
// hasilUmur kemudian akan kita simpan pada array baru

// tanpa menggunakan Higher order function
const tahunLahir = [1970, 1975, 1976, 2002];
let umur = [];
for(i=0; i<tahunLahir.length; i++){
    umur.push(tahunLahir[i] - 2021);
}
console.log(umur);

// dengan menggunakan Higher order function map
const tahunLahir2 = [1970/*index*/, 1975, 1976, 2002]; //array
const umur2 = [];
const fixTahunLahir2 = tahunLahir2.map( element => element - 2021 );
console.log(fixTahunLahir2);

// = Array.prototype.filter =
// method filter() membuat array baru dengan semua elements yang telah berhasil melalui penyaringan/test yang disediakan oleh callback functionnya. Method filter() menerima 3 arguments yaitu elements, index, array

// contoh 1:
// kita mempunyai kasus dimana kita mempunyai array yang didalamnya terdapat beberapa object dengan properties nama dan umur orang-orang. Kita akan melakukan pengecekan apabila umur lebih dari atau sama dengan 18 maka simpan di array yang baru.

// tanpa menggunakan Higher Order Function filter()
const peoples = [
    {name: 'abay', age: 18},
    {name: 'yumna', age: 9},
    {name: 'ajeng', age: 19}
];
const tersaring = [];

for(i=0; i<peoples.length; i++){
    if(peoples[i].age >= 18){
        tersaring.push(peoples[i]);
    }
}
console.log(tersaring);

// dengan menggunakan Higher Order Function filter()
const peoples2 = [ // array
    {name: 'abay', age: 18}, // index
    {name: 'yumna', age: 9},
    {name: 'ajeng', age: 19}
];
const bolehMasuk = peoples.filter( people /*element*/ => people.age >= 18 );
console.log(bolehMasuk);


// = Array.prototype.reduce =
// callback dari method reduce akan mengeksekusi setiap anggota arraynya dimana akan menghasilkan single output value/output satu value. Method reduce() menerima 2 parameters: 

// 1. reducer functions/callback. menerima 4 parameters: accumulator, currentValue, currentIndex, sourceArray. Dan optional intitialValue.
// 2. initialValue optional.

// reducer function/callback menerima 4 parameters: accumulator, currentValue, currentIndex, sourceArray.
// Apabila initialValue diikutsertakan, 
// maka accumulator akan sama dengan intialValue dan 
// currentValue akan sama dengan element pertama didalam array.
// apabila initialValue tidak diikutsertakan, maka accumulator akan sama dengan element pertama didalam array dan currentValue akan sama dengan element kedua didalam array.

// *tanpa initialValue.
// accumulator = element pertama di dalam array.
// currentValue = element kedua di dalam array.
// *dengan initialValue:
// accumulator = initialValue.
// currentValue = element pertama di dalam array.

// contoh 1:
// setiap kali reducer function dipanggil pada setiap value array. accumulator(element pertama didalam array) akan menyimpan hasil dari operasi yang telah dikembalikan sebelumnya dari reducer function.
// atau bahasa gampangnya result dari reducer function/callback akan disimpan di accumulator. Penting diingat result dari reducer function itu adalah setiap element arraynya.
// dan currentValue akan diset menjadi nilai terkini arraynya. Akhirnya resultnya akan ditampung didalam variable sum.

// menggunakan higher-rder-function array method reduce()
// contoh 1:
// kasusnya adalah dimana kita ingin menjumhlahkan seluruh element yang ada didalam array.
const arrReduce = [5,4,2,3,1];
const sum = arrReduce.reduce(function(accumulator, currentValue){
    return accumulator * currentValue;
}, 10);
console.log(sum);
// output: 1200






// map() memecah element/melakukan looping terhadap element didalam array kemudian, callback functionnya akan mereturn kondisi apapun yang diberikan. map() akan mengembalikan array baru.
// filter() memecah element/melakukan looping terhadap element didalam array, kemudian callback functionnya hanya akan mereturn/memfilter sesuai kondisi filter yang diberikan. filter() akan mengembalikan array baru.
// 



// MEMBUAT HIGHER ORDER FUNCTION
// contoh 1:
// menulis higher order function, dengan function yang terpisah.
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);
// output: 10

// contoh 2:
// menulis higher order function dimana function callback langsung ditulis pada parameter function higher order functionnya.
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push( fn(arr[i]) );
  }
  return newArray;
}



const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);



































































































































// kenapa menggunakan Higher order function, 1.Abstraksi yaitu agar kode yang kita buat bisa lebih sederhana

// Contoh Higher order function
// Array.protoype.map()
// Array.protoype.filter()
// Array.protoype.reduce()
