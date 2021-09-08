const fibonnaci = (array) => {
  const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);

  let number1 = 0;
  let number2 = 1;
  let nextTerm;

  nextTerm = number1 + number2;

  while (nextTerm) {
    number1 = number2;
    number2 = nextTerm;
    nextTerm = number1 + number2;

    if (nextTerm >= sumArray(array)) {
      console.log(nextTerm - sumArray(array));
      break;
    }
  }
};

fibonnaci([15, 1, 3]);
