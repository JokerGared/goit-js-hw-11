import{a as l,S as m,i as o}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/";function h(s){const a="api/",i=new URLSearchParams({key:"16827506-9469cc67c3ec90b2828a9ad0f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return l.get(`${a}?${i}`).then(r=>{if(c.spinner.classList.remove("is-pending"),!r.data.hits||r.data.hits.length===0)throw new Error;return r.data.hits})}const d=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,animationSpeed:50,fadeSpeed:100,scrollZoom:!1});function g(s){const a=y(s);c.gallery.innerHTML=a,d.refresh()}function f({webformatURL:s,largeImageURL:a,tags:i,likes:r,views:e,comments:t,downloads:n}){const p=[...new Set(i.split(", ").map(u=>u.trim()))].join(", ");return`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${s}" alt="${p}" width="360" height = "200"/>
        <ul class="characteristics">
          <li class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${r}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${e}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${t}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${n}</span>
          </li>
        </ul>
      </a>
    </li>`}function y(s){return s.map(f).join("")}function L(){c.gallery.innerHTML=""}const c={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader")};c.form.addEventListener("submit",s=>{s.preventDefault();const a=s.target.elements.query.value;if(a.trim()===""){o.warning({position:"topRight",message:"Please, write something"});return}L(),c.spinner.classList.add("is-pending"),h(a).then(i=>{g(i)}).catch(()=>{o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}),s.target.reset()});
//# sourceMappingURL=index.js.map
