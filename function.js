
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
