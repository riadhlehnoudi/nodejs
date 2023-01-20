var fs = require('fs');
var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var fileString = fileBuffer.toString();
var fileArray = fileString.split('\n');

console.log(fileArray.length-1);