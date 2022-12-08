const input = (await Deno.readTextFile("./input.txt"));

const arr = input.split("");

for (let i = 0; i < arr.length; i++) {
  const slice = arr.slice(i, i + 14);
  if (new Set(slice).size === slice.length) {
    console.log({ result: i + 14 });
    break;
  } else {
    console.log(new Set(slice).size)
  }
}