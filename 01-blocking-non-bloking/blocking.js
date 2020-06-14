let { getUserSync } = require('./users/data');

console.log('Init');

let user1 = getUserSync(1);
console.log('User 1:::',user1);

let user2 = getUserSync(2);
console.log('User 2:::',user2);

console.log('hello world!');