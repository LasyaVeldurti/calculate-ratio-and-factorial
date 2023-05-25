const ratioofTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num) => {
  const ratio = ratioofTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
