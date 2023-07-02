console.log();

//prettier-ignore
const getCelsius = f => ((f - 32) * 5) / 9

console.log(`The temperature is ${Math.round(getCelsius(3))} \xB0C`);

const minMax = (...numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});
console.log(minMax(55, 32, 43, 54, 65, 76, 87, 98, 109));

((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);
