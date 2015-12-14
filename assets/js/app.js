var app =  angular.module('blog',['ngRoute','slickCarousel']);

app.config(function($routeProvider){
  $routeProvider
  .when('/home',
  {
    templateUrl:'pg/site.html'
  })
  .when('/galeria',
  {
    templateUrl:'pg/galeria.html'
  })
  .otherwise({ redirectTo:'/home'});
});


app.config(function(){
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  /* ==============================
  1. Scroll ref http://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
  ============================== */
  $('#minimenu > ul > li > a').on('click', function (e) {
    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-90
    }, 900, 'swing', function () {
    });
    // console.log(window.location);
    return false;
  });
});
