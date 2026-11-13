function accesSalle(estMembre, aInvitation, estBanni) {
  if (estMembre + aInvitation) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
}

accesSalle(true, false, false); // true
accesSalle(false, true, false); // true
accesSalle(true, true, true); // false
