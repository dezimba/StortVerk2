document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form'); // Breyta querySelector

  Spilari.init();
});

var Spilari = (function() {
  
  function init() {
    nr = form.querySelector('#number');
    texti = results;

    form.addEventListener('submit', findCar);
  }

  return {
    init: init
  }
})();
