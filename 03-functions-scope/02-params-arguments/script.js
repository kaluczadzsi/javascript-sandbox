// Default Params
function registerUser(user = 'Bot') {
  //   if (!user) {
  //     user = 'Bot';
  //   }

  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Brad',
};

console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Sarah' }));

// Arrays as params
function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(getRandom([10, 15, 47, 119, 56]));
