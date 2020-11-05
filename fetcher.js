const request = require('request')
const fs = require('fs')
const args = process.argv.slice(2)
const url = args[0]
const file = args[1]
let error1 = new Error('Data reterival unsucessful')

request(url, (error, response, body) => {
  // passing 2 args, url and the callback(because async code we can avoid blocking

  fs.writeFile(file, body, (err) => {
    // we write to file, and pass it 'body'(aka data), once done writing
    // when callback in called, we go to our conditionals
    if (err) {
      throw err;
      // we stop at the first instance of an error, this would catch 
      // an invalid local file path.
    }
    if (response.statusCode > 299 || response.statusCode < 200) {
      // when we dont have a 200 level status code, we throw a custom error
      console.log(response.statusCode)
      throw error1
    }
    console.log(`downloaded and saved ${body.length}, bytes to ${file} `)
  })
  
});


