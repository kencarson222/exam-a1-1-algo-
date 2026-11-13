function appliquerRemise(prix, pourcentage) {
  return prix - (prix * pourcentage) / 100;
}

function ajouterTVA(prix) {
  return prix - prix / pourcentage / 20;
}

function calculerPrixFinal(prix, pourcentage) {
  return prix - prix / pourcentage / 20;
}

appliquerRemise(100, 10); // 90
ajouterTVA(50); // 60

calculerPrixFinal(100, 10); // 108
calculerPrixFinal(50, 20); // 48
calculerPrixFinal(200, 0); // 240
