"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"logic",description:"Specification of the logic.rs module",keywords:["development","developers","lido","specification","intent","logic","solido","solana"],sidebar_position:9},a="Logic",l={unversionedId:"development/specification/solido/logic",id:"development/specification/solido/logic",title:"logic",description:"Specification of the logic.rs module",source:"@site/docs2/development/specification/solido/logic.md",sourceDirName:"development/specification/solido",slug:"/development/specification/solido/logic",permalink:"/development/specification/solido/logic",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"logic",description:"Specification of the logic.rs module",keywords:["development","developers","lido","specification","intent","logic","solido","solana"],sidebar_position:9},sidebar:"solidoSidebar",previous:{title:"lib",permalink:"/development/specification/solido/lib"},next:{title:"process_management",permalink:"/development/specification/solido/process_management"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"check_rent_exempt",id:"check_rent_exempt",level:3},{value:"get_reserve_available_amount",id:"get_reserve_available_amount",level:3},{value:"calc_total_lamports",id:"calc_total_lamports",level:3},{value:"token_mint_to",id:"token_mint_to",level:3},{value:"deserialize_lido",id:"deserialize_lido",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logic"},"Logic"),(0,r.kt)("p",null,"The logic module contains general program logic that is not more directly associated with process, state or token functionality."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"check_rent_exempt"},"check_rent_exempt"),(0,r.kt)("p",null,"This function checks the balance of account in lamports, along with the data length to determine if the account is rent exempt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub(crate) fn check_rent_exempt(\n    rent: &Rent,\n    account_info: &AccountInfo,\n    account_name: &'static str,\n) -> Result<(), ProgramError> {\n")),(0,r.kt)("h3",{id:"get_reserve_available_amount"},"get_reserve_available_amount"),(0,r.kt)("p",null,"This function gets the amount of lamports in reserve. The rent is subtracted from the total amount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_reserve_available_amount(\n    reserve_account: &AccountInfo,\n    sysvar_rent: &Rent,\n) -> Result<Lamports, LidoError> {\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this function will fail if the reserve's balance minus rent is < 0.")),(0,r.kt)("h3",{id:"calc_total_lamports"},"calc_total_lamports"),(0,r.kt)("p",null,"Calculates the sum of lamports available in the reserve (after rent us discounted) and the stake pool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn calc_total_lamports(\n    lido: &Lido,\n    reserve_account: &AccountInfo,\n    sysvar_rent: &Rent,\n) -> Result<Lamports, LidoError> {\n")),(0,r.kt)("h3",{id:"token_mint_to"},"token_mint_to"),(0,r.kt)("p",null,"Creates and issues a spl_token ",(0,r.kt)("inlineCode",{parentName:"p"},"MintTo")," instructioni from the Solana SPL token library program."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn token_mint_to<'a>(\n    lido: &Pubkey,\n    token_program: AccountInfo<'a>,\n    mint: AccountInfo<'a>,\n    destination: AccountInfo<'a>,\n    authority: AccountInfo<'a>,\n    authority_type: &[u8],\n    bump_seed: u8,\n    amount: StLamports,\n) -> Result<(), ProgramError> {\n")),(0,r.kt)("h3",{id:"deserialize_lido"},"deserialize_lido"),(0,r.kt)("p",null,"This function first checks the the lido account is indeed the owner and then deserializes the lido data into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn deserialize_lido(program_id: &Pubkey, lido: &AccountInfo) -> Result<Lido, ProgramError>\n")))}u.isMDXComponent=!0}}]);