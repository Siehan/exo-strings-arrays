//check.js
/*
Vérifier si dans le texte suivant le mot Javascript est présent :
JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript
*/

// La méthode includes() se rapproche du true or false.

let text =
  "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";

let findWord = "Javascript";

console.log(
  `The word ${findWord} ${
    text.includes(findWord) ? "is" : "is not"
  } present in the text`
); // The word Javascript is present in the text

// Testé avec le mot Javascript écrit différemment, sachant que la méthode includes() est sensible à la casse.

let text2 =
  "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";

let findWord2 = "JavaScript";

console.log(
  `The word ${findWord2} ${
    text2.includes(findWord2) ? "is" : "is not"
  } present in the text`
); // The word Javascript is not present in the text
