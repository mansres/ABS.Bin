import{r as s,g as e,h as t,H as a,a as i,c as l,d as o}from"./p-9ac75b7d.js";import{l as n}from"./p-b03b50df.js";import{e as r,l as c}from"./p-fd4270fe.js";import{G as h}from"./p-7518f8d9.js";import{T as d}from"./p-fc89621a.js";import{a as u}from"./p-60999205.js";import{c as f}from"./p-21f6b19b.js";import{p,t as m}from"./p-a43b4900.js";import{a as g,c as w}from"./p-f0c26962.js";import{e as y}from"./p-adbb57a5.js";import{p as b}from"./p-6f170347.js";import"./p-52f280e6.js";import{E as x}from"./p-80452beb.js";import{g as v,a as k}from"./p-ab6c762d.js";import{A as j}from"./p-62f42337.js";import"./p-bd8b186e.js";import"./p-fe704386.js";import"./p-83f217d4.js";import"./p-c912e9a0.js";const C=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),P=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=t=>t.replace(/([=!:$/()])/g,"\\$1"),W=t=>t&&t.sensitive?"":"i",L=(t,e,s)=>{for(var a=(s=s||{}).strict,i=!1!==s.end,o=P(s.delimiter||"/"),l=s.delimiters||"./",n=[].concat(s.endsWith||[]).map(P).concat("$").join("|"),r="",c=!1,h=0;h<t.length;h++){var d=t[h];if("string"==typeof d)r+=P(d),c=h===t.length-1&&l.indexOf(d[d.length-1])>-1;else{var u=P(d.prefix||""),p=d.repeat?"(?:"+d.pattern+")(?:"+u+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),r+=d.optional?d.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")"}}return i?(a||(r+="(?:"+o+")?"),r+="$"===n?"$":"(?="+n+")"):(a||(r+="(?:"+o+"(?="+n+"))?"),c||(r+="(?="+o+"|"+n+")")),new RegExp("^"+r,W(s))},$=(t,e,s)=>t instanceof RegExp?((t,e)=>{if(!e)return t;var s=t.source.match(/\((?!\?)/g);if(s)for(var a=0;a<s.length;a++)e.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t})(t,e):Array.isArray(t)?((t,e,s)=>{for(var a=[],i=0;i<t.length;i++)a.push($(t[i],e,s).source);return new RegExp("(?:"+a.join("|")+")",W(s))})(t,e,s):((t,e,s)=>L(((t,e)=>{for(var s,a=[],i=0,o=0,l="",n=e&&e.delimiter||"/",r=e&&e.delimiters||"./",c=!1;null!==(s=C.exec(t));){var h=s[0],d=s[1],u=s.index;if(l+=t.slice(o,u),o=u+h.length,d)l+=d[1],c=!0;else{var p="",f=t[o],m=s[2],g=s[3],y=s[4],w=s[5];if(!c&&l.length){var b=l.length-1;r.indexOf(l[b])>-1&&(p=l[b],l=l.slice(0,b))}l&&(a.push(l),l="",c=!1);var x=p||n,v=g||y;a.push({name:m||i++,prefix:p,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,partial:""!==p&&void 0!==f&&f!==p,pattern:v?O(v):"[^"+P(x)+"]+?"})}}return(l||o<t.length)&&a.push(l+t.substr(o)),a})(t,s),e,s))(t,e,s),_=(t,e)=>new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t),E=(t,e)=>_(t,e)?t.substr(e.length):t,R=t=>"/"===t.charAt(t.length-1)?t.slice(0,-1):t,T=t=>"/"===t.charAt(0)?t:"/"+t,M=t=>"/"===t.charAt(0)?t.substr(1):t,D=t=>{const{pathname:e,search:s,hash:a}=t;let i=e||"/";return s&&"?"!==s&&(i+="?"===s.charAt(0)?s:`?${s}`),a&&"#"!==a&&(i+="#"===a.charAt(0)?a:`#${a}`),i},S=t=>"/"===t.charAt(0),U=t=>Math.random().toString(36).substr(2,t),H=(t,e)=>{for(let s=e,a=s+1,i=t.length;a<i;s+=1,a+=1)t[s]=t[a];t.pop()},A=(t,e)=>{if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(((t,s)=>A(t,e[s])));const s=typeof t;if(s!==typeof e)return!1;if("object"===s){const s=t.valueOf(),a=e.valueOf();if(s!==t||a!==e)return A(s,a);const i=Object.keys(t),o=Object.keys(e);return i.length===o.length&&i.every((s=>A(t[s],e[s])))}return!1},I=(t,e,s,a)=>{let i;"string"==typeof t?(i=(t=>{let e=t||"/",s="",a="";const i=e.indexOf("#");-1!==i&&(a=e.substr(i),e=e.substr(0,i));const o=e.indexOf("?");return-1!==o&&(s=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===s?"":s,hash:"#"===a?"":a,query:{},key:""}})(t),void 0!==e&&(i.state=e)):(i=Object.assign({pathname:""},t),i.search&&"?"!==i.search.charAt(0)&&(i.search="?"+i.search),i.hash&&"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash),void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var o;return i.key=s,a?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=((t,e="")=>{let s,a=e&&e.split("/")||[],i=0;const o=t&&t.split("/")||[],l=t&&S(t),n=e&&S(e),r=l||n;if(t&&S(t)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";if(a.length){const t=a[a.length-1];s="."===t||".."===t||""===t}else s=!1;for(let t=a.length;t>=0;t--){const e=a[t];"."===e?H(a,t):".."===e?(H(a,t),i++):i&&(H(a,t),i--)}if(!r)for(;i--;i)a.unshift("..");!r||""===a[0]||a[0]&&S(a[0])||a.unshift("");let c=a.join("/");return s&&"/"!==c.substr(-1)&&(c+="/"),c})(i.pathname,a.pathname)):i.pathname=a.pathname:i.pathname||(i.pathname="/"),i.query=(o=i.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce(((t,e)=>{let[s,a]=e.split("=");return t[s]=a?decodeURIComponent(a.replace(/\+/g," ")):"",t}),{}):{},i};let N=0;const B={},Y=(t,e={})=>{"string"==typeof e&&(e={path:e});const{path:s="/",exact:a=!1,strict:i=!1}=e,{re:o,keys:l}=((t,e)=>{const s=`${e.end}${e.strict}`,a=B[s]||(B[s]={}),i=JSON.stringify(t);if(a[i])return a[i];const o=[],l={re:$(t,o,e),keys:o};return N<1e4&&(a[i]=l,N+=1),l})(s,{end:a,strict:i}),n=o.exec(t);if(!n)return null;const[r,...c]=n,h=t===r;return a&&!h?null:{path:s,url:"/"===s&&""===r?"/":r,isExact:h,params:l.reduce(((t,e,s)=>(t[e.name]=c[s],t)),{})}},z=class{constructor(t){s(this,t),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return e(this)}},F={en:{default:{Yes:"Yes",No:"No"}},"nl-NL":{default:{Yes:"Ja",No:"Nee"}}},J=class{constructor(t){s(this,t)}async show(t,e){return this.caption=t,this.message=e,await this.dialog.show(!0),new Promise(((t,e)=>{this.fulFill=t,this.reject=e}))}async hide(){await this.dialog.hide(!0)}async componentWillLoad(){this.i18next=await n(this.culture,F)}async onDismissClick(){this.fulFill(!1),await this.hide()}async onAcceptClick(){this.fulFill(!0),this.fulFill=null,this.reject=null,await this.hide()}render(){const e=t=>this.i18next.t(t);return t(a,null,t("elsa-modal-dialog",{ref:t=>this.dialog=t},t("div",{slot:"content",class:"elsa-py-8 elsa-px-4"},t("div",{class:"hidden sm:elsa-block elsa-absolute elsa-top-0 elsa-right-0 elsa-pt-4 elsa-pr-4"},t("button",{type:"button",onClick:()=>this.onDismissClick(),class:"elsa-bg-white elsa-rounded-md elsa-text-gray-400 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},t("span",{class:"elsa-sr-only"},"Close"),t("svg",{class:"elsa-h-6 elsa-w-6","x-description":"Heroicon name: outline/x",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),t("div",{class:"sm:elsa-flex sm:elsa-items-start"},t("div",{class:"elsa-mx-auto elsa-flex-shrink-0 elsa-flex elsa-items-center elsa-justify-center elsa-h-12 elsa-w-12 elsa-rounded-full elsa-bg-red-100 sm:elsa-mx-0 sm:elsa-h-10 sm:elsa-w-10"},t("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-red-600","x-description":"Heroicon name: outline/exclamation",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))),t("div",{class:"elsa-mt-3 elsa-text-center sm:elsa-mt-0 sm:elsa-ml-4 sm:elsa-text-left"},t("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900",id:"modal-title"},this.caption),t("div",{class:"elsa-mt-2"},t("p",{class:"elsa-text-sm elsa-text-gray-500"},this.message))))),t("div",{slot:"buttons"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"button",onClick:()=>this.onAcceptClick(),class:"elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-transparent elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-red-600 elsa-text-base elsa-font-medium elsa-text-white hover:elsa-bg-red-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-red-500 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},e("Yes")),t("button",{type:"button",onClick:()=>this.onDismissClick(),class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:ring-indigo-500 sm:elsa-mt-0 sm:elsa-w-auto sm:elsa-text-sm"},e("No"))))))}},q=class{constructor(t){s(this,t)}render(){return this.renderModal()}async show(t){this.showInternal(t)}async hide(t){this.hideInternal(t)}showInternal(t){this.isVisible=!0,t||(this.overlay.style.opacity="1",this.modal.style.opacity="1"),r(this.overlay),r(this.modal)}hideInternal(t){t||(this.isVisible=!1),c(this.overlay),c(this.modal).then((()=>this.isVisible=!1))}renderModal(){return t(a,{class:{hidden:!this.isVisible,"elsa-block":!0}},t("div",{class:"elsa-fixed elsa-z-10 elsa-inset-0 elsa-overflow-y-auto"},t("div",{class:"elsa-flex elsa-items-end elsa-justify-center elsa-min-h-screen elsa-pt-4 elsa-px-4 elsa-pb-20 elsa-text-center sm:elsa-block sm:elsa-p-0"},t("div",{ref:t=>this.overlay=t,onClick:()=>this.hide(!0),"data-transition-enter":"elsa-ease-out elsa-duration-300","data-transition-enter-start":"elsa-opacity-0","data-transition-enter-end":"elsa-opacity-0","data-transition-leave":"elsa-ease-in elsa-duration-200","data-transition-leave-start":"elsa-opacity-0","data-transition-leave-end":"elsa-opacity-0",class:"hidden elsa-fixed elsa-inset-0 elsa-transition-opacity","aria-hidden":"true"},t("div",{class:"elsa-absolute elsa-inset-0 elsa-bg-gray-500 elsa-opacity-75"})),t("span",{class:"hidden sm:elsa-inline-block sm:elsa-align-middle sm:elsa-h-screen","aria-hidden":"true"}),t("div",{ref:t=>this.modal=t,"data-transition-enter":"elsa-ease-out elsa-duration-300","data-transition-enter-start":"elsa-opacity-0 elsa-translate-y-4 sm:elsa-translate-y-0 sm:elsa-scale-95","data-transition-enter-end":"elsa-opacity-0 elsa-translate-y-0 sm:elsa-scale-100","data-transition-leave":"elsa-ease-in elsa-duration-200","data-transition-leave-start":"elsa-opacity-0 elsa-translate-y-0 sm:elsa-scale-100","data-transition-leave-end":"elsa-opacity-0 elsa-translate-y-4 sm:elsa-translate-y-0 sm:elsa-scale-95",class:"hidden elsa-inline-block sm:elsa-align-top elsa-bg-white elsa-rounded-lg elsa-text-left elsa-overflow-visible elsa-shadow-xl elsa-transform elsa-transition-all sm:elsa-my-8 sm:elsa-align-top sm:elsa-max-w-4xl sm:elsa-w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},t("div",{class:"modal-content"},t("slot",{name:"content"})),t("slot",{name:"buttons"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"button",class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Close")))))))}},V={en:{default:{WorkflowDefinitions:"Workflow Definitions",WorkflowInstances:"Workflow Instances",WorkflowRegistry:"Workflow Registry",WebhookDefinitions:"Webhook Definitions"}},"nl-NL":{default:{WorkflowDefinitions:"Workflow Definities",WorkflowInstances:"Workflows",WorkflowRegistry:"Workflow Register",WebhookDefinitions:"Webhook Definities"}}},Q=class{constructor(t){s(this,t),this.basePath=""}async componentWillLoad(){this.i18next=await n(this.culture,V)}render(){const e=i("./assets/logo.png"),s=this.basePath||"",a=h(this.i18next);return t("div",{class:"elsa-h-screen elsa-bg-gray-100"},t("nav",{class:"elsa-bg-gray-800"},t("div",{class:"elsa-px-4 sm:elsa-px-6 lg:elsa-px-8"},t("div",{class:"elsa-flex elsa-items-center elsa-justify-between elsa-h-16"},t("div",{class:"elsa-flex elsa-items-center"},t("div",{class:"elsa-flex-shrink-0"},t("stencil-route-link",{url:`${s}/`},t("img",{class:"elsa-h-8 elsa-w-8",src:e,alt:"Workflow"}))),t("div",{class:"hidden md:elsa-block"},t("div",{class:"elsa-ml-10 elsa-flex elsa-items-baseline elsa-space-x-4"},t("stencil-route-link",{url:`${s}/workflow-definitions`,anchorClass:"elsa-text-gray-300 hover:elsa-bg-gray-700 hover:elsa-text-white elsa-px-3 elsa-py-2 elsa-rounded-md elsa-text-sm elsa-font-medium",activeClass:"elsa-text-white elsa-bg-gray-900"},t(a,{label:"WorkflowDefinitions"})),t("stencil-route-link",{url:`${s}/workflow-instances`,anchorClass:"elsa-text-gray-300 hover:elsa-bg-gray-700 hover:elsa-text-white elsa-px-3 elsa-py-2 elsa-rounded-md elsa-text-sm elsa-font-medium",activeClass:"elsa-text-white elsa-bg-gray-900"},t(a,{label:"WorkflowInstances"})),t("stencil-route-link",{url:`${s}/workflow-registry`,anchorClass:"elsa-text-gray-300 hover:elsa-bg-gray-700 hover:elsa-text-white elsa-px-3 elsa-py-2 elsa-rounded-md elsa-text-sm elsa-font-medium",activeClass:"elsa-text-white elsa-bg-gray-900"},t(a,{label:"WorkflowRegistry"})),t("stencil-route-link",{url:`${s}/webhook-definitions`,anchorClass:"elsa-text-gray-300 hover:elsa-bg-gray-700 hover:elsa-text-white elsa-px-3 elsa-py-2 elsa-rounded-md elsa-text-sm elsa-font-medium",activeClass:"elsa-text-white elsa-bg-gray-900"},t(a,{label:"WebhookDefinitions"})))))))),t("main",null,t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:`${s}/`,component:"elsa-studio-home",exact:!0}),t("stencil-route",{url:`${s}/workflow-registry`,component:"elsa-studio-workflow-registry",exact:!0}),t("stencil-route",{url:`${s}/workflow-registry/:id`,component:"elsa-studio-workflow-blueprint-view"}),t("stencil-route",{url:`${s}/workflow-definitions`,component:"elsa-studio-workflow-definitions-list",exact:!0}),t("stencil-route",{url:`${s}/workflow-definitions/:id`,component:"elsa-studio-workflow-definitions-edit"}),t("stencil-route",{url:`${s}/workflow-instances`,component:"elsa-studio-workflow-instances-list",exact:!0}),t("stencil-route",{url:`${s}/workflow-instances/:id`,component:"elsa-studio-workflow-instances-view"}),t("stencil-route",{url:`${s}/webhook-definitions`,component:"elsa-studio-webhook-definitions-list",exact:!0}),t("stencil-route",{url:`${s}/webhook-definitions/:id`,component:"elsa-studio-webhook-definitions-edit"})))))}static get assetsDirs(){return["assets"]}};d.injectProps(Q,["culture","basePath"]);const G=class{constructor(t){s(this,t),this.initializing=l(this,"initializing",7),this.basePath="",this.onShowConfirmDialog=t=>t.promise=this.confirmDialog.show(t.caption,t.message),this.onHideConfirmDialog=async()=>await this.confirmDialog.hide(),this.onShowToastNotification=async t=>await this.toastNotificationElement.show(t),this.onHideToastNotification=async()=>await this.toastNotificationElement.hide()}async addPlugins(t){b.registerPlugins(t)}async addPlugin(t){b.registerPlugin(t)}workflowChangedHandler(t){y.emit(x.WorkflowModelChanged,this,t.detail)}connectedCallback(){y.on(x.ShowConfirmDialog,this.onShowConfirmDialog),y.on(x.HideConfirmDialog,this.onHideConfirmDialog),y.on(x.ShowToastNotification,this.onShowToastNotification),y.on(x.HideToastNotification,this.onHideToastNotification)}disconnectedCallback(){y.detach(x.ShowConfirmDialog,this.onShowConfirmDialog),y.detach(x.HideConfirmDialog,this.onHideConfirmDialog),y.detach(x.ShowToastNotification,this.onShowToastNotification),y.detach(x.HideToastNotification,this.onHideToastNotification)}componentWillLoad(){const t={serverUrl:this.serverUrl,basePath:this.basePath,eventBus:y,pluginManager:b,propertyDisplayManager:p,activityIconProvider:u,confirmDialogService:f,toastNotificationService:m,elsaClientFactory:()=>g(this.serverUrl),httpClientFactory:()=>w(this.serverUrl),getOrCreateProperty:v,htmlToElement:k};this.initializing.emit(t),b.initialize(t),p.initialize(t)}render(){return t(d.Provider,{state:{serverUrl:this.serverUrl,basePath:this.basePath,culture:this.culture,monacoLibPath:this.monacoLibPath}},t("slot",null),t("elsa-confirm-dialog",{ref:t=>this.confirmDialog=t,culture:this.culture}),t("elsa-toast-notification",{ref:t=>this.toastNotificationElement=t}))}},K=class{constructor(t){s(this,t),this.isVisible=!1}async show(t){this.isVisible=!0,r(this.toast),t.autoCloseIn&&setTimeout((async()=>await this.hide()),t.autoCloseIn),this.title=t.title,this.message=t.message}async hide(){c(this.toast).then((()=>this.isVisible=!1))}render(){return this.renderToast()}renderToast(){return t(a,{class:{hidden:!this.isVisible,"elsa-block":!0}},t("div",{class:"elsa-fixed elsa-inset-0 elsa-flex elsa-items-end elsa-justify-center elsa-px-4 elsa-py-6 elsa-pointer-events-none sm:elsa-p-6 sm:elsa-items-start sm:elsa-justify-end"},t("div",{ref:t=>this.toast=t,"data-transition-enter":"elsa-transform elsa-ease-out elsa-duration-300 elsa-transition","data-transition-enter-start":"elsa-translate-y-2 elsa-opacity-0 sm:elsa-translate-y-0 sm:elsa-translate-x-2","data-transition-enter-end":"elsa-translate-y-0 elsa-opacity-100 sm:elsa-translate-x-0","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-100","data-transition-leave-start":"elsa-opacity-0","data-transition-leave-end":"elsa-opacity-0",class:"elsa-max-w-sm elsa-w-full elsa-bg-white elsa-shadow-lg elsa-rounded-lg elsa-pointer-events-auto elsa-ring-1 elsa-ring-black elsa-ring-opacity-5 elsa-overflow-hidden"},t("div",{class:"elsa-p-4"},t("div",{class:"elsa-flex elsa-items-start"},t("div",{class:"elsa-flex-shrink-0"},t("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))),t("div",{class:"elsa-ml-3 elsa-w-0 elsa-flex-1 elsa-pt-0.5"},this.renderTitle(),t("p",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-500"},this.message)),t("div",{class:"elsa-ml-4 elsa-flex-shrink-0 elsa-flex"},t("button",{class:"elsa-bg-white elsa-rounded-md elsa-inline-flex elsa-text-gray-400 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},t("span",{class:"elsa-sr-only"},"Close"),t("svg",{class:"elsa-h-5 elsa-w-5","x-description":"Heroicon name: solid/x",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})))))))))}renderTitle(){if(this.title&&0!=this.title.length)return t("p",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-900"},this.title)}},X=class{constructor(t){s(this,t),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=Y(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};var e,s;this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):!this.match||(s=this.previousMatch,null==(e=this.match)&&null==s||null!=s&&e&&s&&e.path===s.path&&e.url===s.url&&A(e.params,s.params))||!this.routeViewsUpdated||this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};j.injectProps(X,["location","history","historyType","routeViewsUpdated"]),X.style="";const Z=(t,e,s)=>s(t.confirm(e)),ss=(t,e)=>{const s=t[e],a="__storage_test__";try{return s.setItem(a,a),s.removeItem(a),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==s.length}},es=class{constructor(t){s(this,t),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=Y(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var e,s,a;if(!((e=t).metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((a=this.root,"/"==(s=this.url).charAt(0)&&"/"==a.charAt(a.length-1)?a.slice(0,a.length-1)+s:a+s))}render(){let e={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(e.class[this.anchorClass]=!0),"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),t(this.custom,Object.assign({},e),t("slot",null))}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};j.injectProps(es,["history","location","root"]);const ts=t=>"STENCIL-ROUTE"===t.tagName,as=class{constructor(t){s(this,t),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(ts).map(((s,a)=>{const i=Y(t.pathname,{path:s.url,exact:s.exact,strict:!0});return i&&-1===e&&(e=a),{el:s,match:i}})),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return t("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};j.injectProps(as,["location","routeViewsUpdated"]);const is=(t,...e)=>{t||console.warn(...e)},ls=()=>{let t,e=[];return{setPrompt:e=>(is(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,a,i)=>{if(null!=t){const o="function"==typeof t?t(e,s):t;"string"==typeof o?"function"==typeof a?a(o,i):(is(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==o)}else i(!0)},appendListener:t=>{let s=!0;const a=(...e)=>{s&&t(...e)};return e.push(a),()=>{s=!1,e=e.filter((t=>t!==a))}},notifyListeners:(...t)=>{e.forEach((e=>e(...t)))}}},os=(t,e="scrollPositions")=>{let s=new Map;const a=(e,a)=>{if(s.set(e,a),ss(t,"sessionStorage")){const e=[];s.forEach(((t,s)=>{e.push([s,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(ss(t,"sessionStorage")){const a=t.sessionStorage.getItem(e);s=a?new Map(JSON.parse(a)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:a,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{a(e,[t.scrollX,t.scrollY])}}},ns={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+M(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:M,decodePath:T},slash:{encodePath:T,decodePath:T}},rs=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},cs={browser:(t,e={})=>{let s=!1;const a=t.history,i=t.location,o=t.navigator,l=(t=>{const e=t.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),n=!(-1===o.userAgent.indexOf("Trident")),r=os(t),c=null!=e.forceRefresh&&e.forceRefresh,h=null!=e.getUserConfirmation?e.getUserConfirmation:Z,d=null!=e.keyLength?e.keyLength:6,u=e.basename?R(T(e.basename)):"",p=()=>{try{return t.history.state||{}}catch(t){return{}}},f=t=>{t=t||{};const{key:e,state:s}=t,{pathname:a,search:o,hash:l}=i;let n=a+o+l;return is(!u||_(n,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+n+'" to begin with "'+u+'".'),u&&(n=E(n,u)),I(n,s,e||U(d))},m=ls(),g=t=>{r.capture(A.location.key),Object.assign(A,t),A.location.scrollPosition=r.get(A.location.key),A.length=a.length,m.notifyListeners(A.location,A.action)},y=t=>{((t,e)=>void 0===e.state&&-1===t.userAgent.indexOf("CriOS"))(o,t)||b(f(t.state))},w=()=>{b(f(p()))},b=t=>{if(s)s=!1,g();else{const e="POP";m.confirmTransitionTo(t,e,h,(s=>{s?g({action:e,location:t}):x(t)}))}},x=t=>{let e=k.indexOf(A.location.key),a=k.indexOf(t.key);-1===e&&(e=0),-1===a&&(a=0);const i=e-a;i&&(s=!0,j(i))},v=f(p());let k=[v.key],O=0,C=!1;const P=t=>u+D(t),j=t=>{a.go(t)},S=e=>{O+=e,1===O?(t.addEventListener("popstate",y),n&&t.addEventListener("hashchange",w)):0===O&&(t.removeEventListener("popstate",y),n&&t.removeEventListener("hashchange",w))},A={length:a.length,action:"POP",location:v,createHref:P,push:(t,e)=>{is(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s="PUSH",o=I(t,e,U(d),A.location);m.confirmTransitionTo(o,s,h,(t=>{if(!t)return;const e=P(o),{key:n,state:r}=o;if(l)if(a.pushState({key:n,state:r},"",e),c)i.href=e;else{const t=k.indexOf(A.location.key),e=k.slice(0,-1===t?0:t+1);e.push(o.key),k=e,g({action:s,location:o})}else is(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),i.href=e}))},replace:(t,e)=>{is(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s="REPLACE",o=I(t,e,U(d),A.location);m.confirmTransitionTo(o,s,h,(t=>{if(!t)return;const e=P(o),{key:n,state:r}=o;if(l)if(a.replaceState({key:n,state:r},"",e),c)i.replace(e);else{const t=k.indexOf(A.location.key);-1!==t&&(k[t]=o.key),g({action:s,location:o})}else is(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),i.replace(e)}))},go:j,goBack:()=>j(-1),goForward:()=>j(1),block:(t="")=>{const e=m.setPrompt(t);return C||(S(1),C=!0),()=>(C&&(C=!1,S(-1)),e())},listen:t=>{const e=m.appendListener(t);return S(1),()=>{S(-1),e()}},win:t};return A},hash:(t,e={})=>{let s=!1,a=null,i=0,o=!1;const l=t.location,n=t.history,r=-1===t.navigator.userAgent.indexOf("Firefox"),c=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:h=Z,hashType:d="slash"}=e,u=e.basename?R(T(e.basename)):"",{encodePath:p,decodePath:f}=ns[d],m=()=>{const t=l.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},g=t=>{const e=l.href.indexOf("#");l.replace(l.href.slice(0,e>=0?e:0)+"#"+t)},y=()=>{let t=f(m());return is(!u||_(t,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+u+'".'),u&&(t=E(t,u)),I(t,void 0,U(c))},w=ls(),b=t=>{Object.assign(W,t),W.length=n.length,w.notifyListeners(W.location,W.action)},x=()=>{const t=m(),e=p(t);if(t!==e)g(e);else{const t=y(),e=W.location;if(!s&&(i=e).pathname===(o=t).pathname&&i.search===o.search&&i.hash===o.hash&&i.key===o.key&&A(i.state,o.state))return;if(a===D(t))return;a=null,v(t)}var i,o},v=t=>{if(s)s=!1,b();else{const e="POP";w.confirmTransitionTo(t,e,h,(s=>{s?b({action:e,location:t}):k(t)}))}},k=t=>{let e=j.lastIndexOf(D(W.location)),a=j.lastIndexOf(D(t));-1===e&&(e=0),-1===a&&(a=0);const i=e-a;i&&(s=!0,S(i))},O=m(),C=p(O);O!==C&&g(C);const P=y();let j=[D(P)];const S=t=>{is(r,"Hash history go(n) causes a full page reload in this browser"),n.go(t)},L=(t,e)=>{i+=e,1===i?t.addEventListener("hashchange",x):0===i&&t.removeEventListener("hashchange",x)},W={length:n.length,action:"POP",location:P,createHref:t=>"#"+p(u+D(t)),push:(t,e)=>{is(void 0===e,"Hash history cannot push state; it is ignored");const s="PUSH",i=I(t,void 0,U(c),W.location);w.confirmTransitionTo(i,s,h,(t=>{if(!t)return;const e=D(i),o=p(u+e);if(m()!==o){a=e,(t=>{l.hash=t})(o);const t=j.lastIndexOf(D(W.location)),n=j.slice(0,-1===t?0:t+1);n.push(e),j=n,b({action:s,location:i})}else is(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),b()}))},replace:(t,e)=>{is(void 0===e,"Hash history cannot replace state; it is ignored");const s="REPLACE",i=I(t,void 0,U(c),W.location);w.confirmTransitionTo(i,s,h,(t=>{if(!t)return;const e=D(i),o=p(u+e);m()!==o&&(a=e,g(o));const l=j.indexOf(D(W.location));-1!==l&&(j[l]=e),b({action:s,location:i})}))},go:S,goBack:()=>S(-1),goForward:()=>S(1),block:(e="")=>{const s=w.setPrompt(e);return o||(L(t,1),o=!0),()=>(o&&(o=!1,L(t,-1)),s())},listen:e=>{const s=w.appendListener(e);return L(t,1),()=>{L(t,-1),s()}},win:t};return W}},hs=class{constructor(t){s(this,t),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=cs[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=rs(t,this.root),this.location=t})),this.location=rs(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write((()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])})):this.queue.write((()=>{e.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return t(j.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}get el(){return e(this)}};export{z as context_consumer,J as elsa_confirm_dialog,q as elsa_modal_dialog,Q as elsa_studio_dashboard,G as elsa_studio_root,K as elsa_toast_notification,X as stencil_route,es as stencil_route_link,as as stencil_route_switch,hs as stencil_router};