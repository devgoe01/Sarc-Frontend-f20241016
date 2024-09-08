document.addEventListener("DOMContentLoaded", () => {
  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousel__item');

  document.getElementById('but_ton2').addEventListener("click", function() {
      moveToNextSlide();
    });
  document.getElementById('but_ton1').addEventListener("click", function() {
      moveToPrevSlide();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
    slides[slidePosition+1].classList.add('carousel__item--visible');
    slides[slidePosition+2].classList.add('carousel__item--visible');
    slides[slidePosition+3].classList.add('carousel__item--visible');
    slides[slidePosition+4].classList.add('carousel__item--visible');
    slides[slidePosition+5].classList.add('carousel__item--visible');
    slides[slidePosition+6].classList.add('carousel__item--visible');
  }

  function moveToNextSlide() {
    if (slidePosition === 16) {
      document.getElementById("but_ton2").style.opacity ="63%";
      slidePosition = slidePosition;
    } 
    else if(slidePosition===0){document.getElementById("but_ton1").style.opacity ="63%";
      slidePosition=slidePosition+4;
    }
    else {
      document.getElementById("but_ton2").style.opacity ="100%";
      document.getElementById("but_ton1").style.opacity ="100%";
      slidePosition=slidePosition+4;
    }

    updateSlidePosition();
    
  }

  function moveToPrevSlide() {
    if (slidePosition === 0 ) {
      slidePosition = 0;
      document.getElementById("but_ton1").style.opacity ="63%";
    } 
    else if(slidePosition===16){document.getElementById("but_ton2").style.opacity ="63%";
      slidePosition=slidePosition-4;
    }
    else {
      document.getElementById("but_ton1").style.opacity ="100%";
      document.getElementById("but_ton2").style.opacity ="100%";
      slidePosition=slidePosition-4;
    }

    updateSlidePosition();
  }


 
  let slidePositionz = 0;
  const slidezs = document.getElementsByClassName('restaurant');

  document.getElementById('but_ton4').addEventListener("click", function() {
      moveToNextSlidez();
    });
  document.getElementById('but_ton3').addEventListener("click", function() {
      moveToPrevSlidez();
    });

  function updateSlidezPosition() {
    for (let slidez of slidezs) {
      slidez.classList.remove('restaurant--visible');
      slidez.classList.add('restaurant--hidden');
    }

    slidezs[slidePositionz].classList.add('restaurant--visible');
    slidezs[slidePositionz+1].classList.add('restaurant--visible');
    slidezs[slidePositionz+2].classList.add('restaurant--visible');
    slidezs[slidePositionz+3].classList.add('restaurant--visible');
  }

  function moveToNextSlidez() {
    console.log(slidePositionz)
    if (slidePositionz === 4) {
      slidePositionz = slidePositionz;
    } else {
      slidePositionz=slidePositionz+2;
    }

    updateSlidezPosition();
    
  }

  function moveToPrevSlidez() {
    if (slidePositionz === 0 ) {
      slidePositionz = 0;
    } else {
      slidePositionz=slidePositionz-2;
    }

    updateSlidezPosition();
  }})