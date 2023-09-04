'use strict'

const navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav');
    
navBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile-nav_active');
    navBtn.classList.toggle('nav-button-close');
})

mobileNav.addEventListener('click', (event) => {
    let target = event.target;
        if(target = '.nav-link'){
            mobileNav.classList.remove('mobile-nav_active');
            navBtn.classList.remove('nav-button-close');
        }
})

const wrap = document.querySelector('.popup-wrap');
const projectItems = document.querySelectorAll('.project-bg');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup-close');

projectItems.forEach((item) => {
  const projectMoreButton = item.querySelector('.project-more');
  const imageUrl = item.getAttribute('data-image');

  projectMoreButton.addEventListener('click', () => {
    wrap.style.display = 'block';
    popup.style.backgroundImage = `url(${imageUrl})`;
  });
});

function closePopup() {
    wrap.style.display = 'none';
}

popupCloseButton.addEventListener('click', closePopup);

wrap.addEventListener('click', (event) => {
    let target = event.target;
        target = target.closest('.popup');
    if(!target) {
        closePopup();
    }
})

const projectBtn = document.querySelector('.projects-btn');
const projectLength = document.querySelectorAll('.project-bg').length;
let items = 3;

projectBtn.addEventListener('click', () => {

    items +=3;
    const projectList = Array.from(document.querySelector('.projects-list').children);
    let visProject = projectList.slice(0, items);
    
    if (projectBtn.textContent === 'View more projects') {
    visProject.forEach((el) => el.classList.add('visible'));

    if (visProject.length === projectLength) {
        projectBtn.textContent = 'Hide projects';
    }
    } else {
            items = 3;
            visProject.forEach((el) => el.classList.remove('visible'));
            projectBtn.textContent = 'View more projects';
    }
})









