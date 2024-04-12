const express=require("express")
const app=express()
var bodyParser = require('body-parser')

function middleware(req,res,next){
  console.log("From inside middleware "+req.headers.counter)
  next()
}

app.use(bodyParser.json())

// Implemented a Rate Limiter Middleware
// The middleware checks the number of requests and if it exceeds 5, it sends a response "Rate limit exceeded"  and does not call the next function

let numberOfRequests=0;
function rateLimiterMiddleware(req,res,next){
  numberOfRequests++;
  if(numberOfRequests>5){
    res.send("Rate limit exceeded")
  }else{
    console.log("From inside middleware "+req.headers.counter)
    next()
  }
}

//app.use(rateLimiterMiddleware)

function handleSum(counter){
  var sum=0;
  for(let i=0;i<counter;i++){
    sum+=i;
  }
  return sum;
}

function handleQueryRequest(req,res){
  var value=req.query.counter;
  var sum=handleSum(value)
  var ans = "The sum is "+sum
  res.send(ans)
}

function handleHeaderSum(req,res){
  console.log(req.headers)
  var counter=req.headers.counter;
  var sol=handleSum(counter)
  var ans = "the sum is "+sol
  res.send(ans)
}

function handleBodySum(req,res){
  console.log(req.body)
  var counter=req.body.counter;
  var sol=handleSum(counter)
  var ans = "the sum is "+sol
  res.send(ans)
}


app.get('/query',handleQueryRequest)
app.post('/header',handleHeaderSum)
app.post('/body',handleBodySum)


app.get('/s-down',()=>{
  process.exit(0)
})

app.listen(8000,()=>{
  console.log("Server started")
})