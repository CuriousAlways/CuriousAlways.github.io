window.addEventListener('load', ()=>{

  const HEADER_BUTTON = document.querySelector('[data-header="toggle-button"]');
  const HEADER_MENU   = document.querySelector('[data-header="menu"]');
  let header_visible = false;

  HEADER_BUTTON.addEventListener('click', (ev)=>{
    if(header_visible) {
      HEADER_MENU.classList.add('max-h-0');
      HEADER_MENU.classList.remove('max-h-700');
    }
    else {
      HEADER_MENU.classList.add('max-h-700');
      HEADER_MENU.classList.remove('max-h-0');
    }
    header_visible = !header_visible
  })

});
