//retorna el mismo array con los elementos invertidos
let array1 = ['one', 'two', 'three'];
let reversed = array1.reverse();
console.log(array1);

let newArray = ['one', 'two', 'three'];
console.log(newArray);

//PUSH
/*
let numbers = ['one', 'two', 'three'];
let reverse = (array) => {
let newArray = [];
let size = array.length;
let lastPosition = size -1;

for (let i = lastPosition; i>=0; i--) {
  newArray.push(array[i]);
}

return newArray;
}

console.log(reverse(numbers));

console.log(numbers);
*/


//POP Y SPLICE
/*
let vowels = ['a', 'e', 'i', 'o', 'u']; //u, o, i, e, a
let reverse = (array) => {

  for (let i = 0; i<array.lenght; i++) {
    let item = array.pop();
    array.splice(i,0,item)
  }
  return array
}
console.log(reverse(vowels));
console.log(vowels);

*/

//SEARCH

let search = (array, element) => {
  for (let i = 0; i < array.length; i++) {

    if (array[i] === element) {

      return i

    }

  }

}
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7));
