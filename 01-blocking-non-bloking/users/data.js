function getUserSync(id) {
  const startPoint = new Date().getTime();
  while(new Date().getTime() - startPoint <= 3000) {
    // waiting
  }
  return {
    id,
    name: `User ${id}`
  };
}

function getUserAsync(id, callback) {
  let user = {
    id,
    name: `User ${id}`
  };
  setTimeout(() => callback(user), 3000);
}

module.exports = {
  getUserSync,
  getUserAsync
};
