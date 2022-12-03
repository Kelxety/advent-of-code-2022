export const x = "";
const input = await Deno.readTextFile("./inputDay2a.txt")

const bracket = input.split(/\r?\n/)
let scoreHighest = 0;

bracket.map((line) => {
  if (line[2] === "X") {
    if (line[0] === "A") {
      scoreHighest += 3;
    }
    if (line[0] === "B") {
      scoreHighest += 2;
    }
    if (line[0] === "C") {
      scoreHighest += 1;
    }
  }

  if (line[2] === "Y") {
    if (line[0] === "A") {
      scoreHighest += 4;
    }
    if (line[0] === "B") {
      scoreHighest += 5;
    }
    if (line[0] === "C") {
      scoreHighest += 6;
    }
  }

  if (line[2] === "Z") { 
    if (line[0] === "A") {
      scoreHighest += 8;
    }
    if (line[0] === "B") {
      scoreHighest += 9;
    }
    if (line[0] === "C") {
      scoreHighest += 7;
    }
  }
  
})
console.log(scoreHighest)
