const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const headings = document.querySelectorAll('.span');

function randomColor(){
  headings.forEach(function(item){
    let hexColor = '#';
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
  }
    item.style.color = hexColor;
  });
}
window.addEventListener('load', ()=>{
  setInterval(()=>{
    randomColor();
  }, 500);
});

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}