document.addEventListener('DOMContentLoaded', () => {
  fetchJSON();
  const content = document.querySelector('.content');
  // const Forsida = new Forsida();

  Forsida.init();
});

function fetchJSON() {
  const videos = ('videos.json');
  const request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open('GET', 'videos.json', true);
  console.log(request);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.response);

      show(data.results[0]);
    } else if (request.status > 400) {
      // villu melding
    }
  };

  request.onerror = function() {

  };

  request.send();
}

Forsida = (function() {

  function init() {


  // form.addEventListener('click', );
  }

  return {
    init: init
  }
})();
