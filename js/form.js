'use strict';
(function () {
  window.formSelect = document.querySelector('#upload-select-image');
  var uploadFile = formSelect.querySelector('#upload-file');
  var uploadFileWrapper = formSelect.querySelector('.upload-image');
  var formFrame = formSelect.querySelector('.upload-overlay');
  var formFrameCancel = formSelect.querySelector('.upload-form-cancel');
  var formDescr = formSelect.querySelector('.upload-form-description');
  window.resizeImage = formSelect.querySelector('.effect-image-preview');
  var checkboxContainer = formSelect.querySelector('.upload-effect-controls');
  var hashtag = formSelect.querySelector('.upload-form-hashtags');
  var effectContainer = formSelect.querySelector('.upload-effect-level');
  var effectPin = formSelect.querySelector('.upload-effect-level-pin');
  var effectLevel = formSelect.querySelector('.upload-effect-level-val');
  var closeFormFrame = function () {
    formFrame.classList.add('hidden');
    uploadFileWrapper.classList.remove('hidden');
  };
  uploadFile.addEventListener('change', function (evt) {
    uploadFileWrapper.classList.add('hidden');
    formFrame.classList.remove('hidden');
  });
  formFrameCancel.addEventListener('click', closeFormFrame);
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.data.ESC_KEYCODE) {
      if (formDescr === document.activeElement) {
        formFrame.classList.remove('hidden');
      } else {
        closeFormFrame();
      }
    }
  });
  window.scaleValue();
  effectContainer.style.display = 'none';
  checkboxContainer.addEventListener('click', function (event) {
    if (event.target.name === 'effect') {
      effectPin.style.left = '20%';
      effectLevel.style.width = '20%';
      var str = event.target.id;
      str = str.substr(7);
      resizeImage.classList.remove(resizeImage.classList[1]);
      resizeImage.classList.add(str);
      window.filterValue(91.2);
    }
    if (event.target.value === 'none') {
      effectContainer.style.display = 'none';
    } else {
      effectContainer.style.display = 'block';
    }
  }, true);
  effectPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var x = evt.clientX;
    var onMouseMove = function (moveEvt) {
      if (effectPin.offsetLeft <= 456 && effectPin.offsetLeft >= 0) {
        moveEvt.preventDefault();
        var shiftX = x - moveEvt.clientX;
        x = moveEvt.clientX;
        effectPin.style.left = (effectPin.offsetLeft - shiftX) + 'px';
        effectLevel.style.width = (effectPin.offsetLeft - shiftX) + 'px';
        if (effectPin.offsetLeft - shiftX >= 456) {
          effectPin.style.left = 455 + 'px';
        }
        if (effectPin.offsetLeft - shiftX <= 0) {
          effectPin.style.left = 1 + 'px';
        }
        window.filterValue(effectPin.offsetLeft - shiftX);
      }
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  formDescr.addEventListener('submit', function (evt) {
    if (!formDescr.validity.valid) {
      formDescr.style.borderColor = 'red';
    }
    if (!hashtag.validity.valid) {
      hashtag.style.borderColor = 'red';
    }
    formSelect.reset();
  });
})();
