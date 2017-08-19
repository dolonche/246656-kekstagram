'use strict' ;
document.querySelector('.upload-form').classList.add('hidden');
var gallery = document.querySelector('.gallery-overlay');
gallery.classList.remove('hidden');
var picturesList = document.querySelector('.pictures');
var picturesTemplate = document.querySelector('#picture-template').content;
var picturesComments = ['Все отлично!', 'В целом все плохо. Но не все'];
var maxLikes = 201;
var minLikes = 1;
var randomLikes = function () {
	var likesValue = Math.floor(Math.random() * (maxLikes - minLikes)) + minLikes;
	return likesValue;
}
var randomComments = function () {
	var commentsValue = Math.round(Math.random());
	return picturesComments[commentsValue];
}
var pictures = [
	{
		url: 'photos/1.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/2.jpg',
		likes: randomLikes(),
		comments: randomComments()
	},
	{
		url: 'photos/3.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/4.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/5.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/6.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/7.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/8.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/9.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/10.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/11.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/12.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/13.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/14.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/15.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/16.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/17.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/18.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/19.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/20.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/21.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/22.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/23.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/24.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	},
	{
		url: 'photos/25.jpg',
		likes: randomLikes(),
		comments: randomComments(),
	}
]
var renderPictureElement = function (pictures) {
	var pictureElement = picturesTemplate.cloneNode(true);
	pictureElement.querySelector('.picture img').src = pictures.url;
	pictureElement.querySelector('.picture-comments').textContent = pictures.comments;
	pictureElement.querySelector('.picture-likes').textContent = pictures.likes;
	return pictureElement;
}
var renderGalleryItem = function (pictures) {
	var galleryElement = picturesTemplate.cloneNode(true);
	gallery.querySelector('.gallery-overlay-image').src = pictures.url;
	gallery.querySelector('.likes-count').textContent = pictures.likes;
	gallery.querySelector('.comments-count').textContent = pictures.comments;
	return galleryElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i <= pictures.length - 1; i++) {
	fragment.appendChild(renderPictureElement(pictures[i]));
	renderGalleryItem(pictures[i]);
}
picturesList.appendChild(fragment);