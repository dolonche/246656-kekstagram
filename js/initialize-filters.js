'use strict';
(function () {
  window.initializeFilters = function (filterObject, shift) {
    switch (filterObject.classList[1]) {
      case 'effect-chrome':
        filterObject.style.filter = 'grayscale(' + ((shift) / 456) + ')';
        break;
      case 'effect-sepia':
        filterObject.style.filter = 'sepia(' + ((shift) / 456) + ')';
        break;
      case 'effect-marvin':
        filterObject.style.filter = 'invert(' + ((shift) / 4.56) + '%)';
        break;
      case 'effect-phobos':
        filterObject.style.filter = 'blur(' + ((shift) / 152) + 'px)';
        break;
      case 'effect-heat':
        filterObject.style.filter = 'brightness(' + ((shift) / 152) + ')';
        break;
    }
  };
})();
