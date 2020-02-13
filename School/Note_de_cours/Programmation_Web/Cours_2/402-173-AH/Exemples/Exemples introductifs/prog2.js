var lireclavier=require('readline-sync');

var productNumber, productPrice, productQuantity, tps, tvq;
tps=0.07;
tvq=0.075;
productNumber=lireclavier.question('Please provide your product number : ');
productPrice=lireclavier.question('Please enter the price before taxes : ');
productQuantity=lireclavier.question('Please provide the quantity : ');

var productPriceParsed=parseFloat(productPrice);
var tpsParsed=parseFloat(tps);
var tvqParsed=parseFloat(tvq);
var productQuantityParsed=parseFloat(productQuantity);
var taxes=productPriceParsed*tvqParsed+productPriceParsed*tpsParsed;

var productPriceAfterTaxes=productPriceParsed+taxes;
var totalPrice=productPriceAfterTaxes*productQuantityParsed;


console.log(
    'Vous-avez choisi le produit numero : '+productNumber+ 
' '+'Le prix de ce produit est : '+productPrice+
' '+'La quantite commandee est : '+productQuantityParsed+
' '+'TVQ = '+tvq+' '+'TPS = '+tps+
' '+'Le Prix total Final est : '+totalPrice+
' '+'Nous n acceptons que le cash merci et a la prochaine'
)
