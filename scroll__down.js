function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  function animation(currentTime){
  if(startTime == null) startTime = currentTime;
  var timeElapsed = currentTime - startTime;
  var run = ease(timeElapsed, startPosition, distance, duration);
  window.scrollTo(0, run);
  if(timeElapsed < duration) requestAnimationFrame(animation);
}

function ease (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t --;
	return -c/2 * (t*(t - 2) - 1) + b;
}


requestAnimationFrame(animation);
}


var btn__down = document.querySelector('.btn__down');
var about__down = document.getElementById('about');
var team__down = document.getElementById('team');
var booking__down = document.getElementById('booking');
var menu__down = document.getElementById('menu');
var galerie__down = document.getElementById('galerie');
var events__down = document.getElementById('events');
var contact__down = document.getElementById('contact');
var book__table = document.getElementById('book__table');
var explore = document.getElementById('explore');

btn__down.addEventListener('click', function(){
  smoothScroll('.about__img', 1000);
});

about__down.addEventListener('click', function(){
  smoothScroll('.about__img', 1000);
});

team__down.addEventListener('click', function(){
  smoothScroll('.master__chef__img', 1000);
});

booking__down.addEventListener('click', function(){
  smoothScroll('#booking__img', 1000);
});

menu__down.addEventListener('click', function(){
  smoothScroll('#menu__title', 1000);
});

galerie__down.addEventListener('click', function(){
  smoothScroll('.gallery', 1000);
});

events__down.addEventListener('click', function(){
  smoothScroll('.private__events', 1000);
});

contact__down.addEventListener('click', function(){
  smoothScroll('#contact__title', 1000);
});
  
book__table.addEventListener('click', function(){
  smoothScroll('#booking__img', 1000);
});

explore.addEventListener('click', function(){
  smoothScroll('#contact__title', 1000);
});