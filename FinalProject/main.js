$(document).ready(function () {
    const ApiKeyPublic = "32e24560c577fa69e6a5da0dc002dc9e";
    const ApiKeyPrivate = "a1cadff6ed4ad893877099254f228306de99e67b";
    const url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=32e24560c577fa69e6a5da0dc002dc9e&hash=ce4920b93ae31ca70a47edef7ac31335";
    const ts = 1;
    const md5 =
    "1a1cadff6ed4ad893877099254f228306de99e67b32e24560c577fa69e6a5da0dc002dc9e";
    const hash = "ce4920b93ae31ca70a47edef7ac31335";

  fetch(url)
  .then((response) => response.json())
  .then((response) => {
    let listMarvel = "";
    console.log(response.data.results);
      for (let movie of response.data.results) {
        listMarvel += `
        <div class="list col-sm-6">
        <div class="card my-1">
        <div class="card" style="width: 18rem;">
        <img src="${movie.thumbnail.path}.${movie.thumbnail.extension}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-text">${movie.name}</h3>
          <p class="card-text">${movie.description}</p>
        </div>
      </div>
        </div>
      </div>
      `
    }
    $('#listaMarvel').html(listMarvel) ;
})
.catch((error) => console.log("Hay un error" + error));
});
