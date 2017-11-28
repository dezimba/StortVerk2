'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Forsida = function () {
  function Forsida() {
    _classCallCheck(this, Forsida);

    this.Sida = document.querySelector('.content');
    // this.videos = null;
    this.divFlokkur = document.createElement('div');
    this.id = null;
    this.video = null;
  }

  _createClass(Forsida, [{
    key: 'createVideos',
    value: function createVideos(data) {
      var flokkar = data.categories;
      var myndb = data.videos;

      for (var i = 0; i < flokkar.length; i += 1) {
        var flokkur = flokkar[i];
        this.createDiv(flokkur, myndb);
        console.log('prenta');
      }
      // const elem = createDiv(flokkur, myndb);
    }
  }, {
    key: 'createDiv',
    value: function createDiv(flokkur, myndb) {
      var _this = this;

      var divtitill = document.createElement('div');
      var divEfni = document.createElement('div');
      var divFlokkur = document.createElement('div');
      var Titill = document.createElement('H3');
      var t = flokkur.title;
      console.log(flokkur.title);
      var title = document.createTextNode(t);

      Titill.appendChild(title);
      Titill.classList.add('catTitle');
      divtitill.appendChild(Titill);
      divFlokkur.appendChild(Titill);
      divFlokkur.appendChild(divEfni);
      divFlokkur.classList.add('catStructure');
      this.Sida.appendChild(divFlokkur);

      var _loop = function _loop(i) {
        var id = flokkur.videos[i];
        var video = myndb.find(function (v) {
          return v.id === id;
        });
        var videoElement = _this.createVideo(video);
        divEfni.appendChild(videoElement);
        console.log(id);
      };

      for (var i = 0; i < flokkur.videos.length; i += 1) {
        _loop(i);
      }
    }
  }, {
    key: 'createVideo',
    value: function createVideo(video) {
      var divContain = document.createElement('div');
      var divVideo = document.createElement('div');
      var divInfo = document.createElement('div');
      var duration = document.createElement('div');

      var img = document.createElement('img');
      img.src = video.poster;
      divVideo.appendChild(img);

      var spilat = this.getDuration(video.duration); // Kalla á fallið
      var st = document.createTextNode(spilat);
      duration.appendChild(st);
      divVideo.appendChild(duration);

      var Date = this.getDate(video.created);
      var d = document.createTextNode(Date);
      divInfo.appendChild(d);

      var title = document.createElement('H4');
      var t = document.createTextNode(video.title);
      title.appendChild(t);
      divInfo.appendChild(title);

      console.log(t);
      console.log(d);

      divContain.appendChild(divVideo);
      divContain.appendChild(divInfo);
      divContain.classList.add('vidMain');
      return divContain;
      // this.divFlokkur.appendChild(divContain);
      // this.Sida.appendChild(this.divFlokkur);
    }
  }, {
    key: 'init',
    value: function init(content) {
      this.Sida = content;

      // content.addEventListener('click', ); // fallið sem ræsir queryselector
    }
  }, {
    key: 'getDuration',
    value: function getDuration(x) {
      if (x < 60) {
        if (x < 10) {
          return '00:0' + x;
        }
        return '00:' + x;
      } else if (x < 60 * 60) {
        var min = Math.floor(x / 60);
        var sec = Math.floor(x % 60);
        if (sec < 10) {
          return min + ':0' + sec;
        }
        return min + ':' + sec;
      } else if (x >= 60 * 60) {
        var hour = Math.floor(x / (60 / 60));
        var _min = Math.floor(x / 60);
        var _sec = Math.floor(x % 60);
        return hour + ':' + _min + ':' + _sec;
      }
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

      // Bæta við eintölu.. krafa um það
      if (years > 1) {
        if (this.lastNumber(years) === 1) {
          return 'Fyrir ' + years + ' \xE1ri';
        }
        return 'Fyrir ' + years + ' \xE1rum';
      }
      if (months > 1) {
        if (this.lastNumber(months) === 1) {
          return 'Fyrir ' + months + ' m\xE1nu\xF0i';
        }
        return 'Fyrir ' + months + ' m\xE1nu\xF0um';
      }
      if (weeks > 1) {
        if (this.lastNumber(weeks) === 1) {
          return 'Fyrir ' + weeks + ' viku';
        }
        return 'Fyrir ' + weeks + ' vikum';
      }
      if (days > 1) {
        if (this.lastNumber(days) === 1) {
          return 'Fyrir ' + days + ' degi';
        }
        return 'Fyrir ' + days + ' d\xF6gum';
      }
      if (this.lastNumber(hours) === 1) {
        return 'Fyrir ' + hours + ' klukkut\xEDma';
      }
      return 'Fyrir ' + hours + ' klukkut\xEDmum';
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

      // const videos = ('videos.json');
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