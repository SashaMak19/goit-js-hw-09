const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let l=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(r){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log("hello from onStart")})),e.addEventListener("click",(function(o){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(l),console.log("hello from onStop")}));
//# sourceMappingURL=01-color-switcher.5e35cb62.js.map
