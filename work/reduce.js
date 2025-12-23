const numbers = [46 ,89 , 1 , 67 , 90 ];
const sum = numbers.reduce(( acc , el ) =>{
return acc += el ;
}, 0);
console.log(sum);

const number = [46 ,89 , 1 , 67 , 90 ];
const sum2 = number.reduce(( acc , el ) =>{
if (acc === 0) {
  return el;
}

return acc *= el;
}, 0);
console.log(sum2);

const strok = ['46' ,'89' , '1' , '67' , '90' ];
const stroks = strok.reduce ((acc , el) =>{
return acc += `${el} ` ;
}, '');
console.log(stroks);




const num = [46 ,89 , 1 , 67 , 90 ];
const sum3 = num.reduce(( acc , el) =>{
if (el % 2 === 0){
  return acc + 1;
}

return acc;
}, 0 );
console.log(sum3);

