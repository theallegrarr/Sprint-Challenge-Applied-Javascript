// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function createCard(data){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');
    const cardArea = document.querySelector('.cards-container');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.innerText = data.headline;
    img.setAttribute('src', data.authorPhoto);
    authorSpan.innerText = `By ${data.authorName}`;

    cardDiv.appendChild(headlineDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(imgDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(authorSpan);
    cardArea.appendChild(cardDiv);
}

//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    response.data.articles.javascript.forEach(article => createCard(article));
}).catch(e => {
    console.log(e);
})





