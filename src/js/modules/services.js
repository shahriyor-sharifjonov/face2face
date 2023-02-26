export function init() {
    document.querySelectorAll('.services-block').forEach( ( services ) => {
        const buttons = services.querySelectorAll('.services__button');
        const items = services.querySelectorAll('.services__item');
        buttons.forEach( ( button ) => {
            button.addEventListener('click', ( e ) => {
                const target = button.getAttribute('data-target');
                const item = services.querySelector(`#${target}`);
                items.forEach( ( el ) => {
                    el.classList.remove('active');
                })
                buttons.forEach( ( el ) => {
                    el.classList.remove('active');
                })
                item.classList.add('active');
                button.classList.add('active');
            })
        })
    })
    document.addEventListener('DOMContentLoaded', function () {
        const thx = document.getElementById('thx');
        if(document.querySelector('.services__item-form')){
            const servicesForm = document.querySelectorAll('.services__item-form');
            servicesForm.forEach(el=>{
                el.addEventListener('submit', formSend2)
                async function formSend2(e) {
                    e.preventDefault();
                    let formData = new FormData(el);
                    el.classList.add('sending');
                    let response = await fetch('files/sendmail.php', {
                        method: 'POST',
                        body: formData
                    });
                    if(response.ok){
                        let result = await response.json();
                        el.classList.add('success');
                        el.classList.remove('sending');
                        thx.classList.add('active');
                        el.reset();
                    }else{
                        alert("Ошибка");
                        el.classList.remove('sending');
                    }
                }
            })
        }
      
        const form = document.getElementById('formContent');
        form.addEventListener('submit', formSend);
        async function formSend(e) {
            e.preventDefault();
            let formData = new FormData(form);
            form.classList.add('sending');
            let response = await fetch('files/sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                form.classList.add('success');
                form.classList.remove('sending');
                thx.classList.add('active');
                form.reset();
            }else{
                alert("Ошибка");
                form.classList.remove('sending');
            }
        }
      
        const popupForm = document.getElementById('popupForm');
        popupForm.addEventListener('submit', formSend5);
        async function formSend5(e) {
            e.preventDefault();
            let formData5 = new FormData(popupForm);
            popupForm.classList.add('sending');
            let response = await fetch('files/sendmailkp.php', {
              method: 'POST',
              body: formData5
            });
            if(response.ok){
              let result = await response.json();
              popupForm.classList.add('success');
              popupForm.classList.remove('sending');
              const popups = document.querySelectorAll('.popup');
              popups.forEach(popup => {
                popup.classList.remove('active');
                document.body.style.overflowY = "visible";
              })
              thx.classList.add('active');
              popupForm.reset();
            } else {
              alert("Ошибка");
              popupForm.classList.remove('sending');
            }
        }
    })
}