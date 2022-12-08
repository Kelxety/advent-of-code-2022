const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

const cd = [];
const directories = new Map<string, number>();
const files = new Map<string, number>();

for (const line of lines) {
  if (line.substring(0, 4) === "$ cd") {
    const location = line.split(" ")[2].trim();

    if (location == "..") cd.pop();
    else if (location !== "/") cd.push(location);

    directories.set("/" + cd.join("/"), 0);
  } else if (line.match(/^[0-9]/g)) {
    const fileSize = parseInt(line.split(" ")[0]);
    const fileName = line.split(" ")[1].trim();
    const filePath =
      (cd.length == 0 ? "" : "/") + cd.join("/") + "/" + fileName;

    files.set(filePath, fileSize);
  }
}

for (const [dirName] of directories) {
  let dirSize = 0;

  for (const [fileName, fileSize] of files)
    if (fileName.includes(dirName)) dirSize += fileSize;

  directories.set(dirName, dirSize);
}

console.log("Files:", files);
console.log("Directories:", directories);

let sum = 0;
const maxSize = 100000;
directories.forEach((dirSize) => {
  if (dirSize <= maxSize) sum += dirSize;
});

console.log(sum);