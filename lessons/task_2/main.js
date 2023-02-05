// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

//let array = [213, 'Strings', false, 122, 'Maria', 2000, true, [111,222,333], 'Ukraine', 9999];
//console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[7][0]);
// console.log(array[7][1]);
// console.log(array[7][2]);
// console.log(array[8]);
// console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book_1 = {
//     title: 'Romancing the Beat: Story Structure for Romance Novels',
//     pageCount: 98 + ' ' + 'pages',
//     genre: 'Writing,' + ' Romance'
// };
//
// console.log(book_1);
//
// let book_2 = {
//     title: 'Save the Cat! Writes a Novel',
//     pageCount: 320 + ' ' + 'pages',
//     genre: 'Nonfiction'
// };
//
// console.log(book_2);
//
// let book_3 = {
//     title: 'The Road to React',
//     pageCount: 234 + ' ' + 'pages',
//     genre: 'Programming'
// };
//
// console.log(book_3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let new_book1 = {
//     title: 'Змушу бути моєю',
//     pageCount: 151 + ' ' + 'cтр',
//     genre: 'Фантастична історія кохання',
//     authors: [
//         {
//         name: 'Мілана Кім',
//         age: 29
//         },
//         {
//          name: 'Марiя Новицька',
//          age: 20 + ' ' + 'poкiв'
//         }
//     ]
// }
//
// console.log(new_book1);

// let new_book2 = {
//     title: 'The Adventures of Sherlock Holmes',
//     pageCount: 317 + ' ' + 'pages',
//     genre: 'Classic, ' + 'Literature, ' + 'Murder, ' + 'Mystery',
//     authors: [
//         {
//             name: 'Mr. Toller',
//             age: 44
//         },
//         {
//             name: 'Headon Hill',
//             age: 47
//         },
//         {
//             name: 'Frank D. McSherry',
//             age: 42
//         }
//     ]
// }
//
// console.log(new_book2);

// let new_book3 = {
//     title: 'Jurassic Park',
//     pageCount: 399 + ' ' + 'pages',
//     genre: 'Dichotomy',
//     authors: [
//         {
//             name: 'Alan Grant',
//             age: 56
//         },
//         {
//             name: 'John Hammond',
//             age: 52
//         }
//     ]
// };
//
// console.log(new_book3);
// console.log(new_book3.title);
// console.log(new_book3.authors[0]);
// console.log(new_book3.authors[1].name);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users = [
//     {
//         name: 'Ivan',
//         username: 'vano',
//         password: 'qwerty00000'
//     },
//     {
//         name: 'Viktor',
//         username: 'rama',
//         password: 'qwerty11111'
//     },
//     {
//         name: 'Adrii',
//         username: 'andre',
//         password: 'qwerty22222'
//     },
//     {
//         name: 'Viktoria',
//         username: 'vika',
//         password: 'qwerty33333'
//     },
//     {
//         name: 'Artur',
//         username: 'bizon',
//         password: 'qwerty44444'
//     },
//     {
//         name: 'Sveta',
//         username: 'lampa',
//         password: 'qwerty55555'
//     },
//     {
//         name: 'Egor',
//         username: 'faraon',
//         password: 'qwerty66666'
//     },
//     {
//         name: 'Lilia',
//         username: 'Blumen',
//         password: 'qwerty77777'
//     },
//     {
//         name: 'Aleks',
//         username: 'shura',
//         password: 'qwerty88888'
//     },
//     {
//         name: 'Angelina',
//         username: 'like_butter',
//         password: 'qwerty99999'
//     }
//
// ];
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
// let x = 69;

// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let msg = +prompt('Впишите число 1, 0, -3');
// if (msg === 0) {
//     console.log('Верно')
// } else {
//     console.log('Не верно')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter time from 0 to 59');
// if (time >= 0 && time <= 14) {
//     console.log('in the first part of the quarter')
// } else if (time >= 15 && time <= 29) {
//     console.log('in the second part of the quarter')
// } else if (time >= 30 && time <= 44) {
//     console.log('in the third part of the quarter')
// } else if (time >= 45 && time <= 59) {
//     console.log('in the fourth quarter')
// } else {
//     console.log('Retype again!!!')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Напишите число месяца от 1 до 31");
// if (day >= 1 && day <= 9) {
//     console.log('Первая половина месяца!')
// } else if (day >= 10 && day <= 20) {
//     console.log('Вторая половина месяца!')
// } else if ( day >= 21 && day <= 31) {
//     console.log('Третья половина месяца!')
// } else  {
//     console.log("Повторите ввод еще раз");
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let daily_routine = +prompt('Daily Routine');
// switch (daily_routine) {
//     case 1: alert('Monday');
//     break;
//     case 2: alert('Tuesday');
//     break;
//     case 3: alert('Wednesday');
//     break;
//     case 4: alert('Thursday');
//     break;
//     case 5: alert('Friday');
//     break;
//     case 6: alert('Saturday');
//     break;
//     case 7: alert('Sunday');
//     break;
//     default: alert('There is no schedule for the day!!!')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number_A = +prompt('Enter your number');
// let number_B = +prompt('Enter your number again');
// if (number_A > number_B) {
//     alert('First number if bigger')
// } else if (number_A < number_B) {
//     alert('Second number is bigger')
// } else if ( number_A === number_B) {
//     alert('First is the same as second')
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".




