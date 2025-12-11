
//Задание 1

function checkNumber(num){
if (num > 0){
console.log('Положительно');
}else if (num < 0 ) {
console.log('Отрицательно');
}else{
  console.log('Ноль!');
}
}

checkNumber(-10);
checkNumber(0);
checkNumber(10);

//Задание 2

function canEnter(age){
  if (age < 18){
console.log('Вход запрещен!');
  }else {
    console.log('Добро пожаловать ');
  }
}

canEnter(30);

//Задание 3

function getMax(a , b){
  if( a > b){
    console.log('a - больше b')
  } else if( a < b){
    console.log('a - меньше b ')
  } else{
    console.log('a и b равны')
  }
}

getMax( 2 , 3);
getMax( 3 , 3);
getMax( 3 , 2);


//Задание 4

function calculate(num1, num2 , operator){
switch (operator){
  case '+':
  return num1 + num2;
  case '-':
   return num1 - num2;
   case '/':
    return  num1 / num2;
    case '*':
      return num1 * num2;
}
}
console.log( calculate (10 , 5 , '+'));
console.log( calculate (10 , 5 , '-'));
console.log( calculate (10 , 5 , '/'));
console.log( calculate (10 , 5 , '*'));


//Задаие 5 

function gradeToText(grade){
  switch(grade){
       case 1:
    return 'Плохо';
       case 2:
    return 'Плохо';
       case 3:
    return 'Удовлетворительно ';
       case 4:
    return 'Хорошо ';
       case 5:
    return 'Отлично';
  }
}
console.log(gradeToText (1));
console.log(gradeToText (2));
console.log(gradeToText (3));
console.log(gradeToText (4));
console.log(gradeToText (5));


//СТРЕЛОЧНЫЕ ФУНКЦИИ

//Задание 1


const isEven = (num) =>{
return  num % 2 === 0 ? 'четное' : 'нечетное';
}
console.log(isEven (4));

//Задание 2

const temparate = (temp) =>{
 return temp > 25 ? 'Жарко' : 'Прохладно';
}
console.log(temparate(26));

//Задание 3

const price = (res) =>{
  return res > 1000 ? res * 0.1 : res;
}
console.log(price(1234));

//Задание 4

const seasonByMonth = (month) =>{
switch(month){
case 1:
case 2:
case 12:
return 'Зима'

case 3:
case 4:
case 5:
return 'Весна'
case 6:
case 7:
case 8:
return 'Лето'
case 9:
case 10:
case 11:
  return 'Осень'
}
}
console.log(seasonByMonth (6));


//Задание 5

const accessByRole = (role) => {
  switch(role){
    case 'admin':
    return 'Полный доступ';
    case 'user':
    return 'Ограниченый доступ'
    case '':
    return 'Нет доступа'
  }
}
console.log(accessByRole('admin'));