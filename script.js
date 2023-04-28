window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.style.top = Math.max(0, window.scrollY > 0) + 'px';
});

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.addEventListener('click', function() {
    dots.forEach(dot => {
      dot.classList.remove('dot_active');
    });
    this.classList.add('dot_active');
  });
});

const btnMain = document.querySelector('.btn_main');
btnMain.addEventListener('click', () => {
  if (btnMain.classList.contains('btn_pressed')) {
    btnMain.classList.remove('btn_pressed');
  } else {
    btnMain.classList.add('btn_pressed');
  }
});

const btnFooter = document.querySelector('.btn_footer_sec');
btnFooter.addEventListener('click', () => {
  if (btnFooter.classList.contains('btn_pressed_footer')) {
    btnFooter.classList.remove('btn_pressed_footer');
  } else {
    btnFooter.classList.add('btn_pressed_footer');
  }
});

const btnFooterCall = document.querySelector('.btn_footer');
btnFooterCall.addEventListener('click', () => {
  if (btnFooterCall.classList.contains('btn_footer_call_pressed')) {
    btnFooterCall.classList.remove('btn_footer_call_pressed');
  } else {
    btnFooterCall.classList.add('btn_footer_call_pressed');
  }
});