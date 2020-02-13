var lireclavier=require('readline-sync');
// var nom;
// nom=lireclavier.question("Quel est votre nom? ");
// console.log("Votre nom est :"+nom);

var nb1, nb2, somme;
nb1=lireclavier.question("Entrer le nombre 1: ");
nb2=lireclavier.question("Entrer le nombre 2: ");
somme=parseInt(nb1)+parseInt(nb2);
console.log("SOMME ="+somme);

