"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9520],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2325:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"instruction",description:"Specification of the instruction.rs module",keywords:["development","developers","lido","specification","intent","instruction","solido","solana"],sidebar_position:7},i="Instruction",o={unversionedId:"development/specification/solido/instruction",id:"development/specification/solido/instruction",title:"instruction",description:"Specification of the instruction.rs module",source:"@site/docs2/development/specification/solido/instruction.md",sourceDirName:"development/specification/solido",slug:"/development/specification/solido/instruction",permalink:"/development/specification/solido/instruction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"instruction",description:"Specification of the instruction.rs module",keywords:["development","developers","lido","specification","intent","instruction","solido","solana"],sidebar_position:7},sidebar:"solidoSidebar",previous:{title:"error",permalink:"/development/specification/solido/error"},next:{title:"lib",permalink:"/development/specification/solido/lib"}},s={},u=[{value:"Enums",id:"enums",level:2},{value:"Lido Instruction",id:"lido-instruction",level:3},{value:"Initialize",id:"initialize",level:4},{value:"Deposit",id:"deposit",level:4},{value:"StakeDeposit",id:"stakedeposit",level:4},{value:"Withdraw",id:"withdraw",level:4},{value:"DistributeFees",id:"distributefees",level:4},{value:"ClaimValidatorFees",id:"claimvalidatorfees",level:4},{value:"ChangeFeeSpec",id:"changefeespec",level:4},{value:"AddValidator",id:"addvalidator",level:4},{value:"RemoveValidator",id:"removevalidator",level:4},{value:"AddMaintainer",id:"addmaintainer",level:4},{value:"RemoveMaintainer",id:"removemaintainer",level:4},{value:"Macros",id:"macros",level:2},{value:"Accounts Struct and Accounts Struct Meta",id:"accounts-struct-and-accounts-struct-meta",level:3},{value:"Accounts",id:"accounts",level:3},{value:"InitializeAccounts",id:"initializeaccounts",level:4},{value:"DepositAccounts",id:"depositaccounts",level:4},{value:"StakeDepositAccount",id:"stakedepositaccount",level:4},{value:"ChangeFeeSpec",id:"changefeespec-1",level:4},{value:"AddValidator",id:"addvalidator-1",level:4},{value:"RemoveValidator",id:"removevalidator-1",level:4},{value:"DistributeFees",id:"distributefees-1",level:4},{value:"ClaimValidatorFees",id:"claimvalidatorfees-1",level:4},{value:"AddMaintainer",id:"addmaintainer-1",level:4},{value:"RemoveMaintainer",id:"removemaintainer-1",level:4},{value:"Functions",id:"functions",level:2},{value:"initialise",id:"initialise",level:3},{value:"deposit",id:"deposit-1",level:3},{value:"stake_deposit",id:"stake_deposit",level:3},{value:"change_fee_distribution",id:"change_fee_distribution",level:3},{value:"add_validator",id:"add_validator",level:3},{value:"remove_validator",id:"remove_validator",level:3},{value:"distribute_fees",id:"distribute_fees",level:3},{value:"claim_validator_fees",id:"claim_validator_fees",level:3},{value:"add_maintainer",id:"add_maintainer",level:3},{value:"remove_maintainer",id:"remove_maintainer",level:3}],d={toc:u};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instruction"},"Instruction"),(0,r.kt)("p",null,"The purpose of the instruction module is to contain all functionality and structures related to the Solido program instructions."),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("h3",{id:"lido-instruction"},"Lido Instruction"),(0,r.kt)("p",null,"The Lido instruction enum contains all the possible instructions for the Solido program."),(0,r.kt)("h4",{id:"initialize"},"Initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"Initialize {\n  fee_distribution: FeeDistribution,\n  max_validators: u32,\n  max_maintainers: u32,\n},\n")),(0,r.kt)("p",null,"The initialise instruction should be passed an appropriate ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/state#FeeDistribution"},"FeeDistribution")," along with the maximum number of validators and maintainers the instance of Solido will support."),(0,r.kt)("h4",{id:"deposit"},"Deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"Deposit {\n  amount: Lamports,\n},\n")),(0,r.kt)("p",null,"The instruction to deposit an amount defined using the helper struct ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/token#Lamports"},"Lamports")),(0,r.kt)("h4",{id:"stakedeposit"},"StakeDeposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"StakeDeposit {\n  amount: Lamports,\n},\n")),(0,r.kt)("p",null,"The StakeDeposit instruction moves deposits, specified in ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/token#Lamports"},"Lamports"),", into a new stake account and delegates it to a member validator."),(0,r.kt)("h4",{id:"withdraw"},"Withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"Withdraw  {\n  amount: Lamports,\n},\n")),(0,r.kt)("p",null,"The Withdraw instruction withdraws an amount, specified in ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/token#Lamports"},"Lamports"),",  from the Solido program."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Withdraws are not currently supported in the Solido program but will be implemeted in a future version.")),(0,r.kt)("h4",{id:"distributefees"},"DistributeFees"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"DistributeFees\n")),(0,r.kt)("p",null,"The DistributeFees instruction will calculate any fees due to the Lido stakeholders, allocate the fees to the program accounts and update the validator fees to be claimed when the ClaimValidatorFees instruction is called."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Only a maintainer can call this instruction")),(0,r.kt)("h4",{id:"claimvalidatorfees"},"ClaimValidatorFees"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"ClaimValidatorFees\n")),(0,r.kt)("p",null,"The ClaimValidatorFees instruction will mint any unclaimed fees to the validator's fee account."),(0,r.kt)("h4",{id:"changefeespec"},"ChangeFeeSpec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"ChangeFeeSpec {\n  new_fee_distribution: FeeDistribution,\n},\n")),(0,r.kt)("p",null,"The ChangeFeeSpec instruction changes the fee distribution ratios after initialisation when given an appropriate new ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/state#FeeDistribution"},"FeeDistribution"),"."),(0,r.kt)("h4",{id:"addvalidator"},"AddValidator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"AddValidator,\n")),(0,r.kt)("p",null,"The AddValidator instruction add a given validator to the pool of validators."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Only the manager role can call this instruction.")),(0,r.kt)("h4",{id:"removevalidator"},"RemoveValidator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"RemoveValidator,\n")),(0,r.kt)("p",null,"The RemoveValidator instruction removes a given validator from the pool of validators. This instruction will fail with an ",(0,r.kt)("a",{parentName:"p",href:"/development/specification/solido/error#errors"},"ValidatorHasUnclaimedCredit")," error if the validator still has unclaimed credit."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Only the manager role can call this instruction.")),(0,r.kt)("h4",{id:"addmaintainer"},"AddMaintainer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"AddMaintainer,\n")),(0,r.kt)("p",null,"The AddMaintainer instruction add a given maintainer to the pool of maintainers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Only the manager role can call this instruction.")),(0,r.kt)("h4",{id:"removemaintainer"},"RemoveMaintainer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"RemoveMaintainer,\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Only the manager role can call this instruction.")),(0,r.kt)("h2",{id:"macros"},"Macros"),(0,r.kt)("h3",{id:"accounts-struct-and-accounts-struct-meta"},"Accounts Struct and Accounts Struct Meta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"macro_rules! accounts_struct {\n...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"macro_rules! accounts_struct_meta {\n...\n}\n")),(0,r.kt)("p",null,"The accounts_struct and accounts_struct_meta macros assist in  generating two structs for passing accounts by name.  This has the following advantages over dealing with a list of accounts manually:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is no risk of making a mistake in the ordering of accounts, or forgetting to update one place after modifying a different place."),(0,r.kt)("li",{parentName:"ul"},"For every account, it forces consideration of if that account should be writable or not."),(0,r.kt)("li",{parentName:"ul"},"It has a shorthand for defining accounts that have a statically known address.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"\naccounts_struct! {\n  ExampleAccountsMeta, ExampleAccountsInfo {\n     frobnicator: { is_signer: true, is_writable: false },\n   sysvar_rent = sysvar::rent::id(),\n }\n...\n}\n")),(0,r.kt)("p",null,"This will generate two structs of the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct ExampleAccountsMeta {\n   frobnicator: Pubkey,\n}\n\nimpl ExampleAccountsMeta {\n   pub fn to_vec(&self) -> Vec<AccountMeta>;\n}\n\nstruct ExampleAccountsInfo<'a> {\n frobnicator: &'a AccountInfo<'a>,\n sysvar_rent: &'a AccountInfo<'a>,\n}\n\nimpl ExampleAccountsInfo {\n   pub fn try_from_slice<'a, 'b: 'a>(raw: &'b [AccountInfo<'a>]) -> Result<ExampleAccountsInfo, ProgramError>;\n}\n")),(0,r.kt)("p",null,"The generated structs ensure that the accounts returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"to_vec")," are in the same order that\n",(0,r.kt)("inlineCode",{parentName:"p"},"try_from_slice")," expects them. ",(0,r.kt)("inlineCode",{parentName:"p"},"try_from_slice")," additionally validates that ",(0,r.kt)("inlineCode",{parentName:"p"},"is_signer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"is_writable")," match the definition."),(0,r.kt)("h3",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"The accounts used by Solido are generated using the accounts_struct macro. They are summarized here, for each instruction, along with the signable and writable status."),(0,r.kt)("h4",{id:"initializeaccounts"},"InitializeAccounts"),(0,r.kt)("p",null,"Generated structs => InitializeAccountsMeta and InitializeAccountsInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"st_sol_mint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasury_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"developer_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserve_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const sysvar_rent = sysvar::rent::id(),\nconst spl_token = spl_token::id(),\n")),(0,r.kt)("h4",{id:"depositaccounts"},"DepositAccounts"),(0,r.kt)("p",null,"Generated structs => DepositAccountsMeta and DepositAccountsInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recipient"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"st_sol_mint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserve_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const spl_token = spl_token::id(),\nconst system_program = system_program::id(),\nconst sysvar_rent = sysvar::rent::id(),\n")),(0,r.kt)("h4",{id:"stakedepositaccount"},"StakeDepositAccount"),(0,r.kt)("p",null,"Generated structs => StakeDepositAccountMeta and StakeDepositAccountInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserve"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validator_vote_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stake_account_end"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deposit_authority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const sysvar_clock = sysvar::clock::id(),\nconst system_program = system_program::id(),\nconst sysvar_rent = sysvar::rent::id(),\nconst stake_program = stake_program::id(),\nconst stake_history = stake_history::id(),\nconst stake_program_config = stake_program::config_id(),\n")),(0,r.kt)("h4",{id:"changefeespec-1"},"ChangeFeeSpec"),(0,r.kt)("p",null,"Generated structs => ChangeFeeSpecMeta and ChangeFeeSpecInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasury_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"developer_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"No additonal constants."),(0,r.kt)("h4",{id:"addvalidator-1"},"AddValidator"),(0,r.kt)("p",null,"Generated structs => AddValidatorMeta and AddValidatorInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validator_vote_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validator_fee_st_sol_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const sysvar_clock = sysvar::clock::id(),\nconst sysvar_stake_history = sysvar::stake_history::id(),\nconst sysvar_stake_program = stake_program::id(),\n")),(0,r.kt)("h4",{id:"removevalidator-1"},"RemoveValidator"),(0,r.kt)("p",null,"Generated structs => RemoveValidatorMeta and RemoveValidatorInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validator_vote_account_to_remove"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const sysvar_clock = sysvar::clock::id(),\nconst sysvar_stake_program = stake_program::id(),\n")),(0,r.kt)("h4",{id:"distributefees-1"},"DistributeFees"),(0,r.kt)("p",null,"Generated structs => DistributeFeesMeta and DistributeFeesInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"st_sol_mint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserve_authority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treasury_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"developer_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const spl_token = spl_token::id(),\n")),(0,r.kt)("h4",{id:"claimvalidatorfees-1"},"ClaimValidatorFees"),(0,r.kt)("p",null,"Generated structs => ClaimValidatorFeesMeta and DistributeFeesInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"st_sol_mint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reserve_authority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validator_fee_st_sol_account"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))))),(0,r.kt)("p",null,"Constants included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const spl_token = spl_token::id(),\n")),(0,r.kt)("h4",{id:"addmaintainer-1"},"AddMaintainer"),(0,r.kt)("p",null,"Generated structs => AddMaintainerMeta and  AddMaintainerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"No additonal constants."),(0,r.kt)("h4",{id:"removemaintainer-1"},"RemoveMaintainer"),(0,r.kt)("p",null,"Generated structs => RemoveMaintainerMeta and  RemoveMaintainerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"is_signer"),(0,r.kt)("th",{parentName:"tr",align:null},"is_writable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lido"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"No additonal constants."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"For each of the instructions (and their associated account structs) the module contains the functions required to generate the appropriate instructions."),(0,r.kt)("p",null,"Each of the functions return a result object of the appropriate instruction or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProgramError"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"-> Result<Instruction, ProgramError>\n")),(0,r.kt)("h3",{id:"initialise"},"initialise"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::Initialize")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn initialize(\n    program_id: &Pubkey,\n    fee_distribution: FeeDistribution,\n    max_validators: u32,\n    max_maintainers: u32,\n    accounts: &InitializeAccountsMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"deposit-1"},"deposit"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::Deposit")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn deposit(\n    program_id: &Pubkey,\n    accounts: &DepositAccountsMeta,\n    amount: Lamports,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"stake_deposit"},"stake_deposit"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::StakeDeposit")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn stake_deposit(\n    program_id: &Pubkey,\n    accounts: &StakeDepositAccountsMeta,\n    amount: Lamports,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"change_fee_distribution"},"change_fee_distribution"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::ChangeFeeSpec")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn change_fee_distribution(\n    program_id: &Pubkey,\n    new_fee_distribution: FeeDistribution,\n    accounts: &ChangeFeeSpecMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"add_validator"},"add_validator"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::AddValidator")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_validator(\n    program_id: &Pubkey,\n    accounts: &AddValidatorMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"remove_validator"},"remove_validator"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::RemoveValidator")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn remove_validator(\n    program_id: &Pubkey,\n    accounts: &RemoveValidatorMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"distribute_fees"},"distribute_fees"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::DistributeFees")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn distribute_fees(\n    program_id: &Pubkey,\n    accounts: &DistributeFeesMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"claim_validator_fees"},"claim_validator_fees"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::ClaimValidatorFees")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn claim_validator_fees(\n    program_id: &Pubkey,\n    accounts: &ClaimValidatorFeeMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"add_maintainer"},"add_maintainer"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::AddMaintainer")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_maintainer(\n    program_id: &Pubkey,\n    accounts: &AddMaintainerMeta,\n) -> Result<Instruction, ProgramError> {\n")),(0,r.kt)("h3",{id:"remove_maintainer"},"remove_maintainer"),(0,r.kt)("p",null,"Constructs, verifies the accounts and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lido::RemoveMaintainer")," instruction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn remove_maintainer(\n    program_id: &Pubkey,\n    accounts: &RemoveMaintainerMeta,\n) -> Result<Instruction, ProgramError> {\n")))}p.isMDXComponent=!0}}]);