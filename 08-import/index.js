const { multiply } = require('./multiply');

let param = process.argv[2]
let base = param.split('=')[1];

console.log(base);

multiply(base)
  .then(response => console.log(response))
  .catch(error => console.log(error));