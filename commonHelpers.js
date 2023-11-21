import"./assets/header-a30e7f6b.js";import{a as w}from"./assets/vendor-26fe51b3.js";const B="https://books-backend.p.goit.global/";function C(t){if(!t.data)throw new Error("Invalid response format");return t.data}function y(t){throw t.response?new Error(`Request failed with status ${t.response.status}`):t.request?new Error("No response received from the server"):new Error(`Error setting up the request: ${t.message}`)}async function D(){try{const t=await w.get(`${B}books/category-list`);return C(t)}catch(t){y(t)}}async function H(){try{const t=await w.get(`${B}books/top-books`);return C(t)}catch(t){y(t)}}async function Q(t){try{const e=await w.get(`${B}books/category?category=${t}`);return C(e)}catch(e){y(e)}}async function k(t){try{const e=await w.get(`${B}books/${t}`);return C(e)}catch(e){y(e)}}const P=document.querySelector(".book-category-list"),L=document.querySelector("body"),h=document.querySelector(".modal");function U(t){k(t).then(e=>{const{title:n,author:a,book_image:i,description:o,buy_links:c,_id:s}=e;h.innerHTML=`<span class="close" id="closeModalBtn">&times;</span>
        <div class="modal-content">
          <img src="${i}" class="modal-image" alt="${n}" />
          <div class="text-content-modal">
            <h2 id="modalTitle" class="modal-title">${n}</h2>
            <p id="modalAuthor" class="modal-author">${a}</p>
            <p id="modalDescription" class="modal-description">${o}</p>
          </div>
        </div>
        <button id="modal-add-to-list" type="button" class="modal-button">
          ADD TO SHOPPING LIST
        </button>`,L.classList.add("modal-open");const A=document.getElementById("closeModalBtn"),d=document.getElementById("modal-add-to-list");A.addEventListener("click",r),d.addEventListener("click",l);function r(){h.style.display="none",L.classList.remove("modal-open")}function l(){const p={id:s,title:n,author:a,image:i,description:o,buy_links:c};console.dir(p);const u=JSON.parse(localStorage.getItem("shoppingList"))||[];u.push(p),localStorage.setItem("shoppingList",JSON.stringify(u)),r()}window.addEventListener("click",function(p){p.target===h&&r()}),h.style.display="block"}).catch(e=>console.log(e))}P.addEventListener("click",X);function X(t){const e=t.target.id;U(e)}const f=document.querySelector(".all-categories"),b=document.querySelector(".book-category-list");document.querySelector("main");document.querySelector(".modal");const m=document.querySelector(".Books-best-sellers-text"),g=document.querySelector(".active-all-categories");g.classList.remove("inactive-all-categories");D().then(t=>{t.sort((e,n)=>e.list_name>n.list_name?1:-1).map(e=>{const{list_name:n}=e;return f.insertAdjacentHTML("beforeend",`<li><a class="list-category"href="">${n}</a></li>`)}).join("")}).catch(t=>console.log(t));f.addEventListener("click",E);function E(t){t.preventDefault();const e=t.target.textContent;if(e==="All categories"){g.classList.remove("inactive-all-categories"),g.classList.add("active-all-categories"),m.innerHTML="Best Sellers";const n=" Books";let a=document.createElement("span");a.classList.add("Books-best-sellers-text-span"),a.textContent=n,m.appendChild(a),H().then(i=>{const o=document.querySelector(".book-category-list");i.forEach(c=>{const s=document.createElement("h3");s.textContent=`${c.list_name}`.toUpperCase(),s.className="bs-h3";const A=document.createElement("ul");A.className="bs-book-list",c.books.forEach(l=>{const p=document.createElement("li");p.className="bs-book-item",l._id,l.title,l.author,l.book_image,l.description,l.buy_links[1],p.innerHTML=`
          <img id="${l._id}" src="${l.book_image}" alt="${l.title}" />
          <p class="title-book">${l.title}</p>
          
          <p class="author-book">${l.author}</p>
        `,A.appendChild(p)}),o.appendChild(s),o.appendChild(A);const d=document.createElement("button");d.type="button",d.classList.add("bs-buttom");const r=document.createElement("span");r.textContent="See More",r.classList.add("bs-buttom-name"),d.appendChild(r),o.appendChild(d)})}).catch(i=>console.error("Error fetching data:",i))}else{g.classList.remove("active-all-categories"),g.classList.add("inactive-all-categories");const a=e.split(" ").slice(0,-1),i=e.split(" ").pop();m.innerHTML=a.join(" ");let o=document.createElement("span");o.classList.add("Books-best-sellers-text-span"),o.textContent=` ${i}`,m.appendChild(o)}e&&Q(e).then(n=>{const a=n.map(({book_image:i,title:o,author:c,_id:s}=a)=>`<li  class="bs-book-item">
      <img id="${s}" class="bs-book-image" src="${i}" alt="${o}" />
      <p class="title-book">${o}</p>
      <p class="author-book">${c}</p>
    </li>`).join("");console.dir(n),b.innerHTML=a}).catch(n=>console.log(n))}const v="/project-group-13/assets/save-children@2x-1fd9040a.png",O="data:image/png;base64,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",x="/project-group-13/assets/international@2x-6ce6541b.png",N="data:image/png;base64,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",T="data:image/png;base64,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",G="/project-group-13/assets/prytula@2x-cd5f732a.png",q="/project-group-13/assets/medecins@2x-d223f1f4.png",R="data:image/png;base64,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",I="data:image/png;base64,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",z=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:v,width:"131px"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:O,width:"62px"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:x,width:"101px"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:N,width:"82px"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:T,width:"55px"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:G,width:"115px"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:q,width:"102px"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:R,width:"81px"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:I,width:"109px"}];function j(){const t=document.getElementById("charity-section"),e=document.createElement("div");e.classList.add("charity-list-container");const n=document.createElement("ul");n.classList.add("charity-list"),z.forEach((s,A)=>{const d=document.createElement("li");d.classList.add("charity-list-li");const r=document.createElement("a");r.classList.add("charity-link"),r.href=s.url,r.target="_blank";const l=document.createElement("img");l.classList.add("charity-logo"),l.src=s.img,l.alt=s.title,l.width=s.width;const p=window.devicePixelRatio||1;l.width=parseInt(s.width)*p;const u=document.createElement("span");u.classList.add("charity-number"),u.textContent=(A+1).toString().padStart(2,"0"),r.appendChild(u),r.appendChild(l),d.appendChild(r),n.appendChild(d)}),e.appendChild(n),t.appendChild(e);const a=292;e.style.height=`${a}px`;const i=document.createElement("button");i.classList.add("support-button");const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add("arrow-icon"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width","22"),o.setAttribute("height","22"),o.setAttribute("viewBox","0 0 22 22"),o.setAttribute("fill","none");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M10.3488 12.2834C10.434 12.3694 10.5354 12.4376 10.6471 12.4841C10.7588 12.5306 10.8786 12.5546 10.9996 12.5546C11.1206 12.5546 11.2404 12.5306 11.3521 12.4841C11.4638 12.4376 11.5652 12.3694 11.6504 12.2834L15.8488 8.07594C15.934 7.99002 16.0354 7.92183 16.1471 7.87529C16.2588 7.82875 16.3786 7.80479 16.4996 7.80479C16.6206 7.80479 16.7404 7.82875 16.8521 7.87529C16.9638 7.92183 17.0652 7.99002 17.1504 8.07594C17.3212 8.24769 17.417 8.48002 17.417 8.72219C17.417 8.96436 17.3212 9.19669 17.1504 9.36844L12.9429 13.5759C12.4273 14.0909 11.7283 14.3802 10.9996 14.3802C10.2708 14.3802 9.57188 14.0909 9.05625 13.5759L4.84875 9.36844C4.6794 9.1977 4.58393 8.96725 4.58292 8.72677C4.58222 8.60613 4.60534 8.48654 4.65096 8.37486C4.69658 8.26318 4.76379 8.16159 4.84875 8.07594C4.93397 7.99002 5.03535 7.92183 5.14705 7.87529C5.25876 7.82875 5.37857 7.80479 5.49958 7.80479C5.62059 7.80479 5.74041 7.82875 5.85211 7.87529C5.96382 7.92183 6.0652 7.99002 6.15042 8.07594L10.3488 12.2834Z"),c.setAttribute("fill","#4F2EE8"),o.appendChild(c),i.appendChild(o),t.appendChild(i),i.addEventListener("click",()=>{e.classList.toggle("showing-items-4-9"),o.classList.toggle("arrow-rotate",e.classList.contains("showing-items-4-9")),e.classList.contains("showing-items-4-9")?e.scrollTop=a:e.scrollTop=0})}j();document.querySelector(".book-category-list");H().then(t=>{const e=document.querySelector(".book-category-list");t.forEach(n=>{const a=document.createElement("h3");a.textContent=`${n.list_name}`.toUpperCase(),a.className="bs-h3";const i=document.createElement("ul");i.className="bs-book-list",n.books.forEach(s=>{const A=document.createElement("li");A.className="bs-book-item",s._id,s.title,s.author,s.book_image,s.description,s.buy_links[1],A.innerHTML=`
          <img id="${s._id}" src="${s.book_image}" alt="${s.title}" />
          <p class="title-book">${s.title}</p>
          
          <p class="author-book">${s.author}</p>

        `,i.appendChild(A)}),e.appendChild(a),e.appendChild(i);const o=document.createElement("button");o.type="button",o.classList.add("bs-buttom");const c=document.createElement("span");c.textContent="See More",c.classList.add("bs-buttom-name"),o.appendChild(c)})}).catch(t=>console.error("Error fetching data:",t));const S=document.querySelector(".scroll-btn");window.onscroll=function(){F()};function F(){document.body.scrollTop>100||document.documentElement.scrollTop>100?S.style.display="block":S.style.display="none";function t(i){const o=new URL(import.meta.url);return o.pathname=`../img/support/${i}.png`,o.href}const e=t("scroll-b"),n=document.createElement("img");n.src=e,n.classList.add("scroll-icon"),n.alt="scroll-button",n.width="100%",n.height="100%",document.getElementById("scroll-btn").appendChild(n)}
//# sourceMappingURL=commonHelpers.js.map
