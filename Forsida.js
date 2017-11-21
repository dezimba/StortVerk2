document.addEventListener('DOMContentLoaded', () => {
  fetchJSON();
  const content = document.querySelector('.content');
  // const Forsida = new Forsida();

  Forsida.init(content);
});

function fetchJSON() {
  //const videos = ('videos.json');
  const request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open('GET', 'videos.json', true);
  console.log(request);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.response);
      console.log(data);
    } else if (request.status > 400) {
      // villu melding
    }
  };

  request.onerror = function() {

  };

  request.send();
}

Forsida = (function() {

  let Sida;

  function createVideos (data) {
    const flokkar = data.categories;
    const myndb = data.videos;

    for(let i = 0; flokkar.length; i++) {
      const flokkur = flokkur[i];
      const elem = createDiv(flokkur, myndb);
    }
      // const elem = createDiv(flokkur, myndb);
  }

  function createDiv(flokkur, myndb) {
    const divFlokkur = document.createElement('Div');
    const Titill = document.createElement('H3');

    Titill.createTextNode(flokkur.title);
    divFlokkur.appendChild(Titill);

    for(let i = 0; i <= flokkur.videos.length; i++) {
      const id = flokkur.videos[i];
      const video = myndb.find (v => v.id === id);
      const elem = createVideo(video);
    }
  }

  function createVideo(video) {
    const divVideo = document.createElement('Div');
  }

  function init(content) {
    Sida = content;

  // content.addEventListener('click', ); // fallið sem ræsir queryselector
  }

  return {
    init: init
  }
})();
