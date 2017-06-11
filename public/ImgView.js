var ImgView = function() {

}

ImgView.prototype = {
  nextImg: function(){

    var mainImages = document.getElementsByClassName('main-image');

    for (var i=0;i<mainImages.length;i+=1){
      if ((mainImages[i].style.display === 'block') && (!mainImages[i + 1])){
        mainImages[i].style.display = 'none';
        mainImages[i - 2].style.display = 'block';
      }
      else if (mainImages[i].style.display === 'block'){
        mainImages[i].style.display = 'none';
        mainImages[i + 1].style.display = 'block';
        return;
      }
    }
  },

  prevImg: function(){

    var mainImages = document.getElementsByClassName('main-image');

    for (var i=0;i<mainImages.length;i+=1){
      if ((mainImages[i].style.display === 'block') && (!mainImages[i - 1])){
        mainImages[i].style.display = 'none';
        mainImages[i + 2].style.display = 'block';
      }
      else if (mainImages[i].style.display === 'block'){
        mainImages[i].style.display = 'none';
        mainImages[i - 1].style.display = 'block';
        return;
      }
    }
  }
}