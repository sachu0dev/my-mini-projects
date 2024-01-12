const projects = [
  {
    name: "1. Color Flipper",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../01-color-flipper/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/01-color-flipper",
    img: "img1",
  },
  {
    name: "2. Counter",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../02-counter/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/02-counter",
    img: "img2"
  },
  {
    name: "3. Reviews",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../03-reviews/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/03-reviews",
    img: "img3"
  },
  {
    name: "4. Navbar",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../04-navbar/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/04-navbar",
    img: "img4"
  },
  {
    name: "5. Sidebar",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../05-sidebar/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/05-sidebar",
    img: "img5"
  },
  {
    name: "6. Modal",
    info: "Experience dynamic design with our Color Change Mini Project. Click the button, and watch as the website's background transforms into a burst of vibrant, random colors, creating a visually engaging and interactive experience.",
    liveLink: "../06-modal/index.html",
    demoLink: "https://github.com/sachu0dev/15-mini-JavaScript-projects/tree/main/06-modal",
    img: "img6"
  }
];


const projectCard = document.querySelector('.projects');

function renderProjects(projects){
  for(let i = 0; i < projects.length; i++){
    projectCard.innerHTML += `
<div class="card">
  <div class="image"><img src="00-landing-page/image/${projects[i].img}.png"></div>
   <div class="content">
     <a href="#">
       <span class="title">
         ${projects[i].name}
       </span>
     </a>
     <p class="desc">
     ${projects[i].info}
     </p>
     <div class="button-container">
      <a class="action" href="${projects[i].liveLink}">
        <button class="live-button">
         Live Demo
       </button>
      </a>
      <a class="action" href="${projects[i].demoLink}">
        <button class="live-button">
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

