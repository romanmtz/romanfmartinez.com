document.addEventListener('DOMContentLoaded', function () {
  let hero = document.getElementById('hero');
  let navbar = document.getElementById('nav');
  let aboutme = document.getElementById('aboutme');
  let projects = document.getElementById('projects');
  let vault = document.getElementById('vault');

  let aboutme_link = document.getElementById('aboutme-button');
  let projects_link = document.getElementById('projects-button');
  let vault_link = document.getElementById('vault-button');

  let settingsButton = document.getElementById('settings-button');
  let settingsModal = document.getElementById('settings-modal')

  const SWITCH_BUFFER = 300;

  function toggleFix() {

    if (!checkVisible(hero, window.innerHeight/2.5)) {
      navbar.classList.add('fixed-navbar');
    } else {
      navbar.classList.remove('fixed-navbar');
    }
  }

  function sectionFocus() {
    const sections = [
        { section: vault, link: vault_link, precedence: 4, },
        { section: aboutme, link: aboutme_link, precedence: 3 },
        { section: projects, link: projects_link, precedence: 2 },
        { section: hero, link: null, precedence: 1 }
      ];
    
      let visibleSection = null;
      let highestPrecedence = -Infinity;
    
      for (const { section, link, precedence } of sections) {
        if (checkVisible(section, window.innerHeight/3)) {
          if (precedence > highestPrecedence) {
            visibleSection = { section, link };
            highestPrecedence = precedence;
          }
        }
      }
    
      // Clear all sections
      for (const { section, link } of sections) {
        section.classList.remove('in-focus');
        if (link) link.classList.remove('underlined-link');
      }
    
      // Highlight the section with the highest precedence
      if (visibleSection) {
        visibleSection.section.classList.add('in-focus');
        if (visibleSection.link) visibleSection.link.classList.add('underlined-link');
      }

  }

  function checkVisible(elm, threshold) {
    mode = 'visible';

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above'
      ? above
      : mode === 'below'
      ? below
      : !above && !below;
  }

  settingsButton.onclick = () =>{
    settingsModal.showModal();
  }

settingsModal.onclick = (e) =>{
  if(e.target == settingsModal)
  settingsModal.close();
}
  
  window.onscroll = () => {
    toggleFix();
    sectionFocus();
  };
  window.onload = () => {
    sectionFocus();
  };
});
