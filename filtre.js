const fs = require('fs')
const path = require('path')
let x = fs.readdirSync(process.argv[2])
let result = x.filter(el => path.extname(el) === '.' + process.argv[3])

result.map(el => console.log(el))






