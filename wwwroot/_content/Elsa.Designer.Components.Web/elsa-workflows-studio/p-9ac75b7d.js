let e,t,n=!1,l=!1,o=!1,s=!1,i=null,r=!1;const c="undefined"!=typeof window?window:{},a=c.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),$={},p=(e,t,n)=>{n&&n.map((([n,s,l])=>{const r=e,o=w(t,l),i=h(n);f.ael(r,s,o,i),(t.o=t.o||[]).push((()=>f.rel(r,s,o,i)))}))},w=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){he(e)}},h=e=>0!=(2&e),y="http://www.w3.org/1999/xlink",m=new WeakMap,b=e=>"sc-"+e.$,v={},g=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...n)=>{let s=null,l=null,r=null,o=!1,i=!1,a=[];const c=t=>{for(let n=0;n<t.length;n++)s=t[n],Array.isArray(s)?c(s):null!=s&&"boolean"!=typeof s&&((o="function"!=typeof e&&!g(s))&&(s+=""),o&&i?a[a.length-1].p+=s:a.push(o?j(null,s):s),i=o)};if(c(n),t){t.key&&(l=t.key),t.name&&(r=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,a,O);const f=j(e,null);return f.h=t,a.length>0&&(f.m=a),f.v=l,f.g=r,f},j=(e,t)=>({t:0,k:e,p:t,j:null,m:null,h:null,v:null,g:null}),S={},O={forEach:(e,t)=>e.map(C).forEach(t),map:(e,t)=>e.map(C).map(t).map(M)},C=e=>({vattrs:e.h,vchildren:e.m,vkey:e.v,vname:e.g,vtag:e.k,vtext:e.p}),M=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),k(e.vtag,t,...e.vchildren||[])}const t=j(e.vtag,e.vtext);return t.h=e.vattrs,t.m=e.vchildren,t.v=e.vkey,t.g=e.vname,t},x=(e,t,n,s,l,r)=>{if(n!==s){let o=we(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,l=R(n),r=R(s);t.remove(...l.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!l.includes(e))))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(o||"o"!==t[0]||"n"!==t[1]){const a=g(s);if((o||a&&null!==s)&&!l)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?o=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}let c=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,c=!0),null==s||!1===s?!1===s&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(y,t):e.removeAttribute(t)):(!o||4&r||l)&&!a&&(s=!0===s?"":s,c?e.setAttributeNS(y,t,s):e.setAttribute(t,s))}else t="-"===t[2]?t.slice(3):we(c,i)?i.slice(2):i[2]+t.slice(3),n&&f.rel(e,t,n,!1),s&&f.ael(e,t,s,!1)}},P=/\s/,R=e=>e?e.split(P):[],U=(e,t,n,s)=>{const l=11===t.j.nodeType&&t.j.host?t.j.host:t.j,r=e&&e.h||v,o=t.h||v;for(s in r)s in o||x(l,s,r[s],void 0,n,t.t);for(s in o)x(l,s,r[s],o[s],n,t.t)},L=(l,r,i)=>{let c,f,d,u=r.m[i],h=0;if(n||(o=!0,"slot"===u.k&&(u.t|=u.m?2:1)),null!==u.p)c=u.j=a.createTextNode(u.p);else if(1&u.t)c=u.j=a.createTextNode("");else{if(s||(s="svg"===u.k),c=u.j=a.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.k),s&&"foreignObject"===u.k&&(s=!1),U(null,u,s),u.m)for(h=0;h<u.m.length;++h)f=L(l,u,h),f&&c.appendChild(f);"svg"===u.k?s=!1:"foreignObject"===c.tagName&&(s=!0)}return c["s-hn"]=t,3&u.t&&(c["s-sr"]=!0,c["s-cr"]=e,c["s-sn"]=u.g||"",d=l&&l.m&&l.m[i],d&&d.k===u.k&&l.j&&T(l.j,!1)),c},T=(e,n)=>{f.t|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const l=s[e];l["s-hn"]!==t&&l["s-ol"]&&(A(l).insertBefore(l,q(l)),l["s-ol"].remove(),l["s-ol"]=void 0,o=!0),n&&T(l,n)}f.t&=-2},E=(e,t,n,s,l,r)=>{let o,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(;l<=r;++l)s[l]&&(o=L(null,n,l),o&&(s[l].j=o,i.insertBefore(o,q(t))))},W=(e,t,n,s,r)=>{for(;t<=n;++t)(s=e[t])&&(r=s.j,z(s),l=!0,r["s-ol"]?r["s-ol"].remove():T(r,!0),r.remove())},D=(e,t)=>e.k===t.k&&("slot"===e.k?e.g===t.g:e.v===t.v),q=e=>e&&e["s-ol"]||e,A=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{const n=t.j=e.j,l=e.m,r=t.m,o=t.k,i=t.p;let a;null===i?(s="svg"===o||"foreignObject"!==o&&s,"slot"===o||U(e,t,s),null!==l&&null!==r?((e,t,n,s)=>{let l,r,o=0,i=0,a=0,c=0,f=t.length-1,d=t[0],u=t[f],h=s.length-1,p=s[0],m=s[h];for(;o<=f&&i<=h;)if(null==d)d=t[++o];else if(null==u)u=t[--f];else if(null==p)p=s[++i];else if(null==m)m=s[--h];else if(D(d,p))F(d,p),d=t[++o],p=s[++i];else if(D(u,m))F(u,m),u=t[--f],m=s[--h];else if(D(d,m))"slot"!==d.k&&"slot"!==m.k||T(d.j.parentNode,!1),F(d,m),e.insertBefore(d.j,u.j.nextSibling),d=t[++o],m=s[--h];else if(D(u,p))"slot"!==d.k&&"slot"!==m.k||T(u.j.parentNode,!1),F(u,p),e.insertBefore(u.j,d.j),u=t[--f],p=s[++i];else{for(a=-1,c=o;c<=f;++c)if(t[c]&&null!==t[c].v&&t[c].v===p.v){a=c;break}a>=0?(r=t[a],r.k!==p.k?l=L(t&&t[i],n,a):(F(r,p),t[a]=void 0,l=r.j),p=s[++i]):(l=L(t&&t[i],n,i),p=s[++i]),l&&A(d.j).insertBefore(l,q(d.j))}o>f?E(e,null==s[h+1]?null:s[h+1].j,n,s,i,h):i>h&&W(t,o,f)})(n,l,t,r):null!==r?(null!==e.p&&(n.textContent=""),E(n,null,t,r,0,r.length-1)):null!==l&&W(l,0,l.length-1),s&&"svg"===o&&(s=!1)):(a=n["s-cr"])?a.parentNode.textContent=i:e.p!==i&&(n.data=i)},H=e=>{let t,n,s,l,r,o,i=e.childNodes;for(n=0,s=i.length;n<s;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(o=i[l].nodeType,i[l]["s-hn"]!==t["s-hn"]||""!==r){if(1===o&&r===i[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===o||3===o&&""!==i[l].textContent.trim()){t.hidden=!0;break}H(t)}},N=[],V=e=>{let t,n,s,r,o,i,a=0,c=e.childNodes,f=c.length;for(;a<f;a++){if(t=c[a],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,r=t["s-sn"],i=s.length-1;i>=0;i--)n=s[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(_(n,r)?(o=N.find((e=>e.S===n)),l=!0,n["s-sn"]=n["s-sn"]||r,o?o.O=t:N.push({O:t,S:n}),n["s-sr"]&&N.map((e=>{_(e.S,n["s-sn"])&&(o=N.find((e=>e.S===n)),o&&!e.O&&(e.O=o.O))}))):N.some((e=>e.S===n))||N.push({S:n}));1===t.nodeType&&V(t)}},_=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>{e.h&&e.h.ref&&e.h.ref(null),e.m&&e.m.map(z)},B=e=>de(e).C,G=(e,t,n)=>{const s=B(e);return{emit:e=>I(s,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},I=(e,t,n)=>{const s=f.ce(t,n);return e.dispatchEvent(s),s},J=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.P),Me((()=>Q(e,t)));e.t|=512},Q=(e,t)=>{const n=e.i;let s;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>le(n,e,t))),e.u=null),s=le(n,"componentWillLoad")),s=oe(s,(()=>le(n,"componentWillRender"))),oe(s,(()=>X(e,n,t)))},X=async(e,t,n)=>{const s=e.C,l=s["s-rc"];n&&(e=>{const t=e.R;((e,t)=>{let n=b(t),s=be.get(n);if(e=11===e.nodeType?e:a,s)if("string"==typeof s){let t,l=m.get(e=e.head||e);l||m.set(e,l=new Set),l.has(n)||(t=a.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),l&&l.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.C.getRootNode(),t)})(e),Y(e,t),l&&(l.map((e=>e())),s["s-rc"]=void 0);{const t=s["s-p"],n=()=>ee(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(s,r)=>{try{i=r,r=r.render&&r.render(),s.t&=-17,s.t|=2,((s,r)=>{const i=s.C,c=s.R,d=s.U||j(null,null),u=(e=>e&&e.k===S)(r)?r:k(null,null,r);if(t=i.tagName,c.L&&(u.h=u.h||{},c.L.map((([e,t])=>u.h[t]=i[e]))),u.k=null,u.t|=4,s.U=u,u.j=d.j=i,e=i["s-cr"],n=0!=(1&c.t),l=!1,F(d,u),f.t|=1,o){let e,t,n,s,l,r;V(u.j);let o=0;for(;o<N.length;o++)e=N[o],t=e.S,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(o=0;o<N.length;o++)if(e=N[o],t=e.S,e.O){for(s=e.O.parentNode,l=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(r=n["s-nr"],r&&r["s-sn"]===t["s-sn"]&&s===r.parentNode&&(r=r.nextSibling,!r||!r["s-nr"])){l=r;break}(!l&&s!==t.parentNode||t.nextSibling!==l)&&t!==l&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),s.insertBefore(t,l))}else 1===t.nodeType&&(t.hidden=!0)}l&&H(u.j),f.t&=-2,N.length=0})(s,r)}catch(e){he(e,s.C)}return i=null,null},Z=()=>i,ee=e=>{const t=e.C,n=e.i,s=e.P;64&e.t?le(n,"componentDidUpdate"):(e.t|=64,se(t),le(n,"componentDidLoad"),e.T(t),s||ne()),e.W(t),e.M&&(e.M(),e.M=void 0),512&e.t&&Oe((()=>K(e,!1))),e.t&=-517},te=e=>{{const t=de(e),n=t.C.isConnected;return n&&2==(18&t.t)&&K(t,!1),n}},ne=()=>{se(a.documentElement),Oe((()=>I(c,"appload",{detail:{namespace:"elsa-workflows-studio"}})))},le=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){he(e)}},oe=(e,t)=>e&&e.then?e.then(t):t(),se=e=>e.classList.add("hydrated"),ie=(e,t,n)=>{if(t.D){e.watchers&&(t.q=e.watchers);const s=Object.entries(t.D),l=e.prototype;if(s.map((([e,[s]])=>{31&s||2&n&&32&s?Object.defineProperty(l,e,{get(){return((e,t)=>de(this).A.get(t))(0,e)},set(n){((e,t,n,s)=>{const l=de(this),r=l.C,o=l.A.get(t),i=l.t,a=l.i;if(n=((e,t)=>null==e||g(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,s.D[t][0]),!(8&i&&void 0!==o||n===o)&&(l.A.set(t,n),a)){if(s.q&&128&i){const e=s.q[t];e&&e.map((e=>{try{a[e](n,o,t)}catch(e){he(e,r)}}))}2==(18&i)&&K(l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&s&&Object.defineProperty(l,e,{value(...t){const n=de(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,s){f.jmp((()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,s])=>{const l=s[1]||e;return n.set(l,e),512&s[0]&&t.L.push([e,l]),l}))}}return e},re=e=>{le(e,"connectedCallback")},ce=(e,t={})=>{const n=[],s=t.exclude||[],l=c.customElements,r=a.head,o=r.querySelector("meta[charset]"),i=a.createElement("style"),u=[];let h,m=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map((e=>e[1].map((t=>{const r={t:t[0],$:t[1],D:t[2],H:t[3]};r.D=t[2],r.H=t[3],r.L=[],r.q={};const o=r.$,i=class extends HTMLElement{constructor(e){super(e),pe(e=this,r)}connectedCallback(){h&&(clearTimeout(h),h=null),m?u.push(this):f.jmp((()=>(e=>{if(0==(1&f.t)){const t=de(e),n=t.R,s=()=>{};if(1&t.t)p(e,t,n.H),re(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){J(t,t.P=n);break}}n.D&&Object.entries(n.D).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,s,l)=>{if(0==(32&t.t)){{if(t.t|=32,(l=me(n)).then){const e=()=>{};l=await l,e()}l.isProxied||(n.q=l.watchers,ie(l,n,2),l.isProxied=!0);const s=()=>{};t.t|=8;try{new l(t)}catch(e){he(e)}t.t&=-9,t.t|=128,s(),re(t.i)}if(l.style){let e=l.style;const t=b(n);if(!be.has(t)){const s=()=>{};((e,t,n)=>{let s=be.get(e);d&&n?(s=s||new CSSStyleSheet,s.replace(t)):s=t,be.set(e,s)})(t,e,!!(1&n.t)),s()}}}const r=t.P,o=()=>K(t,!0);r&&r["s-rc"]?r["s-rc"].push(o):o()})(0,t,n)}s()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=de(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),le(t,"disconnectedCallback"),le(t,"componentDidUnload")}})()))}componentOnReady(){return de(this).N}};r.V=e[0],s.includes(o)||l.get(o)||(n.push(o),l.define(o,ie(i,r,1)))})))),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),r.insertBefore(i,o?o.nextSibling:r.firstChild),m=!1,u.length?u.map((e=>e.connectedCallback())):f.jmp((()=>h=setTimeout(ne,30)))},ae=e=>{const t=new URL(e,f.l);return t.origin!==c.location.origin?t.href:t.pathname},fe=(e,t)=>t in $?$[t]:"window"===t?c:"document"===t?a:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?ae("."):"queue"===t?{write:Me,read:Ce,tick:{then:e=>Oe(e)}}:void 0)),ue=new WeakMap,de=e=>ue.get(e),$e=(e,t)=>ue.set(t.i=e,t),pe=(e,t)=>{const n={t:0,C:e,R:t,A:new Map};return n.F=new Promise((e=>n.W=e)),n.N=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.H),ue.set(e,n)},we=(e,t)=>t in e,he=(e,t)=>(0,console.error)(e,t),ye=new Map,me=e=>{const t=e.$.replace(/-/g,"_"),n=e.V,s=ye.get(n);return s?s[t]:import(`./${n}.entry.js`).then((e=>(ye.set(n,e),e[t])),he)},be=new Map,ve=[],ge=[],ke=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&f.t?Oe(Se):f.raf(Se))},je=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){he(e)}e.length=0},Se=()=>{je(ve),je(ge),(r=ve.length>0)&&f.raf(Se)},Oe=e=>u().then(e),Ce=ke(ve,!1),Me=ke(ge,!0);export{S as H,ae as a,ce as b,G as c,fe as d,Z as e,te as f,B as g,k as h,u as p,$e as r};