var fs = require("fs");
var data = "";
var da = "kasa ahes";
var reads = fs.createReadStream("ro.txt");
// reads.setEncoding("UTF8");
reads.on("data", (chunk) => {
  data += chunk;
});
reads.on("end", () => {
  console.log(data);
});
reads.on("error", () => {
  console.log(err);
});
var er = fs.createWriteStream("ro1.txt");
reads.pipe(er);
