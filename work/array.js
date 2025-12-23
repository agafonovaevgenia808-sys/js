//Задание 1

const fruits = ['Апельсин' , 'Манго' , 'Яблоко'];
fruits.push  ('Мандарин');
console.log(fruits);

//Задание 2

const number = [1 , 2 ,3 ,4];
number.splice(0 ,1)
console.log(number);

//Задание 3

const userName = ['Витя','Аня','Паша','Арина'];
console.log(userName.length);

//задаие 4

const sum = [1 , 2 ,3 ,4 , 5];
console.log( sum[2]);

//Задание 5

const dress = ['кофта' , 'платье' , 'штаны' , 'куртка'];
console.log(dress);
dress[1]='кепка';
console.log(dress);

//Задание люкс

const  products = ['Мука' , 'Одежда' , 'Молоко' , 'Хлеб'];
const result = (product) => {
  const bread = product.indexOf('Хлеб');

  if (bread !== -1) {
    product.splice(bread , 4);
    console.log('удален');
  } else {
    console.log('не удален');
    product.push('Хлеб')
  }  

  return product;
};                                
console.log( result(products));

//Задание 6

const line = 'Ананас, Банан, Киви';
const array = line.split(', ');
console.log(array);

//задание 7 не понимаю как сделать

const arr = ['Ананас', 'Банан', 'Киви'];
console.log(arr.join(''));

//Задание 8 не понимаю как сделать
const num = '1 2 3 4';
const  num2 = num.split(' ');
console.log(num2);

//Задание 9

const numbers = ['1' , '2' , '3'];
const res = numbers.join('-');
console.log(res);


const str = 'кошка|собака|мышь';
const strArr= str.split('|');
console.log(strArr[0]);


const strok = 'машина квартира дом огород';
const words = strok
  .split(' ')
  .reverse()
  .join(' ');

console.log(words);


//задание 1 forEach

const wordNumber = ['1' , '2' , '3' , '4'];
wordNumber.forEach(function(item){
  console.log(item);
})


//
const wordNumbers = ['1' , '2' , '3' , '4'];
wordNumber.forEach(function(items){
  const results = items * 2
  console.log(results);
})

//

const names1 = ['Ваня' , 'Леша' , 'Валя' , 'Женя'];
names1.forEach(names => {
console.log(`Привет ${names}`);
})

//

const price = ['120' , '324' , '34' , '21'];
let forSum = 0;
price.forEach(prices => {
forSum += prices;
})
console.log(`Общая сумма всех цен ${forSum}`);

//

const km = ['1','45', '6' ,'9'];
km.forEach(km => {
  console.log(`Скорость ${km}`);
})

//

const a = ['1' , '2' , '3' , '4'];
const b = a.map(c =>(
  c + 1
));
console.log(b);

const stroka = ['мишка' , ' кожура' ,'Апельсин'];
const news = stroka.map(al => al.length);
console.log(news);



const names = ['Ваня' , 'Леша' , 'Валя' , 'Женя'];
const nexName = names.map(p => {
console.log(`Привет ${p}`);
})


const summa = [46 ,  70 , 258];
const newSum = summa.map(al => al + (al * 0.10));

console.log(summa, newSum);

const d = [true , false , true];
const f = d.map((bool) => (
  bool === true ? 'да' : 'нет'
))

console.log(f);