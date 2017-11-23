class Forsida {

  constructor() {
    this.Sida = document.querySelector('.content');
  }

  createVideos(data) {
    const flokkar = data.categories;
    const myndb = data.videos;

    for (let i = 0; i < flokkar.length; i++) {
      const flokkur = flokkar[i];
      const elem = this.createDiv(flokkur, myndb);
      console.log("prentai");
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

    if(years > 1){
      return 'Fyrir ${years} árum';
    }
    if(months > 1){
      return 'Fyrir ${months} mánuðum';
    }
    if(weeks > 1){
      return 'Fyrir ${weeks} vikum';
    }
    if(days > 1){
      return 'Fyrir ${days} dögum';
    }
    if(hours > 1){
      return 'Fyrir ${hours} klukkutímum';
    }
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
