var lireclavier = require('readline-sync');

var customerId = lireclavier.question('Nous vous invitons a rentrer vore ID s il vous plait : ');
var duration = lireclavier.question('Combien de jours de consommation avez vous faite : ')
var kiloWatt = lireclavier.question('S il vous plait, nous vous invitons a fournir le nombre de kilowatteur affiche dans votre compteur : ');

var prixWatt=0.30;
var prixJour=0.50;
var prixBranchement = parseInt(duration) * parseFloat(prixJour);
var prixConsommation = parseInt(kiloWatt) * parseFloat(prixWatt);

var totalPrice = prixBranchement + prixConsommation;

console.log('Bonjour cher client, votre ID est : ' + customerId +
    ', Votre facture d energie pour les ' + duration +
    ' derniers jours est : ' + kiloWatt +
    ' le mantant total de votre facture apres taxes est par consequent : ' + totalPrice +
    ' Dollard. Si vous n etes pas d accord avec le prix, nous vous invitons a payer quand meme est reclamer ensuite')