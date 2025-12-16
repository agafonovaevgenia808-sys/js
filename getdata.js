const numbers = [ 1, 2, 3];
const [ one , two , three] = numbers
console.log(one , two);

const fruits = ['Ананас', 'Банан', 'Киви'];
const [ananas , banana , kiwi] = fruits;
console.log(ananas);

const number = [10 ,20];
const [x , y] = number;
console.log(`x: ${x} - y: ${y}`);

const userName = ['Витя','Аня','Паша','Арина'];
const [name1 , name2 , name3 , name4] = userName;
console.log(name1 , name2);

const colors = ['фиолетовый','розовый','серый','красный'];
const [fiolet , pink , gray , red] = colors;
console.log(gray);

const num = [ 1, 2, 3, 4, 5];
const [ one1 , two2 , three3 , four , five] = num;
console.log(one1 , two2);
const maps = num.map((el ,acc) => {
  if (el === 0){
    return acc = three3 , four , five;
  }
  return acc ; 
});

console.log(maps);