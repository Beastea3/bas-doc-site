---
sidebar_position: 2
---
# Attestation

At its core, an attestation is a data with proof that can be used to verify the validity defined in schema. Attestation provide a standard for user to import any data into web3. With in BAS, attestations can be created on-chain and off-chain. Users can store the off-chain attestations in greenfield to provide the attestations access control.

## When to use Attestations

Attestations serve as a bridge between web2 and web3, providing a standard method to verify and share users’ personal data. Here are some use cases:

- **Verifying**: Confirming the authenticity of a product or the accuracy of information.
- **Vouching**: Endorsing someone's skills, experience, or character.
- **Voting**: Recording preferences or decisions in elections or community polls.
- **Proving**: Demonstrating ownership of assets, completion of tasks, or attainment of milestones.
- **Authenticating**: Establishing the genuineness of an item, artwork, or collectible.
- **Certifying**: Validating completion of courses, training, or adherence to standards.
- **Endorsing**: Publicly supporting or recommending a product, service, or individual.
- **Validating**: Confirming the legitimacy of a claim, be it health records, financial status, or any other data.
- **Recording**: Keeping a digital note of events, achievements, or incidents.
- **Witnessing**: Attesting to the occurrence of an event, action, or decision.
- **Guaranteeing**: Assuring the quality, durability, or performance of a product or service.
- **Declaring**: Making a formal or official statement about a fact, intention, or belief.
- **Confirming**: Corroborating an event, transaction, or activity.
- **Securing**: Ensuring the safety, privacy, or confidentiality of data or actions.
- **Identifying**: Establishing the identity or characteristics of an individual, organization, or item.

## Examples

Here is an example on-chain attestation record. It’s name a schema `0xd41…bcb` as Twitter Handle.

<div align="center">
    <img src="/figures/attestation_detail.png" width="70%" />
</div>

1. **UID:** Each attestation has its own unique identifier (UID) which is a hash of the entire attestation
2. **Status:** This can help you determine if the attestation is still valid and trustworthy, ensuring you have the most up-to-date information.
3. **Schema:** Schemas are the data of the attestation. They are completely customizable and can be created for any purpose, allowing users to leverage preexisting schemas or create new ones tailored to their specific needs.
4. **From & To:** These 2 fields indicate `from` generates the attestation for `to`. They are completely customizable and can be created for any purpose. Specifically in RIDO, `to` should be the owner of data (attestation).
5. **Attestation data:** The attestation data will be decoded in this section based on the schema.
6. **Referenced attestations:** One of the most powerful features of BAS is its ability to allow attestations to reference other attestation UIDs. This field shows the attestations that are linked to by current attestation.
7. **Referencing attestations:** This field shows the attestations that link to current attestation.

View more detail in [how to create an attestation.](../tutorials/make_attestation.md)
