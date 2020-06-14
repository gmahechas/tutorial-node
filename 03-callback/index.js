let getUserById = (id, callback) => {

  let user = {
    id,
    name: 'TavoGus'
  }

  if(id === 20) {
    callback(`The user with id ${id} doesn't exist in the database`);
  } else {
    callback(null, user);
  }

}

getUserById(20, (error, user) => {
  if(error) {
    return console.log(error);
  }
  console.log(`Database user is ${JSON.stringify(user)}`)
});