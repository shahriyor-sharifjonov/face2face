export function init() {
    document.querySelectorAll('.podcasts').forEach(function(podcast){
        const buttons = podcast.querySelectorAll('.podcasts__header-btn');
        buttons.forEach(function(button){
          button.addEventListener('click', function(e) {
            buttons.forEach((el)=>{
              el.classList.remove('active');
            })
            const el = e.target;
            const target = el.getAttribute('data-target');
            podcast.querySelectorAll(`.podcasts__element-slider`).forEach(function(el){
              el.classList.remove('active');
            });
            podcast.querySelector(`.${target}`).classList.add('active');
            el.classList.add('active');
          })
        })
    })
}