import{i as c}from"./assets/vendor-32231325.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a="/goit-js-hw-11/assets/left-close-f1c537d4.svg",l={form:document.querySelector("form"),button:document.querySelector("button")},u="41896397-c8b989416d0fb53fd1030eb96",f="https://pixabay.com/api/";l.form.addEventListener("submit",m);function m(s){s.preventDefault();const o=s.currentTarget,r=o.elements.image.value;d(r).then(n=>{console.log(n),n.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:a,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}).catch(n=>console.log(n)).finally(()=>{o.reset()})}function d(s){const o=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}`).then(r=>{if(r.ok)return r.json();throw new Error(r.statusText)})}
//# sourceMappingURL=commonHelpers.js.map
