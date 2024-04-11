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
  var value=req.body;
  var sum=handleSum(value)
  var ans = "The sum is "+sum
  res.send(ans)
}

function handle2Sum(req,res){
  res.send("LOl")
}
app.get('/',handleFirstRequest)


app.post('/post',handle2Sum)


app.get('/s-down',()=>{
  process.exit(0)
})

app.listen(8000,()=>{
  console.log("Servar started")
})