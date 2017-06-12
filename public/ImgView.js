var ImgView = function() {

}

ImgView.prototype = {
  nextImg: function(){

    var mainImages = document.getElementsByClassName('main-image');

    for (var i=0;i<mainImages.length;i+=1){
      if ((mainImages[i].style.opacity === '100') && (!mainImages[i + 1])){
        mainImages[i].style.opacity = '0';
        mainImages[i - 2].style.opacity = '100';
      }
      else if (mainImages[i].style.opacity === '100'){
        mainImages[i].style.opacity = '0';
        mainImages[i + 1].style.opacity = '100';
        return;
      }
    }
  },

  prevImg: function(){

    var mainImages = document.getElementsByClassName('main-image');

    for (var i=mainImages.length-1;i>=0;i-=1){
      if ((mainImages[i].style.opacity === '100') && (!mainImages[i - 1])){
        mainImages[i].style.opacity = '0';
        mainImages[ i + 2 ].style.opacity = '100';
      }
      else if (mainImages[i].style.opacity === '100'){
        mainImages[i].style.opacity = '0';
        mainImages[i - 1].style.opacity = '100';
        return;
      }
    }
  }
}