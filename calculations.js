import * as mathematics from './math.js'
import cube from './math.js'

console.log('\npow');
console.log(mathematics.pow(3, 0));     //1
console.log(mathematics.pow(3, 1));     //3
console.log(mathematics.pow(3, 4));     //81
console.log(mathematics.pow(3, -5));    //0.00411522633...

console.log('\nsum');
console.log(mathematics.sum(3, -5));    //-2
console.log(mathematics.sum(0, 0));     //0
console.log(mathematics.sum(-1, -2));   //-3
console.log(mathematics.sum(3, 5));     //8

console.log('\nsub');
console.log(mathematics.sub(3, 5));     //-2
console.log(mathematics.sub(5, 3));     //2
console.log(mathematics.sub(-3, 5));    //-8
console.log(mathematics.sub(3, -5));    //8

console.log('\nsqrt');
console.log(mathematics.sqrt(5));   //2.2360679775
console.log(mathematics.sqrt(-3));  //Error
console.log(mathematics.sqrt(0));   //Error

console.log('\nmulti');
console.log(mathematics.multi(3, -5));  //-15
console.log(mathematics.multi(0, -5));  //0
console.log(mathematics.multi(3, 1));   //3

console.log('\ncube');
console.log(cube(3));   //27
console.log(cube(-3));  //-27
console.log(cube(0));   //0
console.log(cube(1));   //1