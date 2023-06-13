'use strict';

const characterList = document.querySelector('.list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const ulFavorites = document.querySelector('.js_listfav');
const search = document.querySelector('.js_inputSearch');
const searchBtn = document.querySelector('.js_btnSearch');


let disneyDataList = [];
let disneyDatafav = [];

const charaterLS = JSON.parse(localStorage.getItem('character'));

init();
function init() {
  if (charaterLS) {
    disneyDataList = charaterLS;
    renderAllCharacters(disneyDataList);
  } else {

    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    disneyDataList = data.data;
    console.log(disneyDataList.name);
    renderAllCharacters(disneyDataList);
    localStorage.setItem('character', JSON.stringify(disneyDataList));
  });
   
  }
}


  
  function renderAllCharacters (list) {
    ulFavorites.innerHTML = '';

    for (const oneCharacter of list ) {
      characterList.innerHTML += renderCharacter(oneCharacter);
    }
    if (characterList.imageUrl=''){
      characterList.innerHTML.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
  }
  addEventCharacter();
  }
  function addEventCharacter() {
    const liElementList = document.querySelectorAll('.character');
    for (const li of liElementList) {
      li.addEventListener('click', handleClick);
    }
    }

  function renderCharacter(Datacharacter) {
    let html = `<li id="${Datacharacter._id}" class="character">
                  <div class="list-box">
                  <img class="character-img js_img" src="${Datacharacter.imageUrl}" alt="Disney Characters" />
                  <h3 class="character-name js_name">${Datacharacter.name}</h3>
                  </div>
              </li>`;
    return html;
    
  }



    function handleClick(event) {
      
      const id = parseInt(event.currentTarget.id);
      const liElement = document.getElementById(id);
      
      const selectedCharacter = disneyDataList.find((item) => item._id === id);
      const indexCharacter = disneyDatafav.findIndex((item) => item._id === id);
    
      if (indexCharacter === -1) {
        disneyDatafav.push(selectedCharacter);
        liElement.classList.add('favorite');
        
        
     
     } else {
      liElement.classList.remove('favorite');
        disneyDatafav.splice(indexCharacter, 1);
       
       
     }
     renderFavoriteList();
    
    

    }

    function renderFavoriteList() {
      ulFavorites.innerHTML = '';
      for (const fav of  disneyDatafav) {
        ulFavorites.innerHTML += renderCharacter(fav);
      }
    }
    //BONUS BUSCADOR


      const handleSearch = (event) => {
        event.preventDefault();
        const inputValue = search.value;
        const filterList = disneyDataList.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        );
       
        renderAllCharacters(filterList);
      };
      searchBtn.addEventListener('click', handleSearch);










'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map
