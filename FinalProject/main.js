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
      for (let movie of arrayMarvel) {
          let i="";
          let datos = "";
          i = movie.series.items;    
          for ( let x of i){
            console.log(x.name);
            datos = x.name;
        }
          /* console.log(i); */

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
      <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Extra information</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                   <p>
                   ${datos}
                   </p> 
        
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

      
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show information
      </button>
        </div>
      </div>
      `;
      //console.log(datos);
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
        function foundHero(hero) {
          return hero.name === names;
        }
        if (names != "") {
          let hero = arrayMarvel.find(foundHero);
          console.log(hero);
          let datosHero = `
            <div class="list col-sm-4">
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
      $(".footerInformation").html(
        `<div>
            <p>${response.copyright}</p>
            <p>${response.attributionText}</p>
        </div>
        `
      );
    })
    .catch((error) => console.log("Hay un error" + error));
});
