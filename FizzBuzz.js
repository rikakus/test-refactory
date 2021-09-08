function fizzbuzz(end) {
  let data = [];

  for (let i = 1; i < end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      data.push("FizzBuzz");
    } else if (i % 3 == 0) {
      data.push("Fizz");
    } else if (i % 5 == 0) {
      data.push("Buzz");
    } else {
      data.push(i);
    }
  }

  console.log(JSON.stringify(data));
}

fizzbuzz(17);
