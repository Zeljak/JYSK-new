// Anketa
document.querySelector('#submit-form').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbzWcax1gToT9a6TznrmKls20vo1aNrQcLwnItM7-swK6FTg76_ZIEmdQW3gkDFjEEOk/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila').checked) {

      document.querySelector('#submit-form').classList.add('is-hidden');
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#jyskAnketa').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg').classList.remove('is-hidden');
  }

});

// Anketa Smooth Scroll
;(function($){
    $('#anketa__button').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
    
            const hash = this.hash;
    
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70
                },
                2000
            );
        }
    });
})(jQuery);
