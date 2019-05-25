const API_URL = 'https://api.git--hub.com/repos/sahanr/street-fighter/contents/fighters.json';

const rootElement = document.getElementById('root');

rootElement.innerText = 'Loading...';


fetch(API_URL)
    .then( response => response.json())

    .then(file => {
        const fighters = JSON.parse(atob(file.content));
        const names = fighters.map(it => it.name).join('\n');

        rootElement.innerText = names;
    })

    .catch(error => {
        console.warn(error);
        root.innerText = 'Failed to load data';
    });