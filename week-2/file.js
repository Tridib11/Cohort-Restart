const fs =require('fs')

function callback(err,data){
  if(err){
    console.log(err)
  }
  else{
    console.log(data)
  }
}

fs.readFile("a.txt","utf-8",callback)
console.log("Hello world 1")


// const data=fs.readFileSync("a.txt","utf-8")
// console.log(data)