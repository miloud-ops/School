var lireclavier=require('readline-sync');

var travelDistance, fuelEfficiency, fuelPrice;

var travelDistance=lireclavier.question('Combien de kilometre avez vous pu parcourir dans votre dernier voyage : ');
var fuelEfficiency=lireclavier.question('Votre voiture consomme elle combien de litres par kilometre : ');
var fuelPrice=lireclavier.question('Vous avez paye le litre d essence a combien en dollars canadian : ');

var totalCost= parseInt(travelDistance)*parseFloat(fuelEfficiency)*parseFloat(fuelPrice);

console.log('Ce voyage vous a coute un budjet de : '+totalCost+' dollars canadien')