(function () {
  window.filterValue = function (shift) {
    switch (window.resizeImage.classList[1]) {
      case 'effect-chrome':
        window.resizeImage.style.filter = 'grayscale(' + ((shift) / 456) + ')';
        break;
      case 'effect-sepia':
        window.resizeImage.style.filter = 'sepia(' + ((shift) / 456) + ')';
        break;
      case 'effect-marvin':
        window.resizeImage.style.filter = 'invert(' + ((shift) / 4.56) + '%)';
        break;
      case 'effect-phobos':
        window.resizeImage.style.filter = 'blur(' + ((shift) / 152) + 'px)';
        break;
      case 'effect-heat':
        window.resizeImage.style.filter = 'brightness(' + ((shift) / 152) + ')';
        break;
    }
  };
})();
