function comparerScores(score1, score2) {
  if (score1 > score2) {
    return "Joueur 1 gagne";
  }
  if (score1 < score2) {
    return "Joueur 2 gagne";
  }
  if ((score1 = score2)) {
    return "Égalité";
  }
}

comparerScores(12, 8); // "Joueur 1 gagne"
comparerScores(3, 7); // "Joueur 2 gagne"
comparerScores(5, 5); // "Égalité"
