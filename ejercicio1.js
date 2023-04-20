/*
rewrite the following code using best practices
function CalculateTotal(items, tax, discount) {
    var VALOR_TOTAL = 0;
    for(var i = 0; i < items.length; i++) {
      VALOR_TOTAL += items[i];
    }
    VALOR_TOTAL += VALOR_TOTAL * tax;
    if(discount) {
      VALOR_TOTAL -= VALOR_TOTAL * discount;
    }
    return VALOR_TOTAL.toFixed(2);
  }
  
  var items = [10, 20, 30];
  var tax = 0.05;
  var discount = 0.10;
  
  var ElprOFeEstuvo_aQui = CalculateTotal(items, tax, discount);
  console.log("Total: " + ElprOFeEstuvo_aQui);
*/

const calculateTotal = (items, tax, discount) => {
  let total = 0;
  items.forEach((item) => (total += item));
  total += total * tax;
  if (discount) {
    total -= total * discount;
  }
  return total.toFixed(2);
};

const items = [10, 20, 30];
const tax = 0.05;
const discount = 0.1;
console.log(calculateTotal);
