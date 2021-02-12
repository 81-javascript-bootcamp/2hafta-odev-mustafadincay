//1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

/*
1. çözüm yolu. Değişken atamasında fonksiyonu çağırmak. Primitive type reference type olarak düşünülebilir. Bir fonksiyonu olduğu gibi değişkene atamak başka, fonksiyonu çağırıp sonucunu değişkene atamak bambaşka bir şeydir.

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

var myCarDetails = car.displayDetails();
myCarDetails();
*/

// 2. çözüm call apply ve bind fonkisyonları kullanarak olabilir. Daha profesyonel bir yol ve tercih edilmesi gereken bir yoldur. bind kullanılacak ise bağlandığı an çağırılmalıdır. Çünkü bind fonksiyonu otomatik olarak çağırılmaz.

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

var myCarDetails = car.displayDetails;
//myCarDetails.call(car);
//myCarDetails.apply(car);
myCarDetails.bind(car)();
//*******************************************************************/

/*

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

*/

function isValidName(name) {
  // type string olmalı ve boş olmamalı
  if (typeof name === "string" && name !== "") {
    //parametre olarak gelen değer boşluğa göre parçalara ayrılır ve temp değişkenine atanır
    const temp = name.split(" ");
    //temp değişkenine gelen parçalanmış değer ya da değerler "every" metedo çağırılarak bir testten geçirilirler. Bu test, değerin 2 veya daha büyük olma koşuludur. Bu testi geçen değerler true geçemeyenler ise false olarak geri dönerler
    return temp.every((arr) => arr.length >= 2);
  } else {
    return false;
  }
}
console.log(isValidName("mustafa dincay")); //true
console.log(isValidName("mustafa dincay mu")); //true
console.log(isValidName("mustafa dincay m")); //false
console.log(isValidName("hello world")); //true
console.log(isValidName("hello w orld")); //false
console.log(isValidName("mustafa d")); //false
console.log(isValidName("")); //false
console.log(isValidName("true")); //true
console.log(isValidName("false")); //true
console.log(isValidName(NaN)); //false
console.log(isValidName(true)); //false
console.log(isValidName(0)); //false
console.log(isValidName(1)); //false
console.log(isValidName({})); //false

/*********************************************************************


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

*/

// 1. soru ile aynı mantıkla bind, call, apply metodları ile yapılabilir.

const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}
const genre = "dystopian";
const year = 1932;
//const myArr = ["dystopian", 1932];
//summary.apply(book, myArr);
//summary.apply(book, [genre, year]);
//summary.call(book, genre, year);
summary.bind(book)(genre, year);
