"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,d=u["".concat(i,".").concat(c)]||u[c]||k[c]||r;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},o="All methods",s={unversionedId:"frontend-integration/sdk/sdk-methods",id:"frontend-integration/sdk/sdk-methods",title:"All methods",description:"Staking",source:"@site/docs2/frontend-integration/sdk/sdk-methods.mdx",sourceDirName:"frontend-integration/sdk",slug:"/frontend-integration/sdk/sdk-methods",permalink:"/frontend-integration/sdk/sdk-methods",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"Introduction",permalink:"/frontend-integration/sdk/"},next:{title:"Staking & UnStaking",permalink:"/frontend-integration/sdk/stake"}},i={},p=[{value:"Staking",id:"staking",level:2},{value:"stake()",id:"stake",level:3},{value:"getStakeTransaction()",id:"getstaketransaction",level:3},{value:"calculateMaxStakeAmount()",id:"calculatemaxstakeamount",level:3},{value:"signAndConfirmTransaction()",id:"signandconfirmtransaction",level:3},{value:"UnStaking",id:"unstaking",level:2},{value:"unStake()",id:"unstake",level:3},{value:"getUnStakeTransaction()",id:"getunstaketransaction",level:3},{value:"calculateMaxUnStakeAmount()",id:"calculatemaxunstakeamount",level:3},{value:"isUnStakeAvailable()",id:"isunstakeavailable",level:3},{value:"Transaction info",id:"transaction-info",level:2},{value:"getExchangeRate()",id:"getexchangerate",level:3},{value:"getTransactionCost()",id:"gettransactioncost",level:3},{value:"getStakingRewardsFee()",id:"getstakingrewardsfee",level:3},{value:"getTransactionInfo()",id:"gettransactioninfo",level:3},{value:"Lido statistics",id:"lido-statistics",level:2},{value:"getStakeApy()",id:"getstakeapy",level:3},{value:"getTotalStaked()",id:"gettotalstaked",level:3},{value:"getStakersCount()",id:"getstakerscount",level:3},{value:"getMarketCap()",id:"getmarketcap",level:3},{value:"getTotalRewards()",id:"gettotalrewards",level:3},{value:"getLidoStatistics()",id:"getlidostatistics",level:3}],m={toc:p};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"all-methods"},"All methods"),(0,l.kt)("h2",{id:"staking"},"Staking"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stake"},"stake()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"First prepares stake transaction, then signs and confirm it")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type SetTxStageCallback = (props: {\n  txStage: TX_STAGE;\n  transactionHash?: TransactionSignature; // for TX_STAGE.AWAITING_BLOCK stage\n  stSolAccountAddress?: PublicKey; // for TX_STAGE.AWAITING_SIGNING stage\n}) => void;\n\n\n// With txStage\nconst { transactionHash, stSolAccountAddress } = await solidoSDK.stake({\n    amount: 20,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n\n// Without txStage\nconst { transactionHash, stSolAccountAddress } = await solidoSDK.stake({\n    amount: 20,\n    wallet: walletInstance,\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of SOL-s which need to stake"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance from ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@solana/wallet-adapter-base"},"@solana/wallet-adapter-base")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ transactionHash: string; stSolAccountAddress: PublicKey }>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," hash of transaction got from ",(0,l.kt)("inlineCode",{parentName:"p"},"connection.sendRawTransaction"),"\n",(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,l.kt)("h3",{id:"getstaketransaction"},"getStakeTransaction()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Prepares & returns stake transaction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { transaction, stSolAccountAddress } = await solidoSDK.getStakeTransaction({\n    amount: 20,\n    payerAddress: new PublicKey(wallet.publicKey),\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of SOL-s which need to stake"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"payerAddress"))," - address of user who is trying to make the transaction (",(0,l.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ transaction: Transaction; stSolAccountAddress: PublicKey }>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Transaction")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js"),"\n",(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,l.kt)("h3",{id:"calculatemaxstakeamount"},"calculateMaxStakeAmount()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns maximum available SOL-s to stake for given address")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const maxStakeAmountInLamports = await solidoSDK.calculateMaxStakeAmount(new PublicKey(wallet.publicKey));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"address"))," - address of user (",(0,l.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," Value measurement is in lamports"),(0,l.kt)("h3",{id:"signandconfirmtransaction"},"signAndConfirmTransaction()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Signs and confirm given transaction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const transactionHash = await solidoSDK.signAndConfirmTransaction({\n    transaction: stakeTransaction,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"transaction"))," - (un)stake transaction, got from ",(0,l.kt)("inlineCode",{parentName:"li"},"getStakeTransaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<string>")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"transactionHash")," for generating links to solana explorers. For example to ",(0,l.kt)("a",{parentName:"p",href:"https://solana.fm"},"https://solana.fm"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"unstaking"},"UnStaking"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unstake"},"unStake()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"First prepares unStake transaction, then signs and confirm it")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type SetTxStageCallback = (props: {\n  txStage: TX_STAGE;\n  transactionHash?: TransactionSignature; // for TX_STAGE.AWAITING_BLOCK stage\n  deactivatingSolAccountAddress?: PublicKey; // for TX_STAGE.AWAITING_SIGNING stage\n}) => void;\n\n\n// With txStage\nconst { transactionHash, deactivatingSolAccountAddress } = await solidoSDK.unStake({\n    amount: 20,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n\n// Without txStage\nconst { transactionHash, deactivatingSolAccountAddress } = await solidoSDK.unStake({\n    amount: 20,\n    wallet: walletInstance,\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of stSOL-s which need to unStake"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance from ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@solana/wallet-adapter-base"},"@solana/wallet-adapter-base")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ transactionHash: string; deactivatingSolAccountAddress: PublicKey }>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," hash of transaction got from ",(0,l.kt)("inlineCode",{parentName:"p"},"connection.sendRawTransaction"),"\n",(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,l.kt)("h3",{id:"getunstaketransaction"},"getUnStakeTransaction()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Prepares & returns unStake transaction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst { transaction, deactivatingSolAccountAddress } = await solidoSDK.getUnStakeTransaction({\n    amount: 20,\n    payerAddress: new PublicKey(wallet.publicKey),\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of stSOL which need to unStake"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"payerAddress"))," - address of user who is trying to make the transaction (",(0,l.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{ transaction: Transaction, deactivatingSolAccountAddress: Publickey }>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Transaction")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js"),"\n",(0,l.kt)("em",{parentName:"p"},"value definition:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,l.kt)("h3",{id:"calculatemaxunstakeamount"},"calculateMaxUnStakeAmount()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns maximum available stSOL-s to unStake for given address")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const maxUnStakeAmountInLamports = await solidoSDK.calculateMaxUnStakeAmount(new PublicKey(wallet.publicKey));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"address"))," - address of user (",(0,l.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"value definition:")," Value measurement is in lamports"),(0,l.kt)("h3",{id:"isunstakeavailable"},"isUnStakeAvailable()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns unStake operation availability")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const isUnStakeAvailable = await solidoSDK.isUnStakeAvailable();\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<boolean>")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"transaction-info"},"Transaction info"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getexchangerate"},"getExchangeRate()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns exchange rate for stSOL-SOL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { SOLToStSOL, stSOLToSOL } = await solidoSDK.getExchangeRate();\n\nconsole.log(`1 stSOL = ~${stSOLToSOL} SOL`); // 1 stSOL = ~1.0485 SOL\nconsole.log(`1 SOL = ~${SOLToStSOL} stSOL`); // 1 SOL = ~0.9537 stSOL\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"precision?"))," - the number of digits to appear after the decimal point (",(0,l.kt)("inlineCode",{parentName:"li"},"default = 4"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    SOLToStSOL: number,\n    stSOLToSOL: number,\n    description: string\n}>")),(0,l.kt)("h3",{id:"gettransactioncost"},"getTransactionCost()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns transaction cost for given instruction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { costInUsd, costInSol } = await solidoSDK.getTransactionCost(INSTRUCTION.STAKE);\n\nconsole.log(`~ ${costInSol} SOL (${costInUsd})`); // ~ 0.000005 SOL ($0.00021)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"instruction"))," - INSTRUCTION code")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    costInUsd: number,\n    costInSol: number,\n    costInLamports: number\n}>")),(0,l.kt)("h3",{id:"getstakingrewardsfee"},"getStakingRewardsFee()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns staking rewards fee percent with it description")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { fee } = await solidoSDK.getStakingRewardsFee();\n\nconsole.log(`Staking rewards fee: (${fee})`);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    fee: string,\n    description: string\n}>")),(0,l.kt)("h3",{id:"gettransactioninfo"},"getTransactionInfo()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the united response of the previous functions (",(0,l.kt)("inlineCode",{parentName:"em"},"exchangeRate"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"transactionCost"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"stakingRewardsFee"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { exchangeRate, transactionCost, stakingRewardsFee } = await solidoSDK.getTransactionInfo(INSTRUCTION.STAKE);\n\nconsole.log(`Exchange rate: ${exchangeRate.value}`);\nconsole.log(`Transaction cost: $${transactionCost.costInUsd}`);\nconsole.log(`Staking rewards fee: (${stakingRewardsFee.fee})`);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"instruction"))," - INSTRUCTION code")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    exchangeRate: {\n        value: number,\n        description: string\n    },\n    transactionCost: {\n        costInUsd: number,\n        costInSol: number,\n        costInLamports: number\n    },\n    stakingRewardsFee: {\n        fee: string,\n        description: string\n    }\n}>")),(0,l.kt)("br",null),(0,l.kt)("img",{src:a(3728).Z,alt:"Transaction Info"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"lido-statistics"},"Lido statistics"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getstakeapy"},"getStakeApy()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the annual percentage yield for Lido on Solana")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { getStakeApy as getSolidoStakeApy } from '@lidofinance/solido-sdk';\n\nconst solidoStakeApy = await getSolidoStakeApy();\n\nconsole.log(`Annual percentage yield: ${solidoStakeApy}%`);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("h3",{id:"gettotalstaked"},"getTotalStaked()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns total staked SOL-s")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const totalStaked = await solidoSDK.getTotalStaked();\n\nconsole.log(`${totalStaked} SOL`); // 2620337.84 SOL\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"precision?"))," - the number of digits to appear after the decimal point (",(0,l.kt)("inlineCode",{parentName:"li"},"default = 2"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("h3",{id:"getstakerscount"},"getStakersCount()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the number of non-empty stSOL accounts")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const stakersCount = await solidoSDK.getStakersCount();\n\nconsole.log(`Stakers: ${stakersCount.value}`); // 14965\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    value: string,\n    description: string,\n    accountsTotal: number,\n    accountsEmpty: number,\n}>")),(0,l.kt)("h3",{id:"getmarketcap"},"getMarketCap()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns stSOL market cap in $")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const marketCap = await solidoSDK.getMarketCap();\n\nconsole.log(`stSOL market cap $${marketCap}`); // $113174513\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"totalStakedInSol?"))," - total staked SOL-s")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("h3",{id:"gettotalrewards"},"getTotalRewards()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns total rewards that benefited stSOL holders, in total, since we started tracking in SOL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const totalRewards = await solidoSDK.getTotalRewards();\n\nconsole.log(`Total Rewards $${totalRewards} SOL`);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"precision?"))," - the number of digits to appear after the decimal point (",(0,l.kt)("inlineCode",{parentName:"li"},"default = 2"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,l.kt)("h3",{id:"getlidostatistics"},"getLidoStatistics()"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the united response of the previous functions (",(0,l.kt)("inlineCode",{parentName:"em"},"totalStaked"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"stakersCount"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"marketCap"),", also ",(0,l.kt)("inlineCode",{parentName:"em"},"apy"),")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { apy, totalStaked, stakers, marketCap, totalRewards } = await solidoSDK.getLidoStatistics();\n\nconsole.log(`Annual percentage yield: ${apy}%`);\nconsole.log(`Total staked with Lido: ${totalStaked.formatted}`);\nconsole.log(`Stakers: ${stakers.formatted}`);\nconsole.log(`stSOL market cap: $${marketCap}`);\nconsole.log(`Total Rewards $${totalRewards} SOL`);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"type:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<{\n    apy: number,\n    totalStaked: {\n        value: number,\n        formatted: number,\n    },\n    stakers: {\n        value: string,\n        description: string,\n        accountsTotal: number,\n        accountsEmpty: number,\n        formatted: string,\n    },\n    marketCap: number,\n    totalRewards: {\n        value: number,\n        formatted: string,\n    },\n}>")),(0,l.kt)("img",{src:a(1656).Z,alt:"Lido Statistics"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum INSTRUCTION {\n  STAKE = 1,\n  UNSTAKE = 2,\n}\n")))}k.isMDXComponent=!0},1656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lidostatistics-2211580c6e4a8b437c8d39f23a6c6d45.png"},3728:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transactionInfo-00fc9b0ceadd4c4b225e90ecd1e011c1.png"}}]);