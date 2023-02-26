export function init() {
    const headerButton = document.querySelector(".header__button");
    const headerMenu = document.querySelector(".header__menu");
    const header = document.querySelector(".header");
    let menuOpened = false;
    const menuToggle = () => { 
        menuOpened = !menuOpened;
        headerButton.classList.toggle("open"); 
        header.classList.toggle("menu-open");
        headerMenu.classList.toggle("open");
        if (menuOpened) {
          document.body.style="overflow-y: hidden";
        }else{
          document.body.style="overflow-y: auto";
        }
    };
    
    headerButton.onclick = menuToggle;
    
    window.onclick = (e) => {
      if ( menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu) ){
        menuToggle();
      }
    };

    window.addEventListener('scroll', (e) => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY >= 1);
    })
}