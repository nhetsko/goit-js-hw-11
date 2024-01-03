import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=document.querySelector(".form-search"),n=document.querySelector(".gallery"),i=document.querySelector(".loader"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",f);function f(o){o.preventDefault(),n.innerHTML=" ";const s=o.target.elements.search.value;i.style.display="block",p(s).then(r=>{i.style.display="none",r.hits.length||d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=y(r.hits),m.refresh(),o.currentTarget.reset()}).catch(r=>{i.style.display="none",console.log(r)})}function p(o){const s="https://pixabay.com/api/",r="41511305-1e730bfa7be67778e89c40f75",a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:l,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${a}"
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
              <p class="amount">${c}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
