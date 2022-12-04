
const lines = (await Deno.readTextFile('./input.txt')).split('\n').map(d => d.split(',').map(d => d.split('-').map(d => parseInt(d))));

let sum = 0;

for (let i = 0; i < lines.length; i++) {
  const el = lines[i];
  const arr1 = Array(el[0][1] - el[0][0] + 1).fill(0).map((_, i) => i + el[0][0]);
  const arr2 = Array(el[1][1] - el[1][0] + 1).fill(0).map((_, i) => i + el[1][0]);

  if (arr2.every(d => arr1.includes(d)) || arr1.every(d => arr2.includes(d))) sum++;
}

console.log(sum);