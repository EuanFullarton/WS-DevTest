var app = function (){

  this.ImgView = new ImgView();

  var mainImagesToHide = document.getElementsByClassName('main-image');
  for (var i=0;i<mainImagesToHide.length;i+=1){
    mainImagesToHide[i].style.display = 'none';
  }

  var mainImageToDisplay = document.getElementById('main-img1');
  mainImageToDisplay.style.display = 'block';

  var leftButton = document.getElementById('left-btn');
  var rightButton = document.getElementById('right-btn');
  leftButton.addEventListener('click', ImgView.prevImg);
  rightButton.addEventListener('click', ImgView.nextImg);

}

window.onload = app;