import capitalize from "./capitalize.js";
// imported by export default function() {}

const greet = (firstName) => {
  return `Hello ${firstName}`;
}

export default function fullGreet(firstName, lastName) {
  return `Hello ${capitalize(firstName)} ${capitalize(lastName)}`;
}

export { greet };


// Export default
// Two ways to import/export files

// EXPORT DEFAULT
// export default function () {
//   //in this way, the export code is at same line the function
// }
// import function from './path/to/file.js';
//  //to import, remove the brackets


// IMPLICIT EXPORT
// function () {
//   // in this case, we need to implicit the export in the file
// }
// export { function };
// import { function } from './path/to/file.js';
//  // in this case, to import you need use brackets
