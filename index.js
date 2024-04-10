function sumAll(index,startIndex){
  var sum=0;
  for(let i=index;i<startIndex;i++){
      sum+=i
  }
  return sum;
}


var ans=sumAll(1,10000000000000)
console.log(ans)
