(()=>{var ke=Object.defineProperty;var y=e=>t=>{var o=e[t];if(o)return o();throw new Error("Module not found in bundle: "+t)};var s=(e,t)=>()=>(e&&(t=e(e=0)),t);var d=(e,t)=>{for(var o in t)ke(e,o,{get:t[o],enumerable:!0})};function S(){return localStorage.getItem(j)||"dark"}function $(e){localStorage.setItem(j,e),O(e)}function Ie(){O(S())}function O(e){let t=v[e]||v.dark,o=document.documentElement;o.style.setProperty("--bg-color",t.bg),o.style.setProperty("--text-color",t.text),o.style.setProperty("--accent-color",t.accent),o.setAttribute("data-theme",e)}var v,j,L=s(()=>{v={dark:{label:"Dark Pro",bg:"#1a1b26",text:"#c0caf5",accent:"#7aa2f7"},light:{label:"Light Dev",bg:"#fdf6e3",text:"#2d3748",accent:"#3182ce"},neon:{label:"Neon Synth",bg:"#1a002b",text:"#e0f7fa",accent:"#ff00ff"}},j="neuro_theme";Ie()});function T(){let e=localStorage.getItem(A);return e?{...q,...JSON.parse(e)}:{...q}}function m(e){localStorage.setItem(A,JSON.stringify(e)),P(e)}function P(e){let t=document.documentElement,o={sm:"14px",base:"16px",lg:"18px"};t.style.fontSize=o[e.fontSize]||o.base;let r={none:"0",md:"0.375rem",xl:"0.75rem","2xl":"1rem"};t.style.setProperty("--radius",r[e.radius]||r.md),t.classList.toggle("no-anim",!e.animation),t.style.setProperty("--accent-color",e.accentColor)}var A,q,E=s(()=>{A="neuro_ui_config",q={fontSize:"base",radius:"md",animation:!0,accentColor:"#7aa2f7"};P(T())});async function C(e){try{let o=await(await fetch("../data/lang.json")).json();w=o[e]||o.en}catch{w={welcome:"Welcome"}}localStorage.setItem(B,e)}function N(e){return w[e]||e}function Me(){let e=localStorage.getItem(B)||"en";C(e)}var B,w,x=s(()=>{B="neuro_lang",w={};document.addEventListener("DOMContentLoaded",Me)});var _={};d(_,{default:()=>He});function He(){console.log("ai.mind plugin initialized")}var D=s(()=>{});var z={};d(z,{default:()=>je});function je(){document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="e"&&alert("Easter egg unlocked!")})}var J=s(()=>{});var R={};d(R,{default:()=>$e});function $e(){console.log("terminal.replay plugin loaded")}var F=s(()=>{});var Y={};d(Y,{default:()=>Pe});function Pe(e){e.innerHTML=`<div class='p-4'>
    <h2 class='text-xl mb-2'>About Me</h2>
    <p>Developer passionate about futuristic UIs and terminal experiences.</p>
  </div>`}var K=s(()=>{});var U={};d(U,{default:()=>Be});function Be(e){e.innerHTML="<div class='p-4'>Certification list placeholder.</div>"}var G=s(()=>{});var V={};d(V,{default:()=>Ne});function Ne(e){e.innerHTML=`<div id="chat" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></div>
  <form id="form" class="flex p-2 items-center space-x-2"><span>&gt;</span><input id="msg" class="flex-1 bg-gray-800 p-2 text-white" autocomplete="off"/><button class="bg-blue-600 px-3 py-1 rounded" type="submit">Send</button></form>`;let t=e.querySelector("#chat"),o=e.querySelector("#form"),r=e.querySelector("#msg"),a=["Hi there! How can I help you today?","I'm just a simulated AI in this portfolio.","Feel free to explore the other tabs."],c=0;o.addEventListener("submit",u=>{u.preventDefault();let g=r.value.trim();g&&(n(`You: ${g}`),r.value="",setTimeout(()=>i(`AI: ${a[c%a.length]}`),500),c++)});function n(u){t.textContent+=u+`
`,t.scrollTop=t.scrollHeight}function i(u){return new Promise(g=>{let b=0,h=setInterval(()=>{t.textContent+=u[b],b++,b===u.length&&(clearInterval(h),t.textContent+=`
`,t.scrollTop=t.scrollHeight,g())},30)})}}var W=s(()=>{});var Q={};d(Q,{default:()=>_e});function _e(e){let t=T(),o=Object.entries(v).map(([l,p])=>`<option value="${l}">${p.label}</option>`).join("");e.innerHTML=`<div class='p-4 space-y-4'>
    <div>
      <label class='block mb-1'>Theme</label>
      <select id='themeSel' class='bg-gray-800 p-2'>${o}</select>
    </div>
    <div>
      <label class='block mb-1'>Language</label>
      <select id='langSel' class='bg-gray-800 p-2'>
        <option value='en'>English</option>
        <option value='id'>Bahasa</option>
        <option value='jp'>\u65E5\u672C\u8A9E</option>
      </select>
    </div>
    <div>
      <label class='block mb-1'>Font Size</label>
      <select id='fontSel' class='bg-gray-800 p-2'>
        <option value='sm'>Small</option>
        <option value='base'>Base</option>
        <option value='lg'>Large</option>
      </select>
    </div>
    <div>
      <label class='block mb-1'>Border Radius</label>
      <input id='radius' type='range' min='0' max='3' step='1' class='w-full'>
    </div>
    <div class='flex items-center space-x-2'>
      <label>Animations</label>
      <input id='anim' type='checkbox'>
    </div>
    <div>
      <label class='block mb-1'>Accent Color</label>
      <div id='colors' class='flex space-x-2'></div>
    </div>
    <div class='space-x-2'>
      <button id='export' class='bg-gray-700 px-2 py-1 rounded'>Export Config</button>
      <button id='import' class='bg-gray-700 px-2 py-1 rounded'>Import Config</button>
    </div>
    <div class='space-x-2'>
      <button data-vp='100%' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Desktop</button>
      <button data-vp='768px' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Tablet</button>
      <button data-vp='375px' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Mobile</button>
    </div>
  </div>`;let r=e.querySelector("#themeSel"),a=e.querySelector("#langSel"),c=e.querySelector("#fontSel"),n=e.querySelector("#radius"),i=e.querySelector("#anim"),u=e.querySelector("#colors"),g=e.querySelector("#export"),b=e.querySelector("#import"),h=e.querySelectorAll(".vp-btn");r.value=S(),a.value=localStorage.getItem("neuro_lang")||"en",c.value=t.fontSize,n.value=["none","md","xl","2xl"].indexOf(t.radius),i.checked=t.animation;let Ce=["#7aa2f7","#3182ce","#ff00ff","#00e0ff","#ff7e00"];u.innerHTML=Ce.map(l=>`<button data-color='${l}' class='w-6 h-6 rounded-full' style='background:${l}'></button>`).join(""),r.addEventListener("change",l=>$(l.target.value)),c.addEventListener("change",l=>{t.fontSize=l.target.value,m(t)}),n.addEventListener("input",l=>{let p=["none","md","xl","2xl"];t.radius=p[l.target.value],m(t)}),i.addEventListener("change",l=>{t.animation=l.target.checked,m(t)}),a.addEventListener("change",l=>{C(l.target.value)}),u.addEventListener("click",l=>{let p=l.target.dataset.color;p&&(t.accentColor=p,m(t))}),g.addEventListener("click",()=>{navigator.clipboard.writeText(JSON.stringify(t))}),b.addEventListener("click",()=>{let l=prompt("Paste config JSON");if(l)try{Object.assign(t,JSON.parse(l)),m(t)}catch{alert("Invalid JSON")}}),h.forEach(l=>{l.addEventListener("click",()=>{document.documentElement.style.width=l.dataset.vp})})}var X=s(()=>{L();E();x()});var Z={};d(Z,{default:()=>De});function De(e){e.innerHTML=`<pre class='p-4 bg-black text-green-400 border rounded'>
USER=Neuro
SYSTEM=Code Lab V3.5
BOOT_AT=${new Date().toLocaleTimeString()}
PROTOCOL=INTEL-AI
</pre>`}var ee=s(()=>{});var te={};d(te,{default:()=>ze});function ze(e){e.innerHTML='<pre id="boot" class="p-4"></pre>';let t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12",t.onload=()=>{new Typed("#boot",{strings:["booting Neurocode Studio...","loading modules...",`ready. ${N("welcome")}`],typeSpeed:40,backSpeed:20,loop:!1})},document.body.appendChild(t)}var oe=s(()=>{x()});var ne={};d(ne,{default:()=>Je});async function Je(e){e.innerHTML=`<div class='p-4'>
    <div id='filters' class='mb-2 space-x-2'></div>
    <pre id='list' class='bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded p-2'></pre>
  </div>`;let t=[];try{t=await(await fetch("../data/projects.json")).json()}catch{t=[]}let o=new Set;t.forEach(n=>n.tech.forEach(i=>o.add(i)));let r=e.querySelector("#filters");r.innerHTML="<button data-tech='all' class='bg-gray-700 px-2 py-1 rounded'>All</button>"+Array.from(o).map(n=>`<button data-tech='${n}' class='bg-gray-700 px-2 py-1 rounded'>${n}</button>`).join(" ");let a=e.querySelector("#list");c(t),r.addEventListener("click",n=>{let i=n.target.dataset.tech;i&&c(i==="all"?t:t.filter(u=>u.tech.includes(i)))});function c(n){a.textContent="",n.forEach(i=>{a.textContent+=`${i.name} - ${i.desc} [${i.tech.join(", ")}] (${i.year})
`})}}var ae=s(()=>{});var re={};d(re,{default:()=>Re});function Re(e){e.innerHTML="<div class='p-4'><a href='#' target='_blank'>View Resume (PDF)</a></div>"}var ie=s(()=>{});var le={};d(le,{default:()=>Fe});function Fe(e){e.innerHTML=`<div id="sandbox-output" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></div>
  <form id="form" class="flex p-2 items-center space-x-2"><span>&gt;</span><input id="cmd" class="flex-1 bg-gray-800 p-2 text-white" autocomplete="off"/></form>`;let t=e.querySelector("#sandbox-output"),o=e.querySelector("#form"),r=e.querySelector("#cmd");o.addEventListener("submit",c=>{c.preventDefault();let n=r.value.trim();if(!n)return;if(a(`> ${n}`),r.value="",/window|document|fetch|import|script/i.test(n)){a("Error: command not allowed");return}let i;try{i=Function('"use strict";return ('+n+")")()}catch(u){i=`\u26A0\uFE0F Error: ${u.message}`}a(String(i))});function a(c){t.textContent+=c+`
`,t.scrollTop=t.scrollHeight}}var se=s(()=>{});var ce={};d(ce,{default:()=>Ye});function Ye(e){e.innerHTML=`<div class='p-4'>
    <h2 class='text-xl mb-2'>Skills</h2>
    <ul class='list-disc ml-5'>
      <li>HTML & CSS</li>
      <li>Vanilla JavaScript</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>`}var de=s(()=>{});var ue={};d(ue,{default:()=>Ke});function Ke(e){e.innerHTML=`<pre id="out" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></pre>
  <div class='p-2 space-x-2'>
    <button id='diag' class='bg-gray-700 px-2 py-1 rounded'>Run Diagnostic</button>
    <button id='purge' class='bg-gray-700 px-2 py-1 rounded'>Purge Cache</button>
    <button id='inject' class='bg-gray-700 px-2 py-1 rounded'>Inject Prompt</button>
  </div>`;let t=e.querySelector("#out");r(["> booting Neurocode Engine...","> loading modules...","> synthesizing neural shell...","> done. system online."]),document.getElementById("diag").addEventListener("click",()=>{r(["> running diagnostics...","> all systems nominal"])}),document.getElementById("purge").addEventListener("click",()=>{r(["> purging cache...","> cache cleared"])}),document.getElementById("inject").addEventListener("click",()=>{r(["> awaiting prompt injection...","> prompt injected"])});async function r(c){for(let n of c)await a(n)}function a(c){return new Promise(n=>{let i=0,u=setInterval(()=>{t.textContent+=c[i],i++,i===c.length&&(clearInterval(u),t.textContent+=`
`,t.scrollTop=t.scrollHeight,n())},30)})}}var pe=s(()=>{});var fe={};d(fe,{default:()=>Ue});function Ue(e){e.innerHTML=`<div class='p-4 space-y-4'>
    <iframe src='https://example.com/ad' class='w-full h-32 border'></iframe>
    <div class='space-x-2'>
      <a href='https://buymeacoffee.com/yourname' class='underline text-blue-400'>Buy Me A Coffee</a>
      <a href='https://github.com/sponsors/yourname' class='underline text-blue-400'>GitHub Sponsor</a>
    </div>
  </div>`}var ge=s(()=>{});var me={};d(me,{default:()=>Ge});async function Ge(e){e.innerHTML='<pre id="log" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></pre>';let t=e.querySelector("#log"),o;try{o=await(await fetch("../data/log.json")).json()}catch{o=["IP 192.168.1.24 accessing /projects.vue","Opened /config.sys","User tried to export UI config"]}for(let a of o)await r(`[${new Date().toLocaleTimeString()}] - ${a}`);function r(a){return new Promise(c=>{let n=0,i=setInterval(()=>{t.textContent+=a[n],n++,n===a.length&&(clearInterval(i),t.textContent+=`
`,t.scrollTop=t.scrollHeight,c())},30)})}}var be=s(()=>{});var Ve,k=s(()=>{Ve=y({"./TabLoader.js":()=>Promise.resolve().then(()=>(I(),ye)),"./about.js":()=>Promise.resolve().then(()=>(K(),Y)),"./certs.js":()=>Promise.resolve().then(()=>(G(),U)),"./chat.terminal.js":()=>Promise.resolve().then(()=>(W(),V)),"./config.sys.js":()=>Promise.resolve().then(()=>(X(),Q)),"./env.sys.js":()=>Promise.resolve().then(()=>(ee(),Z)),"./home.boot.js":()=>Promise.resolve().then(()=>(oe(),te)),"./projects.vue.js":()=>Promise.resolve().then(()=>(ae(),ne)),"./resume.js":()=>Promise.resolve().then(()=>(ie(),re)),"./sandbox.dev.js":()=>Promise.resolve().then(()=>(se(),le)),"./skills.js":()=>Promise.resolve().then(()=>(de(),ce)),"./system.ai.js":()=>Promise.resolve().then(()=>(pe(),ue)),"./vault.ads.js":()=>Promise.resolve().then(()=>(ge(),fe)),"./visitor.log.js":()=>Promise.resolve().then(()=>(be(),me))})});var ye={};d(ye,{loadTab:()=>M});async function M(e){try{return await Ve(`./${e}.js`)}catch{let o=document.getElementById("app");return o&&(o.innerHTML=`<p style='color:white;'>Tab #/${e} not found.</p>`),null}}var I=s(()=>{k()});L();E();x();var Oe=y({"./plugins/ai.mind.js":()=>Promise.resolve().then(()=>(D(),_)),"./plugins/easter.egg.js":()=>Promise.resolve().then(()=>(J(),z)),"./plugins/terminal.replay.js":()=>Promise.resolve().then(()=>(F(),R))});async function qe(e){try{let t=await Oe(`./plugins/${e}.js`);t&&typeof t.default=="function"&&t.default()}catch(t){console.warn("Plugin",e,"failed to load:",t)}}function Ae(e){e.forEach(t=>qe(t))}document.addEventListener("DOMContentLoaded",()=>{Ae(["ai.mind","easter.egg","terminal.replay"])});I();var f,ve=new Map;function xe(){f=document.getElementById("app")}async function he(e){if(!f)return;f.innerHTML="";let t=ve.get(e);t||(t=await M(e),t&&ve.set(e,t)),t&&typeof t.default=="function"?(t.default(f),f.classList.add("fade-in"),setTimeout(()=>f.classList.remove("fade-in"),500)):f.textContent=`Tab ${e} not found.`}var We=[{id:"home.boot",icon:"home"},{id:"about",icon:"user"},{id:"skills",icon:"code"},{id:"projects.vue",icon:"folder"},{id:"certs",icon:"award"},{id:"resume",icon:"file-text"},{id:"system.ai",icon:"ai"},{id:"chat.terminal",icon:"message-square"},{id:"visitor.log",icon:"book-open"},{id:"config.sys",icon:"settings"},{id:"sandbox.dev",icon:"terminal"},{id:"env.sys",icon:"file-text"},{id:"vault.ads",icon:"dollar-sign"}],Se;function Le(e){Se=e;let t=document.getElementById("sidebar"),o=document.getElementById("sidebar-toggle");t.innerHTML="",o.addEventListener("click",()=>t.classList.toggle("hidden")),We.forEach(r=>{let a=document.createElement("button");a.dataset.tabId=r.id,a.className="w-full h-12 flex items-center justify-center border-l-4 border-transparent glow-hover transition ease-in-out duration-300",a.innerHTML=`<img src="./assets/icons/${r.icon}.svg" class="w-5 h-5" alt="${r.id}">`,a.addEventListener("click",()=>{Se(r.id),window.innerWidth<640&&t.classList.add("hidden")}),t.appendChild(a)})}function Te(e){document.querySelectorAll("#sidebar button").forEach(t=>{let o=t.dataset.tabId===e;t.classList.toggle("border-l-4",o),t.classList.toggle("bg-gray-700",o),t.style.borderColor=o?"var(--accent-color)":"transparent"})}var we="neuro_last_tab";function Ee(){return location.hash.replace("#/","")||localStorage.getItem(we)||"home.boot"}function Qe(){xe(),Le(e=>H(e)),window.addEventListener("hashchange",()=>H(Ee(),!1)),H(Ee(),!1)}function H(e,t=!0){t&&(location.hash=`/#/${e}`),localStorage.setItem(we,e),he(e),Te(e)}document.addEventListener("DOMContentLoaded",Qe);})();
