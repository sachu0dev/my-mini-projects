const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const birthday = document.querySelector('.birthday');
const items = document.querySelectorAll('.deadline-format h4');

let currentYear = new Date();
currentYear = currentYear.getFullYear();
let futureDate = new Date(currentYear,3,23,0,0,0);
const hours = futureDate.getHours();
const year = futureDate.getFullYear();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];

birthday.textContent = `birthday on ${day}, ${date} ${month} ${year}, 12:${minutes}0 am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemaningTime(){
  const today = new Date().getTime();
  const timeLeft = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hour = 60min
  // id = 24hrs

  // values in ms
  const oneDay = 24*60*60*1000;
  const onehour = 60*60*1000;
  const oneminute = 60*1000;
  const onesecond = 1000;

  // calculate values
  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / onehour);
  let minutes = Math.floor((timeLeft % onehour) / oneminute);
  let seconds = Math.floor((timeLeft % oneminute) / onesecond);

  // set values array 
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    if(item < 100){
      return item
    }
  }

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
  if(timeLeft < 0){
    deadline.innerHTML = `<h4 class="expired">soory, its past my birthday Try next year</h4>`;
  }
}
// countdowm 
let countdowm = setInterval(getRemaningTime, 1000);
getRemaningTime();
