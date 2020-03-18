const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // querySelector select just one, querySelectorAll grabs all of them and puts them in an array-like NodeList
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; // The + sign turns the string into an integer. We could also use parseInt()

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Save the selected seats in the local storage
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) { // "If what we click on has a class that contains 'seat' and not 'occupied' "
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
