// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Head = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    h1Head.textContent = 'Lambda Times';
    dateSpan.textContent = 'MARCH 28, 2019';
    tempSpan.textContent = '98°';

    headDiv.appendChild(dateSpan);
    headDiv.appendChild(h1Head);
    headDiv.appendChild(tempSpan);

    headContainer = document.querySelector('.header-container');
    headContainer.appendChild(headDiv);
}

Header();
