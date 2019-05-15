import slick from 'slick-carousel';

const heroSlider = $('.js-hero-slider');
heroSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  customPaging: (slider, pageIndex) => {
    return $('<button class="dots"></button>');
  },
  dotsClass: 'small-dots',
});


// TESTIMONIALS
const testimonialSlider = $('.js-testimonials-slider');

const testimonialParent = testimonialSlider.parents('.js-testimonials-slider-wrap');
let prev = $('.js-arrow-prev', testimonialParent);
let next = $('.js-arrow-next', testimonialParent);

testimonialSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: prev,
  nextArrow: next
});
