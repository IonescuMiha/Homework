
let tipVehicul = prompt("Introduceți tipul de vehicul (autoturism, camioneta, motocicleta):")
let capacitateCilindrica = prompt("Introduceți capacitatea cilindrică în cm3:");


if (tipVehicul !== null && capacitateCilindrica !== null && !isNaN(capacitateCilindrica)) {
  capacitateCilindrica = parseFloat(capacitateCilindrica);

  const nivel1 = 1199;
  const nivel2 = 1599;
  const nivel3 = 1999;

  let impozit = 0;

  switch (tipVehicul.toLowerCase()) {
    case "autoturism":
      if (capacitateCilindrica <= nivel1) {
        impozit = 800;
      } else if (capacitateCilindrica <= nivel2) {
        impozit = 1200;
      } else if (capacitateCilindrica <= nivel3) {
        impozit = 1500;
      } else {
        impozit = 2000;
      }
      break;
    case "camioneta":
      if (capacitateCilindrica <= nivel1) {
        impozit = 1000;
      } else if (capacitateCilindrica <= nivel2) {
        impozit = 1500;
      } else if (capacitateCilindrica <= nivel3) {
        impozit = 2000;
      } else {
        impozit = 2500;
      }
      break;
    case "motocicleta":
      if (capacitateCilindrica <= nivel1) {
        impozit = 500;
      } else if (capacitateCilindrica <= nivel2) {
        impozit = 750;
      } else if (capacitateCilindrica <= nivel3) {
        impozit = 900;
      } else {
        impozit = 1050;
      }
      break;
    default:
      alert("Tip de vehicul necunoscut. Introduceți unul dintre: automobil, camionetă, motocicletă.");
      break;
  }



  console.log(impozit)
  alert(`Impozitul auto pentru ${tipVehicul} cu capacitatea cilindrică ${capacitateCilindrica} cm3 este: ${impozit} lei.`);
} else {

  alert("Introduceți tipul de vehicul și o valoare validă pentru capacitatea cilindrică.");
}















