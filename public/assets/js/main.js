'use strict';

const characterList = document.querySelector('.list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;

let disneyDataList = [];



fetch(url)
  .then((response) => response.json())
  .then((listData) => {
    console.log(listData);
    disneyDataList = listData.data;
    console.log(disneyDataList.name);
    renderAllCharacters(disneyDataList);
  });
  
  function renderCharacter(disneyDataObj) {
    let html = `<li id="${disneyDataObj.__id}" class="card">
                  <article class="list-box">
                  <img class="character-img js_img" src="${disneyDataObj.imageUrl}" alt="Disney Characters" />
                  <p class="character-name js_name">${disneyDataObj.name}</p>
                  </article>
              </li>`;
    return html;
    
  }


function renderAllCharacters (list) {
  for (const oneCharacter of list ) {
    characterList.innerHTML += renderCharacter(oneCharacter);
  }
  if (charactersList.imageUrl=''){
    charactersList.innerHTML.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
}
}







'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map
