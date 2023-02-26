export function init() {
    document.querySelectorAll('.contacts-block').forEach(function(contact){
        const buttons = contact.querySelectorAll('.contacts__btn');
        const info = contact.querySelectorAll('.contacts__info');
        buttons.forEach(function(btn){
          btn.addEventListener('click', function(e){
            buttons.forEach(function(el){
              el.classList.remove('active');
            })
            e.target.classList.add('active');
            const target = e.target.getAttribute('data-target');
            const content = contact.querySelector(`#${target}`)
            info.forEach(function(el){
              el.classList.remove('active');
            })
            content.classList.add('active');
          })
        })
    })
}