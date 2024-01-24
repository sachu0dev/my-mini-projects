

// time theme
const card = document.querySelector('.card');
var currentDate = new Date();

var hours = currentDate.getHours();
setTheme();
function setTheme(){
  if (hours >= 4 && hours < 12){
    card.classList.add('morning');
  } else if (hours >= 12 && hours < 16){
    card.classList.add('day');
  } else if (hours >= 16 && hours < 20){
    card.classList.add('evening');
  } else {
    card.classList.add('night');
  }
}
