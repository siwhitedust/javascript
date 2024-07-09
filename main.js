// ini buat prompt
// let username;

// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }
// prompt end


// type conversion

// let x = "jeruk"
// let y = "jeruk"
// let z = "jeruk"

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// let age = window.prompt("what is your age");
// age = Number(age)

// console.log(age, typeof age);

// type conversion end


// counter
// const kurangBtn = document.getElementById("kurangBtn")
// const resetBtn = document.getElementById("resetBtn")
// const tambahBtn = document.getElementById("tambahBtn")
// const countLabel = document.getElementById("countLabel")
// let count = 0;

// tambahBtn.onclick = function () {
//     count++;
//     countLabel.textContent = count;
// }

// kurangBtn.onclick = function () {
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function () {
//     count = 0;
//     countLabel.textContent = count;
// }
// counter end

// random number
// const myButton = document.getElementById('myButton');
// const myLabel = document.getElementById('myLabel');
// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function () {
//     randomNum = Math.floor(Math.random() * max) + min;
//     myLabel.textContent = randomNum
// }
// random number end

// if else

// const mytext = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function () {
//     age = mytext.value;
//     age = Number(age);
//     if (age >= 18) {
//         resultElement.textContent = `kamu boleh ke situs ini`
//     }
//     else {
//         resultElement.textContent = `kamu tidak boleh ke situs ini`
//     }
// }

// if else end

// chackbox
// const myCheckbox = document.getElementById("myCheckbox");
// const myGopay = document.getElementById("myGopay");
// const myDana = document.getElementById("myDana");
// const submitBtn = document.getElementById("submitBtn");
// const untukEwallet = document.getElementById("untukEwallet");
// const untukBawah = document.getElementById("untukBawah");

// submitBtn.onclick = function () {
//     if (myCheckbox.checked) {
//         untukEwallet.textContent = "kamu membayar dengan metode e-wallet"
//     }
//     else {
//         untukEwallet.textContent = "kamu tidak membayar dengan e-wallet"
//     }
//     if (myGopay.checked) {
//         untukBawah.textContent = "kamu membayar dengan gopay"
//     }
//     else if (myDana.checked) {
//         untukBawah.textContent = "kamu membayar dengan dana"
//     }
//     else {
//         untukBawah.textContent = "kamu belum memilih metode pembayaran"
//     }
// }
// checkbox end

// ternary operator
// let age = 30;
// let umurBudi = age >= 25 ? "kamu sudah cukup umur untuk masuk ke situs ini" : "kamu belum cukup umur untuk masuk ke situs ini";
// console.log(umurBudi)

// switch (bisa sebagai pengganti else if)

// let day = 4;
// switch (day) {
//     case 1:
//         console.log("it is monday")
//         break;
//     case 2:
//         console.log("it is tuesday")
//         break;
//     case 3:
//         console.log("it is wednesday")
//         break;
//     case 4:
//         console.log("it is thursday")
//         break;
//     case 5:
//         console.log("it is friday")
//         break;
//     case 6:
//         console.log("it is saturday")
//         break;
//     case 7:
//         console.log("it is sunday")
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }

// let testScore = 70;
// let letterGrade;

// switch (true) {
//     case testScore >= 90:
//         letterGrade = "A"
//         break;
//     case testScore >= 80:
//         letterGrade = "B"
//         break;
//     case testScore >= 70:
//         letterGrade = "C"
//         break;
//      default:
//      letterGrade = "F"
//      break;
// }

// console.log(letterGrade)
// switch end

// string slicing
// let fullName = "white dust";

// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6, 10)

// yconsole.log(`m firstname is ${firstName}`);
// console.log(`my lastname is ${lastName}`);
// console.log(`so my name is ${fullName}`)


// string method (untuk manipulasi string)
// "charat" untuk mencari tulisan berada di index ke berapa
// "index of" untuk mencari tulisan dengan nomor index (opsional "last index of" bs d pke kalo ad 2 huruf yang sama)
// "length" bs d pke untuk tau ad berapa huruf dalam 1 kata
// "trim" untuk cut bagian kosong dalam 1 kata
// "to upper case" untuk membuat semua jadi huruf besar
// "to lower case" untuk membuat semua jadi huruf kecil
// "repeat" untuk mengulang kata
// "start with" untuk mengidentifikasi sebuah objek di awal kata (hasil biasanya boolean)
// "ends with" kebalikan dari start with (di akhir kata)
// "includes" mengidentifikasi sebuah objek dalam sebuah kata
// "replace all" untuk mengubah sebuah objek menjadi obejek lain (contoh : -, "" (biasanya untuk nomor/angka))
// "pad start" untuk push sebuah objek tambahan di awal sesuai dengan kuantitas yang kita inginkan (contoh ada 5 angka dan kita ingin memasukkan agar menjadi 15 angka)
// "pad end" untuk menambahkan objek di akhir objek


// string slicing
// let email = "whitedust@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"))
// console.log(username);
// console.log(extension);
// string slicing end


// chaining
// let username = window.prompt();

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

// console.log(username);
// chaining end


//logical operator
// && (dan)
// || (atau)
// ! (tidak)
// = assignment operator
// == comparison (data type tidak termasuk)
// === comarison (data type termasuk)
// != tidak termasuk (data type tidak termasuk)
// !== tidak termasuk (data type termasuk)
// logical operator end

// loop
// let username = "";

// while (username === "") {
//     username = window.prompt(`enter your name`);
// }
// console.log(`Hello ${username}`)

// let login = false;
// let username;
// let password;

// while (!login) {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if (username === "myUsername" && password === "myPassword") {
//         login = true;
//         console.log("you are logged in");
//     }
//     else {
//         console.log("invalid! Please try again");
//     }
// }
// loop end


// for loop
// for (let i = 1; i <= 20; i++) {
//     if (i == 13) {
//         continue;
//     }
//     else {
//         console.log(i)
//     }
// }


// random number guess
// const miniNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - miniNum + 1)) + miniNum;

// let attempt = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = window.prompt(`guess a number between ${miniNum} - ${maxNum}`)
//     guess = Number(guess);

//     if (isNaN(guess)) {
//         window.alert("please enter a valid number")
//     }
//     else if (guess < miniNum || guess > maxNum) {
//         window.alert("please enter a valid number")
//     }
//     else {
//         attempt++
//         if (guess < answer) {
//             window.alert("too low try again")

//         }
//         else if (guess > answer) {
//             window.alert("too hight try again")
//         }
//         else {
//             window.alert(`correct! The answer is ${answer}. it took you ${attempt} attempt`)
//             running = false;
//         }
//     }
// }


// function
// function add(x, y) {
//     return x + y;
// }

// function subtract() {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }

// function divide(x, y) {
//     return x / y;
// }
// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//     if (email.includes("@")) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isValidEmail("hai.com"))

// spread operator (untuk memisahkan objek)
// let fruits = ["apel", "jeruk", "pisang"];
// let sayur = ["kentang", "celery"];


// let foods = [...fruits, ...sayur];

// console.log(foods);


// rest parameters

// function combineStrings(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Budi", "Santoso");

// console.log(fullName)

// random password

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+=-";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if (length <= 0) {
//         return `(password length must at least 1)`
//     }
//     if (allowedChars.length === 0) {
//         return `(at least 1 set of character needs to be selected)`
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];

//     }

//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

// console.log(`generated password: ${password}`)


// callback
// function hello(callback) {
//     console.log("hello")
//     callback();
// }

// function wait() {
//     console.log("wait")
// }

// function bye() {
//     console.log("bye")
// }

// hello(wait);


// for each

// let fruits = ["apple", "banana", "orange"];

// fruits.forEach(capital);
// fruits.forEach(display);


// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function capital(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element) {
//     console.log(element);
// }


// mapping
// const students = ["Budi", "anto", "Sandi"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower)

// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }


// filter

// const age = [12, 13, 16, 17, 20];
// const adult = age.filter(isAdult);
// const children = age.filter(isChildren);
// console.log(children)

// function isAdult(element) {
//     return element >= 18;
// }

// function isChildren(element) {
//     return element < 18;
// }


// reduce

// const nilai = [70, 80, 90, 100];
// const nilaiTertinggi = nilai.reduce(rendah);
// const nilaiTerendah = nilai.reduce(rendah);

// console.log(nilaiTerendah)

// function tinggi(accumulator, element) {
//     return Math.max(accumulator, element);
// }

// function rendah(accumulator, element) {
//     return Math.min(accumulator, element);
// }


// function expression

// const nilai = [70, 80, 90, 100];
// const nilaiTertinggi = nilai.reduce(function (accumulator, element) {
//     return Math.max(accumulator, element)
// })

// const nilaiTerendah = nilai.reduce(function (accumulator, element) {
//     return Math.min(accumulator, element)
// })

// console.log(nilaiTerendah);


// arrow function
// const hello = (name) => console.log(`Hello ${name}`);
// hello("bro");
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);


// this
// const person1 = {
//     name: "Budi",
//     favFood: "burger",
//     sayHello: function () { console.log(`hi i am ${this.name}`) }
// }

// person1.sayHello();


// constructor
// function Car(merek, tahun, warna) {
//     this.merek = merek,
//         this.tahun = tahun,
//         this.warna = warna
// }

// const mobil1 = new Car("Lambo", "2020", "merah");
// console.log(mobil1.merek);
// console.log(mobil1.tahun);
// console.log(mobil1.warna);


// promise
function jalanSore() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kamu jalan sore")
        }, 1000);
    })
}

function buangSampah() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kamu buang sampah")
        }, 2000);
    })
}

function bersihinDapur() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kamu bersihin dapur")
        }, 3000);
    })
}

jalanSore().then(value => { console.log(value); return jalanSore() })
    .then(value => { console.log(value); return buangSampah() })
    .then(value => { console.log(value); });


