 document.addEventListener('DOMContentLoaded', function() {
  import('./burger.js')
    .then(module => {
      const handleOpenBurger = module.default;
      const burger = document.querySelector(".burger");
      const close = document.querySelector(".close");
 
      burger.addEventListener('click', handleOpenBurger, { passive: true });
      close.addEventListener('click', handleOpenBurger, { passive: true });
       
    })
    .catch(err => {
      console.error('Failed to load burger component:', err);
    });
});
 