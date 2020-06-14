const fs = require('fs');

let multiply = async(base) => {

  if (!Number(base)) {
    throw new Error(`${base} is not a number`);
  }

  let data = '';

  for (let index = 1; index <= 10; index++) {
    data += `${base} + ${index} = ${base * index}\n`;
  }

  fs.writeFile(`tables/table-${base}.txt`, data, (error) => {
    if (error) {
      throw error;
    } else {
      return 'The file has been saved!';
    }
  });

}

module.exports = {
  multiply
}
