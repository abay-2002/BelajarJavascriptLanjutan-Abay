// Hoisting, Execution context dan scope

// === Execution context dan Hoisting. ===
// Execution context:
// 1. Creation phase
// 2. Execution phase
// Javascript akan melakukan creation phase dimana javascript secara global akan membaca apakah ada variable dan function pada script. Apabila ada maka lakukan Hoisting dimana variable dan function akan dinaikan ke layer paling atas dan nilainya akan diisi dengan apabila
// : variable = undefined, 
// function nama() = fn() konsep itu disebut dengan Hoisting.
// console.log(myFunction);

// var nama = "akbar";
// var umur = 18;

// function myFunction(){
//     return `Hallo ${nama}`;
// }

// output: 
// myFunction(){
//     return `Hallo ${nama}`;
// }





// === hoisting, creation dan execution phase, scope pada function ===
// function akan melakukan local hoisting, creation dan execution phase
// window
// arguments

function a(){
    console.log("a");

    function b(){
        console.log("b");

        function c(){
            console.log("c");
        }
        c();
    }

    b();    
}

a();


// object window
function panggilNama(){
    console.log(arguments);

    let namaPanjang = "akbar";
    console.log(namaPanjang);
}

// argument yang dikirim pada function akan disimpan pada object arguments
panggilNama("angkasa");


















