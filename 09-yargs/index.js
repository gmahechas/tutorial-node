const argv = require('yargs')
  .command('list', 'Print table in console', {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
  })
  .argv;
const { multiply } = require('./multiply');

console.log(argv.limit);
/* console.log(param); */

multiply(argv.base)
  .then(response => console.log(response))
  .catch(error => console.log(error));