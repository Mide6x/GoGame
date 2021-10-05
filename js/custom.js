{
window.onload = function() {
  $('.block-row').parallax();
  
  $('.cookie-banner').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen','shown')
};


$('.close').click(function() {
  $('.cookie-banner').fadeOut();
})

 /*fadein features*/

 const appearOptions = {
   threshold: 1,
   rootMargin: "0px 0px -80px 0px"
 };

 const faders = document.querySelectorAll('.feature_box');
 const appearOnScroll = new IntersectionObserver (function (
   entries,
   appearOnScroll
   ) {
     entries.forEach(entry => {
       if (!entry.isIntersecting) {
         return;
       } else {
         entry.target.classList.add('appear');
         appearOnScroll.unobserve(entry.target);
       }
     })
   }, 
   appearOptions);

   faders .forEach(fader => {
     appearOnScroll.observe(fader);
   });

}