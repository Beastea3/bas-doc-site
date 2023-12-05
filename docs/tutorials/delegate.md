---
sidebar_position: 7
---
# Delegated Attestations

Delegated Attestations empower an entity to sign an attestation while authorizing another entity to handle the associated transaction fee. It's noteworthy that when an attestation is delegated, the delegator's (signer) address serves as the attestor's identity in the attestation record.

## Use Cases

The versatility of delegated attestations on EAS becomes apparent when the attestor and the fee-covering entity are distinct. This arrangement proves beneficial, especially in scenarios such as:

- A service intending to cover its users' attestations, addressing gas cost concerns.
- An entity making multiple attestations but designating the recipient or another party to handle the transaction fees for on-chain processing.

## Supercharged Delegated Attestations with Proxy Contracts

While standard delegated attestations adhere to an incrementing nonce based on the EIP-712 spec, the proxy contract introduces flexibility by accommodating delegated attestations out of order and with an expiration time. This feature becomes particularly valuable when a single entity, like a KYC provider, attests to numerous users while expecting the users to cover the associated gas fees. Refer to the example proxy contract below for detailed insights.
