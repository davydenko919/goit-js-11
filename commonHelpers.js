import{i as f,S as u}from"./assets/vendor-39d661cd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="42787384-4c627c93f7dff570902230658",y="https://pixabay.com/api/";function i(a){const t=`${y}?key=${g}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true`;return fetch(t).then(s=>{if(!s.ok)throw new Error(`Response error with status ${s.status}`);return s.json()}).then(s=>s.hits.length===0?(f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):s).catch(s=>{console.log(`Error: ${s}`)})}function d(a){return a.hits.map(({largeImageURL:t,webformatURL:s,tags:o,likes:e,views:r,comments:n,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${s}" 
          alt="${o}" 
          width="360px" height="260px"/>
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${r}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${p}</span>
              </span>    
          </p>
      </div>
  </li>`).join("")}const m=document.querySelector(".card-place"),l=document.querySelector(".form"),h=l.querySelector("input"),c=h.value.trim().toLowerCase().replace(/ /g,"+");l.addEventListener("submit",a=>{a.preventDefault(),console.log(i(c)),i(c).then(t=>{m.innerHTML=d(t),$.refresh(),l.reset()}).catch(t=>{console.error("Error:",t)})});const $=new u(".card-place li ",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
