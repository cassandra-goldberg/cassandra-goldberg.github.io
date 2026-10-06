// Keep the four most recent entries visible; older news uses a native disclosure.
// Without JavaScript, the complete list remains readable.
(function () {
  var news = document.querySelector('.home .news-list');
  if (!news || news.children.length <= 4) return;

  var archive = document.createElement('details');
  archive.className = 'news-archive';

  var summary = document.createElement('summary');
  summary.textContent = 'Show older news';
  archive.appendChild(summary);

  var olderNews = document.createElement('ul');
  olderNews.className = 'news-list';
  Array.prototype.slice.call(news.children, 4).forEach(function (entry) {
    olderNews.appendChild(entry);
  });
  archive.appendChild(olderNews);
  news.insertAdjacentElement('afterend', archive);

  archive.addEventListener('toggle', function () {
    summary.textContent = archive.open ? 'Show less news' : 'Show older news';
  });
}());
