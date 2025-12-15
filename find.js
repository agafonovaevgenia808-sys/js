const numbers = [1,23,2,67,3];
const number = numbers.find(el => el > 10);
console.log(number);

const names = ['ваня','лена','алиса'];
const name1 = names.find(el => el === 'лена');
console.log(name1);

const colors = ['фиолетовый','розовый','серый','красный'];
const color = colors.find(el => el === el.length[5]);
console.log(color);

const numbers1 = [1,123,72,167,13];
const number1 = numbers1.find(el => el < 100);
console.log(number1);

const username = ['operator','job','admin'];
const users = username.filter(el => el === 'admin');
console.log(username[2]);

