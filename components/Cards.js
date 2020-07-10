// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, 
// the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(result => {
    let articles = result.data.articles.javascript
    articles.forEach(article => {
        cardsContainer.appendChild(cardMaker(article))
        
    });
})

function cardMaker(article){
    //create
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')    
    let authorImg = document.createElement('img')
    let authorName = document.createElement('span')

    //assign
    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'

    //text
    headline.textContent = article.headline
    authorImg.setAttribute('src', article.authorPhoto)
    authorName.textContent = `By ${article.authorName}`

    //append
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(authorImg)

    return card
}