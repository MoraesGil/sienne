
$(document).ready(function(){
  /* ==============================
  1. Close Nav Menu Mobile
  ============================== */
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  /* ==============================
  1. Start Carousel Equipe
  ============================== */
  $('.slider').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* ==============================
  1. Scroll ref http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
  ============================== */
  $('#minimenu > ul > li > a').on('click', function (e) {
    // e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-90
    }, 900, 'swing', function () {
    });

    console.log(window.location);

    return false;
  });

  /* ==============================
  GMAPS
  ============================== */


  // ======== //
});  // ========CLOSE MAIN
