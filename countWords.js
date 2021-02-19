//countWords.js

/*
En vous aidant de la méthode .split() compter tous les mots du sonnet "El Desdichado" des exercices précédents Appliquée à une string la méthode .split() retourne un tableau

Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.
*/

let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée.";

text = text.replaceAll("-", ""); // First I clean as much has possible, the punctuation
text = text.replaceAll(",", "");
text = text.replaceAll(":", "");
text = text.replaceAll(";", "");
//text = text.replaceAll("\n", "");   // If I remove this part, the formatting of the original text no longer has any formatting and if I remove it the table is less presentable
console.log(text);

let textCopy = text.split(" "); // Changed the string to an array
console.log(textCopy);
console.log(`There are ${textCopy.length} words in the sonnet El Desdichado`);

/*

Output

[
  'Je',             'suis',           'le',              'ténébreux',
  '',               'le',             'veuf',            '',
  "l'inconsoléLe",  'prince',         "d'Aquitaine",     'à',
  'la',             'tour',           'abolie',          'Ma',
  'seule',          'étoile',         'est',             'morte',
  '',               'et',             'mon',             'luth',
  'constelléPorte', 'le',             'soleil',          'noir',
  'de',             'la',             'Mélancolie.Dans', 'la',
  'nuit',           'du',             'tombeau',         'toi',
  'qui',            "m'as",           'consoléRendsmoi', 'le',
  'Pausilippe',     'et',             'la',              'mer',
  "d'ItalieLa",     'fleur',          'qui',             'plaisait',
  'tant',           'à',              'mon',             'cœur',
  'désoléEt',       'la',             'treille',         'où',
  'le',             'pampre',         'à',               'la',
  'rose',           "s'allie.Suisje", 'Amour',           'ou',
  'Phébus',         '?',              '...',             'Lusignan',
  'ou',             'Biron',          '?Mon',            'front',
  'est',            'rouge',          'encor',           'du',
  'baiser',         'de',             'la',              'reine',
  "J'ai",           'rêvé',           'dans',            'la',
  'grotte',         'où',             'nage',            'la',
  'sirène...Et',    "j'ai",           'deux',            'fois',
  'vainqueur',      'traversé',       "l'Achéron",       'Modulant',
  'tour',           'à',              'tour',            'sur',
  ... 13 more items
]
113

*/
