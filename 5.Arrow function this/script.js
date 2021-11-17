// arrow function 
// this keyword
// pada function declaration dan function expression this konteksnya sama
// this pada arrow function konteksnya berbeda


// === konsep this pada function expression:
// constructor function
// const Mahasiswa = function(nama){
//     this.nama = nama;
//     this.umur = 18;
//     console.log(this);
// }
// const akbar = new Mahasiswa('akbar');


// === konsep this pada arrow function
// const Mahasiswa = (nama) => {
//     this.nama = nama;
//     this.umur = 18;
//     this.makan = function(){
//         console.log(`Selamat makan ${nama}`);
//     }
//     console.log(this);
// }
// const akbar = new Mahasiswa('akbar');

// kode diatas akan menghasilkan output: error

const Mahasiswa = function(nama){
    this.nama = nama;
    this.umur = 18;
    this.makan = () => {
        console.log(`Selamat makan ${nama}`);
        console.log(this);
    }
    console.log(this);
}
const akbar = new Mahasiswa('akbar');
// arrow function sebenarnya tidak menyimpan konteks this, jadi tidak ada konsep this didalam function arrow function dia akan cari keluar


// arrow function tidak memiliki konsep this
const panggilNama = _ => {
    return this;
}
console.log(panggilNama());
// output: window















