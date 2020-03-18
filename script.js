const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // querySelector select just one, querySelectorAll grabs all of them and puts them in an array-like list
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.nodeValue; // The + sign turns the string into an integer. We could also use parseInt()


