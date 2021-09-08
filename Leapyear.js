function checkLeapYear(startYear, lastYear) {
  let dataLeapYear = [];

  for (let i = startYear; i <= lastYear; i++) {
    if ((0 == i % 4 && 0 != i % 100) || 0 == i % 400) {
      dataLeapYear.push(i);
    }
  }

  console.log(dataLeapYear.join(" "));
}

checkLeapYear(1900, 2020);
