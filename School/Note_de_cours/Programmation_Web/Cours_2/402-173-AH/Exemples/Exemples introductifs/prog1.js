var lireclavier=require('readline-sync');

var floor=4;
var groundFloor=6;
var floorNumber,buildingHight;
floorNumber=lireclavier.question('Enter the number of floor in your building : ');
buildingHight= parseInt(groundFloor)+ parseInt(floor)*parseInt(floorNumber);

console.log('La hauteur de votre batiment est :' +buildingHight)