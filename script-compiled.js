'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Forsida = function () {
  function Forsida() {
    _classCallCheck(this, Forsida);

    this.Sida = document.querySelector('.content');
    //this.videos = null;
  }

  _createClass(Forsida, [{
    key: 'createVideos',
    value: function createVideos(data) {
      var flokkar = data.categories;
      var myndb = data.videos;

      for (var i = 0; i < flokkar.length; i++) {
        var flokkur = flokkar[i];
        var elem = this.createDiv(flokkur, myndb);
        console.log("prentai");
        this.Sida.appendChild(document.createTextNode(flokkur[i]));
      }
      // const elem = createDiv(flokkur, myndb);
    }
  }, {
    key: 'createDiv',
    value: function createDiv(flokkur, myndb) {
      var _this = this;

      var divFlokkur = document.createElement('Div');
      var Titill = document.createElement('H3');
      var t = flokkur.title;
      var title = document.createTextNode(t);

      Titill.appendChild(title);
      divFlokkur.appendChild(Titill);

      var _loop = function _loop(i) {
        var id = flokkur.videos[i];
        var video = myndb.find(function (v) {
          return v.id === id;
        });
        var elem = _this.createVideo(video);
      };

      for (var i = 0; i < flokkur.videos.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'createVideo',
    value: function createVideo(video) {
      var divContain = document.createElement('Div');
      var divVideo = document.createElement('Div');
      var divinfo = document.createElement('Div');

      var img = document.createElement('img');
      img.src = video.poster;

      divVideo.appendChild(img);
      divContain.appendChild(divVideo);
      divFlokkur.appendChild(divContain);
    }
  }, {
    key: 'init',
    value: function init(content) {
      this.Sida = content;

      // content.addEventListener('click', ); // fallið sem ræsir queryselector
    }
  }, {
    key: 'getDate',
    value: function getDate(x) {
      var d = (Date.now() - x) / 1000;
      var years = Math.floor(d / (365 * 24 * 60 * 60));
      d %= 365 * 24 * 60 * 60;
      var months = Math.floor(d / (30 * 24 * 60 * 60));
      d %= 30 * 24 * 60 * 60;
      var weeks = Math.floor(d / (7 * 24 * 60 * 60));
      d %= 7 * 24 * 60 * 60;
      var days = Math.floor(d / (24 * 60 * 60));
      d %= 24 * 60 * 60;
      var hours = Math.floor(d / (60 * 60));
      d %= 60 * 60;

      //Bæta við eintölu.. krafa um það
      if (years > 1) {
        if (this.lastNumber(years) === 1) {
          return 'Fyrir ${years} ári';
        }
        return 'Fyrir ${years} árum';
      }
      if (months > 1) {
        if (this.lastNumber(months) === 1) {
          return 'Fyrir ${months} mánuði';
        }
        return 'Fyrir ${months} mánuðum';
      }
      if (weeks > 1) {
        if (this.lastNumber(weeks) === 1) {
          return 'Fyrir ${weeks} viku';
        }
        return 'Fyrir ${weeks} vikum';
      }
      if (days > 1) {
        if (this.lastNumber(days) === 1) {
          return 'Fyrir ${days} degi';
        }
        return 'Fyrir ${days} dögum';
      }
      if (hours > 1) {
        if (this.lastNumber(hours) === 1) {
          return 'Fyrir ${hours} klukkutíma';
        }
        return 'Fyrir ${hours} klukkutímum';
      }
    }
  }, {
    key: 'lastNumber',
    value: function lastNumber(x) {
      var str = x.toString();
      str = str.slice(-1);
      return parseInt(str, 10);
    }
  }, {
    key: 'fetchJSON',
    value: function fetchJSON() {
      var _this2 = this;

      //const videos = ('videos.json');
      var request = new XMLHttpRequest();
      request.overrideMimeType('application/json');
      request.open('GET', 'videos.json', true);
      console.log(request);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.response);
          console.log(data);
          _this2.createVideos(data);
        } else if (request.status >= 400) {
          // villu melding
        }
      };

      request.onerror = function () {};

      request.send();
    }

    /*  return {
        init
      }  */

  }]);

  return Forsida;
}();

document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.content');
  var forsida = new Forsida();

  forsida.init(content);
  forsida.fetchJSON();
});

//# sourceMappingURL=script-compiled.js.map