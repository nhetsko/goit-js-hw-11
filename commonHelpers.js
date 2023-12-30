import{i as d,S as f}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".form-search"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");c.addEventListener("submit",h);function h(r){r.preventDefault(),n.innerHTML=" ";const o=r.target.elements.search.value;a.style.display="block",m(o).then(s=>{a.style.display="none",s.hits.length||d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=p(s.hits),new f(".gallery",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),c.reset()}).catch(s=>{a.style.display="none",console.log(s)})}function m(r){const o="https://pixabay.com/api/",s="41511305-1e730bfa7be67778e89c40f75";r.includes(" ")&&r.replace(/\s+/g,"+");const i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${l}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
