// const API_URL = 'https://dog.ceo/api/breeds/image/random';
const randomDogElement = document.querySelector('.dog-pic');
const goButton = document.querySelector('button');

fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => console.log(data));

getRandomDog = () => {
    randomDogElement.innerHTML = '';
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
    document.querySelector('.dog-pic').innerHTML = `<img class="doggo" src="${data.message}" alt="dog" width="500" height="600"> 
`;
    });}

    
    document.querySelector('button').addEventListener('click', getRandomDog);


    // getRandomDog();
    


    



//     json.message.forEach(dogImage => {

//         const columnElement = document.createElement('div');
//         columnElement.classList.add('column');

//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         columnElement.appendChild(cardElement);

//         const cardImageElement = document.createElement('div');
//         cardImageElement.classList.add('dog-pic');
//         cardElement.appendChild(cardImageElement);
        

//         const figureElement = document.createElement('figure');
//         figureElement.classList.add('image');
//         cardImageElement.appendChild(figureElement);

//         const imageElement = document.createElement('img')
//         imageElement.src = dogImage;
//         figureElement.appendChild(imageElement);

//         randomDogElement.appendChild(columnElement);
//     })








// fetch('https://random-d.uk/api/v2/random', headers: {'content-type': "json/application"}).then(response => {
    
//     return response.json();
//     }).then(users => {
//         console.log(users);
//     });





// const API_URL = 'https://random-d.uk/api/v2/random';

// headers: Access-Control-Allow-Origin: https://random-d.uk;
// Vary: Origin
// OPTIONS /random 
// Origin: http://siteA.com
// Access-Control-Request-Method: GET
// Access-Control-Request-Headers: Content-Type

// async function getRandomDucks()  {

    
//     const response = await fetch(API_URL);
//     const json = await response.json();
//     console.log(json);

        


// }
// getRandomDucks();











// future bible verse project
// fetch(`https://www.abibliadigital.com.br/api/verses/nvi/sl/18`,{
//     headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'}}
//         )

//     .then((response) => response.json())
//     .then((json) => console.log(json));
