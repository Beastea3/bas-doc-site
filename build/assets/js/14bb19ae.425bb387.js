"use strict";(self.webpackChunkbas_doc=self.webpackChunkbas_doc||[]).push([[162],{4788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(5893),n=r(1151);const a={},s="Resolver",c={id:"core_concept/resolver",title:"Resolver",description:"User can use resolver to introduce any logic to their attestations. Picture them as gatekeepers or hooks, playing a crucial role in ensuring that attestations fulfill predetermined criteria before being accepted. Without resolver, anyone can generate arbitrary attestation. For example, anyone can generate a \u201ctwitter record\u201d claiming his is Musk.",source:"@site/docs/core_concept/resolver.md",sourceDirName:"core_concept",slug:"/core_concept/resolver",permalink:"/core_concept/resolver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ownership & Access Control",permalink:"/core_concept/ownership&access_control"},next:{title:"Revocation",permalink:"/core_concept/revocation"}},i={},l=[{value:"How to implement resolver",id:"how-to-implement-resolver",level:2},{value:"How to use resolver",id:"how-to-use-resolver",level:2},{value:"Practical Examples",id:"practical-examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"resolver",children:"Resolver"}),"\n",(0,o.jsx)(t.p,{children:"User can use resolver to introduce any logic to their attestations. Picture them as gatekeepers or hooks, playing a crucial role in ensuring that attestations fulfill predetermined criteria before being accepted. Without resolver, anyone can generate arbitrary attestation. For example, anyone can generate a \u201ctwitter record\u201d claiming his is Musk."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-implement-resolver",children:"How to implement resolver"}),"\n",(0,o.jsxs)(t.p,{children:["Resolve contract is external smart contract that implement the interface ",(0,o.jsx)(t.code,{children:"attest"})," which acts as a hook function for schema. Developers can add arbitrary logic in ",(0,o.jsx)(t.code,{children:"attest"})," function to restrict the generation of attestations. For examples, only the owner of certain NFT can generate an attestation or user should pay some BNB before create an attestation."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-use-resolver",children:"How to use resolver"}),"\n",(0,o.jsxs)(t.p,{children:["When you create a schema, you can specify which resolver you want to use upon the schema by filling the resolver contract address in ",(0,o.jsx)(t.code,{children:"resolver"})," filed in schema."]}),"\n",(0,o.jsx)(t.h2,{id:"practical-examples",children:"Practical Examples"}),"\n",(0,o.jsx)(t.p,{children:"Coming soon."})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var o=r(7294);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);