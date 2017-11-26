class Forsida {

  constructor() {
    this.Sida = document.querySelector('.content');
    this.videos = null;
  }

  createVideos(data) {
    const flokkar = data.categories;
    const myndb = data.videos;

    for (let i = 0; i < flokkar.length; i++) {
      const flokkur = flokkar[i];
      const elem = this.createDiv(flokkur, myndb);
      console.log("prenta");
      this.Sida.appendChild(document.createTextNode(flokkur[i]));
    }
      // const elem = createDiv(flokkur, myndb);
  }

  createDiv(flokkur, myndb) {
    const divFlokkur = document.createElement('Div');
    const Titill = document.createElement('H3');
    const t = flokkur.title;
    const title = document.createTextNode(t);

    Titill.appendChild(title);
    divFlokkur.appendChild(Titill);

    for(let i = 0; i < flokkur.videos.length; i++) {
      const id = flokkur.videos[i];
      const video = myndb.find (v => v.id === id);
      const elem = this.createVideo(video);
    }
  }

  createVideo(video) {
    const divContain = document.createElement('Div');
    const divVideo = document.createElement('Div');
    const divinfo = document.createElement('Div');

    const img = document.createElement('img');
    img.src = video.poster;

    divVideo.appendChild(img);
    divContain.appendChild(divVideo);
    divFlokkur.appendChild(divContain);
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

    //Bæta við eintölu.. krafa um það
    if(years > 1){
      if(this.lastNumber(years) === 1){
        return 'Fyrir ${years} ári'
      }
      return 'Fyrir ${years} árum';
    }
    if(months > 1){
      if(this.lastNumber(months) === 1){
        return 'Fyrir ${months} mánuði'
      }
      return 'Fyrir ${months} mánuðum';
    }
    if(weeks > 1){
      if(this.lastNumber(weeks) === 1){
        return 'Fyrir ${weeks} viku'
      }
      return 'Fyrir ${weeks} vikum';
    }
    if(days > 1){
      if(this.lastNumber(days) === 1){
        return 'Fyrir ${days} degi'
      }
      return 'Fyrir ${days} dögum';
    }
    if(hours > 1){
      if(this.lastNumber(hours) === 1){
        return 'Fyrir ${hours} klukkutíma'
      }
      return 'Fyrir ${hours} klukkutímum';
    }
  }

  lastNumber(x){
    let str = x.toString();
    str = str.slice(-1);
    return parseInt(str, 10);
  }

  fetchJSON() {
    //const videos = ('videos.json');
    const request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', 'videos.json', true);
    console.log(request);
    request.onload = ( ) => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response);
        console.log(data);
        this.createVideos(data);
      } else if (request.status >= 400) {
        // villu melding
      }
    }

    request.onerror = function() {

    }

    request.send();
  }

/*  return {
    init
  }  */
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const forsida = new Forsida();

  forsida.init(content);
  forsida.fetchJSON();
});
