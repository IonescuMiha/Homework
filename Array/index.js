
let initialValues = [2, 4, null, true, false, undefined, "string"]
let otherValues = [1, 2, 3, null, true, false, true, "string1", "string2"]
let newValues = [];
newValues.push.apply(newValues, initialValues);
newValues.push.apply(newValues, otherValues);
console.log(newValues);



numarulElementelor = 2
sum = 0
for (let i = 0; i < numarulElementelor; i = i + 1) {
    elementCurent = initialValues[i]
sum = sum + elementCurent
}
medAritmetica = sum / numarulElementelor
console.log(medAritmetica)

let rezultat = 4 ** 2;
console.log(rezultat);

//let initialValues = [5, 20, null, true, false, undefined, "string"]// am daugat val med arit si rez lui 4^2 la val din array-ul initial




 let result = [];

 for (let i = 0; i < initialValues.length; i++) {
   if (typeof initialValues[i] === 'string') {
     result.push(initialValues[i] + " happy coding");
   }
 }
 
 console.log(result);



 
 for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === 'boolean') {
      initialValues[i] = !initialValues[i];
    }
  }
  
  console.log(initialValues);