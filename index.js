import{a as l,i as o}from"./assets/vendor-4yCzdkXl.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();l.defaults.baseURL="https://pixabay.com/";function d(t){const r="api/",i=new URLSearchParams({key:"16827506-9469cc67c3ec90b2828a9ad0f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return l.get(`${r}?${i}`).then(a=>{if(n.spinner.classList.remove("is-pending"),!a.data.hits||a.data.hits.length===0)throw new Error;return a.data.hits})}function u(t){const r=p(t);n.gallery.innerHTML=r}function m({webformatURL:t,largeImageURL:r,tags:i,likes:a,views:e,comments:s,downloads:c}){return`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${i}" />
        <div class="characteristics">
          <div class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${a}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${e}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${s}</span>
          </div>
          <div class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${c}</span>
          </div>
        </div>
      </a>
    </li>`}function p(t){return t.map(m).join()}function h(){n.gallery.innerHTML=""}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader")};n.form.addEventListener("submit",t=>{t.preventDefault();const r=t.target.elements.query.value;if(r.trim()===""){o.warning({position:"topRight",message:"Please, write something"});return}h(),n.spinner.classList.add("is-pending"),d(r).then(i=>{u(i)}).catch(()=>{o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}),t.target.reset()});
//# sourceMappingURL=index.js.map
