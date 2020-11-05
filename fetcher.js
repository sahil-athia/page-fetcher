const request = require('request')
const fs = require('fs')
const args = process.argv.slice(2)
const url = args[0]
const file = args[1]


request(url, (error, response, body) => {
  fs.writeFile(file, body, (err) => {
    if (err) {
      throw err;
    }
    console.log(`downloaded and saved ${body.length}, bytes to ${file} `)
  })
  
});


