//Smooth Scrolling
$('#navbar a, .btn, .showcase a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -150,
      },
      1000
    );
  }
});

//, #main-footer a

//Navbar Animation
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function(){
    if(window.pageYOffset > 100){
        navbar.classList.remove('top');
        if(!scrolled){
            navbar.style.transform= 'translateY(-10px)';
        }
        setTimeout(function(){
            navbar.style.transform= 'translateY(0px)';
        }, 100)
    }
    else {
        navbar.classList.add('top');
        scrolled= false;
    }
};