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
const obj = [
  {
    name: "Ali",
    gol: 6,
  },
  {
    name: "Salim",
    gol: 7,
  },
  {
    name: "Xurshid",
    gol: 10,
  },
];
function footbal(a) {
  let sum = 0
  let re=null
  a.forEach((value) => {
    if (value.gol > sum) {
      sum = value.gol;
      re = value;
    }
  });
  return sum
}
let res=footbal(obj)
console.log(res);
