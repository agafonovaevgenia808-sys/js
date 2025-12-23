const numbers = [ 1 ,2 ,3 ,4];
const [...rest]=numbers;
console.log(rest);


const number = [ 1 ,2 ,3 ,4];
const [one , ...others] = number;
console.log(one , others);

const strok = [ '1' ,'2' ,'3' ,'4'];
const [...rests ]=strok;
console.log(rests);


const names = ['Ваня' , 'Леша' , 'Валя' , 'Женя'];
const [...name1]=names;
console.log(name1.length);