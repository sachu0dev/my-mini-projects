const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) =>{
  const id = e.target.dataset.id;
  if(id){
    // remove active class from all buttons
    btns.forEach((btn)=>{
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // remove active class from all articles
    articles.forEach((article)=>{
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});