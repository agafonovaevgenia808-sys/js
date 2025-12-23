const array = [3 ,1 , 5, 2];
array.sort((a ,b) =>{
  if (a > b){
    return 1;
  }if (a < b){
return -1;
  }
});
console.log(array);

const words = ['banana' , 'apple' , 'cherry'];
words.sort((c , d) =>{
  if (c === 'a') {
    return c;
  }
  return 1
})
console.log(words);