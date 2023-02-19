// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthString_1 = 'hello world';
// console.log(lengthString_1.length);
//
// let lengthString_2 = 'lorem ipsum';
// console.log(lengthString_2.length);
//
// let lengthString_3 = 'javascript is cool';
// console.log(lengthString_3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let upToString_1 = 'hello world';
// console.log(upToString_1.toUpperCase());
//
// let upToString_2 = 'lorem ipsum';
// console.log(upToString_2.toUpperCase());
//
// let upToString_3 = 'javascript is cool';
// console.log(upToString_3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lowToString_1 = 'HELLO WORLD';
// console.log(lowToString_1.toLowerCase());
//
// let lowToString_2 = 'LOREM IPSUM';
// console.log(lowToString_2.toLowerCase());
//
// let lowToString_3 = 'JAVASCRIPT IS COOL';
// console.log(lowToString_3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirtyString = ' dirty string   ';
// let cleanString = dirtyString.trim();
// console.log(cleanString);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// const stringToArray = (item) => {
//     return item.split(' ');
// }
//
// let str = 'Ревуть воли як ясла повні';
// console.log(stringToArray(str));
//
// let str_1 = 'Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів';
// console.log(stringToArray(str_1));



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arrayNumbers = [10,8,-7,55,987,-1011,0,1050,0];
// let arrayString = arrayNumbers.map(response => response.toString());
//
// console.log(arrayString);

//console.log(arrayString = arrayNumbers.map(response => response.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (nums ,direction) => {
//     if (direction === 'ascending') {
//         return nums.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         return nums.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums(nums,'ascending')) // [3,11,21])
// console.log(sortNums(nums,'descending')) // [21,11,3])

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

// let sortCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortCourses);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterCourses = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// })
//
// console.log(filterCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let mapNewType = coursesAndDurationArray.map((value, index) => {
//     return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
// });
//
// console.log(mapNewType);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardDeck = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];

// - знайти піковий туз

// let aceOfSpades = cardDeck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(aceOfSpades);

// - всі шістки

// let allSixes = cardDeck.filter(value => value.value === '6');
// console.log(allSixes);

// - всі червоні карти

// let allRedCards = cardDeck.filter(value => value.color === 'red');
// console.log(allRedCards);

// - всі буби

// let allDiamond = cardDeck.filter(value => value.cardSuit === 'diamond');
// console.log(allDiamond);

// - всі трефи від 9 та більше

// let allClubs = cardDeck.filter(value => value.cardSuit === 'clubs' && value.value > '9');
// console.log(allClubs);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

//console.log(coursesArray.filter(value => value.modules === 'sass'))

// let findModules = coursesArray.filter(function (courses) {
//     return courses.monthDuration === 4;
// })
// console.log(findModules)

// --написати пошук всіх об'єктів, в який в modules є docker

//
// let findModulesDocker = coursesArray.find(value => value.modules === 'docker' )
//  console.log(findModulesDocker)

