
window.onload = function() {
  $('.block-row').parallax();
  
  $('.cookie-banner').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen','shown')
};



$('.close').click(function() {
  $('.cookie-banner').fadeOut();
})
