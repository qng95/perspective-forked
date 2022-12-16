"use strict";(self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[]).push([[514,972],{9963:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(7294),l=n.n(a),r=n(4334),o=n(1944),c=n(5281),i=n(3320),s=n(3438),d=n(4477),m=n(1116),u=n(7676),b=n(5999),p=n(2466),h=n(5936);var E="backToTopButton_sjWU",f="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,p.Ct)();return(0,p.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,h.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return l().createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",c.k.common.backToTopButton,E,e&&f),type:"button",onClick:t})}var _=n(5228),g=n(7524),k=n(6668),C=n(1327),I=n(7462);function N(e){return l().createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),l().createElement("g",{fill:"#7a7a7a"},l().createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l().createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var S="collapseSidebarButton_PEFL",Z="collapseSidebarButtonIcon_kv0_";function x(e){let{onClick:t}=e;return l().createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S),onClick:t},l().createElement(N,{className:Z}))}var y=n(9689),T=n(902);const w=Symbol("EmptyContext"),L=l().createContext(w);function M(e){let{children:t}=e;const[n,r]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:r})),[n]);return l().createElement(L.Provider,{value:o},t)}var A=n(6043),B=n(8596),F=n(9960),P=n(2389);function H(e){let{categoryLabel:t,onClick:n}=e;return l().createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){let{item:t,onItemClick:n,activePath:o,level:i,index:d,...m}=e;const{items:u,label:b,collapsible:p,className:h,href:E}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,k.L)(),v=function(e){const t=(0,P.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,s.Wl)(e):void 0),[e,t])}(t),_=(0,s._F)(t,o),g=(0,B.Mg)(E,o),{collapsed:C,setCollapsed:N}=(0,A.u)({initialState:()=>!!p&&(!_&&t.collapsed)}),{expandedItem:S,setExpandedItem:Z}=function(){const e=(0,a.useContext)(L);if(e===w)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!C),Z(e?null:d),N(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:_,collapsed:C,updateCollapsed:x}),(0,a.useEffect)((()=>{p&&null!=S&&S!==d&&f&&N(!0)}),[p,S,d,N,f]),l().createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},h)},l().createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},l().createElement(F.Z,(0,I.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!E&&p,"menu__link--active":_}),onClick:p?e=>{n?.(t),E?x(!1):(e.preventDefault(),x())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":p?!C:void 0,href:p?v??"#":v},m),b),E&&p&&l().createElement(H,{categoryLabel:b,onClick:e=>{e.preventDefault(),x()}})),l().createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},l().createElement(G,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:i+1})))}var D=n(3919),R=n(9471),z="menuExternalLink_NmtK";function U(e){let{item:t,onItemClick:n,activePath:a,level:o,index:i,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,s._F)(t,a),E=(0,D.Z)(m);return l().createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),key:u},l().createElement(F.Z,(0,I.Z)({className:(0,r.Z)("menu__link",!E&&z,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&l().createElement(R.Z,null)))}var V="menuHtmlItem_M9Kj";function K(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:i,className:s}=t;return l().createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),i&&[V,"menu__list-item"],s),key:a,dangerouslySetInnerHTML:{__html:o}})}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return l().createElement(W,(0,I.Z)({item:t},n));case"html":return l().createElement(K,(0,I.Z)({item:t},n));default:return l().createElement(U,(0,I.Z)({item:t},n))}}function q(e){let{items:t,...n}=e;return l().createElement(M,null,t.map(((e,t)=>l().createElement(j,(0,I.Z)({key:t,item:e,index:t},n)))))}var G=(0,a.memo)(q),Y="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function X(e){let{path:t,sidebar:n,className:o}=e;const i=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,p.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return l().createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Y,i&&O,o)},l().createElement("ul",{className:(0,r.Z)(c.k.docs.docSidebarMenu,"menu__list")},l().createElement(G,{items:n,activePath:t,level:1})))}var J="sidebar_njMd",Q="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",ee="sidebarLogo_isFc";function te(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return l().createElement("div",{className:(0,r.Z)(J,c&&Q,o&&$)},c&&l().createElement(C.Z,{tabIndex:-1,className:ee}),l().createElement(X,{path:t,sidebar:n}),i&&l().createElement(x,{onClick:a}))}var ne=l().memo(te),ae=n(3102),le=n(2961);const re=e=>{let{sidebar:t,path:n}=e;const a=(0,le.e)();return l().createElement("ul",{className:(0,r.Z)(c.k.docs.docSidebarMenu,"menu__list")},l().createElement(G,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function oe(e){return l().createElement(ae.Zo,{component:re,props:e})}var ce=l().memo(oe);function ie(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return l().createElement(l().Fragment,null,n&&l().createElement(ne,e),a&&l().createElement(ce,e))}var se="expandButton_m80_",de="expandButtonIcon_BlDH";function me(e){let{toggleSidebar:t}=e;return l().createElement("div",{className:se,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},l().createElement(N,{className:de}))}var ue="docSidebarContainer_b6E3",be="docSidebarContainerHidden_b3ry";function pe(e){let{children:t}=e;const n=(0,m.V)();return l().createElement(l().Fragment,{key:n?.name??"noSidebar"},t)}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,_.TH)(),[s,d]=(0,a.useState)(!1),m=(0,a.useCallback)((()=>{s&&d(!1),o((e=>!e))}),[o,s]);return l().createElement("aside",{className:(0,r.Z)(c.k.docs.docSidebarContainer,ue,n&&be),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue)&&n&&d(!0)}},l().createElement(pe,null,l().createElement(ie,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&l().createElement(me,{toggleSidebar:m}))}var Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function fe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,m.V)();return l().createElement("main",{className:(0,r.Z)(Ee.docMainContainer,(t||!a)&&Ee.docMainContainerEnhanced)},l().createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},n))}var ve="docPage__5DB",_e="docsWrapper_BCFX";function ge(e){let{children:t}=e;const n=(0,m.V)(),[r,o]=(0,a.useState)(!1);return l().createElement(u.Z,{wrapperClassName:_e},l().createElement(v,null),l().createElement("div",{className:ve},n&&l().createElement(he,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),l().createElement(fe,{hiddenSidebarContainer:r},t)))}var ke=n(4972),Ce=n(197);function Ie(e){const{versionMetadata:t}=e;return l().createElement(l().Fragment,null,l().createElement(Ce.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),l().createElement(o.d,null,t.noIndex&&l().createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ne(e){const{versionMetadata:t}=e,n=(0,s.hI)(e);if(!n)return l().createElement(ke.default,null);const{docElement:a,sidebarName:i,sidebarItems:u}=n;return l().createElement(l().Fragment,null,l().createElement(Ie,e),l().createElement(o.FG,{className:(0,r.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},l().createElement(d.q,{version:t},l().createElement(m.b,{name:i,items:u},l().createElement(ge,null,a)))))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),l=n.n(a),r=n(5999),o=n(1944),c=n(7676);function i(){return l().createElement(l().Fragment,null,l().createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),l().createElement(c.Z,null,l().createElement("main",{className:"container margin-vert--xl"},l().createElement("div",{className:"row"},l().createElement("div",{className:"col col--6 col--offset-3"},l().createElement("h1",{className:"hero__title"},l().createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l().createElement("p",null,l().createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l().createElement("p",null,l().createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return c}});var a=n(7294),l=n.n(a),r=n(902);const o=l().createContext(null);function c(e){let{children:t,version:n}=e;return l().createElement(o.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);