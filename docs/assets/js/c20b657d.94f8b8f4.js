"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Smart-contract upgrade",s={unversionedId:"frontend-integration/sdk/solido-v2",id:"frontend-integration/sdk/solido-v2",title:"Smart-contract upgrade",description:"Our smart-contract (solido) upgrade is coming soon. It will bring breaking changes to frontend integration, that's why it's critical",source:"@site/docs2/frontend-integration/sdk/solido-v2.md",sourceDirName:"frontend-integration/sdk",slug:"/frontend-integration/sdk/solido-v2",permalink:"/my-solana-docs2/frontend-integration/sdk/solido-v2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Banner",permalink:"/my-solana-docs2/frontend-integration/sdk/banner"},next:{title:"Migration Guide (v1 \u2192 v2)",permalink:"/my-solana-docs2/frontend-integration/manual-instructions/"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contract-upgrade"},"Smart-contract upgrade"),(0,o.kt)("p",null,"Our smart-contract (solido) upgrade is coming soon. It will bring ",(0,o.kt)("strong",{parentName:"p"},"breaking changes")," to frontend integration, that's why it's critical\nimportant to be ready for this upgrade."),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido-sdk/releases/tag/0.5.0"},"0.5.0")," we have supported v2 in advance, in order not to be broken when the protocol\nswitches to second version. "),(0,o.kt)("p",null,"For sdk users totally nothing changes, but ",(0,o.kt)("strong",{parentName:"p"},"unStake operations can not be performed for 1-2 epoches"),", because of removing\nvalidators before migration, and adding them again after. For this case we prepared new method ",(0,o.kt)("a",{parentName:"p",href:"/frontend-integration/sdk/sdk-methods#isunstakeavailable"},(0,o.kt)("inlineCode",{parentName:"a"},"isUnStakeAvailable()")),",\nuse it for checking unStake operation availability. "),(0,o.kt)("p",null,"After migration v1 instructions ",(0,o.kt)("strong",{parentName:"p"},"will stop work"),", it means versions fewer than 0.5.0 will stop work after migration. So, we recommend update sdk:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @lidofinance/solido-sdk@latest\n")),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.lido.fi/t/lido-on-solana-protocol-upgrade-proposal/2959/3"},"Smart-contract upgrade"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/frontend-integration/manual-instructions/#solido-changes"},"Solido changes"))))}d.isMDXComponent=!0}}]);