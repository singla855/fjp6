const { fstat } = require("fs");
let path = require("path");
// console.log(path);

let extensionName = path.extname("C:\Users\Asus\Desktop\FJP6\module2\introtonode\path.js");
console.log(extensionName);

let baseName = path.basename(__filename);
console.log(baseName);

// console.log(__dirname);

console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);
