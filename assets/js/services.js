app.service("galeriaApi",function (){

  _galerias = [
    {
      name :  "Galeria A",
      imagesCount : 2,
      folder :  1
    },
    {
      name :  "Galeria B",
      imagesCount : 5,
      folder : 2
    },
    {
      name :  "Galeria C",
      imagesCount : 3,
      folder : 3
    },
    {
      name :  "Galeria D",
      imagesCount : 1,
      folder : 4
    }
  ];

  this.GetGaleria =  function(){
    var galeriaLasts = [];
    for (var i = _galerias.length-1; i >= 0; i--) {
      galeriaLasts.push(_galerias[i]);
    }
    return galeriaLasts;
  };

  this.GetGaleriaLatest =  function()
  {
    var galeriaLasts = [];
    for (var i = _galerias.length-1; i >= _galerias.length-3; i--) {
      galeriaLasts.push(_galerias[i]);
    }
    return galeriaLasts;
  };

});

app.service("equipeApi",function (){

  _equipe = [
    {
      id :  1,
      nome : 'Carol',
      cargo :  'Aux',
      img : 'assets/images/equipe/1.jpg'
    },
    {
      id :  2,
      nome : 'Cristina',
      cargo :  'Aux',
      img : 'assets/images/equipe/2.jpg'
    },
    {
      id :  3,
      nome : 'Lucas',
      cargo :  'Médico',
      img : 'assets/images/equipe/3.jpg'
    },
    {
      id :  4,
      nome : 'Isabele',
      cargo :  'Médico',
      img : 'assets/images/equipe/4.jpg'
    },
    {
      id :  5,
      nome : 'Jorge',
      cargo :  'Médico',
      img : 'assets/images/equipe/5.jpg'
    },
    {
      id :  6,
      nome : 'Matias',
      cargo :  'Médico',
      img : 'assets/images/equipe/6.jpg'
    }
  ];

  this.GetEquipe =  function(){
    var retorno = [];
    for (var i = _equipe.length-1; i >= 0; i--) {
      retorno.push(_equipe[i]);
    }
    return retorno;
  };

});
