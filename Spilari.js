/*
*var Spilaris = (function() {
*
*  function init() {
*    nr = form.querySelector('#number');
*    texti = results;
*
*    form.addEventListener('submit', findCar);
*  }
*
*  return {
*    init: init
*  }
*})();
*/

class Spilari {
/*
* í smiðnum upphafsstillum við breytur
* búum til takka og bætum við eventListener
*/
  constructor() { // smiður
  // Upphafstilum breytur
    this.id = null;
    this.videos = null;
    this.categories = null;

    this.isPlaying = false;
    this.ismute = false;

    /* upphafstillum takka
    this.playButton = document.querySelector('.playButton');
    this.muteButton = document.querySelector('.muteButton');
    this.fullscreenButton = document.querySelector('.fullscreenButton');
    this.forwardButton = document.querySelector('.forwardButton');
    this.backwardsButton = document.querySelector('.backwardsButton');
    this.playOverlay = document.querySelector('.vidPlayer')

  // Bætum við eventListener á alla takkana
    this.playTakki.addEventListener('click', this.play.bind(this));
    this.muteTakki.addEventListener('click', this.mute.bind(this));
    this.fullscreenTakki.addEventListener('click', this.fullscreen.bind(this));
    this.forwardTakki.addEventListener('click', this.forward.bind(this));
    this.backwardsTakki.addEventlistener('click', this.backward.bind(this));*/
  }

  play() {

  }

/*
* ATH það má aleg breyta nöfnum á föllum og breyta uppröðun.
* Á pottþétt eftir að breytast þegar við komum Forsida.js til að virka
*/


/*
* Sýnir skilaboð þegar verið er að hlaða niður gögnum
*/
  showLoad() {

  }

/*
* Felur sömu skilaboð
*/
  hideLoad() {

  }

/*
* Sýnir villuskilaboð
* Birtir villuskilaboð sem koma fram í Forsida.js
*
*/
  showError(e) {

  }

/*
* Smíðum HTML sem er útlit spilarans
* Hlöðum inn const(header/img/source) úr þeirra fylkjum.
* Búum svo til header
* Gerum videoImg undir, sem er .poster úr videos.json
* Gerum "playOverlay" þegar playtakki kemur yfir mynband
*/
  loadHTML() {

  }

/*
* Undirbýr spilara fyrir spilun
*/
  preparePlayer() {

  }

/*
* fall þar sem við hlöðum inn myndbandi
* þurfum að nota JSON til að sækja gögn
* græja villur fyrir 200/400
*
*/
  fetchJSON() {
    const request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', 'videos.json', true);
    console.log(request);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response);
        console.log(data);
        this.createVideos(data);
      } else if (request.status >= 400) {
        // villu melding
      }
    };

    request.onerror = () => {

    };

    request.send();
  }


/*
* Athugum hvort sé verið að spila myndband
* ef verið er að spila myndband birtum við pause takka/img
* ef það er ekki verið að spila þá birtum við
* spila takka/img
*/
  play() {

  }

/*
* Gerum mute takkann
* gerum hann virkann og "breytum" img.
* Ef mute = false -> sýnum mute takka/img
* Ef mute = true -> sýnum unmute takka/img
*/
  mute() {

  }

// Virkni á fullscreen takkann
  fullscreen() {
  this.video.webkitRequestFullScreen();
  }

// Virkni á 'spóla áfram takkann'
  forward() {
  this.video.currentTime = this.video,currentTime + 3;
  }

// Virkni á 'spóla afturábak takkann'
  backward() {
  this.video.currentTime = this.video,currentTime - 3;
   }

}

function onVideo() {
  return document.getElementById() != null;
}

document.addEventListener('DOMContentLoaded', () => {
  const p = new Spilari();
  // p.load();
  this.fetchJSON();
});
