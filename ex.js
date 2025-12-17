//const book = {
  //title: 'document',
  //pages: 1234
//};

//const car = {
 //brand: 'gucci',
  //year: 18
//}//;
///console.log(book.title);

//const user = {
  //username: 'Ваня',
  //surname:'Козлов',
  //age: 17
//};
//console.log(user);

//user.age = 27;
///console.log(user);

//const object = {
 // name1: 'Ваня',
  ///age:13, 
  //boolean: true,
  //massiv:[1 ,2 ,3 ,4],
 // object2: {
   // name2: 'Даша',
  //age1:139, 
  //}
//}
//console.log(object);


//const user3 = {
  //username3: 'Ваня',
  ////surname3:'Козлов',
  //age3: 17
//};
//console.log(user.age3);
////console.log(user['Ваня']);


//const word = {
  //number: 899927,
  //job: 'Сантехник'
//};

//onsole.log('Сантехник');


//const word1 = {
  //number1: 899927,
 //job1: 'Сантехник'
//};

//console.log(word1.names);

//const passport1 = {
  //usName: 'Anna'
  //sarTisc() {
   // console.log (this.usName);
  //}
//};
//passport1.sarTisc();//

//const users1 = {
  //names21:'Иван',
  //newName() {
   // console.log(this.names21);
  //}
//};
//users1.newName();

//const user42 = {
  //name: 'Апельсин'
//};
//user42.greet = function() {
  ///console.log('Привет' + this.name);
//};
//user.greet();

const user = {
  name:'фантик',
  age: 45
}
console.log(Object.keys(user));
console.log(Object.keys(user).length);

const number = {
  a:12 , 
  c:12,
  b:293
}

const sum = number.reduce((el ,ac) =>{
return el =+ ac;
},0)
console.log(sum);



const numbers = { a:12 , c:12 , b:293 };
const copy = { ...numbers };

console.log(copy);