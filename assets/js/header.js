window.addEventListener('load', ()=>{

  const HEADER_BUTTON = document.querySelector('[data-header="toggle-button"]');
  const HEADER_MENU   = document.querySelector('[data-header="menu"]');
  let header_visible = false;

  HEADER_BUTTON.addEventListener('click', (ev)=>{
    if(header_visible) {
      HEADER_MENU.classList.add('-top-full');
      HEADER_MENU.classList.remove('top-0');
    }
    else {
      HEADER_MENU.classList.add('top-0');
      HEADER_MENU.classList.remove('-top-full');
    }
    header_visible = !header_visible
  })

});
