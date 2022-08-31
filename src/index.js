// External libraries from node_modules
// example of sintax to import external libraries
import $ from 'jquery';

// Internal Dependencies
import { greet } from './greet.js';
// imported by export { function } from './path/to/file.js';
import fullGreet from './greet.js';
// imported by export default function() {}

const name = 'renan';

console.log(greet(name));
console.log(fullGreet('jose', 'maria'));
console.log(fullGreet(name, 'maria'));


// External libraries example of usage
$(document).ready(function() {
  console.log('jQuery just checked that the DOM is ready!');
})





/////////////////////////////////////////////////////////////////////////////////////////////////////////
// technical interview answers

// chanllenge 1
// export function filterTypes(values) {
//   const result = {
//       number: [],
//       string: [],
//       object: [],
//       others: []
//   }

//   // Your code here
//   values.filter((v) => {
//     if (typeof v === 'number') {
//       return result.number.push(v);
//     }
//     else if(typeof v === 'string') {
//       return result.string.push(v);
//     }
//     else if(typeof v === 'object') {
//       return result.object.push(v);
//     } else {
//       return result.others.push(v);
//     }
// })
//   return result;
// }

// filterTypes([1, 2, '3', {}, [], false, '1', '2', 3, null, undefined]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// challenge 2

// export function mergeArrays(array1, array2) {
//   const map = new Map();
//   const arr3 = [...array1, ...array2];

//   for(const item of arr3) {
//     if(!map.has(item.Id)) {
//       map.set(item.Id, item);
//     } else {
//       map.set(item.Id, {
//         ...map.get(item.Id),
//         ...item,
//       });
//     }
//   }

//   const arr4 = [...map.values()];
//   return arr4;


// }

// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// const result = mergeArrays(arr1, arr2);
// console.log(result)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////





// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// export function mergeArrays(array1, array2, prop) {
//   // add your implementation here
//  let result = array1.filter(function(item1) {
//    return !array2.find(function(item2) {
//      return item1[prop] === item2[prop];
//     });
//     console.log(result)
//  });
//  console.log(result.concat(array2));
// }
// const newArray = mergeArrays(arr1, arr2, "id")
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// export function mergeArrays(array1, array2) {
//   // add your implementation here
//   let el = {};
//   for (let i = array1.length - 1; i >= 0; -- i)
//     el[array1[i]] = array1[i];
//   for (let i = array2.length - 1; i >= 0; -- i)
//     el[array2[i]] = array2[i];
//   let result = []
//   for (let e in el) {
//     if (el.hasOwnProperty(e))
//     result.push(el[e]);
//   }

//   return result;

// }

// const arrayOne = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arrayTwo = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// const result = mergeArrays(arrayOne, arrayTwo);
// console.log(result);

// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
//////////////////////////////////////////////////////////////////////////////////////////////////

// ATUAL TENTATIVA /////////////////////////////////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//   // add your implementation here
//   const arr3 = [...new Set([...array1, ...array2])];
//   arr3.forEach


//   // const result = array1.map((item, i) => Object.assign({}, item, array2[i]));
//   // return result
// }
// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
// mergeArrays(arr1, arr2);
// const result = mergeArrays(arr1, arr2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// consegui coletar o id:'a2' da forma que precisa, porem so ele////////////////////////
// export function mergeArrays(array1, array2) {
//   let answer = [];
//   for(let i = 0; i < array1.length; i++) {
//     answer.push({
//       ...array1[i],
//       ...(array2.find((itmInner) => console.log(itmInner.id) === array1[i].id))
//     })
//     return answer[1];
//     // aqui eu consigo atraves da variavel answer[1], selecionar o objeto exatamente da forma que eu quero
//     // preciso juntar esse objeto que esta salvo em answer, com os outros objetos de id diferentes
//   }

// }
// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
// const result = mergeArrays(arr1, arr2);
////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export function mergeArrays(array1, array2) {
//   let answer = [];
//   for (let i = 0; i < array1.length; i++) {
//     answer.push({
//       ...array1[i],
//       ...array2[0],
//     });
//     // console.log(array1[0], answer[1], array2[1])
//   }
//   console.log(answer);

// }
// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
// const result = mergeArrays(arr1, arr2);

////////////////////////////////////////////////////////////////////////////////////////////////////////



// export function mergeArrays(array1, array2) {
//   // add your implementation here
//   const allIndex = [...new Set([...array1, ...array2])];
//   return allIndex;

//   const result = array1.map((item, i) => Object.assign({}, item, array2[i]));
//   return result
// }
// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
// console.log(mergeArrays(arr1, arr2));
// // const result = mergeArrays(arr1, arr2);
// // console.log(result.Cost)
///////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//   const arr3 = {...array1, ...array2};

//   // console.log(arr3);


// }
// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];
// const test = {...arr1, ...arr2};
// console.log(test)
// const result = mergeArrays(arr1, arr2);
// // console.log(result);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//  const arr3 = array1.map(t1 => ({...t1, ...array2.find(t2 => t2.id === t1.id)}))
//   return arr3

// }


// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// const result = mergeArrays(arr1, arr2);
// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//   // add your implementation here
//   const sumArrays = array1.concat(array2);
//   const arrayById = [...new Map(sumArrays.map(item => [item.Id, item])).values()];


//   return arrayById;



//   // uniqueArr.forEach((item, itemIndex) => {
//   //   console.log(uniqueArr)
//   // })
//   // console.log(newArr)
// }


// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// const result = mergeArrays(arr1, arr2);
// console.log(result)




/////////////////////////////////////////////////////////////////////////////


// export function mergeArrays(array1, array2) {
//   // const arr3 = [...array1, ...array2];
//   // return arr3
//   const temp = []


//   array1.forEach(x => {
//     array2.forEach(y => {
//       if (x.id === y.id) {
//         temp.push({ ...x, ...y })
//       }
//     })
//   })

//   return temp
// }


//  const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
//  const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

//  const result = mergeArrays(arr1, arr2);
//  console.log(result)


////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//   // const arr3 = [...array1, ...array2];
//   // return arr3
//   let arr3 = array1.map((item, i) => Object.assign({}, item, array2[i]));
//   return arr3
// }


//  const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
//  const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

//  const result = mergeArrays(arr1, arr2);
//  console.log(result)

//////////////////////////////////////////////////////////////////////////////////////
// export function mergeArrays(array1, array2) {
//   const arr = [...array1, ...array2];

//   let set = new Set();
//   let unionArray = arr.filter(item => {
//     if (!set.has(item.Id)) {
//       set.add(item.Id);
//       return set;
//     }
//     return false;
//   }, set);
//   return unionArray;
// }


//  const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
//  const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

//  const result = mergeArrays(arr1, arr2);
//  console.log(result)


 ////////////////////////////////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2) {
//   const filterArray2 = array2.filter(x => !array1.some(y => x.Id === y.Id));
//   const mergedUsers = [...array1, ...filterArray2];
//   return mergedUsers
// }


//  const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
//  const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

//  const result = mergeArrays(arr1, arr2);
//  console.log(result)

//////////////////////////////////////////////////////////////////////////

// export function mergeArrays(array1, array2, prop) {
//   const result = array1.concat(array2)
//   const distinct = [...new Set(result.map(item => item))]
//   return distinct

// }


//  const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
//  const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

//  const result = mergeArrays(arr1, arr2);
//  console.log(result)

///////////////////////////////////////////////////////////////////////////
