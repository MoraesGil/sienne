app.controller('equipeCtrl' , function ($scope,equipeApi){

  $scope.equipe = equipeApi.GetEquipe();

  $scope.slickConfig = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4,
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
  };

});

app.controller('servicosCtrl' , function ($scope){

  servicos = [
    {
      nome : "",
      conteudo : ""
    },
  ]


});

app.controller('galeriaCtrl' , function ($scope,$location,galeriaApi){

  if($location.path() == "/home"){
    $scope.galerias = galeriaApi.GetGaleriaLatest();
  }
  else {
    $scope.galerias = galeriaApi.GetGaleria();
  }

  $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

});

app.controller('contatoCtrl' , function ($scope){



  // function initMap() {
  //
  //   var local = {lat: -22.1060075, lng: -51.4641155};
  //   var map = new google.maps.Map(document.getElementById('minimap'), {
  //     center: local,
  //     zoom : 17,
  //     zoomControl : false,
  //     mapTypeControl : false,
  //     scaleControl : false,
  //     streetViewControl : false,
  //     scrollwheel:false,
  //     panControl : false
  //   });
  //   var infowindow = new google.maps.InfoWindow;
  //   infowindow.setContent('Sienne Ville<br/> <a href="https://www.google.com.br/maps/dir//-22.106,-51.4641111/@-22.1061669,-51.4641111,244m/data=!3m1!1e3!4m5!1m4!3m3!1s0x0:0x0!2zMjLCsDA2JzIxLjYiUyA1McKwMjcnNTAuOCJX!3b1" target="_blank"> Como chegar</a>');
  //
  //
  //   // var pointerUrl = 'images/pointer.png'
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: local,
  //     title : 'Clique para mais.'
  //   });
  //
  //   marker.addListener('click', function() {
  //     infowindow.open(map, marker);
  //   });
  //   infowindow.open(map,marker);
  // }
});

app.controller('blogCtrl' , function ($scope){
  /* ==============================
  1. Close Nav Menu Mobile
  ============================== */
  



});
