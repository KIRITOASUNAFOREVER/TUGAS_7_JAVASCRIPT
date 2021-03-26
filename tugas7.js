let tinggiBadan = [20,40,60,80,100,120,140,160,180,200,240];
//perulangan biasa
console.log("perulangan biasa");
for (var i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i]);
}
//perulangan for of
console.log("perulangan for of");
for(let tampung of tinggiBadan){
  console.log(tampung);
}

// Perbedaan Perulangan Biasa dan Perulangan for of
  // a) variabel biasa
     //nilai variabel tinggiBadan tetap menmapilkan nilai tinggiBadan
 // b) variabel for of
    //nilai variabel tinggiBadan akan di alaihkan ke varibel tampung baru ditampilkan
