let { getUserAsync } = require('./users/data');

console.log('Init');

getUserAsync(1, function(user1) {
  console.log(user1);
});

getUserAsync(2, function(user2) {
  console.log(user2);
});

console.log('hello world!');