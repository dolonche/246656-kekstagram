(function () {
  window.scaleValue = function () {
    var resizeImageValue = function () {
      resizeImage.style.transform = 'scale' + '(0.' + parseInt(window.resizeValue.value, 10) + ')';
    }
    window.resizeValue = window.formSelect.querySelector('.upload-resize-controls-value');
    var resizeControl = formSelect.querySelector('.upload-resize-controls');
    resizeControl.addEventListener('click', function (event) {
      if (event.target.classList[event.target.classList.length - 1] === 'upload-resize-controls-button-dec') {
        if (parseInt(resizeValue.value, 10) > parseInt(25, 10)) {
          resizeValue.value = parseInt(resizeValue.value, 10) - parseInt(25, 10) + '%';
          resizeImageValue();
        }
      } else if (event.target.classList[event.target.classList.length - 1] === 'upload-resize-controls-button-inc') {
        if (parseInt(resizeValue.value, 10) < parseInt(100, 10)) {
          resizeValue.value = parseInt(resizeValue.value, 10) + parseInt(25, 10) + '%';
          resizeImageValue();
          if (parseInt(resizeValue.value, 10) === parseInt(100, 10)) {
            resizeImage.style.transform = 'scale(1)';
          }
        }
      }
    }, true);
  }
})();
