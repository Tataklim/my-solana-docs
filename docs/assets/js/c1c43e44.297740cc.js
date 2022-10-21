"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(a),g=o,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>k});var n=a(7462),o=(a(7294),a(3905)),i=a(894);const s=a.p+"assets/images/slp-balance-615d95444210e50e42160da7c552acda.png",r=a.p+"assets/images/wsol-solflare-d213bdea2e3fcebe7c3b23f89682bc7d.png",l=a.p+"assets/images/wsol-solong-e5f6e3e8a307d198ebe4d449bd1aaf35.png",d=a.p+"assets/images/unwrap-ffb8a035fa366e226688666d1629ccd6.png",p=a.p+"assets/images/unwrap2-43fefea2048745ba66fcb9e8dffd0393.png",c={id:"stSOL-Saber-pool",title:"Utilizing stSOL in Saber",description:"Using stSOL as a collateral in Saber to earn secondary rewards",keywords:["Saber","Raydium","lido","Mercurial","Farming"],sidebar_label:"Investing stSOL in Saber",sidebar_position:7},m="How to use stSOL to earn secondary rewards",g={unversionedId:"staking/stSOL-Saber-pool",id:"staking/stSOL-Saber-pool",title:"Utilizing stSOL in Saber",description:"Using stSOL as a collateral in Saber to earn secondary rewards",source:"@site/docs2/staking/stSOL-DeFi.md",sourceDirName:"staking",slug:"/staking/stSOL-Saber-pool",permalink:"/my-solana-docs2/staking/stSOL-Saber-pool",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"stSOL-Saber-pool",title:"Utilizing stSOL in Saber",description:"Using stSOL as a collateral in Saber to earn secondary rewards",keywords:["Saber","Raydium","lido","Mercurial","Farming"],sidebar_label:"Investing stSOL in Saber",sidebar_position:7},sidebar:"solidoSidebar",previous:{title:"Solong",permalink:"/my-solana-docs2/staking/solong"},next:{title:"Wormhole Guide (Orca Pool)",permalink:"/my-solana-docs2/staking/Orca-pool-Wormhole-guide"}},h={},k=[{value:"How to earn SBR by providing stSOL/SOL liquidity",id:"how-to-earn-sbr-by-providing-stsolsol-liquidity",level:2},{value:"Summary",id:"summary",level:3},{value:"1. Adding liquidity to stSOL/SOL pool",id:"1-adding-liquidity-to-stsolsol-pool",level:3},{value:"2. Farming LP Tokens",id:"2-farming-lp-tokens",level:3},{value:"3. Claiming SBR Rewards",id:"3-claiming-sbr-rewards",level:3},{value:"4. Unstaking from Saber farm",id:"4-unstaking-from-saber-farm",level:3},{value:"5. Withdrawing from stSOL/SOL pool",id:"5-withdrawing-from-stsolsol-pool",level:3},{value:"6. Unwrapping Wrapped SOL",id:"6-unwrapping-wrapped-sol",level:3}],u={toc:k};function f(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-stsol-to-earn-secondary-rewards"},"How to use stSOL to earn secondary rewards"),(0,o.kt)("p",null,"A quick guide on using stSOL in DeFi to earn more rewards. In this guide we will be talking about the following DeFi integrations."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://saber.so/"},"Saber"))),(0,o.kt)("h2",{id:"how-to-earn-sbr-by-providing-stsolsol-liquidity"},"How to earn SBR by providing stSOL/SOL liquidity"),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Stake your SOL on Lido Finance to get stSOL, receiving staking rewards;"),(0,o.kt)("li",{parentName:"ol"},"Provide liquidity for stSOL/SOL on Saber, receiving Liquidity Provider rewards;"),(0,o.kt)("li",{parentName:"ol"},"Stake your LP tokens on Saber, receiving SBR liquidity mining rewards. There are future plans to also introduce dual yield farming that will allow farmers to also earn LDO liquidity mining rewards."))),(0,o.kt)("h3",{id:"1-adding-liquidity-to-stsolsol-pool"},"1. Adding liquidity to stSOL/SOL pool"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://saber.so/"},"https://saber.so/"),", click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Launch App")," and go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Pools")," tab.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"saber-main-page",src:a(3870).Z,width:"2774",height:"1208"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Scroll down to ",(0,o.kt)("inlineCode",{parentName:"li"},"stSOL-SOL")," pool. If you click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Deposit"),", you will be able to see the pool statistics as well. The statistics tell you the proportion of stSOL to SOL in the pool. Below the pool statistics you can view the account addresses related to stSOL, SOL and Swap accounts.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"stSOL-SOL-pool",src:a(3402).Z,width:"2874",height:"806"}),"\n",(0,o.kt)("img",{alt:"poolStats",src:a(2774).Z,width:"2512",height:"1498"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Before you can add liquidity to the pool you will need to connect your wallet with Saber app.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"position",src:a(8647).Z,width:"2722",height:"1548"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You may choose any wallet of your liking to connect to Saber app. For the purposes of this guide we use ",(0,o.kt)("inlineCode",{parentName:"li"},"Phantom")," wallet. ",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you unstake from Saber farm you get Wrapped SOL. Phantom wallet has the additional benefit of allowing you to unwrap SOL tokens easily.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"connect",src:a(2808).Z,width:"2802",height:"1276"}),"\n",(0,o.kt)("img",{alt:"phantom",src:a(7330).Z,width:"2822",height:"1316"}),"\n",(0,o.kt)("img",{alt:"connecting",src:a(6203).Z,width:"2758",height:"1344"}),"\n",(0,o.kt)("img",{alt:"wallet-connect",src:a(2674).Z,width:"2586",height:"1228"}),"\n",(0,o.kt)("img",{alt:"connected",src:a(7218).Z,width:"2830",height:"406"}),"\n",(0,o.kt)("img",{alt:"connected",src:a(6195).Z,width:"2826",height:"1576"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Enter the amount of stSOL and SOL you would like to add to the pool and click on Deposit.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"enter-amount",src:a(1636).Z,width:"2230",height:"902"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Confirm the deposit and approve the transaction in your wallet.",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to note down the transaction hash or the link provided on the screen. This allows for an easier debugging in case of a failed transaction.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirm-pool-deposit",src:a(4200).Z,width:"2000",height:"1126"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Once the deposit to the pool gets confirmed, you will receive LP tokens that will accrue rewards whenever someone transacts on the pool. Saber also displays a warning that your LP tokens are unstaked. You can click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Farm SBR")," link or go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Farms")," tab above to stake your LP tokens. Staking in Saber farms provides you with an opportunity to earn additional ",(0,o.kt)("inlineCode",{parentName:"li"},"$SBR")," rewards")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pool-confirmed",src:a(2463).Z,width:"2880",height:"1174"}),"\n",(0,o.kt)("img",{alt:"pool-confirmed2",src:a(687).Z,width:"2102",height:"688"})),(0,o.kt)("h3",{id:"2-farming-lp-tokens"},"2. Farming LP Tokens"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"stSOL-SOL")," farm on the Farm page and click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Stake")," to review the farm info and stake your LP tokens. At the time of writing this guide the collective returns from the pool were around ",(0,o.kt)("inlineCode",{parentName:"li"},"35,897 SBR/day"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"farm",src:a(9847).Z,width:"2808",height:"1042"}),"\n",(0,o.kt)("img",{alt:"farm",src:a(169).Z,width:"2800",height:"1510"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Enter the amount of LP tokens you would like to stake or hit the ",(0,o.kt)("inlineCode",{parentName:"li"},"Balance")," link to stake the maximum possible amount.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lp-balance",src:a(5154).Z,width:"1688",height:"642"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Once the transaction gets confirmed you will be able to see your stake balance and your rewards accruing in real-time (shown as ",(0,o.kt)("inlineCode",{parentName:"li"},"Your unclaimed tokens"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"stake-farm",src:a(2379).Z,width:"2114",height:"690"})),(0,o.kt)("h3",{id:"3-claiming-sbr-rewards"},"3. Claiming SBR Rewards"),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Once you have accumulated SBR rewards you might want to claim these rewards. Simply click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Claim")," link provided next to ",(0,o.kt)("inlineCode",{parentName:"li"},"Your unclaimed tokens"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"claim-sbr",src:a(7975).Z,width:"1736",height:"384"})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"After successfully claiming your tokens you will see them appearing your wallet. Your claimable token balance on SBR will again start building up from 0.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:i.Z,alt:"SBR Rewards in Wallet",width:"400"})),(0,o.kt)("h3",{id:"4-unstaking-from-saber-farm"},"4. Unstaking from Saber farm"),(0,o.kt)("p",null,"At some point, if you feel the need to unstake from Saber farm and invest stSOL somewhere else, you may click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unstake")," tab as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake",src:a(2295).Z,width:"1730",height:"634"})),(0,o.kt)("p",null,"Enter the amount that you want to unstake. If you want to unstake all of it click on the link provided next to ",(0,o.kt)("inlineCode",{parentName:"p"},"Balance")," and click on Withdraw"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake2",src:a(2801).Z,width:"1826",height:"610"})),(0,o.kt)("p",null,"Once the withdraw is successful you will see that Saber LP tokens are added back to your wallet. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Remember, that we received Saber LP tokens upon adding liquidity to the pool, which we subsequently staked in the Saber farm. These are the same LP tokens that we receive upon unstaking")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"slp-tx",src:a(5237).Z,width:"892",height:"250"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:s,alt:"SLP Tokens in Wallet",width:"400"})),(0,o.kt)("p",null,"Some wallets are unable to recognize the token name. This is not a cause for concern as you can always use the transaction hash to look at the token name in the block explorer"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"slp-token",src:a(9548).Z,width:"2094",height:"280"})),(0,o.kt)("h3",{id:"5-withdrawing-from-stsolsol-pool"},"5. Withdrawing from stSOL/SOL pool"),(0,o.kt)("p",null,"Once you unstake from the Saber farm you will again start seeing a warning on the Saber interface about having unstaked LP tokens."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"warning",src:a(8741).Z,width:"1480",height:"614"})),(0,o.kt)("p",null,"To withdraw (remove liqudity) from the ",(0,o.kt)("inlineCode",{parentName:"p"},"stSOL-SOL pool")," move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Position Management")," section in the pool page and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Withdraw")," tab. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"position-withdraw",src:a(9022).Z,width:"2042",height:"1024"})),(0,o.kt)("p",null,"Choose the percentage of SLP tokens you want to withdraw from the pool Now you have 3 options while withdrawing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Default - Exchange Saber LP tokens for preset amounts of stSOL and SOL (this can be changed by modifying the percentage slider)"),(0,o.kt)("li",{parentName:"ol"},"SOL only - Exchange Saber LP tokens for SOL only"),(0,o.kt)("li",{parentName:"ol"},"stSOL only - Exchange Saber LP tokens for stSOL only")),(0,o.kt)("p",null,"These scenarios are shown in the images below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pool-withdraw",src:a(1877).Z,width:"1696",height:"838"}),"\n",(0,o.kt)("img",{alt:"pool-withdraw",src:a(5872).Z,width:"2686",height:"1426"}),"\n",(0,o.kt)("img",{alt:"pool-withdraw",src:a(4299).Z,width:"2696",height:"1410"})),(0,o.kt)("p",null,"After you ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm the Withdrawal")," you will receive stSOL back in your wallet. However, you SOL tokens will show up as wrapped SOL . It is very easy to unwrap these SOL tokens and the process incurs 0 fee. However, it can be only done in ",(0,o.kt)("inlineCode",{parentName:"p"},"Phantom wallet")," as of now. Move to the next section if you want to know how to unwrap your wrapped SOL\n",(0,o.kt)("img",{alt:"withdraw-pool",src:a(7505).Z,width:"2756",height:"1410"})),(0,o.kt)("h3",{id:"6-unwrapping-wrapped-sol"},"6. Unwrapping Wrapped SOL"),(0,o.kt)("p",null,"The wrapped SOL tokens show up differently in different wallets."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:r,alt:"Wrapped SOL",width:"400"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:l,alt:"Wrapped SOL",width:"400"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wrapped SOL Sollet",src:a(8390).Z,width:"1552",height:"300"})),(0,o.kt)("p",null,"To unwrap it, migrate to Phantom wallet and click on the Wrapped SOL token balance. Then click the 3 dots in the top-right corner and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Unwrap all")," option."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:d,alt:"Wrapped SOL",width:"400"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:p,alt:"Wrapped SOL",width:"400"})),(0,o.kt)("p",null,"As soon as the unwrapping finishes, your wrapped SOL account will be closed and the tokens will be credited back to your wallet as SOL."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"closeaccount",src:a(8482).Z,width:"2002",height:"284"})))}f.isMDXComponent=!0},894:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claimed-sbr-009c5e0f6f30f8bb717b9aacd1877604.png"},7975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/claim-sbr-f74a5b3485ec57f9889d7d9a25d3fb56.png"},8482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/closeaccount-879545bfeddd99e5b322475dd5273729.png"},4200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/confirm-pool-deposit-32b912e2324ccba3cbd7f9ebbfa9384d.png"},2808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connect-581fcdce2e64a322fe2fd888be03c38d.png"},7218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connected1-2f7fe030436e4f25c259b80107d08cae.png"},6195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connected2-d31c324a7f4c76714d4b4d1832f24ca4.png"},6203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecting-7840c45d007692c38c236729c1e8f5d8.png"},1636:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enter-amount-86d768dfb2da4f177b2c303ef410f52e.png"},169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/farm-info-d008a9d6c06bdac1ebe2a72725d07f58.png"},9847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/farm-fbc487fb504ccb9941456c54e4dc5c8a.png"},5154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lp-balance-4329bf680a269742e67936894e27ad8f.png"},3870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mainpage-8859246695aeda733e6939e79e98f36a.png"},7330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/phantom-56cd0c27a30b75105b60c19dd48ebf8c.png"},2463:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool-confirmed-79ac2ceafc8c1e9b13e245533975a5df.png"},687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool-confirmed2-06e8053aa288575994108db16c35f60b.png"},1877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool-withdraw-1-f098ef3bcbbffcd26f27bd5888f6ee09.png"},5872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool-withdraw-2-fc72fdd4dd3e6fc3c43c9452b8442d65.png"},4299:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pool-withdraw-3-a19a6685a1403355d94e921f072234d3.png"},2774:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/poolStats-f6ff75fdc8f4ac60b5bd4e10109faeb7.png"},9022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/position-withdraw-24e13f5cc889cb87802680f6f6ce37dc.png"},8647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/position-c01ec571d0674b6fd07671ab5ce8ac8c.png"},9548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/slp-token-e1be624e6e9d2babacf53bbd1f154d73.png"},5237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/slp-tx-c449b38f348d3725983e4f84c7e4c1f8.png"},3402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stSOLpool-e407d848d2a063e10ee14a1bdbeabd24.png"},2379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stake-farm-77946cc23b79aa57a820d8d3722a114f.png"},2295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unstake-f6b881a367fb0bbd44536015c6825d9b.png"},2801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unstake2-311924dd03d0edb35a9ba6a26eecef32.png"},2674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet-connect-73f0159b8609985763ae635f73e7e055.png"},8741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/warning-89b10cc3e612d56afdba368f6cc83d6c.png"},7505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/withdraw-pool-e16608f59f9169b44839aa616ad75db8.png"},8390:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wsol-sollet-415dff52b1101a91a266b95e3f2ed9d4.png"}}]);