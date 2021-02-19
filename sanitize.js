//sanitize.js
/*
La string suivante est difficilement lisible:
let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
Avec un programme, afficher cette phrase en réglant les problèmes d'espaces et passages à la ligne inutiles, et aussi de casse (Mettez tout en minuscule ou majuscule).
*/

let str =
  "\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n ";

// console.log(str.length); // 78 characters

str = str.replace("\n\n\t\t    ", "");
str = str.replace(" \n\n ", "");

let nStr = str.toUpperCase();
let nStr2 = nStr.toLowerCase();

console.log(nStr); // ALICE ET BOB ESSAYENT DE COMMUNIQUER SECRETEMENT, MAIS EVE VEILLE
console.log(nStr2); // alice et bob essayent de communiquer secretement, mais eve veille

//console.log(nStr.length); // 66 characters
