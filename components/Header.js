// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create
    let header = document.createElement('div')
    let date = document.createElement('span')
    let title = document.createElement('h1')
    let temp = document.createElement('span')

    //add classes
    header.className = 'header'
    date.className = 'date'
    title.className = 'title'
    temp.className = 'temp'

    //add text
    date.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    temp.innerHTML = '98 &#176'
    
    //append
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    return header
}


const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())