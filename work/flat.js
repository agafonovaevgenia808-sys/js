const number = [1, [2, 3], 4];
const numbers = number.flat(1);
console.log(numbers);

const num =  [1, [2, [3, 4]]];
const num2 = num.flat(3);
console.log(num2);

const num3 =  [1, [2, [3, [4]]]];
const num4 = num3.flat(3);
console.log(num4);

const words =  ['a', ['b', 'c'], ['d', ['e']]];
const word = words.flat(2);
console.log(word);

const a = [10, [20, 30], [40,[50]]];
const b = a.flat(2);
console.log(b);
const c = b.reduce((acc , el) =>{
if(acc === 0){
  return el;
}
 return acc += el;
},0);
console.log(c)