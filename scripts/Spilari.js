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


Spilari.js
// class Player {

/*
* í smiðnum upphafsstillum við breytur
* búum til takka og bætum við eventListener
*/
// constructor - smiður
/*
* inniheldur breytur sem eru upphafsstilltar
* byrja á this.******
* id/url/videos/categories
* isPlaying/Mute
* Allir takkar með doc.querySelector
* -play/mute/fulllscreen/forward/bakwards/vidContainer
* addEvent listener á alla takka
*/

/* Takkar
* this.document.querySelector(play)
*
*/

// showLoad() - sýnir load skilaboð

// hideLoad()

// showError(e) - villuskilaboð

// loadHTML() - fall þar sem hlaðið er myndbandi 
/*
* Byrjum á að upphafsstilla breytur
* const header/img/source/wrapper
*/

// create header - Býr til fyrirsögn 
/*const header/headerNode
 * sækjum svo header/headerNode
 */
//create videoImg
/*
*
*/
//createplayOverlay

//preparePlayer()

//load()

//play()

//mute()

//fullscreen() {
  // this.video.webkitRequestFullScreen();
//}

//forward() {
  //this.video.currentTime = this.video,currentTime + 3;
//}

//backward() {
  //this.video.currentTime = this.video,currentTime - 3;
//}