
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
      let listNames = "";
      let arrayMarvel = response.data.results;
      console.log(arrayMarvel);
      for (let movie of arrayMarvel) {
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
      `;
      }
      $("#listaMarvel").html(listMarvel);

      for (let movieName of arrayMarvel) {
        listNames += `
        <option value="${movieName.name}">
        `;
      }
      $("#listNames").html(listNames);
      /* findHero.apply(this, arrayMarvel); */

      $("#findData").keypress(function () {
        let names = $("#findData").val();
        function foundHero(hero){
            return hero.name === names;
        }
        if (names != "") {
            let hero = arrayMarvel.find(foundHero);
            console.log(hero);
            let datosHero = `
            <div class="list col-sm-6">
            <div class="card my-1">
            <div class="card" style="width: 5rem;">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-text">${hero.name}</h3>
              <p class="card-text">${hero.description}</p>
            </div>
          </div>
            </div>
          </div>
          `;
          $("#listaMarvel").html(datosHero);
          console.log(hero.name);
        } else {
          location.reload();
        }
      });
    })
    .catch((error) => console.log("Hay un error" + error));
});
