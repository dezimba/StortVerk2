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
    this.id = " ";
    this.url = ;
    this.videos = ;
    this.categories = ;

    this.isPlaying() ;
    this.mute() ;

  // upphafstillum takka
    this.play = document.querySelector('play');
    this.mute = document.querySelector('mute');
    this.fullscreen = document.querySelector('fullscreen');
    this.forward = document.querySelector('forward');
    this.backwards = document.querySelector('backwards');
    this.container = document.querySelector('vidContainer')

  // Bætum við eventListener á alla takkana
    this.play.addEventListener();
    this.mute.addEventListener();
    this.fullscreen.addEventListener();
    this.forward.addEventListener();
    this.backwards.addEventlistener();
    this.container.addEventListener();
  }
// sýnir load skilaboð
  showLoad() {
  }

// Felur load skilaboð
  hideLoad() {
  }

// villuskilaboð
  showError(e) {
  }

// loadHTML() - fall þar sem hlaðið er myndbandi
/*
* Byrjum á að upphafsstilla breytur
* const header/img/source/wrapper
*/

// create header - Býr til fyrirsögn
/* const header/headerNode
 * sækjum svo header/headerNode
 */
// create videoImg
/*
*
*/
// createplayOverlay

// preparePlayer()

// load()

// play()

// mute()

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

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form'); // Breyta querySelector

  Spilari.init();
});
