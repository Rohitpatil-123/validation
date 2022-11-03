// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer.from("GFG");
var buffer3 = Buffer.from([1, 2, 3, 4]);
// Writing data to Buffer
buffer1.write("rohit from TE-IT ");
// Reading data from Buffer
var a = buffer1.toString("utf-8");
console.log(a);
// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));
// concatenate two buffer
var bufferOne = new Buffer.from("hi i am rohit ");
var bufferTwo = new Buffer.from("i am a cricket fan");
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
