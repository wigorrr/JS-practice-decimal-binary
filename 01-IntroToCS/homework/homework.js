'use strict';

function BinarioADecimal(num) {
   var array = num.split('');
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(sum =+ Math.pow(2, array.length - 1 - i) * array[i]);
  }
  return sum;
};



function DecimalABinario(num) {
   var binary = '';
  while (num>0)
   {
binary = (num%2) + binary;
    num = Math.floor(num/2);
     }
return binary;

   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
