"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"dockerimage",description:"Notes for building the Lido for Solana Docker image",keywords:["development","developers","lido","solana","docker","container"],sidebar_position:3},i="Buiding a Docker image locally",l={unversionedId:"development/building-docker-image",id:"development/building-docker-image",title:"dockerimage",description:"Notes for building the Lido for Solana Docker image",source:"@site/docs2/development/building-docker-image.md",sourceDirName:"development",slug:"/development/building-docker-image",permalink:"/my-solana-docs2/development/building-docker-image",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"dockerimage",description:"Notes for building the Lido for Solana Docker image",keywords:["development","developers","lido","solana","docker","container"],sidebar_position:3},sidebar:"solidoSidebar",previous:{title:"token",permalink:"/my-solana-docs2/development/specification/solido/token"},next:{title:"Price oracle",permalink:"/my-solana-docs2/development/price-oracle"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building",id:"building",level:2},{value:"Running the container",id:"running-the-container",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buiding-a-docker-image-locally"},"Buiding a Docker image locally"),(0,o.kt)("p",null,"In cases where there isn't a need to run the testnet (i.e. a local validator) and all that is required is the packaging of the Lido for Solana code and access to the Solana toolchain; there is the option of building a local container image."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Building a local version of the container requires that you have Docker installed but also the Rust toolchain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust"))),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"To docs the local image use the buildimage.sh script.  This will docs and package Lido for Solana along with the Solana toolchain into an image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Docker"},"chorusone/solido:hash\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("em",{parentName:"p"},"hash")," will be the git hash of the current version of the code base."),(0,o.kt)("h2",{id:"running-the-container"},"Running the container"),(0,o.kt)("p",null,"Once built, one can execute into the container interactively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm chorusone/solido:hash /bin/sh\n")),(0,o.kt)("p",null,"This will provide a shell into the working directory where the Lido for Solana artefacts and the Solana toolchain are located. Inside the container, the Lido for Solana docs artefacts are located in the ",(0,o.kt)("strong",{parentName:"p"},"solido")," directory which has the following structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/solido",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/cli"),(0,o.kt)("li",{parentName:"ul"},"/deploy")))),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"cli")," directory contains the solido cli artefacts.  The ",(0,o.kt)("em",{parentName:"p"},"deploy")," directory contains the artefacts for the on-chain programs for Lido for Solana."))}u.isMDXComponent=!0}}]);