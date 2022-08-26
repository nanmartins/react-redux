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
