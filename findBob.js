//findBob.js

/*
En utilisant le code écrit précédemment écrivez un nouveau programme dans un fichier findBob.js qui nous affichera si l'occurrence "Bob" est présente.
La casse n'est pas importante.
*/

let str =
  "\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n ";

let findBob = "Bob";

console.log(
  `The firtsname ${findBob} ${
    str.includes(findBob) ? "is" : "is not"
  } present in the sentence`
); // The firtsname Bob is not present in the sentence

// La méthode includes() est sensible à la casse.
