/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, 
    you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. 

    I would not animate this component. I would have someone else do it. Does that count?

    Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const errorContainer = document.querySelector('.errors-container')
const carouselContainer = document.querySelector('.carousel-container')

function carouselMaker(){
  let carousel = document.createElement('div')
  let leftButton = document.createElement('div')
  let mountain = document.createElement('img')
  let computer = document.createElement('img')
  let trees = document.createElement('img')
  let turntable = document.createElement('img')
  let rightButton =  document.createElement('div')

  leftButton.textContent = '<'
  mountain.setAttribute('src', './assets/carousel/mountains.jpeg')
  computer.setAttribute('src', './assets/carousel/computer.jpeg')
  trees.setAttribute('src', './assets/carousel/trees.jpeg')
  turntable.setAttribute('src', './assets/carousel/turntable.jpeg')
  rightButton.textContent = '>'



  leftButton.addEventListener('click', ()=>{
    let errorMessage = document.createElement('p')
    errorMessage.textContent = `I didn't animate this`

    errorContainer.appendChild(errorMessage)
    
  })
  rightButton.addEventListener('click', ()=>{
    let errorMessage = document.createElement('p')
    errorMessage.textContent = `I didn't animate this`

    errorContainer.appendChild(errorMessage)
  })

  carousel.appendChild(leftButton)
  carousel.appendChild(mountain)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

  console.log(carousel)

  return carousel
}



carouselContainer.appendChild(carouselMaker())