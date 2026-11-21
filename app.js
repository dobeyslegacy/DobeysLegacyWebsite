/* ===== EDIT SOCIAL LINKS HERE ===== */
const LINKS={discord:"https://discord.gg/ECQZhRkccJ",telegram:"https://t.me/DOBEYSLEGACY",youtube:"https://youtube.com/@dobeyslegacy",instagram:"https://www.instagram.com/Dobeyslegacy.official/",x:"" /* paste your X URL */};
const ICON = { // simple icons; swap for official SVGs any time
 discord:'<path d="M20 5a17 17 0 0 0-4.200-1.300l-.5 1a15 15 0 0 0-4.600 0l-.5-1A17 17 0 0 0 6 5C3.300 9 2.600 13 3 17a17 17 0 0 0 5.200 2.600l1.100-1.800-1.700-.8.400-.3a12 12 0 0 0 10.200 0l.4.300-1.700.8 1.100 1.800A17 17 0 0 0 21 17c.5-4.600-.8-8.600-1-12zM9 14.500c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2zm6 0c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2z"/>',
 telegram:'<path d="M21.500 3.500 2.700 10.800c-1 .4-1 1.100-.2 1.300l4.800 1.500 1.800 5.600c.2.600.4.800.9.800s.7-.2 1-.5l2.300-2.200 4.700 3.500c.9.500 1.500.2 1.700-.8L22.900 4.900c.3-1.200-.5-1.800-1.400-1.400zM9 13.500l9.500-6c.4-.3.8-.1.500.2l-7.800 7-.3 3.200L9 13.500z"/>',
 youtube:'<path d="M22 8.200a3 3 0 0 0-2.100-2.100C18 5.600 12 5.600 12 5.600s-6 0-7.900.5A3 3 0 0 0 2 8.200C1.500 10 1.500 12 1.500 12s0 2 .5 3.800a3 3 0 0 0 2.100 2.100c1.900.5 7.900.5 7.900.5s6 0 7.900-.5a3 3 0 0 0 2.100-2.100c.5-1.800.5-3.800.5-3.800s0-2-.5-3.800zM10 15V9l5.200 3L10 15z"/>',
 instagram:'<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.500-3.500a1.200 1.200 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400z"/>',
 x:'<path d="M18.200 2.500h3.100l-6.800 7.700 8 11.300h-6.300l-4.900-6.800-5.700 6.800H2.500l7.300-8.300L2.100 2.500h6.400l4.400 6.200 5.300-6.200zm-1.100 17.100h1.700L7.300 4.300H5.500l11.600 15.300z"/>'};
const INFO={discord:["Discord","Chat, share and play with the community.","Join server"],telegram:["Telegram","Announcements and updates, first.","Join channel"],youtube:["YouTube","Watch our latest videos.","Subscribe"],instagram:["Instagram","Follow along for posts and reels.","Follow"],x:["Twitter / X","Updates and news.","Follow"]};
const $=s=>document.querySelector(s),all=s=>document.querySelectorAll(s);
const small=matchMedia("(max-width:700px)").matches,still=matchMedia("(prefers-reduced-motion:reduce)").matches;
// social cards + footer icons
$("#cards").innerHTML=Object.keys(INFO).map(k=>{const u=LINKS[k],i=INFO[k];
 return `<article class="sc rv"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg></div><h3>${i[0]}</h3><p>${i[1]}</p>
 ${u?`<a class="btn" href="${u}" target="_blank" rel="noopener">${i[2]}</a>`:`<span class="btn off">Coming soon</span>`}</article>`}).join("");
$("#fs").innerHTML=Object.keys(INFO).map(k=>LINKS[k]?`<a href="${LINKS[k]}" target="_blank" rel="noopener" aria-label="${INFO[k][0]}"><svg viewBox="0 0 24 24">${ICON[k]}</svg></a>`:`<span title="${INFO[k][0]} coming soon"><svg viewBox="0 0 24 24">${ICON[k]}</svg></span>`).join("");
all("[data-discord]").forEach(a=>{a.href=LINKS.discord;a.target="_blank";a.rel="noopener"});
// tagline letters
$("#tag").innerHTML=$("#tag").textContent.split(" ").map((w,i)=>`<span style="animation-delay:${2.6+i*.12}s">${w}</span>`).join(" ");
// intro
const out=()=>$("#intro").classList.add("out");$("#skip").onclick=out;setTimeout(out,still?300:3000);
// scroll reveal + counter
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");
 if(e.target.dataset.n){const el=e.target.querySelector("b"),n=+e.target.dataset.n,s=performance.now();(function f(t){const p=Math.min((t-s)/1600,1);el.textContent=Math.round(n*p).toLocaleString()+"+";if(p<1)requestAnimationFrame(f)})(s)}
 io.unobserve(e.target)}),{threshold:.2});
all(".rv").forEach(e=>io.observe(e));
// 3D tilt on cards + logo
function tilt(el,max){el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
 el.style.transform=`rotateY(${(x-.5)*max}deg) rotateX(${(.5-y)*max}deg) translateY(-6px)`;el.style.setProperty("--mx",x*100+"%");el.style.setProperty("--my",y*100+"%")});
 el.addEventListener("pointerleave",()=>el.style.transform="")}
if(!still)all(".sc").forEach(c=>tilt(c,16));
// hero mouse parallax
const logo=$(".logo3d");
if(!still)addEventListener("pointermove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;logo.style.rotate=`y ${x*22}deg`;logo.style.transform=`rotateX(${-y*16}deg)`});
// custom cursor
const cur=$("#cur");addEventListener("pointermove",e=>{cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"});
all("a,button").forEach(a=>{a.addEventListener("pointerenter",()=>cur.classList.add("big"));a.addEventListener("pointerleave",()=>cur.classList.remove("big"))});
// particles (lighter on mobile)
if(!still){const c=$("#fx"),g=c.getContext("2d");let W,H;const N=small?28:80,P=[];
 const rs=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight};rs();addEventListener("resize",rs);
 for(let i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.5,v:Math.random()*.5+.15,d:Math.random()*2});
 (function f(){g.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.x+=Math.sin(p.y/60+p.d)*.3;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}
  g.beginPath();g.arc(p.x,p.y,p.r,0,7);g.fillStyle=`rgba(255,${50+p.d*40|0},50,${.25+p.r/5})`;g.shadowColor="#ff2a3c";g.shadowBlur=8;g.fill()});requestAnimationFrame(f)})()}
