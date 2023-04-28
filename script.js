window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.style.top = Math.max(0, window.scrollY > 0) + 'px';
});