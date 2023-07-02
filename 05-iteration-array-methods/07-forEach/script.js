const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((el,index,array) => console.log(`el: ${el}, index: ${index}, array: ${array}`));

// function logSocial(el) {
//   console.log(el);
// }

// socials.forEach(logSocial);

const socialObjs = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
