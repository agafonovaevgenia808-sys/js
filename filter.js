const number = [1,2,46,27,6];
const numbers = number.filter(a =>{
  return a % 2 === 0;
})
console.log(numbers);

const word = ['волосы','озон','картоха','мир'];
const words = word.filter(b =>{
  return b.length <= 4;
})
console.log(words);

const age = [18 , 3 , 87 , 17 , 23 , 13];
const old = age.filter( c =>{
  return c >= 18;
})
console.log(old);


const name = ['ваня','маша','алиса','петя','афгустина'];
const newName = name.filter(d =>{
  return d == 'a';
})
console.log(newName);

const temp = [ 18,0,-50,100,-1,1,-2];
const temps = temp.filter(f =>{
  return f > 0;
})
console.log(temps);
