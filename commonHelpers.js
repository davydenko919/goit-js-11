import{i as u,S as f}from"./assets/vendor-4a64600c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="42787384-4c627c93f7dff570902230658",m="https://pixabay.com/api/";function c(o){const n=`${m}?key=${d}&q=${o}`;return fetch(n).then(t=>{if(!t.ok)throw new Error(`Response error with status ${t.status}`);return t.json()}).then(t=>t.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):t).catch(t=>{console.log(`Error: ${t}`)})}function h(o){return o.hits.map(({largeImageURL:n,webformatURL:t,tags:i,likes:e,views:r,comments:s,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
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
              <span>Comments: <span>${s}</span>
              </span>    
          </p>
          <p>
              <span>Downloads: <span>${p}</span>
              </span>    
          </p>
      </div>
  </li>`).join("")}const l=document.querySelector(".card-place"),a=document.querySelector(".form"),g=a.querySelector(".input");a.addEventListener("submit",o=>{o.preventDefault(),l.innerHTML="";const n=g.value.trim().toLowerCase().replace(/ /g,"+");console.log(c(n)),c(n).then(t=>{l.innerHTML=h(t),y.refresh(),a.reset()}).catch(t=>{console.error("Error:",t)})});const y=new f(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
