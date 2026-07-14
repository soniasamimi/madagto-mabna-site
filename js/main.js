document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.querySelector('.nav-toggle-btn');
  var nav = document.querySelector('.main-nav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', function () { nav.classList.toggle('open'); });
  }
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-filter');
      projectCards.forEach(function (card) {
        card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? '' : 'none';
      });
    });
  });
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var lb = document.getElementById('lb-' + card.getAttribute('data-project'));
      if (lb) { lb.classList.add('open'); document.body.style.overflow='hidden'; }
    });
  });
  document.querySelectorAll('.lightbox-overlay').forEach(function(lb) {
    lb.addEventListener('click', function(e) { if (e.target===lb) closeLightbox(); });
  });
  document.querySelectorAll('.gallery-thumb img').forEach(function(img) {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      var v = document.getElementById('imgViewer');
      if (v) { document.getElementById('viewerImg').src=img.src; v.classList.add('open'); }
    });
  });
  var iv = document.getElementById('imgViewer');
  if (iv) iv.addEventListener('click', function(e) { if (e.target===this) closeViewer(); });
  document.addEventListener('keydown', function(e) { if (e.key==='Escape') { closeLightbox(); closeViewer(); } });
});
function closeLightbox() {
  document.querySelectorAll('.lightbox-overlay').forEach(function(lb){lb.classList.remove('open');});
  document.body.style.overflow='';
}
function closeViewer() { var v=document.getElementById('imgViewer'); if(v) v.classList.remove('open'); }
