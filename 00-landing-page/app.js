const projects = [
  {
    name: "Rock Paper Scissor",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../rock-paper-scissor/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/rock-paper-scissor",
    img: "img-1",
  },
  {
    name: "Color Flipper",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../01-color-flipper/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/01-color-flipper",
    img: "img1",
  },
  {
    name: "Counter",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../02-counter/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/02-counter",
    img: "img2"
  },
  {
    name: "Reviews",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../03-reviews/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/03-reviews",
    img: "img3"
  },
  {
    name: "Navbar",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../04-navbar/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/04-navbar",
    img: "img4"
  },
  {
    name: "Sidebar",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../05-sidebar/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/05-sidebar",
    img: "img5"
  },
  {
    name: "Modal",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../06-modal/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/06-modal",
    img: "img6"
  },
  {
    name: "Question",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../07-questions/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/07-questions",
    img: "img7"
  }
];


const projectCard = document.querySelector('.projects');
const subHead = document.getElementById('sub-head');

function renderProjects(projects){
  subHead.textContent = `Explore an array of ${Math.round(projects.length/10)}0+ beginner-friendly mini projects on this website, designed to enhance your coding skills and ignite your passion for programming. Dive into a diverse range of hands-on experiences, making learning both enjoyable and accessible for beginners.`;
  for(let i = 0; i < projects.length; i++){
    projectCard.innerHTML += `
<div class="card">
  <div class="image"><img src="00-landing-page/image/${projects[i].img}.png"></div>
   <div class="content">
     <a href="#">
       <span class="title">
         ${i + 1}. ${projects[i].name}
       </span>
     </a>
     <p class="desc">
     ${projects[i].info}
     </p>
     <div class="button-container">
      <a class="action" target="_blank" href="${projects[i].liveLink}">
        <button class="live-button" id="btn">
         Live Demo
       </button>
      </a>
      <a class="action" target="_blank" href="${projects[i].demoLink}">
        <button class="live-button" id="btn">
          Source Code
        </button>
     </a>
     </div>
   </div>
 </div>
`
  }
}
renderProjects(projects);

const toggleBtn =document.querySelector('.play-links');
const sidebar =document.querySelector('.slider-links');

toggleBtn.addEventListener('click', ()=>{
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', ()=>{
  sidebar.classList.remove('show-sidebar');
})

