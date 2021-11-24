const aplicacion = angular.module("universidadApp", []);

aplicacion.controller("profesorCtrl", function () {
  this.profesor = {
    nombre: "Carlos Ernesto Díaz Basante",
    bio: "Hola, un gusto en conocerte, espero que podamos llevarnos bien y aprender mucho sobre Angularjs",
    edad: 23,
    foto: "../img/carlosd.jpg",
  };
});
