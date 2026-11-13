function jouerTour(pointsDeVie, valeur, action) {
  return action(pointsDeVie, valeur);
}

function attaquer(pointsDeVie, valeur) {
  return action(pointsDeVie - valeur);
}

function soigner(pointsDeVie, valeur) {
  return action(pointsDeVie + valeur);
}

jouerTour(100, 30, attaquer); // 70
jouerTour(50, 20, soigner); // 70
jouerTour(0, 25, soigner); // 25
