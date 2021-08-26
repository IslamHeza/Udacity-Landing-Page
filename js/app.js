/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
const topBtn = document.getElementById('top');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//adding anchers as items to the list menue 
function createMenuItem(target, sectionTitle) {
    menuItem = document.createElement('li');
    menuItem.innerHTML = `<a class="menu__link" data-nav=${target}  href="#${target}">${sectionTitle}</li>`;
    menu.appendChild(menuItem);
}

//check for the active section coordinates
function viewPort(section) {
    if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 220){
        return  true;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (section of sections) {
        target = section.id;
        sectionTitle = section.dataset.nav;
        createMenuItem(target, sectionTitle);
    }
}

// Build menu 
buildNav();


// Set sections as active 
function activeView() {
    sections.forEach((section) => {
        let activeSection = menu.querySelector(`[data-nav=${section.id}]`);
        menu.querySelector(`[data-nav=${section.id}]`).classList
        if (viewPort(section)) {
            if (!section.classList.contains('active')) {
                // Add class 'active' to section when near top of viewport
                section.classList.add('active');
                activeSection.classList.add('activeLink');
            }
        } else {
            section.classList.remove('active');
            activeSection.classList.remove('activeLink');

        }
    });
}


// change the style of active section while scrolling 
document.addEventListener('scroll', activeView);

//scroll into the target section after click on it's address
menu.addEventListener("click", (event) => {
    event.preventDefault();
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({inline: "nearest" , block: "end"});
  });
  