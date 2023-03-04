var pie = document.getElementById("pie");
var contenedor = document.getElementById("contenedor");
alturaFooter = pie.offsetHeight;
pie.style.marginTop = alturaFooter * -1 + "px";
contenedor.style.paddingBottom = alturaFooter + "px";