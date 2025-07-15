// !----------counter plugin

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// !--------------slick slider


$('.destinationsSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  prevArrow: '<button><i class="fa-solid fa-arrow-left prevcustoms rrr"></i></button>',
  nextArrow: '<button><i class="fa-solid fa-arrow-right prevcustoms nrr "></i></button>',
  dots: true,

});



// $('.destinationsSlider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
//   nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',

// });


// !-------------- popular slick slider


$('.popularSliderr').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
  dots: true,
  // prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
  // nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
});