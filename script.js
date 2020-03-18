const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // querySelector select just one, querySelectorAll grabs all of them and puts them in an array-like list
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.nodeValue; // The + sign turns the string into an integer. We could also use parseInt()

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) { // "If what we click on has a class that contains 'seat' and not 'occupied' "
    e.target.classList.toggle('selected');
  }
})
