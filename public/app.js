var app = function (){

  document.body.style.zoom="100%"

  this.ImgView = new ImgView();

  var mainImageToDisplay = document.getElementById('main-img1');
  mainImageToDisplay.style.opacity = '100';

  var leftButton = document.getElementById('left-btn');
  var rightButton = document.getElementById('right-btn');
  leftButton.addEventListener('click', ImgView.prevImg);
  rightButton.addEventListener('click', ImgView.nextImg);

}

window.onload = app;