import{i as l,S as f}from"./assets/vendor-4a64600c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="42787384-4c627c93f7dff570902230658",y="https://pixabay.com/api/";function m(n){const s=`${y}?key=${d}&q=${n}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(`Response error with status ${e.status}`);return e.json()}).then(e=>e.hits.length===0?[]:e).catch(e=>{console.log(`Error: ${e}`)})}function h(n){return n.hits.map(({largeImageURL:s,webformatURL:e,tags:i,likes:t,views:r,comments:o,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href="${s}">
          <img 
          src="${e}" 
          alt="${i}" 
          width="360px" height="260px"/>
      </a>
      <div>
          <p>
              <span>Likes: <span>${t}</span>
              </span>    
          </p>
          <p>
              <span>Views: <span>${r}</span>
              </span>    
          </p>
          <p>
              <span>Comments: <span>${o}</span>
              </span>    
          </p>
          <p>
              <span>Downloads: <span>${u}</span>
              </span>    
          </p>
      </div>
  </li>`).join("")}const p=document.querySelector(".card-place"),c=document.querySelector(".form"),g=c.querySelector(".input"),a=document.querySelector(".loader-div");a.style.display="none";c.addEventListener("submit",n=>{n.preventDefault(),a.style.display="flex",p.innerHTML="";const s=g.value.trim().toLowerCase().replace(/ /g,"+");m(s).then(e=>{e.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none"):(p.innerHTML=h(e),$.refresh(),c.reset(),a.style.display="none")}).catch(e=>{l.error({message:`${e}`})})});const $=new f(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
