var lireclavier=require('readline-sync');

var fourDigitNumber=lireclavier.question('S il vous plait, ecrivez un numeo de 4 dicimales : ');
var fourDigitNumberParsed=parseInt(fourDigitNumber);
var tousandDigit=(fourDigitNumberParsed-fourDigitNumberParsed%1000)/1000;
var ThreeDigitalNumberParsed = fourDigitNumberParsed % 1000;
var hundredDigit=(ThreeDigitalNumberParsed-ThreeDigitalNumberParsed%100)/100;
var twoDigitNumberParsed = ThreeDigitalNumberParsed % 100;
var tenDigit=(twoDigitNumberParsed-twoDigitNumberParsed%10)/10;
var oneDigit=twoDigitNumberParsed%10;

console.log('Nous allons vous montrer un truc magic! Nous allons glisser des espaces entre les numrero que vous avez entre : '
+tousandDigit+" "+hundredDigit+" "+tenDigit+' '+oneDigit+" tadah!!")