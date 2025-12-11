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

const  product = ['Мука' , 'Одежда' , 'Молоко' , 'Хлеб'];
const result = (product) => {
  const bread = product.indexOf('Хлеб ')
if (bread !==  -1) {
  product.splice(bread , 4);
  console.log('удален');
} else {
  console.log('не удален');
  product.push('Хлеб')
return product;
}  
};                                
console.log( result (product));

//Задание 6

const line = 'Ананас ,  Банан  , Киви';
const array = line.split('Ананас , Банан , Киви');
console.log(array);

//задание 7 

const arr = ['Ананас' , 'Банан'  , 'Киви'];
console.log(arr.join('Ананас , Банан  , Киви'));


const num = '1 , 2 , 3';
const  num2 = num.split('1 , 2 , 3');
console.log(num2);
