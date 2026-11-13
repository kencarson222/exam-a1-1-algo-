function accesManege(taille, age) {
  let result;
  if (age > 8) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
}

accesManege(130, 10); // true
accesManege(130, 7); // false
accesManege(120, 8); // true
