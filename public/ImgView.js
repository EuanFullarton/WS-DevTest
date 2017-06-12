var ImgView = function() {

}

ImgView.prototype = {

  changeImage:function(imgToHide, imgToShow){
    imgToHide.style.opacity = '0';
    imgToShow.style.opacity = '100';
  },

  nextImg: function(){

    var mainImages = document.getElementsByClassName('main-image');
    for (var i=0;i<mainImages.length;i+=1){
      if ((mainImages[i].style.opacity === '100') && (!mainImages[i + 1])){
        ImgView.changeImage(mainImages[i], mainImages[i-2]);
      }
      else if (mainImages[i].style.opacity === '100'){
        ImgView.changeImage(mainImages[i], mainImages[i+1]);
        return;
      }
    }
  },

  prevImg: function(){

    var mainImages = document.getElementsByClassName('main-image');

    for (var i=mainImages.length-1;i>=0;i-=1){
      if ((mainImages[i].style.opacity === '100') && (!mainImages[i - 1])){
        ImgView.changeImage(mainImages[i], mainImages[i+2]);
      }
      else if (mainImages[i].style.opacity === '100'){
        ImgView.changeImage(mainImages[i], mainImages[i-1]);
        return;
      }
    }
  }
}