let maixmum = Number.MIN_SAFE_INTEGER;
let minimum = Number.MAX_SAFE_INTEGER;

exports.min= function min (array) {
  if(array.length == 0) return 0;
  
  array.forEach(element => {
    if(element <= minimum){
      minimum = element;
    }
  });
  return minimum;
}

exports.max= function max (array) {
 if(array.length == 0) return 0;
 array.forEach(element => {
   if(element >= maixmum){
     maixmum = element;
   }
 });
 return maixmum;
}



exports.avg = function avg (array) {
  if(array.length == 0) return 0;
  let sum = 0;
  array.forEach(element => {
    sum+=element;
  });
  return sum / array.length;
}
