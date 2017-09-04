'use strict';
(function () {
  var picturesList = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();
  var descr = window.data.picData();
  var renderPictureElement = function (descrItem) {
    var pictureElement = window.data.picturesTemplate.cloneNode(true);
    var pictureImg = pictureElement.querySelector('.picture img');
    var pictureComments = pictureElement.querySelector('.picture-comments');
    var pictureLikes = pictureElement.querySelector('.picture-likes');
    pictureImg.src = descrItem.url;
    pictureComments.textContent = descrItem.comments;
    pictureLikes.textContent = descrItem.likes;
    return pictureElement;
  };

  var renderPictures = function () {
    for (var i = 1; i < descr.length; i++) {
      fragment.appendChild(renderPictureElement(descr[i]));
    }
  };
  window.data.picData();
  renderPictures();
  picturesList.appendChild(fragment);
})();
