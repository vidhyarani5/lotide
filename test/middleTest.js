const middle = require('../middle');
const assertEqual= require('../assertEqual');

assertEqual(middle([1, 2, 3]),2);
assertEqual(middle([1, 2, 3, 4, 5,6]), '3,4');
assertEqual(middle([1, 2, 3, 4]), '2,3');