var fs = require("fs");
//asynchronous methods
fs.readFile("ro1.txt", (err, data) => {
  console.log(data.toString());
});

var ka = "how are you";
fs.writeFile("r1.txt", ka, () => {});

//synchronous methods
var my = fs.readFileSync("ro.txt");
console.log("data", my.toString());

var rohii = "ka pan";
fs.writeFileSync("ro.txt", rohii);
