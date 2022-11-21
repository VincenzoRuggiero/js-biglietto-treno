const userAge = prompt("Inserire la propria età");
const userKm = prompt("Inserire quanti Km si vuole percorrere");

const kmPrice = 0.21;

//Prezzo pieno
let fullPrice = userKm * kmPrice;

//Calcolo sconto
let discount40 = (fullPrice / 100) * 40;
let discount20 = (fullPrice / 100) * 20;

//Prezzo scontato
let discountedPrice40 = fullPrice - discount40;
let discountedPrice20 = fullPrice - discount20;

//Scrive il risultato nell'HTML

if (userAge >= 65) {
  document.getElementById("discounted").innerHTML =
    discountedPrice40.toFixed(2) + "&euro;";
} else if (userAge <= 18) {
  document.getElementById("discounted").innerHTML =
    discountedPrice20.toFixed(2) + "&euro;";
} else {
  document.getElementById("discounted").innerHTML =
    fullPrice.toFixed(2) + "&euro;";
}
