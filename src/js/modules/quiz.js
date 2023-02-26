export function init() {
  document.querySelectorAll('.quiz').forEach(quiz => {
    let totalPrice = 0;
    let servicePrice = 0;
    let rentHours = 0;
    let zal_price = 1900;
    let service = 'Подкаст';
    let studio = 'Студия м. Отрадное';
  
  
    // els
    const finish = quiz.querySelector('.quiz__end');
    const total_price = quiz.querySelector('#total-price');
    const result_usluga = quiz.querySelector('#result-usluga');
    const result_price = quiz.querySelector('#result-price');
    const result_hours = quiz.querySelector('#result-hours');
    const result_studio = quiz.querySelector('#result-studio');
  
  
    // service
    const services = quiz.querySelector('#services');
    const service_next = services.querySelector('.quiz__next');
    service_next.addEventListener('click', () => {
      service = services.querySelector('input:checked').getAttribute('data-value');
      console.log(`service: ${service}`);
    })
  
  
    // studios
    const studios = quiz.querySelector('#studios');
    const studio_1 = studios.querySelector('#studio-1');
    const studio_2 = studios.querySelector('#studio-2');
    const studio_next = studios.querySelector('.quiz__next');
    studio_next.addEventListener('click', () => {
      if(studio_1.checked){
        studio = 'Студия м.Отрадное 50 м²';
      }else if(studio_2.checked){
        studio = 'Студия м.Тульская 90 м²';
      }
      console.log(`studio: ${studio}`);
    })
  
  
    // zals
    const zals = quiz.querySelector('#zals');
    const zal_1 = zals.querySelector('#zal-1');
    const zal_2 = zals.querySelector('#zal-2');
    const zal_3 = zals.querySelector('#zal-3');
    const zal_next = zals.querySelector('.quiz__next');
    zal_next.addEventListener('click', () => {
      if(zal_1.checked){ 
        zal_price = 1900; 
      }else if(zal_2.checked){ 
        zal_price = 2500; 
      }else if(zal_3.checked){ 
        zal_price = 2900; 
      } 
      console.log(`zal price: ${zal_price}`); 
    }) 
  
  
    // rent hours
    let hoursCon = quiz.querySelector('#rent-hours');
    let hours_el = quiz.querySelector('#hours');
    let hours_next = hoursCon.querySelector('.quiz__next');
    hours_next.addEventListener('click', () => {
      hours_el = quiz.querySelector('#hours');
      rentHours = Number(hours_el.value);
      console.log(`rent hour: ${rentHours}`); 
    }) 
  
  
  
  
  
    // calc finish 
    finish.addEventListener('click', () => {
      totalPrice += zal_price * rentHours;
      servicePrice += zal_price * rentHours;
      let resultEl = quiz.querySelector('#result');
      let result = '';
      let sound = quiz.querySelector('#sound');
      let camera = quiz.querySelector('#camera');
      let rgb = quiz.querySelector('#rgb');
      let rentcamera = quiz.querySelector('#rentcamera');
      let istochnikisveta = quiz.querySelector('#istochniksveta');
      let operator = quiz.querySelector('#operator');
  
      if(sound.checked){
        result += `<div class="quiz__total-item-row"><p class="big">Запись звука</p><p>-</p><b>включена в стоимость</b></div>`
      }
      if(camera.checked){
        totalPrice += 2000;
        result += `<div class="quiz__total-item-row"><p class="big">Выставление композиции кадра, настройка камер и света</p><p>-</p><b>2000 руб</b></div>`
      }
      if(rgb.checked){
        totalPrice += 1000;
        result += `<div class="quiz__total-item-row"><p class="big">RGB лампы</p><p>-</p><b>1000 руб</b></div>`
      }
      if(rentcamera.checked){
        let cameraPrice = 0
        let cameraAmount = Number(quiz.querySelector('#rentcamerahours').value);
        // if(cameraAmount == 1){
        //   cameraPrice += 2500;
        // }
        // if(cameraAmount == 2){
        //   cameraPrice += 4000;
        // }
        // if(cameraAmount == 3){
        //   cameraPrice += 6000;
        // }
        // if(cameraAmount >= 4){
        cameraPrice += cameraAmount * 2500;
        // }
        totalPrice += cameraPrice;
        result += `<div class="quiz__total-item-row"><p class="big">Аренда камер</p><p>${cameraAmount} камеры</p><b>${cameraPrice} руб</b></div>`
      }
      if(istochnikisveta.checked){
        let amount = Number(quiz.querySelector('#istochniksvetaamount').value);
        let price = amount * 1000;
        totalPrice += price;
        result += `<div class="quiz__total-item-row"><p class="big">Источники света</p><p>${amount} источника света</p><b>${price} руб</b></div>`
      }
      if(operator.checked){
        let amount = Number(quiz.querySelector('#operator-hours').value);
        let price = amount * 2500;
        totalPrice += price;
        result += `<div class="quiz__total-item-row"><p class="big">Работа оператора</p><p>${amount} часов</p><b>${price} руб</b></div>`
      }
      else{
        resultEl.parentElement.style.display = "none"
      }
  
      resultEl.innerHTML = result;
      result_usluga.innerHTML = `${service}`;
      result_hours.innerHTML = `${rentHours}`;
      result_price.innerHTML = `${servicePrice} руб`;
      total_price.innerHTML = `${totalPrice} руб`;
      result_studio.innerHTML = studio;
    })
  })

  document.querySelectorAll('.quiz').forEach(function ( el ) {
    const item = el.querySelectorAll('.quiz__item');
    const next = el.querySelectorAll('.quiz__next');
    const prev = el.querySelectorAll('.quiz__prev');
  
    next.forEach( function ( next ) {
      next.addEventListener('click', function ( e ) {
        for (let i = 0; i < item.length; i++) {
          if ( item[i].classList.contains('active') && !item[i].classList.contains('last') ) {
            item[i].classList.remove('active');
            item[i += 1].classList.add('active');
          }
        }
      })
    })
  
    prev.forEach( function ( prev ) {
      prev.addEventListener('click', function ( e ) {
        for (let i = 0; i < item.length; i++) {
          if ( item[i].classList.contains('active') && i > 0 ) {
            item[i].classList.remove('active');
            item[i -= 1].classList.add('active');
          }
        }
      })
    }) 
  })
}