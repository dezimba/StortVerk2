class Forsida {
  constructor() {
    this.Sida = document.querySelector('.content');
    // this.videos = null;
    this.divFlokkur = null;
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
    const divFlokkur = document.createElement('div');
    const Titill = document.createElement('H3');
    const t = flokkur.title;
    console.log(flokkur.title);
    const title = document.createTextNode(t);

    Titill.appendChild(title);
    divFlokkur.appendChild(Titill);
    this.Sida.appendChild(divFlokkur);

    for (let i = 0; i < flokkur.videos.length; i += 1) {
      const id = flokkur.videos[i];
      const video = myndb.find(v => v.id === id);
      this.createVideo(video, id);
      console.log(id);
    }
  }

  createVideo(video, id) {
    const divContain = document.createElement('div');
    const divVideo = document.createElement('div');
    const divInfo = document.createElement('div');

    const img = document.createElement('img');
    img.src = video.poster;

    const Date = this.getDate(video.created);
    const d = document.createTextNode(Date);
    divInfo.appendChild(d);


    const title = document.createElement('H4');
    const t = document.createTextNode(video.title);
    title.appendChild(t);
    divInfo.appendChild(title);

    console.log(t);
    console.log(d);

    // divVideo.appendChild(img);
    // divContain.appendChild(divVideo);
    divContain.appendChild(divInfo);
    this.divFlokkur.appendChild(divContain);
  }

  init(content) {
    this.Sida = content;

  // content.addEventListener('click', ); // fallið sem ræsir queryselector
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
