(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const o={theme:document.querySelector("#theme-toggle"),body:document.querySelector("body"),header:document.querySelector("header"),bookshelfIcon:document.getElementById("bookshelf-icon"),homeButton:document.querySelector("link-home"),shoppingButton:document.querySelector("link-shopping")};o.theme.addEventListener("change",function(){o.header.classList.toggle("dark-theme",o.theme.checked),o.body.classList.toggle("dark-theme",o.theme.checked);const r=o.bookshelfIcon.querySelector("use");o.theme.checked?(r.setAttribute("href","/css/sprite.svg#icon-Bookshelf_white"),r.setAttribute("href","/css/sprite.svg#icon-align-left_white")):(r.setAttribute("href","/css/sprite.svg#icon-Bookshelf"),r.setAttribute("href","/css/sprite.svg#icon-align-left"))});
//# sourceMappingURL=header-61359676.js.map
