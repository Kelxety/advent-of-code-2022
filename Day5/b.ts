
const lines = await Deno.readTextFile("./input.txt");

const array = [
  ["D", "B", "J", "V"],
  ["P", "V", "B", "W", "R", "D", "F"],
  ["R", "G", "F", "L", "D", "C", "W", "Q"],
  ["W", "J", "P", "M", "L", "N", "D", "B"],
  ["H", "N", "B", "P", "C", "S", "Q"],
  ["R", "D", "B", "S", "N", "G"],
  ["Z", "B", "P", "M", "Q", "F", "S", "H"],
  ["W", "L", "F"],
  ["S", "V", "F", "M", "R"],
]

const bracket = lines.split("\n")

bracket.map((line, i) => {
  const instruction = { "count": parseInt(line.split(" ")[1]), "from": parseInt(line.split(" ")[3]) - 1, "to": parseInt(line.split(" ")[5]) - 1 }
  if (instruction.count === 1) {
    array[instruction.to].push(array[instruction.from].pop() || "")
  } else {
    array[instruction.to] = array[instruction.to].concat(array[instruction.from].splice(-instruction.count))
    console.log(array[instruction.to])
    // console.log(array[instruction.from].splice(1, instruction.count))
  }
  // console.log("Line ", i, " :", array)
})
const result = array.map((column: any) => column[column.length - 1]).join("");
console.log(result)