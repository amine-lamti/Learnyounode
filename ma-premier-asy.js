const fs = require('fs')


fs.readFile(process.argv[2], 'utf-8', (err, data)=> {
     if (err)
     throw err;
     const x = data.split('\n')
     console.log(x.length-1); 
  });
 