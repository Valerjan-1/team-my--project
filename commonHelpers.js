import"./assets/support-c834f1e5.js";import{a as h}from"./assets/vendor-26fe51b3.js";const g="https://books-backend.p.goit.global/";function k(e){if(!e.data)throw new Error("Invalid response format");return e.data}function y(e){throw e.response?new Error(`Request failed with status ${e.response.status}`):e.request?new Error("No response received from the server"):new Error(`Error setting up the request: ${e.message}`)}async function $(){try{const e=await h.get(`${g}books/category-list`);return k(e)}catch(e){y(e)}}async function f(){try{const e=await h.get(`${g}books/top-books`);return k(e)}catch(e){y(e)}}async function C(e){try{const t=await h.get(`${g}books/category?category=${e}`);return k(t)}catch(t){y(t)}}const E=document.querySelector(".all-categories"),L=document.querySelector(".book-category-list"),m=document.querySelector(".Books-best-sellers-text");document.querySelector(".Books-best-sellers-text-span");$().then(e=>{e.sort((t,s)=>t.list_name>s.list_name?1:-1).map(t=>{const{list_name:s}=t;return E.insertAdjacentHTML("beforeend",`<li ><a class="list-category" href="">${s}</a></li>`)}).join("")}).catch(e=>console.log(e));E.addEventListener("click",T);function T(e){e.preventDefault(),console.log(e.target.textContent);const t=e.target.textContent;if(t==="All categories"){m.innerHTML="Best Sellers";const s="Books";let a=document.createElement("span");a.classList.add("Books-best-sellers-text-span"),a.textContent=s,m.appendChild(a),f().then(n=>{const o=document.querySelector(".book-category-list");n.forEach(l=>{const c=document.createElement("h3");c.textContent=`${l.list_name}`.toUpperCase(),c.className="bs-h3";const r=document.createElement("ul");r.className="bs-book-list",l.books.forEach(d=>{const u=document.createElement("li");u.className="bs-book-item",u.innerHTML=`
          <img class="bs-book-image" src="${d.book_image}" alt="${d.title}"" />
          <p class="title-book">${d.title}</p>
          <p class="author-book">${d.author}</p>
        `,r.appendChild(u)}),o.appendChild(c),o.appendChild(r);const i=document.createElement("button");i.type="button",i.classList.add("bs-buttom");const p=document.createElement("span");p.textContent="See More",p.classList.add("bs-buttom-name"),i.appendChild(p),o.appendChild(i)})}).catch(n=>console.error("Error fetching data:",n))}else{const a=t.split(" ").slice(0,-1),n=t.split(" ").pop();m.innerHTML=a.join(" ");let o=document.createElement("span");o.classList.add("Books-best-sellers-text-span"),o.textContent=n,m.appendChild(o)}t&&C(t).then(s=>{const a=s.map(({book_image:n,title:o,author:l,_id:c})=>`<li id="${c}" class="bs-book-item">
      <img class="bs-book-image" src="${n}" alt="${o}" />
      <p class="title-book">${o}</p>
      <p class="author-book">${l}</p>
    </li>`).join("");return L.innerHTML=a}).catch(s=>console.log(s))}const x=document.querySelector(".book-category-list"),w=document.querySelector(".Books-best-sellers-text"),b=document.querySelector(".scroll-btn");function M(e){C(e).then(t=>{console.log(t);const s=t.map(({book_image:a,title:n,author:o,_id:l})=>`
          <li class="bs-book-item-fil">
            <img src="${a}" alt="${n}" class="bs-book-image" />
            <p class="title-book">${n}</p>
            <p class="author-book">${o}</p>
          </li>`).join("");x.innerHTML=`<ul class="bs-book-list-fil">${s}</ul>`}).catch(t=>console.error("Error fetching data:",t))}document.addEventListener("DOMContentLoaded",()=>{f().then(e=>{const t=document.querySelector(".book-category-list");e.forEach(s=>{const a=document.createElement("h3");a.textContent=`${s.list_name}`.toUpperCase(),a.className="bs-h3";const n=document.createElement("ul");n.className="bs-book-list",s.books.forEach(c=>{const r=document.createElement("li");r.className="bs-book-item",r.innerHTML=`
            <img class="bs-book-image" src="${c.book_image}" alt="${c.title}" />
            <p class="title-book">${c.title}</p>
            <p class="author-book">${c.author}</p>
          `,n.appendChild(r)}),t.appendChild(a),t.appendChild(n);const o=document.createElement("button");o.type="button",o.classList.add("bs-buttom");const l=document.createElement("span");l.textContent="See More",l.classList.add("bs-buttom-name"),o.appendChild(l),t.appendChild(o),o.addEventListener("click",function(){M(s.list_name),w.textContent=s.list_name})})}).catch(e=>console.error("Error fetching data:",e)),b.addEventListener("click",function(){S()})});function S(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){B()};function B(){document.body.scrollTop>100||document.documentElement.scrollTop>100?b.style.display="block":b.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
