!function(){"use strict";function e(){const e=document.querySelector(".burger__wrapper"),t=document.querySelector(".menu__search");e.classList.contains("burger__wrapper--js")||t.classList.contains("menu__search-visible")?document.body.classList.add("background__linear"):document.body.classList.remove("background__linear")}document.addEventListener("DOMContentLoaded",(function(){(function(){const t=document.querySelector('[data-action="click"]'),n=document.querySelector(".burger__wrapper");function s(){n.classList.contains("burger__wrapper--js")&&(n.classList.remove("burger__wrapper--js"),t.classList.remove("burger__open"),e())}t&&(t.addEventListener("click",(s=>{s.stopPropagation(),t.classList.toggle("burger__open"),n.classList.toggle("burger__wrapper--js"),e()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&s()})),document.addEventListener("click",(function(e){n.contains(e.target)||t.contains(e.target)||s()})))})(),document.querySelectorAll(".dropdown__wrapper").forEach((e=>{const t=e.querySelector('[data-action="dropdown"]'),n=e.querySelector('[data-action="dropdown__visible"]');e.addEventListener("mouseenter",(()=>{n.classList.add("dropdown__visible"),t.classList.add("dropdown__name--js")})),e.addEventListener("mouseleave",(()=>{n.classList.remove("dropdown__visible"),t.classList.remove("dropdown__name--js")}))})),function(){const t=document.querySelectorAll('[data-action="search"]'),n=document.querySelector(".menu__search"),s=document.getElementById("search-form"),c=document.querySelector(".menu__delete"),o=document.getElementById("top-form");function r(){n.classList.contains("menu__search-visible")&&(n.classList.remove("menu__search-visible"),e())}t.length>0&&n&&(t.forEach((t=>{t.addEventListener("click",(t=>{t.stopPropagation(),n.classList.toggle("menu__search-visible"),e(),s.focus()}))})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&r()})),document.addEventListener("click",(function(e){n.contains(e.target)||e.target.matches('[data-action="search"]')||r()})),s.addEventListener("input",(function(){s.value.length>0?c.classList.add("menu__delete-visible"):c.classList.remove("menu__delete-visible")})),c.addEventListener("click",(function(){s.value="",c.classList.remove("menu__delete-visible"),s.focus()})),o.addEventListener("submit",(function(e){""===s.value.trim()&&e.preventDefault()})))}(),function(){const e=document.querySelectorAll('[data-action="calendar"]'),t=document.querySelectorAll('[data-action="close"]'),n=document.querySelectorAll(".poster__background");if(e&&n)for(let s=0;s<e.length;s++){const c=e[s],o=n[s],r=t[s];c.addEventListener("click",(()=>{o.classList.toggle("poster__visible")})),r.addEventListener("click",(()=>{o.classList.remove("poster__visible")}))}}()}))}();