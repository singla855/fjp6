// let inputarray=process.argv;
// console.log(inputarray);
// let input=inputarray[2];
// console.log(input);
let folderPath=process.argv[2];
// console.log(folderpath);
let fs = require("fs");
let folderExists = fs.existsSync(folderPath);

if(folderExists){
    //we will code
    // console.log("path is valid!!!!!!");
    let files = fs.readdirSync(folderPath);
    console.log(files);
}
else{
    console.log("Please Enter a Valid Path!!!!!!!");
}