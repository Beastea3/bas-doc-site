"use strict";(self.webpackChunkbas_doc=self.webpackChunkbas_doc||[]).push([[733],{5614:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(5893),s=a(1151);const i={},o="Delegated Attestations",r={id:"tutorials/delegate",title:"Delegated Attestations",description:"Delegated Attestations empower an entity to sign an attestation while authorizing another entity to handle the associated transaction fee. It's noteworthy that when an attestation is delegated, the delegator's (signer) address serves as the attestor's identity in the attestation record.",source:"@site/docs/tutorials/delegate.md",sourceDirName:"tutorials",slug:"/tutorials/delegate",permalink:"/tutorials/delegate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Schema",permalink:"/tutorials/create_schema"},next:{title:"Make an Attestation",permalink:"/tutorials/make_attestation"}},d={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Supercharged Delegated Attestations with Proxy Contracts",id:"supercharged-delegated-attestations-with-proxy-contracts",level:2}];function l(t){const e={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"delegated-attestations",children:"Delegated Attestations"}),"\n",(0,n.jsx)(e.p,{children:"Delegated Attestations empower an entity to sign an attestation while authorizing another entity to handle the associated transaction fee. It's noteworthy that when an attestation is delegated, the delegator's (signer) address serves as the attestor's identity in the attestation record."}),"\n",(0,n.jsx)(e.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(e.p,{children:"The versatility of delegated attestations on EAS becomes apparent when the attestor and the fee-covering entity are distinct. This arrangement proves beneficial, especially in scenarios such as:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A service intending to cover its users' attestations, addressing gas cost concerns."}),"\n",(0,n.jsx)(e.li,{children:"An entity making multiple attestations but designating the recipient or another party to handle the transaction fees for on-chain processing."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"supercharged-delegated-attestations-with-proxy-contracts",children:"Supercharged Delegated Attestations with Proxy Contracts"}),"\n",(0,n.jsx)(e.p,{children:"While standard delegated attestations adhere to an incrementing nonce based on the EIP-712 spec, the proxy contract introduces flexibility by accommodating delegated attestations out of order and with an expiration time. This feature becomes particularly valuable when a single entity, like a KYC provider, attests to numerous users while expecting the users to cover the associated gas fees. Refer to the example proxy contract below for detailed insights."})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},1151:(t,e,a)=>{a.d(e,{Z:()=>r,a:()=>o});var n=a(7294);const s={},i=n.createContext(s);function o(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);