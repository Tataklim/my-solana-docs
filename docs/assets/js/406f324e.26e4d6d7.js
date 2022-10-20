"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[269],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=n.createContext({}),c=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=c(a),u=o,k=h["".concat(r,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(k,s(s({ref:e},d),{},{components:a})):n.createElement(k,s({ref:e},d))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:o,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6548:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>w,contentTitle:()=>m,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n=a(7462),o=(a(7294),a(3905));const i=a.p+"assets/images/logged_in-1050a9f714754833dd3bd79a7bc0a892.png",s=a.p+"assets/images/connect-89b3a584f237fe8e367a8bd948319032.png",l=a.p+"assets/images/connect_dialog-ae808fd516eda2af5c43625dbf7b0401.png",r=a.p+"assets/images/updated-b00828d70e59c8d506105cf986ce34e4.png";var c=a(3902);a(1599);const d=a.p+"assets/images/solanatokens-ab50d531970af255409ae3b97488ac62.png",p=a.p+"assets/images/stakeaccounts-e5e30d7a14c9f7d3c2ba4880f2622e1e.png",h=a.p+"assets/images/deactivating-314e123702832a46cc6b23dfa875a509.png",u=a.p+"assets/images/inactive-4b1191fead62b5ec9b8bdc2cd3bf951a.png",k=a.p+"assets/images/withdraw-phantom-ccaa46e70323b8c8453a4927e16f64ca.png",g={title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:2},m="How to Stake Solana on Lido",f={unversionedId:"staking/phantom",id:"staking/phantom",title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",source:"@site/docs2/staking/phantom.md",sourceDirName:"staking",slug:"/staking/phantom",permalink:"/my-solana-docs2/staking/phantom",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:2},sidebar:"solidoSidebar",previous:{title:"Lido-Anchor Guide",permalink:"/my-solana-docs2/staking/lido-anchor-guide"},next:{title:"Solflare",permalink:"/my-solana-docs2/staking/solflare"}},w={},b=[{value:"Introduction",id:"introduction",level:2},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",level:2},{value:"Step 1: Create or Restore Phantom Wallet",id:"step-1-create-or-restore-phantom-wallet",level:2},{value:"Creating the wallet",id:"creating-the-wallet",level:3},{value:"Restoring the wallet",id:"restoring-the-wallet",level:3},{value:"Logged In",id:"logged-in",level:3},{value:"Step 2: Connect Lido to Phantom",id:"step-2-connect-lido-to-phantom",level:2},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",level:2},{value:"Account info",id:"account-info",level:3},{value:"Transaction Parameters",id:"transaction-parameters",level:3},{value:"Lido Statistics",id:"lido-statistics",level:3},{value:"FAQs",id:"faqs",level:3},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",level:2},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",level:2},{value:"Step 6: Unstaking and utlizing stSOL",id:"step-6-unstaking-and-utlizing-stsol",level:2},{value:"Utilizing and exchanging stSOL",id:"utilizing-and-exchanging-stsol",level:3},{value:"Resources",id:"resources",level:2}],y={toc:b};function v(t){let{components:e,...g}=t;return(0,o.kt)("wrapper",(0,n.Z)({},y,g,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-stake-solana-on-lido"},"How to Stake Solana on Lido"),(0,o.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Widget",src:a(4765).Z,width:"2698",height:"1428"})),(0,o.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,o.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Phantom"),(0,o.kt)("li",{parentName:"ol"},"Solflare"),(0,o.kt)("li",{parentName:"ol"},"Ledger"),(0,o.kt)("li",{parentName:"ol"},"Sollet"),(0,o.kt)("li",{parentName:"ol"},"Solong")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-1-create-or-restore-phantom-wallet"},"Step 1: Create or Restore Phantom Wallet"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://phantom.app/"},"https://phantom.app/")," to create/restore your solana wallet."),(0,o.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,o.kt)("p",null,"If you do not have a wallet you yet, you should create a new wallet and note down the seed phrase and store it in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Wallet",src:a(5456).Z,width:"2800",height:"1244"}),"\n",(0,o.kt)("img",{alt:"Wallet",src:a(2472).Z,width:"2810",height:"1368"})),(0,o.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,o.kt)("p",null,"If you already have a wallet, you can restore it on Phantom using the associated seed phrase. Follow the online instructions to restore your SOL account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Restore",src:a(3996).Z,width:"2818",height:"1340"}),"\n",(0,o.kt)("img",{alt:"Restore 2",src:a(893).Z,width:"2788",height:"1344"})),(0,o.kt)("h3",{id:"logged-in"},"Logged In"),(0,o.kt)("p",null,"Once you have funded your Phantom wallet with Solana, you can click on the Phantom extension to see your account details."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:i,alt:"logged_in",width:"300"})),(0,o.kt)("h2",{id:"step-2-connect-lido-to-phantom"},"Step 2: Connect Lido to Phantom"),(0,o.kt)("p",null,"Once your wallet is setup visit ",(0,o.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Phantom account to the Lido interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect",src:a(78).Z,width:"2872",height:"528"})),(0,o.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:s,alt:"Wallets",width:"350"})),(0,o.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,o.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Phantom."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve Connection",src:a(2143).Z,width:"2454",height:"1448"})),(0,o.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connected",src:a(4891).Z,width:"2718",height:"1266"})),(0,o.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,o.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,o.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Interface",src:a(6061).Z,width:"2042",height:"922"})),(0,o.kt)("h3",{id:"account-info"},"Account info"),(0,o.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Address - ",(0,o.kt)("inlineCode",{parentName:"p"},"yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Blockexplorer URL - ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet-qn1"},"https://solana.fm/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet-qn1"))),(0,o.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet-qn1"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account Info",src:a(4053).Z,width:"2192",height:"410"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:l,alt:"Connect Dialog",width:"350"})),(0,o.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,o.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,o.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,o.kt)("li",{parentName:"ul"},"Transaction cost"),(0,o.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction Params",src:a(1973).Z,width:"2198",height:"1192"})),(0,o.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,o.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lido Params",src:a(9182).Z,width:"2498",height:"398"})),(0,o.kt)("h3",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Faqs",src:a(7746).Z,width:"2178",height:"1224"})),(0,o.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stake",src:a(1790).Z,width:"2854",height:"882"})),(0,o.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note ",(0,o.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking",src:a(3810).Z,width:"1894",height:"1090"})),(0,o.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve",src:a(8865).Z,width:"2456",height:"1380"})),(0,o.kt)("p",null,"After verifying the information you can approve now."),(0,o.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,o.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,o.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:c.Z,alt:"View Tx",width:"500"})),(0,o.kt)("p",null,"This is useful as it tells you the ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet-qn1"},"current status")," of your transaction."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,o.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet-qn1"},"https://solana.fm/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet-qn1"))),(0,o.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmations 1",src:a(313).Z,width:"2516",height:"1200"}),"\n",(0,o.kt)("img",{alt:"Confirmations 2",src:a(142).Z,width:"2562",height:"1322"}),"\n",(0,o.kt)("img",{alt:"Confirmations 3",src:a(8854).Z,width:"2654",height:"338"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Finally after 32 confirmations, our transaction gets confirmed")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmations 4",src:a(8402).Z,width:"2416",height:"1358"})),(0,o.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update",src:a(5256).Z,width:"2376",height:"1168"})),(0,o.kt)("p",null,"Zooming into the widget we can observe the new SOL balance and the updated stSOL balance"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:r,alt:"Updated Balance",width:"450"})),(0,o.kt)("h2",{id:"step-6-unstaking-and-utlizing-stsol"},"Step 6: Unstaking and utlizing stSOL"),(0,o.kt)("p",null,"To withdraw click on the ",(0,o.kt)("strong",{parentName:"p"},"Unstake")," tab and enter the amount of stSOL that you would like to unstake in the field provided below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-amount",src:a(2606).Z,width:"2532",height:"1328"})),(0,o.kt)("p",null,"Then click unstake and head over to your wallet to approve the transaction."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to note down the transaction hash or the link provided on the screen. This allows for an easier debugging in case of a failed transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-transaction",src:a(9271).Z,width:"2526",height:"1308"})),(0,o.kt)("p",null,"The Solana blockchain waits for 32 confirmations (called MAX Confirmations) before making a transaction 'final'. Once the transaction gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX Confirmations")," the Lido program splits off a stake account with the redeemed SOL amount and transfers it to you. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to note down the stake account address by clicking on the blockexplorer link provided on the screen.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"unstake-successful",src:a(3722).Z,width:"2572",height:"1262"})),(0,o.kt)("p",null,"After unstaking go back to your wallet and click on the Solana token balance button."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:d,alt:"Click on Solana tokens section",width:"500"})),(0,o.kt)("p",null,"You will see the number of deactivating stake accounts. Click on the stake accounts button."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that the option to view deactivating stake accounts is visible only in Phantom and Solflare wallets. On Sollet or Solong you will not be able to see these stake accounts. This is not a cause for concern as you can always migrate from Sollet/Solong to either Phantom or Solflare for free")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:p,alt:"Click on the stake accounts button",width:"500"})),(0,o.kt)("p",null,"You will then see your deactivating stake account where you can keep a track of your deactivating stake."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:h,alt:"Deactivating",width:"500"})),(0,o.kt)("p",null,"If you issue the unstake instruction when epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," is going on, the deactivation will start immediately and your stake will completely deactivate at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"N+1"),"."),(0,o.kt)("p",null,"For example, for the stake account shown in the example above the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unstake")," was done at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"225"),", the stake started deactivating within the same epoch and the SOL became available for withdrawing at epoch ",(0,o.kt)("inlineCode",{parentName:"p"},"226")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"epochN+2",src:a(8272).Z,width:"1972",height:"462"})),(0,o.kt)("p",null,"After your stake gets completely deactivated you your stake accounts go from ",(0,o.kt)("inlineCode",{parentName:"p"},"deactivating")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"inactive"),". You can then withdraw your SOL tokens by clicking on the three dots on the top right. "),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:u,alt:"Deactivated stake",width:"500"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:k,alt:"Withdraw your SOL",width:"500"})),(0,o.kt)("p",null,"For users who desire instant liquidity, the preferred option is to exchange stSOL on the open market, e.g. on the supported AMM pools on Saber and Raydium."),(0,o.kt)("h3",{id:"utilizing-and-exchanging-stsol"},"Utilizing and exchanging stSOL"),(0,o.kt)("p",null,"The following AMM pools and markets exist for exchanging stSOL or adding liquidity to pools."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Provider"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for SOL"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/swap"},"https://app.saber.so/#/swap"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add Liquidity to Pool"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/pools/stsol/deposit"},"https://app.saber.so/#/pools/stsol/deposit"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Farming"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://app.saber.so/#/quarries/stsol/stake"},"https://app.saber.so/#/quarries/stsol/stake"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Raydium"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for USDC"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://raydium.io/swap/?ammId=6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj"},"Raydium Pool"))))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}v.isMDXComponent=!0},1599:(t,e,a)=>{a.p},3902:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},78:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},8272:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/epochNplus2-ea6a9cac48f1249350d06807421a7be6.png"},7746:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},6061:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},1790:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},2606:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-amount-7bb01c1db556314bc6797382c9af577c.png"},3722:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-successful-a1fd6fb114c97e369a3d224daf523da4.png"},9271:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unstake-transaction-5117356faee669f6fb7de9bfed28de17.png"},4765:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},4053:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/account_info-42002110c349093966374e911ac5c7d4.png"},8865:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/approve-96c5a5e652c30965a17f321284b2cc2f.png"},2143:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/approve_connection-11487f1b9ad469f267937857ab90093b.png"},313:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations1-07932b34599ed0ff9467b8701d257757.png"},142:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations2-3de987a8314613be41cdba4507ecb911.png"},8854:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations3-08ebb64e7dca8e5e62c049a6ed5182be.png"},8402:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/confirmations4-6ffd1511bc8ed0072b571bed70615b8d.png"},4891:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connected-86ed16f80b4be799840c65218b1adaeb.png"},5456:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create_wallet-7ca0c5f379940316b0cbc408b13e71c1.png"},2472:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/create_wallet2-9aada081d87ef532ed290dd71470db11.png"},9182:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/lido_params-976584468a7318057c52aa970c3d6663.png"},3996:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/restore-f2e68bc4175c5fc8b098870412f2209a.png"},893:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/restore2-8685fd72b20474185dc66c26eb74b769.png"},3810:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/staking-c1b410e45dd8106d431af88422d8282d.png"},1973:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tx_params-85f6822765e8825c28c1669208e2664b.png"},5256:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/update-19375eb31602fa4386ebbc98729a875a.png"}}]);