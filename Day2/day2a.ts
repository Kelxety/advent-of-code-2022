export const x = "";
const input = await Deno.readTextFile("./inputDay2a.txt")

const bracket = input.split(/\r?\n/)
let scoreHighest = 0;

bracket.map((line) => {
  console.log(line[0], line[2])
  if (line[0] === "A" && line[2] === "X") {
    scoreHighest += 4;
  }
  if (line[0] === "B" && line[2] === "X") {
    scoreHighest += 1;
  }
  if (line[0] === "C" && line[2] === "X") {
    scoreHighest += 7;
  }
  if (line[0] === "A" && line[2] === "Y") {
    scoreHighest += 8;
  }
  if (line[0] === "B" && line[2] === "Y") {
    scoreHighest += 5;
  }
  if (line[0] === "C" && line[2] === "Y") {
    scoreHighest += 2;
  }
  if (line[0] === "A" && line[2] === "Z") {
    scoreHighest += 3;
  }
  if (line[0] === "B" && line[2] === "Z") {
    scoreHighest += 9;
  }
  if (line[0] === "C" && line[2] === "Z") {
    scoreHighest += 6;
  }

  // if (line !== "") {
  //   scoreHighest += parseInt(line);
  // } else {
  //   array.push(scoreHighest);
  //   scoreHighest = 0;
  // }
})

console.log(scoreHighest)

// console.log(number)