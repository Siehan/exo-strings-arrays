//replace1.js
/*
Écrivez un programme qui remplace Sofiane par votre prénom.
Bonjour, je suis Sofiane.
Afficher le nouveau message
*/
// Strings are a primitive type, so they are immutable, we have to create new ones if we if we want to do modification…
let hello = "Bonjour, je suis Sofiane";
let newHello = hello.replace(/Sofiane/, "Sylvie");
console.log(newHello);
//Bonjour, je suis Sylvie

//A second test

let hello2 = "Bonjour, je suis Sofiane";
let newHello2 = hello.replace(/Sofiane/, "Siehan");
console.log(newHello2);
//Bonjour, je suis Siehan
