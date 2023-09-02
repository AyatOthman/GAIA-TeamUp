// Get the selected values and display the result
const teamSelector = document.getElementById('team');
const squadSelector = document.getElementById('squad');
const result = document.getElementById('perfect-squad');

teamSelector.addEventListener('change', displayPerfectSquad);
squadSelector.addEventListener('change', displayPerfectSquad);

function displayPerfectSquad() {
  const selectedTeam = teamSelector.value;
  const selectedSquad = squadSelector.value;
  result.textContent = `${selectedTeam} - ${selectedSquad}`;
}