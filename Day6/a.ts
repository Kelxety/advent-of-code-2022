const input = (await Deno.readTextFile("./input.txt"));

const arr = input.split("");

for (let i = 0; i < arr.length; i++) {
  const slice = arr.slice(i, i + 4);
  if (new Set(slice).size === slice.length) {
    console.log({ result: i + 4 });
    break;
  }
}