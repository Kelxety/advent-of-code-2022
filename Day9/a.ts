const input = await Deno.readTextFile("./input.txt");

const moves = input.split("\n").map((line) => line.split(" "));

const head = [0, 0];
let tail = [0, 0];

let prevHead = [0, 0];

const visitedPlaces = new Set();

visitedPlaces.add(`${tail[0]},${tail[1]}`);

for (const move of moves) {
  const [direction, distance] = move;

  for (let i = 0; i < Number(distance); i++) {
    prevHead = [...head];
    switch (direction) {
      case "U":
        head[1] += 1;
        break;
      case "D":
        head[1] -= 1;
        break;
      case "L":
        head[0] -= 1;
        break;
      case "R":
        head[0] += 1;
        break;
    }

    if (
      (Math.abs(head[0] - tail[0]) === 1 &&
        Math.abs(head[1] - tail[1]) === 1) ||
      (head[0] === tail[0] && Math.abs(head[1] - tail[1]) === 1) ||
      (head[1] === tail[1] && Math.abs(head[0] - tail[0]) === 1) ||
      (head[0] === tail[0] && head[1] === tail[1])
    ) {
      continue;
    } else {
      tail = [...prevHead];
      visitedPlaces.add(`${tail[0]},${tail[1]}`);
    }
  }
}

console.log(visitedPlaces.size);