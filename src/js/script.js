$(document).ready(function () {
  $('.promo__carousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/promo_carousel/left_arrow.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/promo_carousel/right_arrow.png" alt="arrow"></button>',
    speed: 1200,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          autoplaySpeed: 1600,
          autoplay: true,
        }
      },
    ],
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog__fade').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/main_carousel/left_arrow.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/main_carousel/right_arrow.svg" alt="arrow"></button>',
    speed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      },
    ],
  });

  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
  hamburger.addEventListener('click', function () {
    menu.classList.add('active');
  });
  close.addEventListener('click', function () {
    menu.classList.remove('active');
  });
});