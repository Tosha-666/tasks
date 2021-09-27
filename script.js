/*1.1.4
Урок с кодом
Errors
Обычно вам нужно избегать ошибок, но в этом упражнении вы будете порождать ошибки. Это поможет вам понять, какие типы ошибок возникают в разных ситуациях, и привыкнуть распознавать их в будущем.

Вам нужно реализовать 2 функции. Ваша задача — породить две ошибки внутри специально созданных функций.

reference
Сделайте так, чтобы код внутри функции reference порождал ошибку типа ReferenceError.

Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.

type
Сделайте так, чтобы код внутри функции type порождал ошибку типа TypeError.

Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.

ВАЖНО
Ошибки должны генерироваться внутри функций reference и type.*/
/*Решение
function reference() {
  console.log(a+b)
  }
  
  function type() {
  let notAFunction='1';
  notAFunction(12)
  }
*/
/*
1.1.14
Урок с кодом
Default To
Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию. Если нет, то нужно вернуть само значение (первый аргумент).

Пример:

console.log(defaultTo(1, 10)); // 1;
console.log(defaultTo(undefined, 10)); // 10;*/
/*Решение
const defaultTo = (value, defaultValue) => {
  if (Boolean(value) === false){
     return (defaultValue)
 } else { 
   return (value)
 }
 };
 
*/
/*
1.1.16
Урок с кодом
compareWithPrecision
Напишите функцию, которая сравнивает два числа с определенной погрешностью.

Пример:

compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true*/
/*
Решение
function compareWithPrecision(a, b, precision) {
  let c=precision;
if ((a>=b-c && a<=b+c)){
  return(true)
}else{
  return(false)
  
}

}	*/



/*
1.1.18
Урок с кодом
Capitalize
Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

Пример:

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String*/
/*
Решение
function capitalize(str){
return (str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' '))

}
*/
/*
1.1.19
Урок с кодом
Stop gninnipS My sdroW!
Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

Примеры:

reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
reverseLongWords('This is a test'); // This is a test
reverseLongWords('This is another test'); // This is rehtona test
*/
/*
Решение
const reverseLongWords = (str) => {
  let word = str.split(/\s+/)
    for (let i = 0; i < word.length; i++){
      if (word[i].length >= 5) {
        word[i]=word[i].split("").reverse().join("");
      }
    }
    return(word.join(" "))
  };
*/
/*1.1.21
Урок с кодом
На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом

 

Wrap Paragraph
Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

.

Пример:

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
// <p>text</p>
*/
/*
Решение
function wrapInParagraph(str){
  let phrase = str.split(/\n/)
   for (let i = 0; i < phrase.length; i++){
     phrase[i]=`<p>${phrase[i]}</p>`
   }
   return(phrase.join('\n'))
 }
 */
/*1.2.2 
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

/*
//Решение
function optionalChaining(obj, chain) {
  return getProp(obj, 0);
 
  function getProp(o, index) {
    const key = chain[index];
    console.log(key)
    const value = o[key];
    console.log(value)
 
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
/*
2-ое решение
const once = fn => {
  let a = true
   return function () {
     if (a) {
       a=false
       fn()
           }
       }
 }
  
  const f = () => console.log('hi!');
  const onceF = once(f);
  console.log(onceF())
  console.log(onceF())
  */

  /*
  1.3.11
  Array Filters
  Для этой задачи вам нужно будет ознакомиться с методом массива filter, который принимает функцию-коллбэк для фильтрации массива.
  
  Реализуйте набор готовых к использованию функций для arr.filter:
  
  inRange(a, b) – число находится между a и b (включительно). 
  Если аргумент или элемент массива можно привести к числу,
  то функция должна сначала приводить его к числу, а потом проверять условие. 
  Если a > b, то функция должна возвращать false для всех элементов массива
  
  inArray([...]) – значение находится в данном массиве.
  
  notInArray([...]) – значение не находится в данном массиве.
  Они должны использоваться таким образом:
  
  arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).
  arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
  arr.filter(notInArray([1,2,3])) – выбирает только те элементы,
  которые не совпадают ни с одним из элементов массива
  Пример:
  
  let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];
  
  console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
  console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
  console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
  */
 /*Решение
  const inRange = (a, b) => {
    return function (x) {
            return x >= a && x <= b;
    };
    
    }
    const inArray = arr => {
      return function (x) {
        
        return arr.includes(x);
    };
    }
    const notInArray = arr =>  {
      return function (x) {
     //  if (!arr.includes(x))
        return !arr.includes(x);
    };
    };
    
    let arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, '8', 'some str', true, NaN];
  
    console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
    console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
    console.log(arr.filter(notInArray([1, NaN, true, '8', 212]))); // [undefined, NaN]*/


    /*1.3.13
    createObjectCalculator
Реализуйте функцию createObjectCalculator, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

Объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. 
sum() (суммировать) возвращает сумму сохранённых значений. 
mul() (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в read всегда будут числами.

Пример:

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408*/
/*Решение
const createObjectCalculator = (initialA, initialB) => {
  const calculator = {
    a: initialA,
    b: initialB, 
    sum: function() {
      return this.a + this.b;
    },
  
    mul: function() {
      return this.a * this.b;
    },
  
    read: function(initialA,initialB) {
      this.a = initialA;
      this.b = initialB;
      console.log(this)
      console.log(this.a)
    }
    
  }
  console.log(calculator)
  
  return(calculator)
 
  }
  
const calculator = createObjectCalculator(2, 3);
console.log(calculator)
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
console.log(calculator.read(12, 34))
console.log(calculator.sum())
console.log(calculator);
*/


/*1.4.3
Урок с кодом
Реализуйте функцию getField, которая принимает массив объектов в качестве первого аргумента и ключ объекта в строке в качестве второго. 
Функция должна вернуть новый массив. На месте объекта должно находиться значение поля объекта, находящееся по ключу, переданному в функцию вторым аргументом. 
Массив гарантированно состоит из объектов. Если в данном объекте, нет такого поля, то вместо значения поля должен быть undefined. 
Если массив не передан, то функция должна вернуть пустой массив.

Пример:

const data = [
  {
    name: 'Denis',
    age: 25,
  },
  {
    name: 'Ivan',
  },
  {
    name: 'Ann',
    age: 18,
  },
];

console.log(getField(data, 'age'));
// [25, undefined, 18]*/

/*Решение
const getField = (data, field) => {
  const newArr = data.map((el) => 
    el[field]
    
       )
  return(newArr)
  
};
const data = [
  {
    name: 'Denis',
    age: 25,
  },
  {
    name: 'Ivan',
  },
  {
    name: 'Ann',
    age: 18,
  },
];
getField(data, 'age');
// [25, undefined, 18]
*/
/*1.4.4
Create Usernames
Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username. 
Поле username создается путем конкатенации firstName в нижнем регистре, первой буквы lastName в нижнем регистре и года рождения пользователя, 
который необходимо вычислить из текущей даты и возраста пользователя. 
Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.

Данные всегда будут передаваться в указаном ниже формате.
Возраст представлен в виде целого числа.
Фамилия всегда будет в формате "N.", где N - первая буква фамилии.
Порядок объектов в массиве должен сохраняться.
Порядок полей в объекте не важен.
Пример:

Данные на входе:

const data = [
{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
Данные на выходе:

const processedData = createUsernames(data);
console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];
*/

/*Решение
const createUsernames = users => {
  return users.map(e => ({
    //оператор spread
    ...e,
    
    username: `${e.firstName.toLowerCase()}${e.lastName[0].toLowerCase()}${new Date().getFullYear() - e.age - 1}`
    
}));
};
  
  const data = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
    ];
    
    
    const processedData = createUsernames(data);
    console.log(processedData); // [
    // { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    //  username: 'emilyn1990' },
    // { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    //  username: 'nore2000' }
    // ];
    */
   /*1.4.5
    Урок с кодом
    Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. 
    Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.
    
    Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.
    
    Пример:
    
    const data = [
      {
        type: 'food',
        price: 130,
      },
      {
        type: 'clothes',
        price: 7300,
      },
      {
        type: 'other',
        price: 1400,
      },
    ];
    
    calculatePrice(data); // 8830‬
    */
/*Решение
const calculatePrice = (orders) => {
  if (!Array.isArray(orders)) {
        console.log(0)
  } else {
    const newArr = orders.reduce((acc, el) => {
        console.log(acc)
        return (acc+=el.price)
      },0
      )
    console.log(newArr)
  }
      
};
      

const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];
calculatePrice(data);
*/
/* 1.4.6
Урок с кодом
Дан список информации о людях.

Необходимо вернуть массив, содержащий самого старшего человека в списке. 
Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

Возраст хранится в поле age.

Данные на входе:

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);
Данные на выходе:

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
*/
/*
Решение
const getMostSenior = humans => {
  const newArr = humans.reduce((oldest, human) => {
    return (oldest.age) > human.age ? oldest : human;
  })
    let maxAge = newArr.age
    const allMax = humans.filter(el => el.age == maxAge)
  return(allMax)
};

const data =[
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);
*/
/*
2.1.2
Invert
Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

Пример:



*/

/*Решение
function invert (obj) {
  return Object.entries(obj).reduce((acc, [value,key]) => {
    acc[key] = value;
    return acc;
}, {})
}


invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }

*/

/*
2.1.3
Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. 
В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      }
      d: 'string',
      c: 1,
    }
  }
};

deepEqual(firstObject, secondObject); // true
deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false
*/
//Решение https://question-it.com/questions/37005/krasnorechivoe-uprazhnenie-po-javascript-glubokoe-sravneniehttps://question-it.com/questions/37005/krasnorechivoe-uprazhnenie-po-javascript-glubokoe-sravnenie
/*
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 != "object" ||
  obj2 == null || typeof obj2 != "object") return false;
  
  let keysA = Object.keys(obj1), keysB = Object.keys(obj2);
  console.log(keysA)
  console.log(keysB)
  console.log(keysA.length)
  console.log(keysB.length)
  if (keysA.length != keysB.length) return false;
  
  for (let key of keysA) {
    console.log(key)
      if (!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  
      return true;
  } 
  const firstObject = {"test":{"name":"Misha","order":{"price":20}}};
  const secondObject = {"test":{"order":{"price":20},"name":"Misha"}}


// const firstObject = {
//   a: {
//     b: {
//       c: 1,
//       d: 'string',
//       e: {
//         num: 1
//       }
//     }
//   }
// };

// const secondObject = {
//   a: {
//     b: {
//       e: {
//         num: 1,
//       },
//       d: 'string',
//       c: 1,
//     }
//   }
// };
// const firstObject = {"name":"Misha","order":{"price":20}}
// const secondObject = null 
console.log(deepEqual(firstObject, secondObject))
*/
/*// 2.1.5
Sum
Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму.
Вызов функции без аргументов должен вернуть 0. В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его. 
Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.

Пример использования:

console.log(
    sum(1, 2, 3, 4, 5, 6),
); // 21
console.log(
    sum(-10, 15, 100),
); // 105
console.log(
    sum(),
); // 0
console.log(
    sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)
*/
/*
//Решение
const sum = (...args) => {
  let sum=0
  for (let i = 0; i < args.length; i++){
    arg = Number(args[i])
    console.log(arg)
    if (isNaN(arg)) {
      arg = 0
      console.log(arg)
    } 
      console.log(arg, typeof (arg))
      sum += arg
    }
    return (sum)
};

console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false))*/


/*// 2.1.6
Merge
Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый объект, который должен содержать все поля со всех объектов. 
Если ключи в объектах повторяются, то каждый последующий объект при совпадении ключей должен иметь больший приоритет над предыдущим. 
Порядок полей в результирующем объекте не важен.

Пример:

console.log(
  merge(
    {
      name: 'John',
      age: 22,
    },
    {
      surname: 'Klein',
      age: 20,
      profession: 'student',
    },
    {
      profession: 'frontend developer',
      country: 'USA',
    }
  )
);

// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }
*/
/*//Решение
const merge = (...obj) => {
return Object.assign(...obj)
};


console.log(
  merge(
    {
      name: 'John',
      age: 22,
    },
    {
      surname: 'Klein',
      age: 20,
      profession: 'student',
    },
    {
      profession: 'frontend developer',
      country: 'USA',
    }
  )
);*/

/*// 2.1.8
Languages Statistic
Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу подвести итоги 2019 года по популярности использования языков программирования. На входе функция получает массив отзывов пользователей. Необходимо вернуть объект в формате { languageName: count, anotherLanguageName: anotherCount, ... }, где languageName - название языка в строке, а count - число отзывов, которые оставили программисты, использующие этот язык. При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году. Год отзыва хранится в поле year, язык - в поле language.

Отзыв предоставлен в следующем формате:

{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }
Данные на входе:

const data = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];
const result = getLanguagesStatistic(data);
Данные на выходе:

console.log(result);
// { 
//   C: 1, 
//   JavaScript: 2 
// }
*/
/*//Решение
const getLanguagesStatistic = (feedbacks) => {
        let result = {};
       let counter = 0;
        let counter2 = 0;
        feedbacks.map((i) => {
          let { language, year } = i;
          if (year >= 2019) {
          if (language == "JavaScript") {
              counter++
              result[language] = counter 
              } else if (language == "C")
            {
              counter2++
              result[language] = counter2
              
            };
            
          } 
        });
        return result;
      };  
  
  const data = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
    { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
  ];
  const result = getLanguagesStatistic(data);
console.log(result)
*/

  //2.1.11
  /*getArraysCounts
Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента. 
Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.

Пример:

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map
console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2
*/

/*//Решение

const getArraysCounts = (arr) => {
  let newSet = new Set(arr)
  let newMap = new Map()
  for (item of newSet) {
    if (!newMap.has(item)) {
      newMap.set(item, 1)
    }
      }
  for ([el, val] of newMap) {
    arr.forEach(element => {
      if (el === element && !Number.isNaN(element)) {
        newMap.set(el, val++)

      } else if (Number.isNaN(el)&&Number.isNaN(element)) {
         console.log(element)
        console.log(Number.isNaN(element), element!==element)
        newMap.set(NaN, val++)
      }
    });
  }
  return (newMap)
  
  };
  


  const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }, NaN, NaN, NaN];
console.log(getArraysCounts(data))
const counts = getArraysCounts(data); // экземпляр Map

// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2
*/



 /* //2.1.12

 Unique
Реализуйте функцию unique, которая принимает массив в качестве аргумента и возвращает новый массив, в котором содержатся только уникальные значения из исходного массива. 
Исходный массив не должен изменяться.

Порядок элементов должен сохраняться.

Используйте Set для реализации этой функции.

Пример:

const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1)); // [1, 2, 3, 4]

const obj = { name: 'John' };
const data2 = [obj, obj, obj, { name: 'John' }];
const result = unique(data2);
console.log(result); // [{ name: 'John' }, { name: 'John' }]

console.log(result[0] === obj); // true
console.log(result[1] === obj); // false
*/

//Решение
/*
const unique = (arr) => {
 
  return [...new Set(arr)];
}
  const data1 = [1, 2, 3, 3, 4, 4];
  console.log(unique(data1)); // [1, 2, 3, 4]
  */

  
/*//2.1.14
getDaysBetweenDates
Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time
*/

//Решение
/*

const getDaysBetweenDates = function (start, end) {
  (start == null) ? start = new Date(0) : start = start;
  (end == null) ? end = new Date(0) : end = end;

if (arguments.length < 2) {
  throw new TypeError('TypeError')
  } else {
    const between1= end-start
    const between = Date.parse(end) - Date.parse(start)
  if (!isNaN(between)) {
      if (between >= 0) {
        return (Math.floor(between / 86400000))
      }
      else if (between < 0) {
        if ((Math.ceil(between / 86400000)) == -0) {
          return(0)
        }
        return (Math.ceil(between / 86400000))
      }
  }
   else if (!isNaN(between1)) {
      if (between1 >= 0) {
        return (Math.floor(between1 / 86400000))
      }
      else if (between1 < 0) {
        if ((Math.ceil(between1 / 86400000)) == -0) {
          return(0)
        }
        return (Math.ceil(between1 / 86400000))
        
      }
     }
    else {
      return(NaN)
    }
    }
};


console.log(getDaysBetweenDates('1-1-2020', '1-2-2020'))
// console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)))
// console.log(getDaysBetweenDates(1409796000000, 1409925600000))
// console.log(getDaysBetweenDates(null))
// console.log(getDaysBetweenDates(null, '1971'))
// console.log(getDaysBetweenDates('1-1-2020', null))
// console.log(getDaysBetweenDates('1-1-2020', 'дата'))



// getDaysBetweenDates('1-1-2020', '1-2-2020')
// getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))
// getDaysBetweenDates(1409796000000, 1409925600000)
// getDaysBetweenDates(null)
// getDaysBetweenDates('1-1-2020', 'дата')
*/
/*

2.2.2
IsEmpty
Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false
Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false
*/


//Решение


/*function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
          return(true)
}
return(false)
  console.log((obj.hasOwnProperty()))
  // let a = (Boolean(Object.getPrototypeOf(obj)))
  // return 
  // console.log(a,b)
  // return(((a&&b)==true)?true:false)
  (obj.__proto__)
// return((Object.getPrototypeOf(obj))?false:true)
}(obj.__proto__)
*/

/*
function isEmptyWithProtos(obj) {
  if ((Object.keys(obj).length == 0)) {
    console.log(true)
    if (keys in obj) {
      console.log(true)
    }
    // if (!Object.getPrototypeOf(obj)) {
    //   return (true)
    // }
  } 
return (false) 
   // console.log(Object.getPrototypeOf(obj))
    // if (!Object.getPrototypeOf(obj)) {
    //   return (true)
    // }
   // console.log(obj.constructor)
      // console.log(Object.getPrototypeOf(obj))
}*/
/*
function isEmptyWithProtos(obj) {
  if (Object.keys(obj).length === 0) {
    for (let key in (obj)) {
      console.log(key);
      if (key in (obj)) {
        return(false)
      }
    }
          return (true)
    
  } 
     
    
  
    return (false)
}
// 

  
// const obj = Object.create(null);
// console.log(isEmpty(obj)); // -> true
// console.log(isEmpty({ prop: 'value' })); // -> false
// const testCase = Object.create({});
//  console.log(testCase.__proto__)
// // const checkCaseImmutability = Object.create(testProto);
// console.log(isEmpty(testCase))
//===============================================================================================
const newObj = {
  a: 1,
  b: 2,
  c: 3,
  
}
// class User {
//   constructor() {}
// }
const person = new Object({})
// console.log(person);
const sayHi = function() {
  console.log('Привет');
};
const pers1 = {
  name:1
}
Object.setPrototypeOf(person, pers1)

// console.log(person);



const protoObj = Object.create(null);
const obj = Object.create(protoObj);
console.log(isEmptyWithProtos(person));
console.log(isEmptyWithProtos(obj)); // -> true (пустой объект с пустым прото)
console.log(isEmptyWithProtos({})); // -> false (пустой объект с прототипом со свойствами)
console.log(isEmptyWithProtos(protoObj)) // -> true (пустой объект без прото)
console.log(isEmptyWithProtos(newObj))

// const testCase = Object.create(testProto);
// const checkCaseImmutability = Object.create(testProto);
// console.log(isEmptyWithProtos(testCase))

*/

/*
2.2.4
Урок с кодом
Library
Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится
Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
Необходимо реализовать на прототипе следующие методы работы с книгой:

isAvaliable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, 
возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, 
false если книга итак в библиотеке
changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи

*/
/*
//Решение
function Book(name, author, year) {
     
  this.name = name
  this.author = author
  this.year = year
  this.reader = null
}
Book.prototype.isAvaliable = function() {
  if (this.reader == null) {
          return(true)
        }
return(false)
    }
 Book.prototype.takeBook = function(readerName) {
   if (this.reader === null) {
     this.reader = readerName
     return(true)
   }
   return(false)
  }
Book.prototype.returnBook = function () {
  if (this.reader == null) {
      return(false)
    }
    this.reader = null
     return (true)
  }
  Book.prototype.changeBookName = function (newBookName) {
      this.name = newBookName
      return(true)
  }
  Book.prototype.changeAuthorName = function(newAuthorName) {
        this.author = newAuthorName
        return (true)
      
  }
  Book.prototype.getCurrentReader=function () {
    if (this.reader == null) {
        return(null)
    } else {
      return(this.reader)
      }
    }


console.log(Book.prototype)
*/


/*2.2.6
Урок с кодом
Prototypes Decorator
Необходимо добавить возможность логирования в функцию add класса Addition

Используя прототип класса Addition добавить декоратор к функции add, дающий возможность логировать ее вызов
При этом результат выполнения add должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'

Менять изначальную функцию, класс или созданный объект нельзя.
Код можно писать только в обозначенной зоне.

Пример:
const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19
*/
/*
//Решение
class Addition {
  constructor (num) {
    this.num = num;
  }
  
  add (...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
  }
  // Write you code here
  var add = Addition.prototype.add;

  Addition.prototype.add = function(...nums) {
    console.log('called');
    return add.call(this, ...nums);
  }
    

// add = consLogDecoration(add)
console.log(Addition.prototype.add)

  
  // End of code
  const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19
  */

/*
//2.2.8
  Object Create
В данном задании вам нужно будет реализовать полифл Object.create.

Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, 
переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Ваша функция должна принимать два параметра:

prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]],
 установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, 
 то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

Подсказки:

Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
В JavaScript все является объектом, кроме: null и undefined.
NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.
Пример:

const A = {
  objectName: 'Object A',
  getObjectName: function() {
    return `This is ${this.objectName}!`;
  },
};

const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});

A.getObjectName(); // This is Object A!
B.getObjectName(); // This is Object B!

A.hasOwnProperty('getObjectName'); // true
A.hasOwnProperty('objectName'); // true

B.hasOwnProperty('getObjectName'); // false
B.hasOwnProperty('objectName'); // true
*/

//Решение
/*
Object.create = function (proto, propertiesObject={}) {
  const newObj = {}
  if (propertiesObject) {
    const Obj = Object.defineProperties(newObj, { ...propertiesObject });
    if (proto === undefined) {
      throw TypeError('Object prototype may only be an Object or null');
    
  }
  return (Object.setPrototypeOf(Obj,proto))
  }
  
 
  
}


const A = {
  objectName: 'Object A',
  getObjectName: function() {
    return `This is ${this.objectName}!`;
  },
};

const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});

console.log (B)
*/

/*
//2.2.10

Личный Счет
Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)

Account
new Account(person, 1000);
Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета
Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
Disclamer
Конечно, математику с плавающей точкой для обработки балансов использовать не стоит - будут накапливаться ошибки вычисления. Но в данном упражнении этим можно пренебречь.

*/
/*
//Решение
class Person {
  constructor(firstName, lastName, date) {
         this.firstName = firstName
      this.lastName = lastName
      
      this.date = date
     
    }
    getAge() {
      return (Math.floor((Date.parse('2019-05-23') - Date.parse(this.date))/31556908800));
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

class Account {
  constructor(name, acc){
    this.name = name
    this.acc = acc
    this.accountHistory = []
  }
  static transfer(fromAccount, toAccount, amount) {
    fromAccount.acc -= amount
    let removeObj = {
      timestamp: Date.now(),
      target: 'out',
      amount: amount,
      description: toAccount
    }
    fromAccount.accountHistory.push(removeObj)
    toAccount.acc += amount
    let addObj = {
      timestamp: Date.now(),
      target: 'in',
      amount: amount,
      description: fromAccount
    }
    toAccount.accountHistory.push(addObj)
      }
  addMoney(amount, description) {
    
    this.acc += amount
    let addObj = {
      timestamp: Date.now(),
      target: 'in',
      amount: amount,
      description: description
    }
    this.accountHistory.push(addObj)
    return(description)
  }
  withdrawMoney(amount, description) {
    this.acc -= amount
    let removeObj = {
      timestamp: Date.now(),
      target: 'out',
      amount: amount,
      description: description
    }
    this.accountHistory.push(removeObj)
    return (description)
  }
  getAmount() {
    return(this.acc)
  }
  getAccountHistory() {
    return(this.accountHistory)
  }

}


const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
console.log(alex);
console.log(alex.getAge());
console.log(alex.fullname);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

console.log(alexAccount.addMoney(1000, 'Зарплата'));
console.log(alexAccount);

const amount = alexAccount.getAmount();
console.log(amount);

// console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
// console.log(alexAccount);
// Account.transfer(alexAccount, helenAccount, 100);
// helenAccount.getAmount(); // 500
// alexAccount.getAmount(); // 1700
*/

/*
//2.2.11
Calc
Реализовать класс Calc с методами sub / add / result

В конструкторе можем передать начальное иммутабельное значение (поумолчанию 0), потом методами add и sum прибавлять и вычитать из него.
Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают новый объект класса.
По вызову result() получаем результат вычислений.

Пример использования:

const calc = new Calc();
calc.result(); // 0
calc.add(5).result(); // 0 + 5 = 5
calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

const ten = calc.add(10);
ten.sub(5).result(); // 10 - 5 = 5
ten.result(); // 10
*/
/*
//Решение
class Calc {
  constructor(a=0){
    this.a = a
    
  }
  add(variable) {
    const b =(this.a + variable)
    return new Calc(b);
  }
  sub(variable) {
    const c = (this.a - variable)
    return new Calc(c);
  }
  result() {
    return(this.a)
  }
}

const calc = new Calc();
// console.log(calc.result()); // 0
console.log(calc.add(5).result()); ; // 0 + 5 = 5
console.log(calc.add(3).sub(10).result()); ; // 0 + 3 - 10 = -7
*/



/*
//2.2.12
Транслятор событий
Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
.on(event, callback) - добавить обработчик события

.off(event, callback) - удалить обработчик события

.once(event, callback) - добавить обработчик события, который сработает единожды

.emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
Event Emitter можно перевести как “транслятор” событий.

Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. 
Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. 
Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).

Например:

let input = document.querySelector('input');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

let emitter = new EventEmitter();

emitter.on('event:name-changed', data => {
  h1.innerHTML = `New value is: ${data.name}`;
});
*/
/*
подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
*/
/*
button.addEventListener('click', () => {
  emitter.emit('event:name-changed', {name: input.value});
  
});
*/
/*
добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
*/

class EventEmitter {
  constructor() {
  }

  on(eventName, callback) {
      // code here
  }

  off(eventName, callback) {
      // code here
  }

  once(eventName, callback) {
      // code here
  }

  emit(eventName, args) {
      // code here
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, args) {
      // code here
  }
}