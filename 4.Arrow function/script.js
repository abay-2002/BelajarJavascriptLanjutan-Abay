// // function declaration
// function user(nama){
//     console.log(nama)
// }
// user('akbar');



// === ===
// // function expression
// let userExpres = function(nama){
//     console.log(nama);
// }
// user('angkasa');



// === ===
// // arrow function 
// // 'bentuk lain yang lebih ringkas dari function expression' -MDN

// 1. 1 argument
// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama("akbar angkasa"));

// 2. 2 argument
// const tampilNama = (nama, waktu) => {return `Selamat ${waktu} ${nama}`;}
// console.log(tampilNama('abay', 'malam'));

// 3. implisit return
// const tampilNama = (nama) => `Hello ${nama}`;
// console.log(tampilNama('Abay'));

// 4. tanpa argument
// const tampilNama = _ => `Hello world`;
// console.log(tampilNama());



// === ===
// method map adalah memecah array/membagi array.
// function map memetakan function pada sebuah array
let mahasiswa = ['akbar angkasa', 'yumna', 'ubay'];

// nama pada argument dibawah adalah element2 array
// mengembalikan sebagai array
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })
// console.log(jumlahHuruf);

// mengembalikan sebagai object
let jumlahHuruf = mahasiswa.map( nama => ({
    nama: nama, jmlhHruf: nama.length
}));
console.table(jumlahHuruf);









