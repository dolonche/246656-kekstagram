'use strict';
var gallery = document.querySelector('.gallery-overlay');
var picturesList = document.querySelector('.pictures');
var picturesTemplate = document.querySelector('#picture-template').content;
var picturesComments = ['Все отлично!', 'В целом все плохо. Но не все'];
document.querySelector('.upload-form').classList.add('hidden');
gallery.classList.remove('hidden');
var randomLikes = function () {
  var maxLikes = 200;
  var minLikes = 1;
  var likesValue = Math.floor(Math.random() * (maxLikes - minLikes)) + minLikes;
  return likesValue;
};
var randomComments = function () {
  var commentsValue = Math.round(Math.random());
  return picturesComments[commentsValue];
};
var pictures = [];
var picData = function () {
  for (var i = 0; i < 25; i++) {
    var photo = {
      url: 'photos/' + i + '.jpg',
      likes: randomLikes(),
      comments: randomComments(),
    };
    pictures.push(photo);
  }
};
picData();
debugger;
var renderPictureElement = function (picture) {
  var pictureElement = picturesTemplate.cloneNode(true);
  var pictureImg = pictureElement.querySelector('.picture img');
  var pictureComments = pictureElement.querySelector('.picture-comments');
  var pictureLikes = pictureElement.querySelector('.picture-likes');
  pictureImg.src = picture.url;
  pictureComments.textContent = picture.comments;
  pictureLikes.textContent = picture.likes;
  return pictureElement;
};
var renderGalleryItem = function (picture) {
  var galleryElement = picturesTemplate.cloneNode(true);
  var galleryImage = gallery.querySelector('.gallery-overlay-image');
  var likesCount = gallery.querySelector('.likes-count');
  var commentsCount = gallery.querySelector('.comments-count');
  galleryImage.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments;
  return galleryElement;
};
var fragment = document.createDocumentFragment();
for (var i = 1; i < pictures.length; i++) {
  fragment.appendChild(renderPictureElement(pictures[i]));
  renderGalleryItem(pictures[i]);
}
picturesList.appendChild(fragment);
