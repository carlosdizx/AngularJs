const aplicacion = angular.module("universidadApp", []);

aplicacion.controller("productoCtrl", function () {
  this.productos = [];
  this.cantidad = this.productos.length;
});
