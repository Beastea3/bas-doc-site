"use strict";(self.webpackChunkbas_doc=self.webpackChunkbas_doc||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Core Concetp","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Attestation","href":"/core_concept/attestation","docId":"core_concept/attestation","unlisted":false},{"type":"link","label":"Composability","href":"/core_concept/composability","docId":"core_concept/composability","unlisted":false},{"type":"link","label":"Delegating","href":"/core_concept/delegating","docId":"core_concept/delegating","unlisted":false},{"type":"link","label":"On-chain vs Off-chain","href":"/core_concept/onchain_vs_offchain","docId":"core_concept/onchain_vs_offchain","unlisted":false},{"type":"link","label":"Ownership & Access Control","href":"/core_concept/ownership&access_control","docId":"core_concept/ownership&access_control","unlisted":false},{"type":"link","label":"Resolver","href":"/core_concept/resolver","docId":"core_concept/resolver","unlisted":false},{"type":"link","label":"Revocation","href":"/core_concept/revocation","docId":"core_concept/revocation","unlisted":false},{"type":"link","label":"Schemas","href":"/core_concept/schema","docId":"core_concept/schema","unlisted":false}],"href":"/category/core-concetp"},{"type":"category","label":"Explorer","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Attestation","href":"/explorer/attestation","docId":"explorer/attestation","unlisted":false},{"type":"link","label":"Overview","href":"/explorer/overview","docId":"explorer/overview","unlisted":false},{"type":"link","label":"Schema","href":"/explorer/schema","docId":"explorer/schema","unlisted":false}]},{"type":"link","label":"Welcome to BAS","href":"/","docId":"index","unlisted":false},{"type":"link","label":"Quick Start","href":"/quick_start","docId":"quick_start","unlisted":false},{"type":"category","label":"SDK","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"JS SDK Doc","href":"/sdk/js","docId":"sdk/js","unlisted":false}]},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Attestation with Greenfield","href":"/tutorials/attestation_in_gf","docId":"tutorials/attestation_in_gf","unlisted":false},{"type":"link","label":"Create a Schema","href":"/tutorials/create_schema","docId":"tutorials/create_schema","unlisted":false},{"type":"link","label":"Delegated Attestations","href":"/tutorials/delegate","docId":"tutorials/delegate","unlisted":false},{"type":"link","label":"Make an Attestation","href":"/tutorials/make_attestation","docId":"tutorials/make_attestation","unlisted":false},{"type":"link","label":"Referenced Attestation","href":"/tutorials/reference_attestation","docId":"tutorials/reference_attestation","unlisted":false},{"type":"link","label":"Leveraging Resolver Contracts","href":"/tutorials/resolver","docId":"tutorials/resolver","unlisted":false},{"type":"link","label":"Revoking Attestation","href":"/tutorials/revoke","docId":"tutorials/revoke","unlisted":false}]},{"type":"category","label":"Use Case","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Leveraging Attestations for Streamlined Licensing Processes","href":"/use_case/license","docId":"use_case/license","unlisted":false},{"type":"link","label":"Transforming Voting Systems with Attestations","href":"/use_case/voting","docId":"use_case/voting","unlisted":false}]}]},"docs":{"core_concept/attestation":{"id":"core_concept/attestation","title":"Attestation","description":"At its core, an attestation is a data with proof that can be used to verify the validity defined in schema. Attestation provide a standard for user to import any data into web3. With in BAS, attestations can be created on-chain and off-chain. Users can store the off-chain attestations in greenfield to provide the attestations access control.","sidebar":"tutorialSidebar"},"core_concept/composability":{"id":"core_concept/composability","title":"Composability","description":"Composability is an important feature of Web3. Developers can create their own elements. And others can construct more complex and intricate structure by combing existing basic elements. Just like LEGO, users can build anything using several existing basic pieces.","sidebar":"tutorialSidebar"},"core_concept/delegating":{"id":"core_concept/delegating","title":"Delegating","description":"Delegated Attestations enable an entity to sign an attestation while allowing another entity to cover the transaction fee.","sidebar":"tutorialSidebar"},"core_concept/onchain_vs_offchain":{"id":"core_concept/onchain_vs_offchain","title":"On-chain vs Off-chain","description":"Users can create on-chain & off-chain attestations. As for on-chain attestation, they are stored directly on the BNB chain and can be accessed to by anyone. Once user create an on-chain attestation, he/she relinquishes the ownership of the attestation. While off-chain attestations often are stored by user themselves or in Greenfield. User has the ownership of the attestations in Greenfield and manage the permissions.","sidebar":"tutorialSidebar"},"core_concept/ownership&access_control":{"id":"core_concept/ownership&access_control","title":"Ownership & Access Control","description":"In Web3, two crucial functionalities must be implemented to address users\' personal data","sidebar":"tutorialSidebar"},"core_concept/resolver":{"id":"core_concept/resolver","title":"Resolver","description":"User can use resolver to introduce any logic to their attestations. Picture them as gatekeepers or hooks, playing a crucial role in ensuring that attestations fulfill predetermined criteria before being accepted. Without resolver, anyone can generate arbitrary attestation. For example, anyone can generate a \u201ctwitter record\u201d claiming his is Musk.","sidebar":"tutorialSidebar"},"core_concept/revocation":{"id":"core_concept/revocation","title":"Revocation","description":"On BAS, users can revoke either on-chain or off-chain attestations when they are no longer valid. Consider an attestation which claims Bob is a senior student. But when Bob graduate from school, the attestation should be revoked.","sidebar":"tutorialSidebar"},"core_concept/schema":{"id":"core_concept/schema","title":"Schemas","description":"A schema is a structured framework that defining the data format and resolver with attest function. Schema dictate what kind of data can be attested and how that data should be presented.","sidebar":"tutorialSidebar"},"explorer/attestation":{"id":"explorer/attestation","title":"Attestation","description":"BAS provides a convenient method for creating attestations without any code or development skills required. All you need is a wallet.","sidebar":"tutorialSidebar"},"explorer/overview":{"id":"explorer/overview","title":"Overview","description":"Explore the comprehensive guide to BASCAN, the dedicated explorer for the Attestation Ecosystem. BASCAN serves as your central hub, providing avenues for exploration, discovery, creation, and verification of schemas and attestations on BNB chain.","sidebar":"tutorialSidebar"},"explorer/schema":{"id":"explorer/schema","title":"Schema","description":"Even a non-developer can master the power of attestations, thanks to BASCAN\u2019s user-friendly interface. Crafting your schema can be done without any coding at all. This tutorial will provide a step-by-step process, making schema creation a breeze without needing to delve deep into the technical aspects.","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"Welcome to BAS","description":"The BNB Attestation Service (BAS) is an infrastructure built on the BNB ecosystem for generating attestation to verify  information. BAS assists users in on-chain or off-chain verification, allowing them to assert ownership of attestation by storing them in Greenfield. This approach ensures data privacy and access control.","sidebar":"tutorialSidebar"},"quick_start":{"id":"quick_start","title":"Quick Start","description":"How does BAS work","sidebar":"tutorialSidebar"},"sdk/js":{"id":"sdk/js","title":"JS SDK Doc","description":"Here, you will find all the necessary information to begin integrating BAS into a Javascript/Typescript project.","sidebar":"tutorialSidebar"},"tutorials/attestation_in_gf":{"id":"tutorials/attestation_in_gf","title":"Attestation with Greenfield","description":"Publish & Privatize Attestations","sidebar":"tutorialSidebar"},"tutorials/create_schema":{"id":"tutorials/create_schema","title":"Create a Schema","description":"Instruction to schema","sidebar":"tutorialSidebar"},"tutorials/delegate":{"id":"tutorials/delegate","title":"Delegated Attestations","description":"Delegated Attestations empower an entity to sign an attestation while authorizing another entity to handle the associated transaction fee. It\'s noteworthy that when an attestation is delegated, the delegator\'s (signer) address serves as the attestor\'s identity in the attestation record.","sidebar":"tutorialSidebar"},"tutorials/make_attestation":{"id":"tutorials/make_attestation","title":"Make an Attestation","description":"Depending on your requirements and level of technical expertise, there are multiple methods available for creating attestations on BAS:","sidebar":"tutorialSidebar"},"tutorials/reference_attestation":{"id":"tutorials/reference_attestation","title":"Referenced Attestation","description":"Unlocking the full potential of composability in BAS attestations, the refUID feature allows seamless referencing between attestations, establishing a hierarchy or chain of interdependent attestations. This organized structure fosters a clearer understanding of the relationships between attestations.","sidebar":"tutorialSidebar"},"tutorials/resolver":{"id":"tutorials/resolver","title":"Leveraging Resolver Contracts","description":"To enhance the functionality of a Schema, Resolver Contracts serve as pivotal hooks, verifying that attestations adhere to predetermined rules or smart contract logic before finalization. This functionality empowers the infusion of additional smart contract features into your schema, such as implementing an allow-list for attestation creators or enabling NFT minting based on specific conditions.","sidebar":"tutorialSidebar"},"tutorials/revoke":{"id":"tutorials/revoke","title":"Revoking Attestation","description":"Attestations within BAS can undergo revocation when their validity or accuracy diminishes, a process applicable both on-chain and off-chain. Marking an attestation as invalid becomes imperative in instances of errors during issuance or when the represented data becomes obsolete.","sidebar":"tutorialSidebar"},"use_case/license":{"id":"use_case/license","title":"Leveraging Attestations for Streamlined Licensing Processes","description":"Challenges in Current Licensing Processes","sidebar":"tutorialSidebar"},"use_case/voting":{"id":"use_case/voting","title":"Transforming Voting Systems with Attestations","description":"Challenge in Voting Systems","sidebar":"tutorialSidebar"}}}')}}]);