const { error } = require('console')
const fs = require('fs')

// const data = fs.readFileSync("./file/module.txt", 'utf-8')
fs.readFile("./file/module.txt", "utf-8", (err, data)=>{
        console.log(data)
});

console.log("I'm line 9")