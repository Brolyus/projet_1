// First Event's Modal
let openModal = document.getElementById('open-modal');
let modal = document.getElementById('modal');


openModal.addEventListener('click', () => {
  modal.style.display ='block';
});

let closeModal = document.getElementById('close-modal');


closeModal.addEventListener('click', () => {
  modal.style.display ='none';
});

// Second Event's Modal
let openModal2 = document.getElementById('open-modal2');
let modal2 = document.getElementById('modal2');


openModal2.addEventListener('click', () => {
  modal2.style.display ='block';
});

let closeModal2 = document.getElementById('close-modal2');


closeModal2.addEventListener('click', () => {
  modal2.style.display ='none';
});

// Third Event's Modal
let openModal3 = document.getElementById('open-modal3');
let modal3 = document.getElementById('modal3');


openModal3.addEventListener('click', () => {
  modal3.style.display ='block';
});

let closeModal3 = document.getElementById('close-modal3');


closeModal3.addEventListener('click', () => {
  modal3.style.display ='none';
});
const scroll = ScrollReveal({
    duration:1500,
    reset:true
    });
    
  scroll.reveal ('h1'); 
  
  scroll.reveal ('h2');
  
  scroll.reveal ('header');
  
  scroll.reveal ('footer'); 
   
  scroll.reveal ('h2');
   
  scroll.reveal ('.photos_resid') 

  scroll.reveal ('.news')

  scroll.reveal ('.text_intro')

  scroll.reveal ('.imlo')

  scroll.reveal ('.image_event')

  scroll.reveal ('.title_event')

  scroll.reveal ('.date')

  scroll.reveal ('.p_event')

  scroll.reveal ('.other_event')

  scroll.reveal ('#fotfoot')

  scroll.reveal ('#desktopfoot')
  
  scroll.reveal ('.p_scroll')
