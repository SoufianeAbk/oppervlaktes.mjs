import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


function oppervlakteCirkel(straal) {
    return Math.PI * straal * straal;
}


function oppervlakteDriehoek(basis, hoogte) {
    return (basis * hoogte) / 2;
}


function oppervlakteRechthoek(zijde1, zijde2) {
    return zijde1 * zijde2;
}


function oppervlakteVierkant(zijde) {
    return oppervlakteRechthoek(zijde, zijde);
}


let cirkelOppervlakte = oppervlakteCirkel(5);
let driehoekOppervlakte = oppervlakteDriehoek(4, 6);
let rechthoekOppervlakte = oppervlakteRechthoek(4, 7);
let vierkantOppervlakte = oppervlakteVierkant(4);


console.log(cirkelOppervlakte);   
console.log(driehoekOppervlakte); 
console.log(rechthoekOppervlakte);
console.log(vierkantOppervlakte); 

process.exit()
