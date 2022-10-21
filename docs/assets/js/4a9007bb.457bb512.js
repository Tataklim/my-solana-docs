"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3686],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(a),h=n,k=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3718:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={},o="Incentives",l={unversionedId:"incentives",id:"incentives",title:"Incentives",description:"Lido for Solana rewards liquidity providers with Lido\u2019s LDO token, bridged",source:"@site/docs2/incentives.md",sourceDirName:".",slug:"/incentives",permalink:"/my-solana-docs2/incentives",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Exchange rate",permalink:"/my-solana-docs2/internals/exchange-rate"},next:{title:"Deployments",permalink:"/my-solana-docs2/deployments"}},c={},s=[{value:"2021-12-17",id:"2021-12-17",level:3},{value:"2021-12-15",id:"2021-12-15",level:3},{value:"2021-11-07",id:"2021-11-07",level:3},{value:"2021-10-06",id:"2021-10-06",level:3}],p={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"incentives"},"Incentives"),(0,n.kt)("p",null,"Lido for Solana rewards liquidity providers with Lido\u2019s LDO token, bridged\nfrom Ethereum to Solana through ",(0,n.kt)("a",{parentName:"p",href:"https://wormholebridge.com"},"Wormhole")," as\n",(0,n.kt)("a",{parentName:"p",href:"https://solscan.io/token/HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p"},"wLDO"),". For transparency, and also for our own bookkeeping, this page\nlists all past ",(0,n.kt)("a",{parentName:"p",href:"administration"},"multisig")," transactions that funded these\nincentive programs."),(0,n.kt)("p",null,"The table below is generated by the script\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/1709a2aceb9a067899b1d731c1ad169c5e27a4ab/scripts/print_incentive_history.py"},(0,n.kt)("inlineCode",{parentName:"a"},"print_incentive_history.py"))," in the main repository."),(0,n.kt)("h3",{id:"2021-12-17"},"2021-12-17"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount (wLDO)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient wLDO account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient owner account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multisig transaction"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Saber stSOL-SOL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/D89yDDs9dhd82SdM1teiHoH5miZMQ36Unc4r66rKFhVK",title:"D89yDDs9dhd82SdM1teiHoH5miZMQ36Unc4r66rKFhVK"},"D89yDD\u2026rKFhVK")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/GVQzKmFPJDrJT1pBYiT7KhfhMqvmU6yQ6SAhQKR7roaj",title:"GVQzKmFPJDrJT1pBYiT7KhfhMqvmU6yQ6SAhQKR7roaj"},"GVQzKm\u2026R7roaj")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/3ccNd9MxfroqQ9gmaGQFTt1U65yRsUyiJi1oJhGwaz8E",title:"3ccNd9MxfroqQ9gmaGQFTt1U65yRsUyiJi1oJhGwaz8E"},"3ccNd9\u2026Gwaz8E"))))),(0,n.kt)("h3",{id:"2021-12-15"},"2021-12-15"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount (wLDO)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient wLDO account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient owner account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multisig transaction"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mercurial stSOL-SOL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H",title:"45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H"},"45GXyW\u2026aRHT1H")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG",title:"D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG"},"D7PY6T\u2026rrgUXG")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/FuoT4Yi2YMYwEyuFkBaQ36FARYDNVwjPp8dymB6mAizJ",title:"FuoT4Yi2YMYwEyuFkBaQ36FARYDNVwjPp8dymB6mAizJ"},"FuoT4Y\u20266mAizJ"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Orca stSOL-USDC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/8uGgbZDqb8tSzoGJRfsTrpoWAkna9oaWpGSuXaxzvEwr",title:"8uGgbZDqb8tSzoGJRfsTrpoWAkna9oaWpGSuXaxzvEwr"},"8uGgbZ\u2026xzvEwr")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/2hLYdBzRaHWHE4h6FNHbUi983aGknESf2hYG3QEiybPa",title:"2hLYdBzRaHWHE4h6FNHbUi983aGknESf2hYG3QEiybPa"},"2hLYdB\u2026EiybPa")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/JB92vLZuRj7t9cYRi2j4TnKoRPjdJNHJZepiFd7GQHD3",title:"JB92vLZuRj7t9cYRi2j4TnKoRPjdJNHJZepiFd7GQHD3"},"JB92vL\u20267GQHD3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Orca stSOL-wstETH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L",title:"BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L"},"BEyEHj\u2026AU4v9L")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz",title:"HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz"},"HmcsoD\u2026eabsjz")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/FJTfrRt6xfYyR8mx4aQEQ3raBPi2vwcuyKtvSRLZBhxH",title:"FJTfrRt6xfYyR8mx4aQEQ3raBPi2vwcuyKtvSRLZBhxH"},"FJTfrR\u2026LZBhxH"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Raydium stSOL-USDC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6",title:"8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6"},"8geEcD\u2026qr1xs6")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4",title:"DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4"},"DKSSeo\u2026nzKxT4")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/2UtYtZ4cydPJRv969ASqB3bqR9MDzDoWAs8gM42PkPtc",title:"2UtYtZ4cydPJRv969ASqB3bqR9MDzDoWAs8gM42PkPtc"},"2UtYtZ\u20262PkPtc"))))),(0,n.kt)("h3",{id:"2021-11-07"},"2021-11-07"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount (wLDO)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient wLDO account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient owner account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multisig transaction"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mercurial stSOL-SOL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"75,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H",title:"45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H"},"45GXyW\u2026aRHT1H")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG",title:"D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG"},"D7PY6T\u2026rrgUXG")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/6a1K1eF6k6oXp5PYKnUqGm2Y3uJxfBkGn1JDdiXgsud7",title:"6a1K1eF6k6oXp5PYKnUqGm2Y3uJxfBkGn1JDdiXgsud7"},"6a1K1e\u2026Xgsud7"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Orca stSOL-wstETH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L",title:"BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L"},"BEyEHj\u2026AU4v9L")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz",title:"HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz"},"HmcsoD\u2026eabsjz")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/Dmfp4UuFRqBJ5TU2U21JhPaTjv4HcLzZQgWBvj6DadZS",title:"Dmfp4UuFRqBJ5TU2U21JhPaTjv4HcLzZQgWBvj6DadZS"},"Dmfp4U\u20266DadZS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Raydium stSOL-USDC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6",title:"8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6"},"8geEcD\u2026qr1xs6")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4",title:"DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4"},"DKSSeo\u2026nzKxT4")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/ByJAsTdHzrabU8aihvZCtmLRorhtgVsXLBCF31P2PgUz",title:"ByJAsTdHzrabU8aihvZCtmLRorhtgVsXLBCF31P2PgUz"},"ByJAsT\u2026P2PgUz"))))),(0,n.kt)("h3",{id:"2021-10-06"},"2021-10-06"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount (wLDO)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient wLDO account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recipient owner account"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Multisig transaction"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Mercurial stSOL-SOL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"75,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H",title:"45GXyWbkmW4TwUYDew4myYbbAZyW9fvm8iYbnSaRHT1H"},"45GXyW\u2026aRHT1H")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG",title:"D7PY6TzZRiNJwcZKaQStjjpU3KcfP6kVhrV69wrrgUXG"},"D7PY6T\u2026rrgUXG")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/7ymsoHodgC9ES6NJsWmt6aA7csJmkFvhsC4nBsTY67gF",title:"7ymsoHodgC9ES6NJsWmt6aA7csJmkFvhsC4nBsTY67gF"},"7ymsoH\u2026TY67gF"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Orca stSOL-wstETH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L",title:"BEyEHj6uCgS5NK4wexfLQETX8iyd9Vsjchy1xZAU4v9L"},"BEyEHj\u2026AU4v9L")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz",title:"HmcsoDLBZNDEDArNo7YJTRdhECKFbdNzftEsSoeabsjz"},"HmcsoD\u2026eabsjz")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/5V1gUNKBgFPpVmH2qoNfyhB3PjpmyZbJ6VHfeVxWKkfY",title:"5V1gUNKBgFPpVmH2qoNfyhB3PjpmyZbJ6VHfeVxWKkfY"},"5V1gUN\u2026xWKkfY"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Raydium stSOL-USDC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"125,000"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6",title:"8geEcDpFkXqR2UEE2LVcYCzsD9cyGwJSu8Q56uqr1xs6"},"8geEcD\u2026qr1xs6")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4",title:"DKSSeokFtU7cHKMdgNcZ72JETgf9Q3PqcGsk6hnzKxT4"},"DKSSeo\u2026nzKxT4")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://solscan.io/account/6q6QgB2eAdhg9KLZCRTty8MDwFL9xqUa7v1FRDusTfyk",title:"6q6QgB2eAdhg9KLZCRTty8MDwFL9xqUa7v1FRDusTfyk"},"6q6QgB\u2026usTfyk"))))))}m.isMDXComponent=!0}}]);