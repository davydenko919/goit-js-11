import{i as u,S as f}from"./assets/vendor-4a64600c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="42787384-4c627c93f7dff570902230658",m="https://pixabay.com/api/";function y(n){const s=`${m}?key=${d}&q=${n}`;return fetch(s).then(t=>{if(!t.ok)throw new Error(`Response error with status ${t.status}`);return t.json()}).then(t=>t.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):t).catch(t=>{console.log(`Error: ${t}`)})}function h(n){return n.hits.map(({largeImageURL:s,webformatURL:t,tags:i,likes:e,views:r,comments:o,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${s}">
          <img 
          src="${t}" 
          alt="${i}" 
          width="360px" height="260px"/>
      </a>
      <div>
          <p>
              <span>Likes: <span>${e}</span>
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
              <span>Downloads: <span>${p}</span>
              </span>    
          </p>
      </div>
  </li>`).join("")}const l=document.querySelector(".card-place"),a=document.querySelector(".form"),g=a.querySelector(".input"),c=document.querySelector(".loader-div");c.style.display="none";a.addEventListener("submit",n=>{n.preventDefault(),c.style.display="flex",l.innerHTML="";const s=g.value.trim().toLowerCase().replace(/ /g,"+");y(s).then(t=>{l.innerHTML=h(t),$.refresh(),a.reset(),c.style.display="none"}).catch(t=>{iziToast.error({message:`${t}`})})});const $=new f(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
