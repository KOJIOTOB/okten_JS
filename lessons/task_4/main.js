// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangularArea(a,b) {
//     let resolve = a * b;
//     return resolve;
// }
// console.log(rectangularArea(10,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function square(r) {
//     let squareSolution = r ** 2;
//     let circleRadius = 3.14 * squareSolution;
//     return circleRadius;
// }
//
// console.log(square(11));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(r, h) {
//     let cylinder = 2 * 3.14 * r * h;
//     return cylinder;
// }
// console.log(areaCylinder(100,100))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['okten',777,true,['march',12345,false],4444,5555,3333, 0o10101];
// function arrNum(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// arrNum(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function dataP (par) {
//     for (let i = 0; i <= 5; i++) {
//         document.write(`<p> ${par}</p>`)
//     }
// }
// dataP('функцію яка створює параграф з текстом');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createli (argument) {
// document.write(`<ul>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
// document.write(`</ul>`)
// }
// createli('функцію яка створює ul з трьома елементами li');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createLi(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//         document.write(`<hr>`)
//     }
//     document.write(`</ul>`)
// }
// createLi('функцію яка створює ul з трьома елементами li',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayAll = ['Okten School', 12345, true, false, ['BMW', 'M550D'],'Apple','007'];
// function arrAll (array) {
//     document.write(`<ul>`)
//     for(let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//         document.write(`<hr>`)
//     }
//     document.write(`</ul>`)
// }
// arrAll(arrayAll);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrayUsers = [
//     { id: 1, name: "Pavel", age: 20 },
//     { id: 2, name: "Alona", age: 22 },
//     { id: 3, name: "Max", age: 25 },
//     { id: 3, name: "Viktoria", age: 22 },
//     { id: 4, name: "Maria", age: 25 },
//     { id: 5, name: "Petro", age: 21 }
// ];
// function dataUser(arrUser) {
//     for (const arrUserElement of arrUser) {
//         document.write(
//             `<div>${arrUserElement.id}.${arrUserElement.name} - ${arrUserElement.age}<hr></div>`
//         );
//     }
// }
// dataUser(arrayUsers);

// - створити функцію яка повертає найменьше число з масиву

// let arrayNum = [25, 85, 23, 65, 11, 54, 66, 76, 26];
// function arrMinNum(arrayNum) {
//     let arrNumber = arrayNum[0];
//     for (const arrNumberElement of arrayNum) {
//         if (arrNumberElement < arrNumber) {
//             arrNumber = arrNumberElement;
//         }
//     }
//     return arrNumber;
// }
// console.log(arrMinNum(arrayNum));
// arrMinNum(arrayNum);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = [1,2,10];
// function sumNumb (sum) {
//     let sumNumb = 0;
//     for (const sumElement of sum) {
//         sumNumb = sumElement + sumNumb;
//     }
//     return sumNumb;
// };
// sumNumb(sum);
// console.log(sumNumb(sum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250