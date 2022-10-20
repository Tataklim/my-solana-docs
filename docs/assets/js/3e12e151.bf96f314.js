"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4321],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>m});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)e=s[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)e=s[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=a.createContext({}),l=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},u=function(t){var n=l(t.components);return a.createElement(c.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(e),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return e?a.createElement(f,o(o({ref:n},u),{},{components:e})):a.createElement(f,o({ref:n},u))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var s=e.length,o=new Array(s);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var l=2;l<s;l++)o[l]=e[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2469:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=e(7462),r=(e(7294),e(3905));const s={sidebar_position:1},o="UnStake",i={unversionedId:"frontend-integration/manual-instructions/v2/unstake",id:"frontend-integration/manual-instructions/v2/unstake",title:"UnStake",description:"We didn't switch protocol to second version on mainnet yet. So, this code will work only after migration.",source:"@site/docs2/frontend-integration/manual-instructions/v2/unstake.md",sourceDirName:"frontend-integration/manual-instructions/v2",slug:"/frontend-integration/manual-instructions/v2/unstake",permalink:"/frontend-integration/manual-instructions/v2/unstake",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"Stake",permalink:"/frontend-integration/manual-instructions/v2/stake"},next:{title:"Staking on Solana",permalink:"/internals/solana-staking"}},c={},l=[{value:"Step 1: Fetching Lido program state to retrieve relevant data",id:"step-1-fetching-lido-program-state-to-retrieve-relevant-data",level:2},{value:"Step 2: Fetching Validators list account",id:"step-2-fetching-validators-list-account",level:2},{value:"Step 3: Sign new Transaction",id:"step-3-sign-new-transaction",level:2},{value:"Step 4: Create Withdraw Instruction",id:"step-4-create-withdraw-instruction",level:2},{value:"Step 5: Create deactivate transaction &amp; add its instructions to transaction",id:"step-5-create-deactivate-transaction--add-its-instructions-to-transaction",level:2}],u={toc:l};function d(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unstake"},"UnStake"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We didn't switch protocol to second version on ",(0,r.kt)("strong",{parentName:"p"},"mainnet")," yet. So, this code will work only after migration.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/manual-instructions/v1"},"first version")," if you are going to deploy integration before ",(0,r.kt)("strong",{parentName:"p"},"breaking ",(0,r.kt)("a",{parentName:"strong",href:"https://research.lido.fi/t/lido-on-solana-protocol-upgrade-proposal/2959"},"upgrade")),".\nAnyway, you should be ready for migration, so we recommend follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido-sdk/blob/b1ab2a4f5e58e7f08e1d0965d9d83f867f9ce958/src/unstake/getAccountInfo.ts#L469-L516"},"our example"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend use our ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/sdk"},"SDK"),", so we could support you better in case of some problems.\nAlso, integration with SDK is much easier & more simple than manually.")),(0,r.kt)("h2",{id:"step-1-fetching-lido-program-state-to-retrieve-relevant-data"},"Step 1: Fetching Lido program state to retrieve relevant data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const accountInfo = await connection.getAccountInfo(LIDO_ADDRESS);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Use getAccountInfo(LIDO_ADDRESS) function from this library to fetch the Lido program data (in the form of a buffer).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a borsh schema to deserialize the solido state data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Lido {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass RewardDistribution {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass FeeRecipients {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass ExchangeRate {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass Metrics {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass LamportsHistogram {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass WithdrawMetric {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nconst accountInfoScheme = new Map([\n  [\n    ExchangeRate,\n    {\n      kind: 'struct',\n      fields: [\n        ['computed_in_epoch', 'u64'],\n        ['st_sol_supply', 'u64'],\n        ['sol_balance', 'u64'],\n      ],\n    },\n  ],\n  [\n    LamportsHistogram,\n    {\n      kind: 'struct',\n      fields: [\n        ['counts1', 'u64'],\n        ['counts2', 'u64'],\n        ['counts3', 'u64'],\n        ['counts4', 'u64'],\n        ['counts5', 'u64'],\n        ['counts6', 'u64'],\n        ['counts7', 'u64'],\n        ['counts8', 'u64'],\n        ['counts9', 'u64'],\n        ['counts10', 'u64'],\n        ['counts11', 'u64'],\n        ['counts12', 'u64'],\n        ['total', 'u64'],\n      ],\n    },\n  ],\n  [\n    WithdrawMetric,\n    {\n      kind: 'struct',\n      fields: [\n        ['total_st_sol_amount', 'u64'],\n        ['total_sol_amount', 'u64'],\n        ['count', 'u64'],\n      ],\n    },\n  ],\n  [\n    Metrics,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_treasury_sol_total', 'u64'],\n        ['fee_validation_sol_total', 'u64'],\n        ['fee_developer_sol_total', 'u64'],\n        ['st_sol_appreciation_sol_total', 'u64'],\n        ['fee_treasury_st_sol_total', 'u64'],\n        ['fee_validation_st_sol_total', 'u64'],\n        ['fee_developer_st_sol_total', 'u64'],\n        ['deposit_amount', LamportsHistogram],\n        ['withdraw_amount', WithdrawMetric],\n      ],\n    },\n  ],\n  [\n    RewardDistribution,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_fee', 'u32'],\n        ['developer_fee', 'u32'],\n        ['st_sol_appreciation', 'u32'],\n      ],\n    },\n  ],\n  [\n    FeeRecipients,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_account', [32]],\n        ['developer_account', [32]],\n      ],\n    },\n  ],\n  [\n    Lido,\n    {\n      kind: 'struct',\n      fields: [\n        ['account_type', 'u8'],\n\n        ['lido_version', 'u8'],\n\n        ['manager', [32]],\n\n        ['st_sol_mint', [32]],\n\n        ['exchange_rate', ExchangeRate],\n\n        ['sol_reserve_authority_bump_seed', 'u8'],\n        ['stake_authority_bump_seed', 'u8'],\n        ['mint_authority_bump_seed', 'u8'],\n\n        ['reward_distribution', RewardDistribution],\n\n        ['fee_recipients', FeeRecipients],\n\n        ['metrics', Metrics],\n\n        ['validator_list', [32]],\n\n        ['maintainer_list', [32]],\n\n        ['max_commission_percentage', 'u8'],\n      ],\n    },\n  ],\n]);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deserialize the data using above schema:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { deserializeUnchecked } from 'borsh';\n// It deserializes object from bytes using schema, without checking the length read\nconst deserializedAccountInfo = deserializeUnchecked(\n  accountInfoschema,\n  Lido,\n  accountInfo.data,\n);\n")),(0,r.kt)("h2",{id:"step-2-fetching-validators-list-account"},"Step 2: Fetching Validators list account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const validatorsList = new PublicKey(deserializedAccountInfo.validators_list);\nconst validators = await connection.getAccountInfo(validatorsList);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a borsh schema to deserialize the validators data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class ListHeader {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass SeedRange {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass ValidatorClass {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nclass AccountList {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\n\nconst validatorsSchema = new Map([\n  [\n    ListHeader,\n    {\n      kind: 'struct',\n      fields: [\n        ['account_type', 'u8'],\n        ['lido_version', 'u8'],\n        ['max_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    SeedRange,\n    {\n      kind: 'struct',\n      fields: [\n        ['begin', 'u64'],\n        ['end', 'u64'],\n      ],\n    },\n  ],\n  [\n    ValidatorClass,\n    {\n      kind: 'struct',\n      fields: [\n        ['vote_account_address', [32]],\n        ['stake_seeds', SeedRange],\n        ['unstake_seeds', SeedRange],\n        ['stake_accounts_balance', 'u64'],\n        ['unstake_accounts_balance', 'u64'],\n        ['effective_stake_balance', 'u64'],\n        ['active', 'u8'],\n      ],\n    },\n  ],\n  [\n    AccountList,\n    {\n      kind: 'struct',\n      fields: [\n        ['header', ListHeader],\n        ['entries', [ValidatorClass]],\n      ],\n    },\n  ],\n]);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deserialize the data using above schema:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const deserializedValidators = deserializeUnchecked(\n    validatorsSchema,\n    AccountList,\n    validators.data,\n);\n")),(0,r.kt)("h2",{id:"step-3-sign-new-transaction"},"Step 3: Sign new Transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const newStakeAccount = Keypair.generate();\n// Create new transaction\nconst transaction = new Transaction({ feePayer: payer });\n// Set recent blockhash\nconst { blockhash } = await connection.getLatestBlockhash();\ntransaction.recentBlockhash = blockhash;\n")),(0,r.kt)("h2",{id:"step-4-create-withdraw-instruction"},"Step 4: Create Withdraw Instruction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the buffer layout in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"{ instruction_code: 1 byte, amount: 8 bytes, validator_index: 4 bytes}"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { nu64, struct, u32, u8 } from 'buffer-layout';\n\nconst dataLayout = struct([u8('instruction'), nu64('amount'), u32('validator_index')]);\n\nconst data = Buffer.alloc(dataLayout.span);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get heaviest validator index:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const getHeaviestValidator = (validatorEntries) => {\n  const sortedValidators = validatorEntries.sort(\n    (validatorA, validatorB) =>\n      validatorB.stake_accounts_balance.toNumber() - validatorA.stake_accounts_balance.toNumber(),\n  );\n\n  return sortedValidators[0];\n};\n\nconst getValidatorIndex = (validatorEntries, validator) =>\n    validatorEntries.findIndex(\n      ({ vote_account_address: voteAccountAddress }) =>\n        voteAccountAddress.toString() === validator.vote_account_address.toString(),\n    );\n\nconst validator = getHeaviestValidator(validators);\n\nconst validatorIndex = getValidatorIndex(validators, validator);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Encode the deposit data using the buffer layout:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import BN from 'bn.js';\n\ndataLayout.encode(\n  {\n    instruction: 23, // code of withdraw instruction\n    amount: new BN(amount),\n    validator_index: validatorIndex,\n  },\n  data,\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set all keys for the deposit instruction using the program data we fetch earlier:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TOKEN_PROGRAM_ID } from '@solana/spl-token';\nimport {\n  Keypair,\n  PublicKey,\n  StakeProgram,\n  SystemProgram,\n  SYSVAR_CLOCK_PUBKEY,\n} from '@solana/web3.js';\n\nconst calculateStakeAuthority = async (lidoAddress, programId) => {\n  const bufferArray = [lidoAddress.toBuffer(), Buffer.from('stake_authority')];\n\n  const mint = await PublicKey.findProgramAddress(bufferArray, programId);\n\n  return mint[0];\n};\n\nconst calculateStakeAccountAddress = async (lidoAddress, programId, validatorVoteAccount, seed) => {\n  const bufferArray = [\n    lidoAddress.toBuffer(),\n    validatorVoteAccount.toBuffer(),\n    Buffer.from('validator_stake_account'),\n    seed.toArray('le', 8),\n  ];\n\n  const [stakeAccountAddress] = await PublicKey.findProgramAddress(bufferArray, programId);\n\n  return stakeAccountAddress;\n};\n\nconst getStSolAccountsForUser = async (owner) => {\n    const stSolAccounts = [];\n\n    const { value } = await connection.getParsedTokenAccountsByOwner(owner, {\n        mint: ST_SOL_MINT,\n    });\n\n    value.forEach((v) => {\n        const address = v.pubkey;\n        const balanceInLamports = parseInt(v.account.data.parsed?.info?.tokenAmount?.amount ?? '0', 10);\n\n        stSolAccounts.push({ address, balanceInLamports });\n    });\n\n    return stSolAccounts;\n};\n\nconst stakeAuthority = await calculateStakeAuthority(lidoAddress, programId);\nconst validator = await getHeaviestValidator(validators);\n\nconst senderStSolAccountAddress = await getStSolAccountsForUser(wallet.publicKey); // payerAddress \n\nconst validatorStakeAccount = await calculateStakeAccountAddress(\n  LIDO_ADDRESS,\n  PROGRAM_ID,\n  new PublicKey(validator.vote_account_address),\n  validator.stake_seeds.begin,\n);\n\nconst keys = [\n    { pubkey: solidoInstanceId, isSigner: false, isWritable: true },\n    { pubkey: payerAddress, isSigner: true, isWritable: false },\n    { pubkey: senderStSolAccountAddress, isSigner: false, isWritable: true },\n    { pubkey: ST_SOL_MINT, isSigner: false, isWritable: true },\n    { pubkey: new PublicKey(validator.vote_account_address), isSigner: false, isWritable: false },\n    { pubkey: validatorStakeAccount, isSigner: false, isWritable: true },\n    { pubkey: stakeAccount, isSigner: true, isWritable: true },\n    { pubkey: stakeAuthority, isSigner: false, isWritable: false },\n    { pubkey: validatorsList, isSigner: false, isWritable: true }, // step 2\n    { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },\n    { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },\n    { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },\n    { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },\n];\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the instruction to the transaction:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transaction.add(\n  new TransactionInstruction({\n    keys,\n    programId: PROGRAM_ID,\n    data,\n  }),\n);\n")),(0,r.kt)("h2",{id:"step-5-create-deactivate-transaction--add-its-instructions-to-transaction"},"Step 5: Create deactivate transaction & add its instructions to transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { StakeProgram } from '@solana/web3.js';\n\nconst deactivateTransaction = StakeProgram.deactivate({\n    authorizedPubkey: payer,\n    stakePubkey: newStakeAccount.publicKey,\n});\n\ntransaction.add(...deactivateTransaction.instructions);\n\ntransaction.partialSign(newStakeAccount); // step 2 variables\n")))}d.isMDXComponent=!0}}]);