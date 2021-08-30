/*
1.2.2 
Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

Пример:

console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }

Решение https://coderoad.ru/37039091/Javascript-%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5

const lettersCount = (str) => {

  const letter = str.toLowerCase().split('').reduce(function (sum, el) {
    sum[el] = (sum[el] || 0) + 1;
    console.log(sum)
    return (sum);
  }, {});
return(letter)
  

  
 
}
  lettersCount('aBsCl')

  */



/*1.2.5
  Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

Функция принимает два аргумента:

exam — оценка за экзамен, число от 0 до 100; projects — количество проектов, число от 0 и выше. Функция возвращает: число (итоговую оценку).

Есть четыре возможных итоговых оценки:

100, если оценка за экзамен выше 90 или есть больше 10 проектов
90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае
Вот как должна работать ваша функция:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0*/
/*
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10)
  { return (100) }
   
  else if (exam > 75 && projects >= 5)
  { return (90) }
  else if (exam > 50 && projects >= 2)
   {return (75)} 
  else
    {return(0)}
}*/

/*1.2.6 (Можно упростить)
fizzbuzz
Напишите функцию, которая принимает число.
Если число кратно 3, функция должна возвращать строку «Fizz».
Если кратно 5, функция должна возвращать строку «Buzz».
Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.*/

/*
function fizzbuzz(number) {
  let a = number % 3
  let b = number % 5
  console.log(a, b)
  
  if (a == 0 && b == 0) {
    return ('FizzBuzz')
  } else if (a == 0 && b !== 0) {
    return ('Fizz')
  } else if (a !== 0 && b == 0) {
    return ('Buzz')
  } else {
    return (number)
  }
}
fizzbuzz(1)*/

/*1.2.7
Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки) и возвращает результат соответстующей операции.

Первые 2 аргумента это положительные целые числа

Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

Примеры использования:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
В случает если оператор некорректен, функция должна возвращать NaN*/

/* Решение
const arithmetic = (a, b, operator) => {
  switch (operator) {
    case 'add':
      return (a + b);
      break;
    case 'subtract':
      return (a - b);
      break;
    case 'multiply':
      return (a * b);
      break;
    case 'divide':
      return (a / b);
      break;
    default:
      return (NaN);
}
  
};
*/
/*1.2.9 https://ru.stackoverflow.com/questions/890778/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0-%D0%BD%D0%B0-%D1%81%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D1%81%D0%BA%D0%BE%D0%B1%D0%BE%D0%BA
Are brackets balanced
Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.*/


/*Решение
const areBracketsBalanced = (str) => {
  let prev = '';
  for (let replaced = str; replaced != prev; prev = replaced, replaced = replaced.replace('()', ''));
  return prev == '';
}


areBracketsBalanced('(())')
*/

/*1.2.10
Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.

findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
findAllIdx([1,1], 0) // []
*/
/*Решение
function findAllIdx(arr, value) {
 let arrIndex=[]
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === value) {
      arrIndex.push (i)
      
    }
  
  }
   console.log(arrIndex)  
}
findAllIdx([5, null, undefined], undefined)*/
/*1.2.13
replaceItems
Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

replaceItemsClear([1,2,3,4,2], 2, 'a'); //  [1,'a',3,4,'a']
const arr = [1,2,3,4,2];
replaceItemsMutate(arr, 2, 'a');
console.log(arr); // [1,'a',3,4,'a']*/
/*Решение
function replaceItemsClear(arr, item, replaceItem) {
  let newArr=[]
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === item) {
      newArr.push(replaceItem)
    } else {
      newArr.push(arr[i])
    }
  }
  return(newArr)
}
function replaceItemsMutate(arr, item, replaceItem) {
  arr.forEach(function(el,index) {
    if (el == item) {
      console.log(replaceItem)
      arr[index] = replaceItem
    }
    
  })
  return(arr)
}
replaceItemsClear([1, 2, 3, 4, 2], 2, 'a')
replaceItemsMutate([1, 2, 3, 4, 2], 2, 'a')
*/
/*1.2.15
moveToStart
Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.

Примеры:

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 10)
); // [1, 2, 3, 4, 5]*/
/*Решение
const moveToStart = (arr, n) => {
  
  if (arr.length <= n) {
    newArr=arr.slice(0, arr.length)
  } else {
    newArr=[].concat(arr.slice(arr.length-n, arr.length ), arr.slice(0,arr.length-n))

  }
  console.log(newArr)
}
moveToStart([1,2,3,4,5,6],4)*/

/*1.2.16
Has Arrays
Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

Пример:

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); 
// true

const data2 = [];
console.log(hasArrays(data2)); 
// false
*/
/*Решение
const hasArrays = (arr) => {
for (var el in arr) {
     if(arr[el] instanceof Array)
       return true;
   }
   return false;
};*/

/*1.2.17
Parity
Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".

Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];*/


/* Решение
const getNumbersByParity = (data, parity) => {
  let newArr = data.filter(e => parity === 'even' ? e % 2 === 0 : e % 2 !== 0)
  return newArr
 };
*/
/*1.3.3
sequenceSum
Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
Подсказки

Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN Сумма чисел последовательности, в которой begin === end, равна begin (или end)

// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию sequenceSum
*/
/* Решение
function sequenceSum(begin, end) {
    if (begin > end) {
    return NaN
    
  } else if (begin == end) {
    return(begin)
    }
  return begin + sequenceSum(begin+1, end);       
         }


console.log(sequenceSum(1,8))
*/
/*1.3.4
getStringCount
Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
}); // 3

getStringCount
(['1', '2', ['3']]) // 3
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
*/

/*Решение
function getStringCount(object) {
  if (typeof object == 'string') return 1;

  if (!object) return 0;

  return Object.values(object).reduce((acc, cur) => acc + getStringCount(cur), 0);
}

console.log(getStringCount({
  first: '1',
  second: '',
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
}))
*/

/* 1.3.5
OptionalChaining
Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает undefined.

Пример:

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

optionalChaining(obj, ["a", "c", "d"]) // undefined
optionalChaining(obj, ["b", "d", "a"]) // undefined*/


/*//Решение
function optionalChaining(obj, chain) {
  return getProp(obj, 0);
 
  function getProp(o, index) {
    const key = chain[index];
    const value = o[key];
 
    if (typeof value === 'undefined') return undefined;
 
    const nextIndex = index + 1;
    if (nextIndex < chain.length) return getProp(value, nextIndex);
 
    return value;
  }
}

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
console.log(optionalChaining(obj, ["a", "b", "c", "d"])) // Привет
*/




/*1.3.7
Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

partition(array, callback) => [trueArray, falseArray]
Во время выполнения функция должна вызвать callback для каждого элемента массива array.

Сигнатура функции callback

callback(element) => boolean
element - Элемент массива на котором была вызвана функция callback

Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

Приводимые к true
{} => true
1 => true
...
совокупность таких значений называется truthy
Приводимые к false
undefined => false
"" => false
0 => false
...
совокупность таких значений называется falsey 
Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

Функция не должна менять изначальный массив

Примеры использования
Попроще

const numbers = [1,2,3,4,5,6];

partition(numbers, (element) => element > 3);
=> [ 
    [4, 5, 6], // trueArray 
    [1, 2, 3]  // falseArray
];
const numbers = [0, 1, 2, {}, false, "", "0"];

partition(numbers, (element) => element);
=> [ 
    [1, 2, {}, "0"], // trueArray 
    [0, false, ""]  // falseArray
];
Посложнее

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
partition(users, (element) => element.active );
=> [
  [  
      { 'user': 'fred',    'age': 40, 'active': true }
  ],
  [  
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': false }
  ] 
]
 */

/*Решение
function partition(array, callback) {
  let trueArray = [];
  let falseArray = [];
  
  if (typeof callback === 'function') {
    array.forEach(element => {
      callback(element) ? trueArray.push(element) : falseArray.push(element)
    });
    return([trueArray, falseArray])
  } else {
    array.forEach(element => {
      element ? trueArray.push(element) : falseArray.push(element)
    })
    return([trueArray, falseArray])
  }
}

const numbers = [1,2,3,4,5,6];

partition(numbers, []);*/

/*1.3.10
Once
Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию, которая вызывает функцию-аргумент, но только единожды. Повторный вызов функции-результата once не должен давать никакого эффекта.

const f = () => console.log('hi!');
const onceF = once(f);
onceF(); // hi!
onceF(); // nothing
  //code here

*/

/*Решение
const once = fn => {
  let fun = fn();
    return () => fun;
};

*/
const once = fn => {
  let i = 0
  function a() {
     console.log(i)
    if (i < 1) {
   console.log(i)
        i++
    console.log(i)
    console.log(fn)
       
     }
  }
  return a
}
    
 
  
 
  

let hello = () => {
  console.log('Hello World')
}
once(hello)
once(hello)