//replace2.js\
/*
Écrivez un programme qui remplace toutes les occurrences Alice par votre propre prénom dans le texte suivant.\

In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.

Afficher le texte avec les nouvelles modifications\
*/
let text =
  "In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.\
 As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\
 The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.";

console.log(text.replaceAll("Alice", "Sylvie"));
//Output :
/*
In cryptography, Sylvie and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Sylvie and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Sylvie and Bob. Eve, Mallory, and Trent are also common names.
*/
