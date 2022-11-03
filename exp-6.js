//Array Methods
var array = ["Rohit", "Patil", 612040];
console.log("\nARRAY METHODS =>");
console.log("Array is:", array);
array.push("TEIT");
console.log("Array after pushing 'TEIT':", array);
array.pop();
console.log("Array after pop:", array);
array = array.concat(["TEIT", "MHSSCE"]);
console.log("Array after concatenating:", array);
console.log("Reverse of Array is:", array.reverse());
console.log("Length of Array is:", array.length);
console.log("Elements of Array from index 0-3 are:", array.slice(0, 3));
console.log("In Array 'Rohit' is at Position:", array.indexOf("Rohit"));
console.log(
  "String Elements in Array are:",
  array.filter((E) => {
    if (typeof E == "string") return E;
  })
);
console.log("Array to String is:", array.toString());
console.log("Sorted Array is:", array.sort());

//String Methods
var string = "i am Rohit patil";
console.log("\nSTRING METHODS =>");
console.log("String is: " + string);
console.log("Char at 2 is: " + string.charAt(2));
console.log("Char Code at 5 is: " + string.charCodeAt(5));
console.log("Char 'D' is at index: " + string.search("D"));
console.log("Concatenating ' 6120040' in string: " + string.concat(" 612040"));
console.log("String to Array: ", string.split(" "));
console.log("Lower case: " + string.toLowerCase());
console.log("Upper case: " + string.toUpperCase());
//date methods

var date = new Date();
console.log("\nDATE METHODS =>");
console.log("Today is:", date);
console.log("Current Hour:", date.getHours());
console.log("Current Minutes:", date.getMinutes());
console.log("Current Minutes:", date.getSeconds());
console.log(
  "Current Time:",
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
);
console.log("Current Year:", date.getDate());
console.log("Current Month:", date.getMonth());
console.log("Current Year:", date.getFullYear());
console.log(
  "Today's Date:",
  date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
);

//Math Methods console.log("\nMATH METHODS =>")
console.log("Absolute value of -8 is:", Math.abs(-8));
console.log("Square Root of 25 is:", Math.sqrt(25));
console.log("Min of 2 and 4 is:", Math.min(2, 4));
console.log("Max of 2 and 4 is:", Math.max(2, 4));
console.log("Natural log of 30 is:", Math.log(30));
console.log("Round of 3.146 is:", Math.round(3.146));
console.log("sin of 45 is:", Math.sin(45));
console.log("cos of 30 is:", Math.cos(30));
console.log("tan of 60 is:", Math.tan(60));
console.log("Random number between 0 and 1 is:", Math.random());
console.log("3 to the power of 4 is:", Math.pow(3, 4), "\n");
