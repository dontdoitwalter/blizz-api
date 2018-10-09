let baseURL = 'https://us.api.battle.net/'
let key = '&apikey=bxaw4yds8sbrx9ta2qk2fgby28ux7jbh'
let locale = '?locale=en_us'
let act = 'd3/data/act'
let url;

const searchForm = document.querySelector('form');

searchForm.addEventListener('click', actInfo());

function actInfo(){
    url = baseURL + act + locale + key;
    console.log(url);
    fetch(url)
    .then(result =>{
        console.log(result);
        return result.json();
    })
    .then(json =>{
        console.log(json);
    });
}
