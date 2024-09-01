import{i as a,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function m(t,s=1){const e=`https://pixabay.com/api/?key=45718127-30771d56f6b088ceef33bd7c7&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=12`;try{return await(await fetch(e)).json()}catch(r){throw console.error("Error fetching images:",r),r}}function y(t){const s=document.querySelector(".gallery"),n=t.map(o=>`
            <a href="${o.largeImageURL}" class="gallery__link">
                <div class="gallery-item">
                    <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes</b> ${o.likes}</p>
                        <p class="info-item"><b>Views</b> ${o.views}</p>
                        <p class="info-item"><b>Comments</b> ${o.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${o.downloads}</p>
                    </div>
                </div>
            </a>
        `).join("");s.innerHTML=n}function p(){document.querySelector(".gallery").innerHTML=""}const g=document.querySelector("#search-form");let c=1,l="",u;g.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.currentTarget.elements.user_query.value.trim(),!l){a.error({title:"Error",message:"Please enter a search query."});return}p(),c=1,f()});async function f(){try{const{hits:t,totalHits:s}=await m(l,c);if(t.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t),u=new d(".gallery a"),u.refresh(),c*12>=s&&a.info({title:"End of Results",message:"You have reached the end of search results."})}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}}window.addEventListener("scroll",()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight&&(c+=1,f())});
//# sourceMappingURL=index.js.map
