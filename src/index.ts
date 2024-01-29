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
let umurSaya: number = 22
console.log({umurSaya});

// pada contoh ini kita bisa melihat bahwa di typescript sendiri adalah untuk memvalidasi sebuah data ataupun menetapkan type dari data variable

//oh ya sedikit tutor dari dea afrizal jika kita menaruh sebuah data didalam kurung kurawal contoh seperti line 23 makan kita akan mengetahui nama data dari nilai yang ditampilkan

//contoh data string
let namaSaya:string;
namaSaya = "76"
//jika pada pergantian value type nya tidak sesuai maka dia akan error

//contoh data boolean
const isMarried: boolean = false
console.log({isMarried});
//untuk value tipe ini juga tidak bisa dirubah dengan value yang beda type ditambah type datanya adalah constanta yang artinya tidak akan berubah

//lalu bagaimana jika ingin mengkondisikan bahwa type data yang inputkan bisa 2 type atau lebih
//contoh pendeklarasian2 type data
let userNameOrUserId: string | number = 21
userNameOrUserId = 'yaaqin'
//bisa menggunakan simbol atau | saat pendeklarasian type datanya


