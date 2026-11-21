const ICON = { // simple icons; swap for official SVGs any time
 discord:'<path d="M20 5a17 17 0 0 0-4.200-1.300l-.5 1a15 15 0 0 0-4.600 0l-.5-1A17 17 0 0 0 6 5C3.300 9 2.600 13 3 17a17 17 0 0 0 5.200 2.600l1.100-1.800-1.700-.8.400-.3a12 12 0 0 0 10.200 0l.4.300-1.700.8 1.100 1.800A17 17 0 0 0 21 17c.5-4.600-.8-8.600-1-12zM9 14.500c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2zm6 0c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2z"/>',
 telegram:'<path d="M21.500 3.500 2.700 10.800c-1 .4-1 1.100-.2 1.300l4.800 1.500 1.800 5.600c.2.600.4.800.9.800s.7-.2 1-.5l2.300-2.200 4.700 3.500c.9.500 1.500.2 1.700-.8L22.900 4.900c.3-1.200-.5-1.800-1.400-1.400zM9 13.500l9.500-6c.4-.3.8-.1.500.2l-7.800 7-.3 3.200L9 13.500z"/>',
 youtube:'<path d="M22 8.200a3 3 0 0 0-2.100-2.100C18 5.600 12 5.600 12 5.600s-6 0-7.900.5A3 3 0 0 0 2 8.200C1.500 10 1.500 12 1.500 12s0 2 .5 3.800a3 3 0 0 0 2.100 2.100c1.900.5 7.900.5 7.900.5s6 0 7.900-.5a3 3 0 0 0 2.100-2.100c.5-1.800.5-3.800.5-3.800s0-2-.5-3.800zM10 15V9l5.200 3L10 15z"/>',
 instagram:'<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.500-3.500a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400z"/>',
 x:'<path d="M18.200 2.500h3.100l-6.800 7.700 8 11.300h-6.300l-4.900-6.800-5.700 6.800H2.500l7.300-8.300L2.100 2.500h6.400l4.400 6.200 5.300-6.200zm-1.100 17.100h1.700L7.300 4.300H5.500l11.600 15.300z"/>'};
const NAME = {discord:"Discord",telegram:"Telegram",youtube:"YouTube",instagram:"Instagram",x:"Twitter / X"};
const PAGES = [["index.html","Home"],["samp.html","SAMP Mods"],["fivem.html","FiveM Mods"],["steam.html","Steam Accounts"]];
const $ = s => document.querySelector(s);

function socials(){return Object.keys(ICON).map(k=>{const u=LINKS[k];
 return u?`<a class="soc" href="${u}" target="_blank" rel="noopener" aria-label="${NAME[k]}"><svg viewBox="0 0 24 24">${ICON[k]}</svg></a>`
 :`<span class="soc soon" title="${NAME[k]} coming soon" aria-label="${NAME[k]} coming soon"><svg viewBox="0 0 24 24">${ICON[k]}</svg></span>`}).join("")}

function chrome(){
 const here=location.pathname.split("/").pop()||"index.html";
 document.body.insertAdjacentHTML("afterbegin",
 `<div id="loader"><img src="logo.png" alt="DOBEY'S LEGACY"></div>
 <nav><div class="wrap"><a class="brand" href="index.html"><img src="logo.png" alt="">DOBEY'S LEGACY</a>
 <button id="burger" aria-label="Menu" aria-expanded="false">☰</button>
 <div class="links" id="links">${PAGES.map(p=>`<a href="${p[0]}" class="${p[0]==here?"on":""}">${p[1]}</a>`).join("")}</div></div></nav>`);
 $("footer").innerHTML=`<div class="wrap"><div class="socials">${socials()}</div><p>© ${new Date().getFullYear()} DOBEY'S LEGACY. Your Ultimate Gaming Community.</p></div>`;
 $("#burger").onclick=e=>{const o=$("#links").classList.toggle("open");e.target.setAttribute("aria-expanded",o)};
 window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),350));
 document.addEventListener("click",e=>{const a=e.target.closest("a");
  if(a&&a.href&&a.origin==location.origin&&!a.target&&a.pathname!=location.pathname){e.preventDefault();document.body.classList.add("leave");setTimeout(()=>location.href=a.href,230)}});
}

function card(m){return `<article class="card"><div class="thumb">${m.img?`<img src="${m.img}" alt="${m.name}" loading="lazy">`:"DL"}</div>
 <div class="body"><span class="tag">${m.cat}</span><h3>${m.name}</h3><p>${m.desc}</p>
 <a class="btn" href="${m.link}" target="_blank" rel="noopener">Download</a></div></article>`}

function modsPage(list){ // search + category filter
 const cats=["All",...new Set(list.map(m=>m.cat))];let cat="All";
 $("#chips").innerHTML=cats.map(c=>`<button class="chip${c=="All"?" on":""}">${c}</button>`).join("");
 const draw=()=>{const q=$("#q").value.toLowerCase();
  const r=list.filter(m=>(cat=="All"||m.cat==cat)&&(m.name+m.desc).toLowerCase().includes(q));
  $("#list").innerHTML=r.length?r.map(card).join(""):'<p class="empty">Nothing found. Try another search or category.</p>'};
 $("#chips").onclick=e=>{if(!e.target.classList.contains("chip"))return;cat=e.target.textContent;
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c==e.target));draw()};
 $("#q").oninput=draw;draw();
}

function steamPage(){$("#list").innerHTML=STEAM.map(a=>{const ok=a.status=="Available";
 return `<article class="card"><div class="thumb">${a.img?`<img src="${a.img}" alt="${a.name}">`:"STEAM"}</div>
 <div class="body"><span class="tag">${a.status}</span><h3>${a.name}</h3><p>${a.info}</p>
 <a class="btn${ok?"":" off"}" href="${LINKS.discord}" target="_blank" rel="noopener">${ok?"Get Account":"Sold out"}</a></div></article>`}).join("")}

function counters(){document.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n;let t=0;
 const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();
  const s=performance.now();(function f(now){t=Math.min((now-s)/1400,1);el.textContent=Math.round(n*t).toLocaleString()+"+";if(t<1)requestAnimationFrame(f)})(s)});io.observe(el)})}

document.addEventListener("DOMContentLoaded",()=>{chrome();
 const p=document.body.dataset.page;
 if(p=="samp")modsPage(SAMP);if(p=="fivem")modsPage(FIVEM);if(p=="steam")steamPage();
 if(p=="home"){$("#hero-socials").innerHTML=socials();counters()}
 document.querySelectorAll("[data-discord]").forEach(a=>{a.href=LINKS.discord;a.target="_blank";a.rel="noopener"});
});
