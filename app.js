import ImageFigure from './assets/js/ImageFigure.js';
import articles from './assets/js/articles.js';
import ArticleItem from './assets/js/ArticleItem.js';
import ArticleList from './assets/js/ArticleList.js';

// const containerElement = document.querySelector('.container');

// const articleItemElement = document.createElement('article-item');
// articleItemElement.article = article;

// containerElement.appendChild(articleItemElement);

const articleListElement = document.createElement('article-list');
articleListElement.articles = articles;

document.body.appendChild(articleListElement);
