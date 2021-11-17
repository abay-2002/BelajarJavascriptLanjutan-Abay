// beberapa cara membuat object pada javascript:
// 1. Object literal 
// 2. Function declaration
// 3. Object.create() 
// 4. Constructor function, keyword new
// 5. Prototype

// 1. Object literal
// let mahasiswa1 = {
//     nama: "Akbar",
//     usia: 18,
//     makan: function(energi){
//         return energi += 5;
//     }
// }

// let akbar = mahasiswa1;

// let mahasiswa2 = {
//     nama: "Angkasa",
//     usia: 18,
//     makan: function(energi){
//         return energi += 5;
//     }
// }

// let angkasa = mahasiswa2;










// 2. function declaration
// kekurangan: method akan tetap dibuat didalam memory meskipun method tersebut nantinya tidak dipakai.
// let Mahasiswa = function(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(makan){
//         return this.energi += makan;
//     }
//     return mahasiswa;
// }

// let pertama = Mahasiswa("akbar", 10);
// let kedua = Mahasiswa("angkasa", 20);






// 3.Object create
let MethodMahasiswa = {
    makan: function(){
        this.energi += 5;
    },
    main: function(){
        this.energi -= 5;
    },
    tidur: function(){
        this.energi += this.energi;
    },
}


let Mahasiswa = function(nama, energi){
    let mahasiswa = Object.create(MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let pertama = Mahasiswa("akbar", 10);
console.log(pertama.energi);













// 4. Constructor function/with keyword new
// let Mahasiswa = function(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(makan){
//         return this.energi += makan;
//     }

//     this.main = function(main){
//         return this.energi -= main;
//     }

//     this.tidur = function(){
//         return this.energi += this.energi;
//     }
// }

// let pertama = new Mahasiswa("akbar", 10);
// let kedua = new Mahasiswa("angkasa",20);











// // 5. Prototype
// let Mahasiswa = function(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(){
//     this.energi += 5;
// }

// Mahasiswa.prototype.tidur = function(){
//     this.energi += this.energi;
// }

// let pertama = new Mahasiswa("akbar", 10);




























































