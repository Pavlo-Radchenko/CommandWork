(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-logo]"),n=document.querySelector(".burger-menu__btn-icon-cross");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("logo--hidden")})),n.addEventListener("click",(()=>{t.classList.toggle("is-open")}))})();
//# sourceMappingURL=index.cca08aba.js.map