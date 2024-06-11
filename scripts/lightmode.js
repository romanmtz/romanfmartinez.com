// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved 'lightMode' in localStorage

 
  let lightMode = localStorage.getItem('lightMode');
  let filmGrain = localStorage.getItem('filmGrain');
  let crtFilter = localStorage.getItem('crtFilter');

  const lightModeToggle = document.querySelector('#light-mode-toggle');
  const filmGrainToggle = document.querySelector('#film-grain-toggle');
  const crtFilterToggle = document.querySelector('#crt-filter-toggle');

  const noise = document.getElementById('noise');
  const crt = document.getElementById('crt');

  const enableLightMode = () => {
    // Add the class to the body
    document.body.classList.add('lightmode');
    // Update lightMode in localStorage
    localStorage.setItem('lightMode', 'enabled');
  };

  const disableLightMode = () => {
    // Remove the class from the body
    document.body.classList.remove('lightmode');
    
    // Update lightMode in localStorage
    localStorage.setItem('lightMode', 'disabled');
  };

  const disableGrain = () => {
    noise.classList.remove('noise');
    filmGrainToggle.checked = false;
    // Update lightMode in localStorage
    localStorage.setItem('filmGrain', 'disabled');
  };

  const enableGrain = () => {
    noise.classList.add('noise');
    filmGrainToggle.checked = true;

    // Update lightMode in localStorage
    localStorage.setItem('filmGrain', 'enabled');
  };

  const disableCRTFilter = () => {
    crt.classList.remove('crt');
    crtFilterToggle.checked = false;
    // Update lightMode in localStorage
    localStorage.setItem('crtFilter', 'disabled');
  };

  const enableCRTFilter = () => {
    crt.classList.add('crt');
    crtFilterToggle.checked = true;

    // Update lightMode in localStorage
    localStorage.setItem('crtFilter', 'enabled');
  };

  

  // If the user already visited and enabled lightMode, start things off with it on
  if (lightMode === 'enabled') {
    
    enableLightMode();
  }
  if (filmGrain === 'enabled') {

    enableGrain();
  }
  if (crtFilter === 'enabled') {
    enableCRTFilter();
  }
  if(lightMode == null){
    enableGrain();
    enableCRTFilter();
  }

  // When someone clicks the button
  lightModeToggle.addEventListener('click', () => {
    // Get their lightMode setting
    lightMode = localStorage.getItem('lightMode');

    // If it is not currently enabled, enable it
    if (lightMode !== 'enabled') {
      enableLightMode();
      // If it has been enabled, turn it off
    } else {
      disableLightMode();
    }
  });
  filmGrainToggle.addEventListener('click', () => {
    // Get their lightMode setting
    filmGrain = localStorage.getItem('filmGrain');

    // If it is not currently enabled, enable it
    if (filmGrain !== 'enabled') {
      enableGrain();
      // If it has been enabled, turn it off
    } else {
      disableGrain();
    }
  });
  crtFilterToggle.addEventListener('click', () => {
    // Get their lightMode setting
    crtFilter = localStorage.getItem('crtFilter');

    // If it is not currently enabled, enable it
    if (crtFilter !== 'enabled') {
      enableCRTFilter();
      // If it has been enabled, turn it off
    } else {
      disableCRTFilter();
    }
  });
});
