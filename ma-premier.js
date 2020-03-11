const fs = require('fs')
const rr= fs.readFileSync(process.argv[2]);
const ss=rr.toString().split('\n');


console.log(ss.length-1);