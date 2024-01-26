function calculeazaVenitAnual(nume, textEuro, textDolar, cursEuro = 4.95, cursDolar = 4.7) {
    const venitEuro = parseFloat(textEuro.split(":")[1]);
    const venitDolar = parseFloat(textDolar.split(":")[1]);
    const venitTotalLei = venitEuro * cursEuro + venitDolar * cursDolar;
    return `Venitul total anual al lui ${nume} este de ${venitTotalLei.toFixed(2)} lei.`;
}

const textEuro = "Venitul lunar in euro: 2000";
const textDolar = "Venitul lunar in dolari: 2200";
const numeUtilizator = "Mihaela";

const venitTotalUtilizator = calculeazaVenitAnual(numeUtilizator, textEuro, textDolar);
console.log(venitTotalUtilizator);