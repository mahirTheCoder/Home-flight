// !----------counter plugin

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// !--------------slick slider


$('.destinationsSlider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
  arrows: true
});