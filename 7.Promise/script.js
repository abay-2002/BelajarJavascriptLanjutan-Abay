// Javascript promises
let p = new Promise(function(resolve,reject){
    let message = 2 + 1;
    if(message == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
});

p
    .then((message)=>{
        document.getElementById('result').innerHTML = `Promises terpenuhi :)  ${message}`;
    })
    .catch((message)=>{
        document.getElementById('result').innerHTML = `Promises diingkari :( ${message}`;
    });

// Promises pada javascript sama seperti janji pada irl
// algoritma janji:
// seseorang membuat janji
// janji a dan b, dimana a berjanji mengambil barang milik b yang tertinggal, apabila kondisi janji sebelumnya terpenuhi maka lakukan kondisi berupa resolve. Tapi apabila janjinya tidak terpenuhi maka lakukan kondisi reject.
// then() dan catch()
// then() akan menangkap kondisi resolve(), kemudian melakukan sesuatu terhadap kondisi janji yang terpenuhi tersebut.
// catch() akan menangkap kondisi reject(), kemudian melakukan sesuatu terhadap kondisi jajnji yang diingkari tersebut.

// contoh kasus promises
// kita akan melakukan kondisi dimana ketika user mengclick button maka promises akan dijalankan.

 
let button = document.getElementById('button');
button.addEventListener('click', function(){
    let q = new Promise((resolve,reject) => {
        let hasil = prompt('1 + 1 = ?');
        if(hasil == 2){
            resolve('Berhasil');
        }else{
            reject('Gagal');
        }
    })

    q.then((message)=>{
        document.getElementById('resultQ').innerHTML = `${message}`;
    }).catch((message)=>{
        document.getElementById('resultQ').innerHTML = `${message}`;
    })
});
