const panel = document.querySelector(".panel");
let isOpen = false;
const handleOpenBurger = () => {
  
  if (!isOpen) {
    panel.classList.add("panel-open");
  } else {
    panel.classList.remove("panel-open");
  }
  
  isOpen = !isOpen;
};

export default handleOpenBurger;
