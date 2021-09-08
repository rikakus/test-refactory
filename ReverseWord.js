function reverseWord(value) {
  const word = value.split(" ");
  let dataWord = [];

  const isUpperCase = (string) =>
    string.charAt(0) === string.charAt(0).toUpperCase();
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const reverseString = (string) =>
    string.toLowerCase().split("").reverse().join("");

  for (let words of word) {
    if (isUpperCase(words)) {
      dataWord.push(capitalizeFirstLetter(reverseString(words)));
    } else {
      dataWord.push(reverseString(words));
    }
  }

  console.log(dataWord.join(" "));
}

reverseWord("I am A Great human");
