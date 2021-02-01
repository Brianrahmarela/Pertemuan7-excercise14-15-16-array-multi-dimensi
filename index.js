//EXCERCISE 14 - MULTIDIMENSI
// Buatlah sebuah menu sidebar menggunakan konsep multidimensional array. 1 baris array terpisahkan oleh sebuah underline. Banyaknya link berasal dari data pada array.
// Lihat tampilan visual untuk excercise ini pada slide selanjutnya.

//ambil id elemen yg ingin ditampilkan
let ambil = document.getElementById("sideBar");

//buat array navnya
let arrMulti = [['Home'],['Profile'],['Setting'],['Logout']];
// console.log(arrMulti);

//looping tiap index array 
arrMulti.forEach((nav) => {
  //tampilkan dgn tempel variable beserta value indexnya(nav)
  ambil.innerHTML += '<a href="">'+ nav + '</a>' + '<hr>';
});

//EXCERCISE 15 - BUKAN MULTIDIMENSI
//Buat sebuah function untuk capital dengan menggunakan .map dan kembalikan dengan nilai string yang sudah capslock 
// ex. capitalize('kucing') // => KUCING'
// ex. capitalize('hello world') // => "HELLO WORLD"

let hurufKecil = ["kucing", "hello world"];
//ambil id elemen yg ingin ditampilkan
let ambilno2 = document.getElementById("no2");

//looping array dgn index
hurufKecil.map(hrfkecilubah => {
  // console.log(hrfkecilubah);
  let hasil = hrfkecilubah.toUpperCase();
  //tampilkan dgn tempel variable beserta value indexnya(nav)
  ambilno2.innerHTML += hasil + ", ";
  console.log(hasil);
});

//EXCERCISE 16 - BUKAN MULTIDIMENSI (SELANG SELING KATA BESAR KECIL)
let strKata = "Halo semua, belajar coding di skilvul yuk";
//ambil id elemen yg ingin ditampilkan
let ambilno3 = document.getElementById("no3");

//pisah per kata
let pisahKata = strKata.split(" ");
// console.log(pisahKata);

pisahKata.forEach((kata, index) => {
  if (index % 2 === 0) {
      hurufBesar = kata.toUpperCase()
      console.log(hurufBesar);
      ambilno3.innerHTML += `<i> ${hurufBesar } </i>`;
      
    } else {
      hurufKecil = kata.toLowerCase()
      console.log(hurufKecil);
      ambilno3.innerHTML += `${hurufKecil }`;
    }
})


