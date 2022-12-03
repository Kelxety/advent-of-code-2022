export const x = "";
const input = await Deno.readTextFile("./input.txt")

const bracket = input.split(/\r?\n/)
const array: number[] = [];
let tempLargest = 0;

bracket.map((line) => {
  if (line !== "") {
    tempLargest += parseInt(line);
  } else {
    array.push(tempLargest);
    tempLargest = 0;
  }
})
array.sort((a, b) => a - b)
array.reverse()
console.log(array)
const number = array[0] + array[1] + array[2];

console.log(number)