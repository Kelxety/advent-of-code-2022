const lines = (await Deno.readTextFile('./input.txt'))
  .split('\n').map(e => e.split(',')
    .map(e => e.split('-').map(e => parseInt(e))));

let total = 0;

for (let i = 0; i < lines.length; i++) {
  const numberArr = lines[i];
  const left = Array(numberArr[0][1] - numberArr[0][0] + 1).fill(0).map((_, i) => i + numberArr[0][0]);
  const right = Array(numberArr[1][1] - numberArr[1][0] + 1).fill(0).map((_, i) => i + numberArr[1][0]);

  if (right.some(e => left.includes(e)) || left.some(e => right.includes(e))) {
    total++
  }
}

console.log(total);


