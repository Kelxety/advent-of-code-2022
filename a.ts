export const x = "";
const input = await Deno.readTextFile("./input.txt")

const bracket = input.split(/\r?\n/)
let tempLargest = 0;

const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

bracket.map((line) => {
  for (let i = 0; i < line.length; i++){
    for (let j = line.length / 2; j < line.length; j++){
      if (line[i] === line[j]) {
        tempLargest += (abc.indexOf(line[i]) + 1)
        return
      }
    }
  }
})

console.log(tempLargest)