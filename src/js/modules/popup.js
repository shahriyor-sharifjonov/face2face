export function init(){
    document.querySelectorAll('.open-popup').forEach(btn=>{
        btn.addEventListener('click', el=>{
            const target = btn.getAttribute('data-target');
            const popup = document.querySelector(target);
            popup.classList.add('active');
            document.body.style.overflowY = "hidden";
        })
    })
      
    document.querySelectorAll('.popup-close').forEach(btn=>{
        btn.addEventListener('click', el=>{
            const popups = document.querySelectorAll('.popup');
            popups.forEach(popup => {
            popup.classList.remove('active');
            document.body.style.overflowY = "visible";
            })
        })
    })
}