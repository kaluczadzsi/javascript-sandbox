console.log(10 > 20 && 30 > 15);

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 0 && 30;
a = 10 && NaN && '' && 0 && 30;

console.log(a);

const post = ['Post One', 'Post Two'];
post.length > 0 && console.log(post[0]);

// || - Will return the first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 1;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 1;
console.log(c);
