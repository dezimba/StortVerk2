'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Spilari = function () {
  /*
  * í smiðnum upphafsstillum við breytur
  * búum til takka og bætum við eventListener
  */
  function Spilari() {
    _classCallCheck(this, Spilari);

    // smiður
    // Upphafstilum breytur
    this.id = null;
    this.videos = null;
    this.categories = null;

    this.isPlaying = false;
    this.ismute = false;

    // upphafstillum takka
    this.playTakki = document.querySelector('.playTakki');
    this.muteTakki = document.querySelector('.muteTakki');
    this.fullscreenTakki = document.querySelector('.fullscreenTakki');
    this.forwardTakki = document.querySelector('.forwardTakki');
    this.backwardsTakki = document.querySelector('.backwardsTakki');
    this.container = document.querySelector('.vidContainer');

    // Bætum við eventListener á alla takkana
    this.playTakki.addEventListener('click', this.play.bind(this));
    this.muteTakki.addEventListener('click', this.mute.bind(this));
    this.fullscreenTakki.addEventListener('click', this.fullscreen.bind(this));
    this.forwardTakki.addEventListener('click', this.forward.bind(this));
    this.backwardsTakki.addEventlistener('click', this.backward.bind(this));
  }

  /*
  * ATH það má aleg breyta nöfnum á föllum og breyta uppröðun.
  * Á pottþétt eftir að breytast þegar við komum Forsida.js til að virka
  */

  /*
  * Sýnir skilaboð þegar verið er að hlaða niður gögnum
  */


  _createClass(Spilari, [{
    key: 'showLoad',
    value: function showLoad() {}

    /*
    * Felur sömu skilaboð
    */

  }, {
    key: 'hideLoad',
    value: function hideLoad() {}

    /*
    * Sýnir villuskilaboð
    * Birtir villuskilaboð sem koma fram í Forsida.js
    *
    */

  }, {
    key: 'showError',
    value: function showError(e) {}

    /*
    * Smíðum HTML sem er útlit spilarans
    * Hlöðum inn const(header/img/source) úr þeirra fylkjum.
    * Búum svo til header
    * Gerum videoImg undir, sem er .poster úr videos.json
    * Gerum "playOverlay" þegar playtakki kemur yfir mynband
    */

  }, {
    key: 'loadHTML',
    value: function loadHTML() {}

    /*
    * Undirbýr spilara fyrir spilun
    */

  }, {
    key: 'preparePlayer',
    value: function preparePlayer() {}

    /*
    * fall þar sem við hlöðum inn myndbandi
    * þurfum að nota JSON til að sækja gögn
    * græja villur fyrir 200/400
    *
    */

  }, {
    key: 'load',
    value: function load() {}

    /*
    * Athugum hvort sé verið að spila myndband
    * ef verið er að spila myndband birtum við pause takka/img
    * ef það er ekki verið að spila þá birtum við
    * spila takka/img
    */

  }, {
    key: 'play',
    value: function play() {}

    /*
    * Gerum mute takkann
    * gerum hann virkann og "breytum" img.
    * Ef mute = false -> sýnum mute takka/img
    * Ef mute = true -> sýnum unmute takka/img
    */

  }, {
    key: 'mute',
    value: function mute() {}

    // Virkni á fullscreen takkann

  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      this.video.webkitRequestFullScreen();
    }

    // Virkni á 'spóla áfram takkann'

  }, {
    key: 'forward',
    value: function forward() {
      this.video.currentTime = this.video, currentTime + 3;
    }

    // Virkni á 'spóla afturábak takkann'

  }, {
    key: 'backward',
    value: function backward() {
      this.video.currentTime = this.video, currentTime - 3;
    }
  }]);

  return Spilari;
}();

function onVideo() {
  return document.getElementById() != null;
}

document.addEventListener('DOMContentLoaded', function () {
  var p = new Player();
  p.load();
});
//# sourceMappingURL=Spilari.js.map