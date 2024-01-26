/*let myArray = [2, 3, 4, 5, 6, 7, 9]
numarulElementelor = 7
sum = 0
for (let i = 0; i < numarulElementelor; i = i + 1) {
    elementCurent = myArray[i]
sum = sum + elementCurent
}
medAritmetica = sum / numarulElementelor
console.log(medAritmetica)
*/


const newArray = [2, 3, 4, 5, 6, 7, 9, true, false, "string1", "string2"]
const numericValues = newArray.filter(value => typeof value === 'number' && !isNaN(value));
const sum = numericValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Suma tuturor elementelor numerice din newArray este: ${sum}`);

 