const form = document.queryselector("form");
form.addeventlistener("enviar", function(e) {
  e.preventdefault();
  alert("Gracias por su mensaje! Le responderemos a la brevedad.");
});