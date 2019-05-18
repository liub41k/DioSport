import { log } from 'util';

window.addEventListener('scroll', addCounter);

function addCounter() {
  const counters = document.querySelectorAll('.js-counters');
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll > 1000) {
    for (let i = 0; i < counters.length; i++) {
      const el = counters[i];
      el.classList.add('counter');
    }
	
    // counter animation
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum + '+');
          //alert('finished');
        }
      });
    });
    // counter animation
	
    window.removeEventListener('scroll', addCounter);
  }
};

