/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('Ce','C ');
}
var concatString = function (texte1, texte2) {
    return ('Le javascript est ' + 'super');
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    return texte.slice(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim(' ');
}
var IsString = function (texte) {
    return texte.string=true;
}
var AfficherExtensionString = function (texte) {
    return texte.substr(texte.lastIndexOf('.') + 1);
}
var NombreEspaceString = function (texte) {
    return texte.match(/[ ]+/g).length;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
for (i in array) {
  array[i] = Math.abs(array[i]);
}
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(3.14*5*5);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return Math.round(poids/(taille*taille)*100)/100;
}
