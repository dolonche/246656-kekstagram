'use strict';

window.initializeScale = (function (resizeValue, resizeObject) {
    var resizeImageValue = function () {
      resizeObject.style.transform = 'scale' + '(0.' + parseInt(resizeValue.value, 10) + ')';
    };
    var resizeControl = document.querySelector('#upload-select-image').querySelector('.upload-resize-controls');
    resizeControl.addEventListener('click', function (event) {
      if (event.target.classList[event.target.classList.length - 1] === 'upload-resize-controls-button-dec') {
        if (parseInt(resizeValue.value, 10) > parseInt(25, 10)) {
          resizeValue.value = parseInt(resizeValue.value, 10) - parseInt(25, 10) + '%';
          resizeImageValue(resizeValue);
        }
      } else if (event.target.classList[event.target.classList.length - 1] === 'upload-resize-controls-button-inc') {
        if (parseInt(resizeValue.value, 10) < parseInt(100, 10)) {
          resizeValue.value = parseInt(resizeValue.value, 10) + parseInt(25, 10) + '%';
          resizeImageValue(resizeValue);
          if (parseInt(resizeValue.value, 10) === parseInt(100, 10)) {
            resizeObject.style.transform = 'scale(1)';
          }
        }
      }
    }, true);
});
