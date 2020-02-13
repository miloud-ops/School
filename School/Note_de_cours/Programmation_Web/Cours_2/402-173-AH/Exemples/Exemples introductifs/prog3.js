var lireclavier=require('readline-sync');

var distance, literCount;

distance=lireclavier.question('Combien de kilometre avez-vous parcouru : ');
literCount=lireclavier.question('Combien de litre d essence avez-vous consomme : ');

var literPerKilometer=parseInt(literCount)/parseInt(distance);

console.log('Votre consommation d essence moyenne est : ' + literPerKilometer+' par kilometre, Votre voiture consomme moins que la moyenne generale elle est economique! Felicitations')
