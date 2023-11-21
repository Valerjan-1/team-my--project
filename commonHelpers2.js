import"./assets/header-a55a9852.js";document.addEventListener("DOMContentLoaded",function(){l()});function p(){return JSON.parse(localStorage.getItem("shoppingList"))||[]}function l(){const t=p(),o=document.querySelector(".shopping-book-ul"),s=document.querySelector(".shopping-list-empty");t.length>0?(o.innerHTML=t.map(({id:i,title:e,author:c,image:a,description:g,buy_links:d})=>`
          <li class="shopping-book-li">
            <button class="shopping-delete-btn" data-book-id="${i}">
              <img
                class="shopping-list-svg"
                width="16"
                height="16"
                src="../img/trash.png"
              />
            </button>
            <img class="shopping-book-image" src="${a}" alt="${e}" />
            <div class="shopping-text-container">
              <p class="shopping-book-title">${e}</p>
              <p class="shopping-book-descrip">${g}</p>
              <p class="shopping-book-author">${c}</p>
            </div>
            <div class="amazon-kindle">
              <a class='kindle-link' href='${d}'>
                <img
                  class="kindle-pic"
                  src="../img/kindle.png"
                  style="background-color: transparent"
                  alt="kindle"
                />
              </a>
            </div>
          </li>
      `).join(""),document.querySelectorAll(".shopping-delete-btn").forEach(i=>{i.addEventListener("click",r)}),s.style.display="none"):s.style.display="block"}function r(t){const o=t.currentTarget.getAttribute("data-book-id");h(o),l()}function h(t){const s=p().filter(n=>n.id!==t);localStorage.setItem("shoppingList",JSON.stringify(s))}
//# sourceMappingURL=commonHelpers2.js.map
