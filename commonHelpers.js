import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const u="/goit-js-hw-11/assets/left-close-f1c537d4.svg",n={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul")},p="41896397-c8b989416d0fb53fd1030eb96",f="https://pixabay.com/api/";n.form.addEventListener("submit",d);function d(o){o.preventDefault();const e=o.currentTarget,a=e.elements.image.value;m(a).then(s=>{console.log(s),n.list.innerHTML=g(s),s.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:u,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}).catch(s=>console.log(s)).finally(()=>{e.reset()})}function m(o){const e=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${e}`).then(a=>{if(a.ok)return a.json();throw new Error(a.statusText)})}function g(o){return o.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}"
            ><img class="gallery-img" src="${e.webformatURL}" data-sourse="${e.largeImageURL}" alt="${e.tags}"
          /></a>
          <div class="description-wrapper">
            <div class="value-wrapper">
              <p class="label"><b>Likes</b></p>
              <p class="value">${e.likes}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Views</b></p>
              <p class="value">${e.views}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Comments</b></p>
              <p class="value">${e.comments}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Downloads</b></p>
              <p class="value">${e.downloads}</p>
            </div>
          </div>
        </li>`).join("")}new c(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
