'use strict';

const characterList = document.querySelector('.list');
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const ulFavorites = document.querySelector('.js_listfav');


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
  .then((listData) => {
    console.log(listData)
    disneyDataList = listData.data;
    console.log(disneyDataList.name);
    renderAllCharacters(disneyDataList);
    localStorage.setItem('character', JSON.stringify(disneyDataList));
  });
   
  }
}


  
  function renderAllCharacters (list) {
    for (const oneCharacter of list ) {
      characterList.innerHTML += renderCharacter(oneCharacter);
    }
    if (characterList.imageUrl=''){
      characterList.innerHTML.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
  }
  addEventCharacter();
  }
  function addEventCharacter() {
    const liElementList = document.querySelectorAll('.js-card');
    for (const li of liElementList) {
      li.addEventListener('click', handleClick);
    }
    }

  function renderCharacter(disneyDataObj) {
    let html = `<li id="${disneyDataObj.__id}" class="js-card">
                  <article class="list-box">
                  <img class="character-img js_img" src="${disneyDataObj.imageUrl}" alt="Disney Characters" />
                  <p class="character-name js_name">${disneyDataObj.name}</p>
                  </article>
              </li>`;
    return html;
    
  }
  
//no funciona

    function handleClick(event) {
      
      const id = parseInt(event.currentTarget.id);
      
      const selectedCharacter = disneyDataList.find((item) => item.id === id);
      const indexCharacter = disneyDatafav.findIndex((item) => item.id === id);
    
      if (indexCharacter === -1) {
        disneyDatafav.push(selectedCharacter);
     } else {
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










