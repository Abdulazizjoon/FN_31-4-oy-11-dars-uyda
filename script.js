//1-masala
// let obj = [
//     { name: 'Sardor', age: 26 ,kurs:1 },
//     { name: 'Ali', age: 20 ,kurs:2 },
//     { name: 'Ahlidin', age: 25 ,kurs:3 } ,
//     { name: 'Alisher', age: 30 ,kurs: 4} ,
//     { name: 'Malik', age: 18 ,kurs: 2}
// ];
// function student(a) {
//     for (const key of a) {
//         key.age+=1
//     }
//     console.log(a);

// }
// student(obj)

//2-masala
// let obj = [
//   { name: "Nyu York", population: 500 },
//   { name: "Tokyo", population: 200 },
//   { name: "London", population: 350 },
//   { name: "Toshkent", population: 600 },
// ];
// function student(a) {
//   let sum = a[0].population;
//   for (const value of a) {
//     if (sum < value.population) {
//       sum = value.population;
//     }
//   }
//   return sum;
// }
// let res = student(obj);
// console.log(res);

//3-masala
// let obj = [
//   { name: "olma", price: 51 },
//   { name: "behi", price: 10 },
//   { name: "nok", price: 20 },
//   { name: "anor", price: 1000 },
// ];
// function student(a) {
//   return a.filter(function(value) {
//     return value.price>50
//   })
// }

// let res =student(obj);
// console.log(res);

//4-masala
// const books = [
//   {
//     name: "kitob1",
//     year: 2000,
//   },
//   {
//     name: "kitob2",
//     year: 2010,
//   },
//   {
//     name: "kitob3",
//     year: 2022,
//   },
//   {
//     name: "kitob4",
//     year: 1900,
//   },
// ];

// function student(a) {
//   let res = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (res < a[i].year) {
//       res = a[i];
//     }
//   }
//   console.log(res);
//   return res;
// }
// let res = student(books);

//5-masala
// const obj = [
//   {
//     name: "Ali",
//     year: 6,
//   },
//   {
//     name: "Salim",
//     year: 7,
//   },
//   {
//     name: "Xurshid",
//     year: 4,
//   },
// ];
// function student(a) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].year>5) {
//       res[`${i+1}-talaba`] = a[i]
//     }
//   }
//   return res;
// }
//  let res=student(obj);
// console.log(res);

//6-masala
// const obj = [
//   {
//     name: "Ali",
//     gol: 6,
//   },
//   {
//     name: "Salim",
//     gol: 7,
//   },
//   {
//     name: "Xurshid",
//     gol: 10,
//   },
// ];
// function footbal(a) {
//   let sum = 0
//   let re=null
//   a.forEach((value) => {
//     if (value.gol > sum) {
//       sum = value.gol;
//       re = value;
//     }
//   });
//   return sum
// }
// let res=footbal(obj)
// console.log(res);

//7-masala
// const menu = [
//   {
//     name: "pitza",
//     price: 60,
//   },
//   {
//     name: "kabop",
//     price: 20,
//   },
//   {
//     name: "kofe",
//     price: 10,
//   },
// ];
// function price(a) {
//   let res = {};
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].price>5) {
//       res=a[i]
//     }
//   }
//   return res;
// }
//  let res=price(menu);
// console.log(res);

//8-masala
// const obj = [
//   {
//     name: "Ali",
//     age: 60,
//     jins: "erkak",
//   },
//   {
//     name: "Bobur",
//     age: 20,
//     jins: "erkak",
//   },
//   {
//     name: "Alisa",
//     age: 15,
//     jins: "qizbola",
//   },
// ];
// function aa(a) {
//   let res = []
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].jins === "erkak") {
//       res.push(a[i])
//     }
//   }
//   return res;
// }
// let res = aa(obj);
// console.log(res);

//9-masala
// const obj = [
//   {
//     name: "Ali",
//     price: 60,
//   },
//   {
//     name: "Salim",
//     price: 70,
//   },
//   {
//     name: "Xurshid",
//     price: 80,
//   },
// ];
// function student(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].price>60) {
//       console.log(a[i]);
//     }
//   }
// }
//  let res=student(obj);

//10-masala
// let obj = [
//   {
//     name: "Islom",
//     price: 5500000,
//   },
//   {
//     name: "Shahzod",
//     price: 750000,
//   },
//   {
//     name: "Dilshod",
//     price: 300000,
//   },
//   {
//     name: "Maksuda",
//     price: 120000,
//   },
//   {
//     name: "Aziz",
//     price: 200000,
//   },
// ];

// function aa(a) {
//   return a.filter(function (value) {
//     return value.price > 1000000
//   });
// }

// let res = aa(obj);
// console.log(res);

//11-masala
// const cars = [
//   {
//     brand: "Toyota",
//     price: 10000,
//   },
//   {
//     brand: "Ford",
//     price: 21000,
//   },
//   {
//     brand: "Chevrolet",
//     price: 22000,
//   },
// ];

// function aa(a) {
//   let sum=[]
//   a.forEach(value => {
//     if (value.price>20000) {
//       sum.push(value)
//     }
//   });
//   return sum
// }
// let res=aa(cars)
// console.log(res);

//12-masala
// const book = [
//   { title: "Alisher Navoiy", year: 1999 },
//   { title: "O'tkan kunlar", year: 1900 },
//   { title: "Chinor daraxti", year: 2001 },
// ];

// function aa(a) {
//   return a.filter((value) => {
//     return value.year > 2000;
//   });
// }

// let res = aa(book);
// console.log(res);

//13-masala
// let masage = [
//   { masage: "salom", time: "2024-11-18T07:40:16.937Z", from: "john" },
//   { masage: "salom", time: "2024-11-07T07:40:16.937Z", from: "doe" },
//   { masage: "salom", time: "2024-11-10T07:40:16.937Z", from: "dave" },
// ];
// function lastSevenDays(arg) {
//   let today = new Date();
//   return arg.filter(function (value) {
//     let msgtime = new Date(value.time);
//     return Math.abs(today.getDate() - msgtime.getDate()) <= 7;
//   });
// }
// console.log(lastSevenDays(masage));

//14-misol
// let tours = [
//   {
//     name: "Paris Safari",
//     kun: 2
//   },
//   {
//     name: "New York City safari",
//     kun: 7
//   },
//   {
//     name: "Rome Discovery",
//     kun: 6
//   },
// ];

// function test(a) {
//     let sum=a.filter(function(value) {
//         return value.kun>3
//     })
//     return sum
// }
// let res=test(tours)
// console.log(res);

//15-misol
// let movies = [
//   {
//     name: "kino1",
//     janr: "Drama",
//   },
//   {
//     name: "kino2",
//     janr: "Crime",
//   },
//   {
//     name: "kino3",
//     janr: "Crime",
//   },
// ];

// function typ(a) {
//     let sum=a.filter(function(value) {
//         return value.janr == "Drama";
//     })
//     return sum
// }
// let res=typ(movies)
// console.log(res);

//16-misol
// let supermarkets = [
//   {
//     name: "SuperMarket1",
//     price: 1500,
//   },
//   {
//     name: "SuperMarket2",
//     price: 2000,
//   },
//   {
//     name: "SuperMarket3",
//     price: 1200,
//   },
// ];

// function max(a) {
//     let sum = a[0].price
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].price>sum) {
//             sum=a[i]
//         }
//     }
//     return sum
// }
// let res = max(supermarkets)
// console.log(res);

//17-misol
// let teacher = [
//   {
//     name: "ustoz1",
//     tajriba: 10,
//   },
//   {
//     name: "ustoz2",
//     tajriba: 7,
//   },
//   {
//     name: "ustoz3",
//     tajriba: 12,
//   },
// ];
// function maxTaj(a) {
//     let sum=a[0].tajriba
//     a.forEach(value => {
//         if (value.tajriba > sum) {
//              sum=value.tajriba
//         }
//     });
//     return sum
// }
// let res = maxTaj(teacher)
// console.log(res);

//18-masala
// let planets = [
//   {
//     name: "merkury",
//     bor: 99,
//   },
//   {
//     name: "venus",
//     bor: 222,
//   },
//   {
//     name: "yer",
//     bor: 360,
//   },
// ];
// function plent(a) {
//     let sum = a[0].bor;
//     for (let i = 0; i < a.length; i++) {
//         if (sum < a[i].bor) {
//             sum = a[i].bor;
//         }
//     }
//     return sum;
// }
// let res = plent(planets);
// console.log(res);

//19-misol
// let cars = [
//     {
//         model: 'Toyota',
//         vaqt:5
//     },
//     {
//         model: 'mers',
//         vaqt: 3
//     },
//     {
//         model: 'Ford',
//         vaqt: 2
//     }
// ]
// function car(a) {
//     let res = []
//     for (let i = 0; i < a.length; i++) {
//             if (a[i].vaqt>=3 ) {
//                 res.push(a[i])
//             }
//     }
//     return res
// }
// let res = car(cars)
// console.log(res);

//20-misol

// let phone = [
//   {
//     model: "iPhone 15 Pro",
//     tarmoq: 5,
//   },
//   {
//     model: "Samsung Galaxy S23",
//     tarmoq: 4,
//   },
//   {
//     model: "samsung Galaxy S24",
//     tarmoq: 5,
//   },
//   {
//     model: "note 10 pro",
//     tarmoq: 4,
//   },
//   {
//     model: "Xiaomi 13 Pro",
//     tarmoq: 5,
//   },
// ];
// function phon(a) {
//   let res = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].tarmoq >= 5) {
//       res.push(a[i]);
//     }
//   }
//   return res;
// }
// let res = phon(phone);
// console.log(res);
