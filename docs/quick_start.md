---
sidebar_position: 2
sidebar_label: Quick Start
---
# Quick Start


## How does BAS work
On BAS, firstly user should register a [schema](./core_concept/schema.md) in Schema Registry Contract. Schema defines a data structure including fields [revokable](./core_concept/revocation.md) and [resolver](./core_concept/resolver.md).
1) Then you can create an on-chain attestation based on one schema. And if the resolver field of the schema your attestation related to if not null, 
the BAS contract will call the resolver and check the validity of the attestation. After passing the verification, the new created
attesetation would be recorded in BAS contract.
2) Or you can create an off-chain attestation and store it in greenfield or any other storage. Then

<div align="center">
<img src="/figures/work_flow.jpg" width="75%" />
</div>

Either on-chain or off-chain attestation could be claimed as invalid by the attestor through revoking it.  

## Contracts
Following is the contract deployed in BNB chain.

### BNB mainnet

- EAS contract: `0x247Fe62d887bc9410c3848DF2f322e52DA9a51bC`
- Schema Registry contract: `0x5e905F77f59491F03eBB78c204986aaDEB0C6bDa`
- Delegate contract: `0x01dAc45529a070Cb67Fc5B328a7eBE394644355B`

### BNB testnet

- EAS contract: `0x6c2270298b1e6046898a322acB3Cbad6F99f7CBD`
- Schema Registry contract: `0x08C8b8417313fF130526862f90cd822B55002D72`
- Delegate contract: `0x3b32B97092f09Ad34E5766e239e4C2F76b0DEe43`
