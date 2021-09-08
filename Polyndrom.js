function polyndrom(value) {
  return value.toLowerCase().split("").reverse().join("") ===
    value.toLowerCase()
    ? console.log("palindrome")
    : console.log("not palindrome");
}

polyndrom("Radar");
polyndrom("Malam");
polyndrom("Kasur ini rusak");
polyndrom("Ibu Ratna antar ubi");
polyndrom("Malas");
polyndrom("Makan nasi goreng");
polyndrom("Balonku ada lima");
