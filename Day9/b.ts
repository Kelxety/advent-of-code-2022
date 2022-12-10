const trees = await Deno.readTextFile("input.txt");

type node = {
  visits: number;
};
type grid = Array<Array<node>>;

let treesGrid: grid;

let totals = {
  U: 0,
  D: 0,
  L: 0,
  R: 0,
};
let minMaxWidth = [0, 0],
  minMaxHeight = [0, 0];
let currentWidth = 0,
  currentHeight = 0;

const commands = trees.split("\n");
commands.forEach((x, i) => {
  let [direction, amount] = x.split(" ");
  if (direction == "U") {
    totals.U += +amount;
    currentHeight += +amount;
    currentHeight > minMaxHeight[1] ? (minMaxHeight[1] = currentHeight) : null;
  } else if (direction == "D") {
    totals.D += +amount;
    currentHeight -= +amount;
    currentHeight < minMaxHeight[0] ? (minMaxHeight[0] = currentHeight) : null;
  } else if (direction == "L") {
    totals.L += +amount;
    currentWidth -= +amount;
    currentWidth < minMaxWidth[0] ? (minMaxWidth[0] = currentWidth) : null;
  } else {
    totals.R += +amount;
    currentWidth += +amount;
    currentWidth > minMaxWidth[1] ? (minMaxWidth[1] = currentWidth) : null;
  }
});
let startX = minMaxWidth[0] < 0 ? Math.abs(minMaxWidth[0]) : 0;
let startY = minMaxHeight[0] < 0 ? Math.abs(minMaxHeight[0]) : 0;
let height = Math.abs(minMaxHeight[0]) + Math.abs(minMaxHeight[1]) + 1;
let width = Math.abs(minMaxWidth[0]) + Math.abs(minMaxWidth[1]) + 1;
let rope: Array<[number, number]> = new Array(10)
  .fill(null)
  .map(() => [startX, startY]);

treesGrid = new Array(width);
for (let i = 0; i < width; i++) {
  treesGrid[i] = new Array(height);
  for (let j = 0; j < height; j++) {
    treesGrid[i][j] = { visits: 0 };
  }
}
treesGrid[startX][startY].visits++;

commands.forEach((x, i) => {
  let [direction, amount] = x.split(" ");
  console.log(`direction: ${direction}, amount: ${amount}`);
  for (let j = 0; j < +amount; j++) {
    let currentTl = [...rope[rope.length - 1]];
    let hl = rope[0];
    switch (direction) {
      case "U":
        hl[1]++;
        break;
      case "D":
        hl[1]--;
        break;
      case "L":
        hl[0]--;

        break;
      case "R":
        hl[0]++;
        break;
    }
    for (let i = 1; i < rope.length; i++) {
      if (
        Math.abs(rope[i - 1][0] - rope[i][0]) <= 1 &&
        Math.abs(rope[i - 1][1] - rope[i][1]) <= 1
      ) {
        break;
      }
      if (rope[i - 1][0] > rope[i][0]) {
        rope[i][0]++;
      } else if (rope[i - 1][0] < rope[i][0]) {
        rope[i][0]--;
      }
      if (rope[i - 1][1] > rope[i][1]) {
        rope[i][1]++;
      } else if (rope[i - 1][1] < rope[i][1]) {
        rope[i][1]--;
      }
    }
    if (rope[rope.length - 1] != currentTl) {
      console.log(rope);
      treesGrid[rope[rope.length - 1][0]][rope[rope.length - 1][1]].visits++;
    }
  }
});
let visitedTrees = 0;
for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    if (treesGrid[i][j].visits >= 1) {
      visitedTrees++;
    }
  }
}
console.log(visitedTrees);