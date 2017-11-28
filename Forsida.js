class Forsida {
  constructor() {
    this.Sida = document.querySelector('.content');
    // this.videos = null;
    this.divFlokkur = document.createElement('div');
    this.id = null;
    this.video = null;
  }

  createVideos(data) {
    const flokkar = data.categories;
    const myndb = data.videos;

    for (let i = 0; i < flokkar.length; i += 1) {
      const flokkur = flokkar[i];
      this.createDiv(flokkur, myndb);
      console.log('prenta');
    }
  // const elem = createDiv(flokkur, myndb);
  }

  createDiv(flokkur, myndb) {
    const divtitill = document.createElement('div');
    const divEfni = document.createElement('div');
    const divFlokkur = document.createElement('div');
    const Titill = document.createElement('H3');
    const t = flokkur.title;
    console.log(flokkur.title);
    const title = document.createTextNode(t);

    Titill.appendChild(title);
    Titill.classList.add('catTitle');
    divtitill.appendChild(Titill);
    divFlokkur.appendChild(Titill);
    divFlokkur.appendChild(divEfni);
    divFlokkur.classList.add('catStructure');
    this.Sida.appendChild(divFlokkur);

    for (let i = 0; i < flokkur.videos.length; i += 1) {
      const id = flokkur.videos[i];
      const video = myndb.find(v => v.id === id);
      const videoElement = this.createVideo(video);
      divEfni.appendChild(videoElement);
      console.log(id);
    }
  }

  createVideo(video) {
    const divContain = document.createElement('div');
    const divVideo = document.createElement('div');
    const divInfo = document.createElement('div');
    const duration = document.createElement('div');

    const img = document.createElement('img');
    img.src = video.poster;
    divVideo.appendChild(img);

    const spilat = this.getDuration(video.duration); // Kalla á fallið
    const st = document.createTextNode(spilat);
    duration.appendChild(st);
    divVideo.appendChild(duration);

    const Date = this.getDate(video.created);
    const d = document.createTextNode(Date);
    divInfo.appendChild(d);


    const title = document.createElement('H4');
    const t = document.createTextNode(video.title);
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

  init(content) {
    this.Sida = content;

  // content.addEventListener('click', ); // fallið sem ræsir queryselector
  }

  getDuration(x) {
    if (x < 60) {
      if (x < 10) {
        return `00:0${x}`;
      }
      return `00:${x}`;
    } else if (x < 60 * 60) {
      const min = Math.floor(x / 60);
      const sec = Math.floor(x % 60);
      if (sec < 10) {
        return `${min}:0${sec}`;
      }
      return `${min}:${sec}`;
    } else if (x >= 60 * 60) {
      const hour = Math.floor(x / (60 / 60));
      const min = Math.floor(x / 60);
      const sec = Math.floor(x % 60);
      return `${hour}:${min}:${sec}`;
    }
  }

  getDate(x) {
    let d = (Date.now() - x) / 1000;
    const years = Math.floor(d / (365 * 24 * 60 * 60));
    d %= (365 * 24 * 60 * 60);
    const months = Math.floor(d / (30 * 24 * 60 * 60));
    d %= (30 * 24 * 60 * 60);
    const weeks = Math.floor(d / (7 * 24 * 60 * 60));
    d %= (7 * 24 * 60 * 60);
    const days = Math.floor(d / (24 * 60 * 60));
    d %= (24 * 60 * 60);
    const hours = Math.floor(d / (60 * 60));
    d %= (60 * 60);


    // Bæta við eintölu.. krafa um það
    if (years > 1) {
      if (this.lastNumber(years) === 1) {
        return `Fyrir ${years} ári`;
      }
      return `Fyrir ${years} árum`;
    }
    if (months > 1) {
      if (this.lastNumber(months) === 1) {
        return `Fyrir ${months} mánuði`;
      }
      return `Fyrir ${months} mánuðum`;
    }
    if (weeks > 1) {
      if (this.lastNumber(weeks) === 1) {
        return `Fyrir ${weeks} viku`;
      }
      return `Fyrir ${weeks} vikum`;
    }
    if (days > 1) {
      if (this.lastNumber(days) === 1) {
        return `Fyrir ${days} degi`;
      }
      return `Fyrir ${days} dögum`;
    }
    if (this.lastNumber(hours) === 1) {
      return `Fyrir ${hours} klukkutíma`;
    }
    return `Fyrir ${hours} klukkutímum`;
  }

  lastNumber(x) {
    let str = x.toString();
    str = str.slice(-1);
    return parseInt(str, 10);
  }

  fetchJSON() {
    // const videos = ('videos.json');
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
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const forsida = new Forsida();

  forsida.init(content);
  forsida.fetchJSON();
});
