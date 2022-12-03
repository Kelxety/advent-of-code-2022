export const x = "";
const input = await Deno.readTextFile("./input.txt")

const bracket = input.split(/\r?\n/)
let tempLargest = 0;

const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let str1 = "";
let str2 = "";
bracket.map((line, index) => {
  if ((index + 1) % 3 === 1) {
    str1=line
  }
  if ((index + 1) % 3 === 2) {
    str2=line
  }
  if ((index + 1) % 3 === 0) {
    for (let i = 0; i < line.length; i++){
      if (str1.indexOf(line[i]) > -1 && str2.indexOf(line[i]) > -1) {
        // console.log(abc.indexOf(line[i]) + 1)
        console.log(line)
        // console.log(str1, str2, line, abc.indexOf(line[i]) + 1, line[i])
        str1 = "";
        str2 = "";
        tempLargest += (abc.indexOf(line[i]) + 1)
      }
    }
    
  }
})
console.log(tempLargest)
