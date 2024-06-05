document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("nav");
    let aboutme = document.getElementById("aboutme")
    let projects = document.getElementById("projects")
    let vault = document.getElementById("vault")

    let aboutme_link = document.getElementById("aboutme_button");
    let projects_link = document.getElementById("projects_button");
    let vault_link = document.getElementById("vault_button");


    const SWITCH_BUFFER = 300;

    function toggleFix() {
        let aboutmeRect = aboutme.getBoundingClientRect();

        if (window.scrollY >= (window.scrollY + aboutmeRect.top)) {
            navbar.classList.add("fixed-navbar");
        } else {
            navbar.classList.remove("fixed-navbar");
        }
    }

    function sectionUnderline() {
        let aboutmeRect = aboutme.getBoundingClientRect();
        let projectsRect = projects.getBoundingClientRect();
        let vaultRect = vault.getBoundingClientRect();


        aboutme_link.classList.remove("underlined-link")
        projects_link.classList.remove("underlined-link")
        vault_link.classList.remove("underlined-link")


        if (window.scrollY >= (window.scrollY + aboutmeRect.top) && window.scrollY < (window.scrollY + aboutmeRect.bottom - SWITCH_BUFFER)) {
            aboutme_link.classList.add("underlined-link")
        } else if (window.scrollY >= (window.scrollY + projectsRect.top - SWITCH_BUFFER) && window.scrollY < (window.scrollY + projectsRect.bottom - SWITCH_BUFFER)) {
            projects_link.classList.add("underlined-link")
        } else if (window.scrollY  >= (window.scrollY + vaultRect.top - SWITCH_BUFFER) && window.scrollY < (window.scrollY + vaultRect.bottom)) {
            vault_link.classList.add("underlined-link")
        }


    }


    window.onscroll = () => {
        toggleFix();
        sectionUnderline();

    };
});
