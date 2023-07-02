const age = 19;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

// Multiple statements

// const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashbaord'), '/dashboard')
//   : (alert('Access Denied'), '/login');
// console.log(redirect);

const auth = true;

auth ? console.log('Welcome to the dasboard') : null;

auth ?? console.log('Welcome to the dashboard');
