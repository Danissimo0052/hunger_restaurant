

  function scrollAppear() {
    let introText = document.querySelectorAll('.text__description');
    
    for( let elem of introText){ 
      
      var introPosition = elem.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.9;
      if(introPosition< screenPosition){
        elem.classList.add('text__appear');
      } 
    }
  }

window.addEventListener('scroll', scrollAppear);

