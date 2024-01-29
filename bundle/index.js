"use strict";
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
let umurSaya = 22;
console.log({ umurSaya });
// pada contoh ini kita bisa melihat bahwa di typescript sendiri adalah untuk memvalidasi sebuah data ataupun menetapkan type dari data variable
//oh ya sedikit tutor dari dea afrizal jika kita menaruh sebuah data didalam kurung kurawal contoh seperti line 23 makan kita akan mengetahui nama data dari nilai yang ditampilkan
//contoh data string
let namaSaya;
namaSaya = "76";
//jika pada pergantian value type nya tidak sesuai maka dia akan error
//contoh data boolean
const isMarried = false;
console.log({ isMarried });
