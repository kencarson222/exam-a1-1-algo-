function estBissextile(annee) {
  return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
}

estBissextile(2024); // true
estBissextile(1900); // false
estBissextile(2000); // true
