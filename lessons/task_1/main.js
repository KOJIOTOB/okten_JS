// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let q = 'hello';
console.log(q);

let w = 'owu';
console.log(w);

let e = 'com';
console.log(e);

let t = 'ua';
console.log(t);

let y = 1;
console.log(y);

let u = 10;
console.log(u);

let i = -999;
console.log(i);

let o = 123;
console.log(o);

let r = 3.14;
console.log(r);

let p = 2.7;
console.log(p);

let x = 16;
console.log(x);

let s = true;
console.log(s);

let d = false;
console.log(s);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Виктор';
let middleName = 'Сергеевич';
let lastName = 'Колотов';

//let person = firstName + ' ' + middleName + ' ' + lastName;

let person = `${firstName} ${middleName} ${lastName}`;


console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a,a);

let b = '100';
console.log(typeof b,b);

let c = true;
console.log(typeof c,c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Ваше имя?');
let  middle = prompt('Ваше отчество?');
let  last = prompt('Ваша фамилия?');

//alert(`Привет,${name} ${middle} ${last}!!!`);
console.log(`${name} ${middle} ${last}`);
console.log('Привет' + '!!! ' + name + ' ' + middle + ' ' + last);