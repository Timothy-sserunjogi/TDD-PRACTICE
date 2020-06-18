/**
Patience A
Timothy S
**/
var fibSequence = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var result = fibSequence(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};

 console.log(fibSequence(9));

module.exports = fibSequence;