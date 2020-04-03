$('.slider-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-inner',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 975,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 358,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$('.header-menu-btn').on('click', function () {
  $('.main-menu').slideToggle();
});