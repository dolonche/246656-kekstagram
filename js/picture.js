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
}
var randomComments = function () {
  var commentsValue = Math.round(Math.random());
  return picturesComments[commentsValue];
}
var pictures = [
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments()
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	},
  {
    url: 'photos/',
    likes: randomLikes(),
    comments: randomComments(),
	}
]
var renderPictureElement = function (pictures) {
  var pictureElement = picturesTemplate.cloneNode(true);
  var pictureImg = pictureElement.querySelector('.picture img');
  var pictureComments = pictureElement.querySelector('.picture-comments');
  var pictureLikes = pictureElement.querySelector('.picture-likes');
  pictureImg.src = pictures.url + i + '.jpg';
  pictureComments.textContent = pictures.comments;
  pictureLikes.textContent = pictures.likes;
  return pictureElement;
}
var renderGalleryItem = function (pictures) {
  var galleryElement = picturesTemplate.cloneNode(true);
  var galleryImage = gallery.querySelector('.gallery-overlay-image');
  var likesCount = gallery.querySelector('.likes-count');
  var commentsCount = gallery.querySelector('.comments-count');
  galleryImage.src = pictures.url + i + '.jpg';
  likesCount.textContent = pictures.likes;
  commentsCount.textContent = pictures.comments;
  return galleryElement;
}
var fragment = document.createDocumentFragment();
for (var i = 1; i < pictures.length; i++) {
  fragment.appendChild(renderPictureElement(pictures[i]));
  renderGalleryItem(pictures[i]);
}
picturesList.appendChild(fragment);