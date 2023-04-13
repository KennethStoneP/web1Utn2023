 
window.addEventListener("load", function() {
  document.body.style.opacity = "1";
});

  window.onload = function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
  
    setTimeout(() => {
      loader.classList.add('hide');
      content.classList.remove('hide');
  

      
      
    }, 2000);
  }
 