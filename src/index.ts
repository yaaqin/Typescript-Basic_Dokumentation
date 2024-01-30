//sedikit catatan

//instalation

//instalation general typescript menggunakan command => npm i -g typescript
//menambahkan file tsconfig.json => tsc --init

//next adalah melakukan beberapa setup pada file tsconfig.json
// enable     "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
//enable    "outDir": "./bundle",                                   /* Specify an output folder for all emitted files. */
//enable    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
//outdir untuk menyimpan file bundle
//dan rootdir sebagai folder utama tempat kita ngoding yaitu sumber dari folder bundle nya

// untuk menjalankan/membundle kode ts kita gunakan command tsc
// dan untuk menjalankan bundlenya bisa gunakan node bundle/index.js

//untuk menjalankan ke2 command secara bersamaan anda bisa menggunakan semicolon untuk menjalankan di powercell dan && untuk menjalankan di bash

//contoh data number
let umurSaya: number = 22;
console.log({ umurSaya });

// pada contoh ini kita bisa melihat bahwa di typescript sendiri adalah untuk memvalidasi sebuah data ataupun menetapkan type dari variable

//oh ya sedikit tutor dari dea afrizal jika kita menaruh sebuah data didalam kurung kurawal contoh seperti line 23 makan kita akan mengetahui nama data dari nilai yang ditampilkan

//contoh data string
let namaSaya: string;
namaSaya = "76";
//jika pada pergantian value yang type nya tidak sesuai maka dia akan error

//contoh data boolean
const isMarried: boolean = false;
console.log({ isMarried });
//untuk value tipe ini juga tidak bisa dirubah dengan value yang beda type ditambah type datanya adalah constanta yang artinya tidak akan berubah

//lalu bagaimana jika ingin mengkondisikan bahwa type data yang inputkan bisa 2 type atau lebih
//contoh pendeklarasian2 type data
let userNameOrUserId: string | number = 21;
userNameOrUserId = "yaaqin";
userNameOrUserId = 30;
console.log({ userNameOrUserId });

//bisa menggunakan simbol atau | saat pendeklarasian type datanya

//apakah bisa menggunakan 3 type ??
let pacar: boolean | number | string = 3;
pacar = "azizah";
pacar = true;
// yup bisa skali

//bagaimana klo kita tidak mendeklarasikan type data saat pembuatannya
//contoh
let ismerried;
ismerried = true;
ismerried = "sudah";
ismerried = 3;
let aktifitas: any = "baru lulus";
// sedikit info bahwa nama data "status" tidak bisa digunakan
//jika kita tidak mendeklarasikan type datanya maka yang terjadi adalah data tersebut bertype any => yang artinya bisa diubah menjadi type data apa saja
// yang dimana hal tersebut bukan merupakan hal yang direkomendasikan jika kita menggunakan ts (pake js murni aja)

//terus gimana untuk 2 type data lainnya seperti array dan object
// mari kita tes

let daftarPacar: string[];
daftarPacar = ["aisyah", "zee", "santy"];

//untuk format penulisannya adalah seperti di line diatas yitu
//type data dituliskan sebelum kurung array => yang artinya bahwa semua nilai yang ada didalam array dengan nama tsb harus bertype string

//contoh array number dan boolean
let noKartu: number[];
noKartu = [3, 13, 78, 8];

let siswaIsMerried: boolean[];
siswaIsMerried = [false, false, true];

let noAntrian = [9, 1];
//padacontoh ini kita bisa lihat bahwa data yang pada pendeklarasiannya tidak memasukan type data yang dibuat maka akan otomatis membacanya
//dan mensetting type data dari nama data tersebut
//tapi ini bukan contoh penggunaan typescript yang baik yaa

// lalu bagaimana jika kita ingin membuat sebuah data array yang valuenya tidak hanya 1 type data misal kita ingin memasukan data nama umur dan status pernikahan
//berikut contohnya
let DataSiswaSmt7: [string, number, boolean];
DataSiswaSmt7 = ["aldi", 30, false];
//itu adalah type array yang ingin kita isi dengan type data yang berbeda beda
//kita bisa mendeklarasikan typedatanya pada kurung array dan mendeklarasikan typedata sesuai dengan yang kita inginkan
//NB => setiap index value harus disesuaikan dengan index type yang duah dibuat
//misal string num boolean maka value yang yang harus dimuat juga harus harus seusai tidak boleh diacak atau bahkan melebihi lenght dari parent nya

//ok next

//type data object
//NB => catatan ini gw buat berdasarkan dokumentasi dari nonton Dhea Afrizal => btw dia nyebut klo ini adalah type data custom
//oke langsung ke contohnya

//casenya sama
//didalam data objek kali ini kita akan memasukan data yang terdiri dari nama karyawan ismerried dan id karyawan

type DataKaryawan = {
  id: number;
  nama: string;
  ismerried: boolean;
};
//jadi pada contoh ini kita bisa membuat type data object nya dideklarasikan menggunakan 'type'
//maka dari itu kita bisa juga menyebut DataKaryawan merupakan template data object yang isinya terdiri dari id nama dan ismerried
//contoh saaat kita msukan datanya

let adminOffice: DataKaryawan;
//kita bisa bisa memakai template yang sudah dibuat after tanya titik2
adminOffice = {
  id: 32,
  nama: "haris",
  ismerried: false,
};
console.log({ adminOffice });

// untuk memasukan datanya saat hardcode dia akan memberi tanda merah ketika kita belum menuliskan semua data yang diminta
//jadi kita harus mengisi secara lengkap sesuai dengan template object data yang dipakai

//lalu bagaimana jika kita ingin memasukan data optional => maksudnya adalah bahwa data tsb tidak wajib diisi oleh user

type scrt = {
  id: number;
  nama: string;
  gender?: string;
};

let scrtTraining: scrt = {
  id: 90,
  nama: "agus",
};
console.log({ scrtTraining });

//kita bisa menyisipkan tanda tanya pada nama properti yang isinya adalah optional

//karena pada channel dhea dia langsung praktek pada penulisan function pada javascript disini saya akan coba untuk pembentukan array dalam object dan sebaliknya

//saya akan coba membuat tempalte data nya dulu untuk yang 1 type dan multitype pada data array

let idMember: number[]; //array 1 type
let dataMember: [number, string, boolean]; // array multitype

type DataUser = {
  id: number;
  nama: string;
  movieFav: string[];
  istri?: [number, string];
};
//pada template objek diatas kita coba membuat sebuah template object yang didalamnya ada 2 data array dengan formasi yang berbeda single type dan doubletype
//kita akan coba langsung implementasikan isi data nya

let formKaryawan: DataUser;
formKaryawan = {
  id: 90,
  nama: "andi",
  movieFav: ["romance", "action", "thriller"],
  istri: [24, "anselma"],
};
console.log({ formKaryawan });
//baik jadi untuk pembuatan array dalam object sudah berhasil implementasi dengan baik
//NB => mengingatkan kembali bahwa untuk data yang ditulis menggunakan typescript adalh untuk pemvalidasaan value yang masuk ke dalam pengolahan data

//next kita coba array yang dalamnya berisi sebuah object

let newTalent: DataUser[]; //saya menggunakan kembali template data object data user yang didalamnya berisi data yang ada istrinya dan belum beristri

newTalent = [
  {
    id: 99,
    nama: "samsul",
    movieFav: ["romance", "action", "thriller"],
    istri: [20, "nabd"],
  },
  {
    id: 80,
    nama: "aldi",
    movieFav: ["romance", "action", "thriller"],
  },
];
//baik kita baru saja membuat sebuah data secara harcode menggunakan ketentuan yang sudah kita buat dan berhasil mengimplemenkannya 
console.log({newTalent});


//oke karena sudah berhasil untuk implement array dan juga object lanjut ke function

//first declare function
function declare () {
    return 'hello world'
}
console.log(declare());

//ini adalah bentuk murni js version untuk function declare
//pada case diatas funct yang dijalankan akan mengembalikan sebuah string hello world
//yup seperti pada case sebelumnya bahwa jika tidak ada sebuah inisiasi type data maka dari ts sendiri yang akan otomatis membaca type data yang dikeluarkan

// lalu contoh yang benar bagaimana
function TrueDeclare (): string {
return "2"
}
console.log(TrueDeclare());
//penginisiasian type data yang dikeluarkan dari function bisa ditulis after parameter dengan menggunakan titik dua
//pastikan data yang keluar sesuai dengan type dari functionnya itu sendiri
//jika berbeda akan error

//arrow funct

const exaplArrFunc = (): string => 'ini data hasil arrow function'
const manaHasilnya = exaplArrFunc()
console.log(manaHasilnya);
//itu adalah contoh simple dari penginisiasian type data pada arrow function

const lahir: number = 2002 //ini contoh data dummy 
const sekarang: number = 2024

const hitungUmurSaya = (param1:number, param2:number): number => { //pada function ini saya coba menjalankan sebuah proses menggunakan arrowfunction di ts
   let tahunLahir = param1
   let tahunIni = param2
   const result = tahunIni - tahunLahir
   return result
}
//kita coba test jalankan

const umurYaqin = hitungUmurSaya(lahir, sekarang)
console.log({umurYaqin});
// oke untuk arrow function dengan proses sederhana sudah dibuat  
// kesimpulan baru bahwa untuk parameter yang kita masukan juga ternyata butuh inisiasi type data, so guud serba validasi

//fun fact bahwa di channelnya dhea menjelaskan adanya type void pada function
//mari kita bahas

// const FuncVoid = (): void => 'ini data hasil arrow function'
//contoh diatas tidak akan berfungsi
//kenapa ??
//dikarenakan function dengan type void itu berarti sebuah function yang tidak mereturn apa apa

//lalu untuk menampilkan hasil function ini pada console bagaimana ??
//dengan cara mengconsole.log didalam functionnya
//contoh??
const FuncVoid = (): void => {
    console.log('ini contoh menampilkan hasil pada console');   
}
FuncVoid()
//dengan cara diatas maka nilai yang ada didalam scope function akan tampil pada console 




//karena udah kepanjangan mungkin akan gw lanjut di next day karena masi ada beberapa hal yang harus gw buka juga
//btw ini dokumentasi dari dhea menit ke 36 see u