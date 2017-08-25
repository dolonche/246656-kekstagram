'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var gallery = document.querySelector('.gallery-overlay');
var picturesList = document.querySelector('.pictures');
var picturesTemplate = document.querySelector('#picture-template').content;
var fragment = document.createDocumentFragment();
var photoComments = ['Всё отлично!', 'В целом всё плохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var pictures = [];
var randomComments = function () {
  var commentsValue = Math.floor(Math.random() * (photoComments.length));
  return commentsValue;
};
var randomLikes = function () {
  var maxLikes = 200;
  var minLikes = 1;
  var likesValue = Math.floor(Math.random() * (maxLikes - minLikes)) + minLikes;
  return likesValue;
};
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

var renderPictures = function () {
  for (var i = 1; i < pictures.length; i++) {
    fragment.appendChild(renderPictureElement(pictures[i]));
  }
};
picData();
renderPictures();
picturesList.appendChild(fragment);
var pictureItem = document.querySelectorAll('.picture');
var galleryClose = gallery.querySelector('.gallery-overlay-close');
for (var k = 0; k < pictureItem.length; k++) {
  (function (index) {
    pictureItem[k].addEventListener('click', function (event) {
      event.preventDefault();
      gallery.classList.remove('hidden');
      renderGalleryItem(pictures[index + 1]);
    });
  })(k);
}
var closePopup = function () {
  gallery.classList.add('hidden');
};
galleryClose.addEventListener('click', closePopup);
galleryClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});
