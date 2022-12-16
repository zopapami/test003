/* Way 01
------------------------------------------------------------------------------------*/

const myImg = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', {mode: 'cors'})
    .then((response) => {return response.json();})
    .then((response) => {myImg.src = response.data.images.original.url;})
    .catch((e) => {console.log(e);});

/* Way 02 - Async & Await
------------------------------------------------------------------------------------*/
/*
const myImg = document.querySelector('img');
async function getCats() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', {mode: 'cors'});
        const catData = await response.json();
        myImg.src = catData.data.images.original.url;
    } catch (e) {
            console.log(e);
    };
};
getCats();
*/