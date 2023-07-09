const t=document.querySelector("body"),e=document.querySelectorAll("button"),n=e[0],o=e[1];n.addEventListener("click",(function(){const e=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);n.disabled=!0,o.addEventListener("click",(()=>{clearInterval(e),n.disabled=!1}))}));
//# sourceMappingURL=01-color-switcher.e2521da1.js.map
