const express=require("express")
const app=express()

function handleSum(counter){
  var sum=0;
  for(let i=0;i<counter;i++){
    sum+=i;
  }
  return sum;
}
function handleFirstRequest(req,res){
  var value=req.query.counter;
  var sum=handleSum(value)
  var ans = "The sum is "+sum
  res.send(ans)
}

function handle2Sum(req,res){
  res.send("LOl")
}

function handleHeaderSum(req,res){
  console.log(req.headers)
  var counter=req.headers.counter;
  var sol=handleSum(counter)
  var ans = "the sum is "+sol
  res.send(ans)
}
app.get('/',handleFirstRequest)


app.post('/header',handleHeaderSum)


app.get('/s-down',()=>{
  process.exit(0)
})

app.listen(8000,()=>{
  console.log("Server started")
})