# Make an Attestation

Depending on your requirements and level of technical expertise, there are multiple methods available for creating attestations on BAS:

- BAS SDK: Designed for developers who are building decentralized applications (D-apps) or integrating attestations into existing platforms.
- Direct Contract Interaction: For those who prefer maximum flexibility and are comfortable interacting directly with BNB smart contracts.
- BASScan Website: The most user-friendly option for creating attestations without any coding required.

## Understanding the Attestation Record

Before we delve into the process of creating attestations, take a moment to understand the structure of an attestation record. Whenever an attestation is made using our platform, a unique attestation record is generated. This includes details such as the schema used, the attestor’s address, the recipient (if specified), the expiration time (if specified), and much more. Each attestation record consists of the following fields.

- **`UID`**- This is a universally unique identification number assigned to the attestation.
- **`Schema`**- The UID of the schema utilized to create the attestation.
- **`Attestor`** - The address responsible for making the attestation.
- **`Recipient`** - An optional recipient of the attestation (if specified).
- **`Expiration Time`**- An optional date indicating when the attestation will expire, if provided by the attestor.
- **`Revocation Time`**- The time at which the attestation was revoked, if applicable.
- **`refUID`** - An attestation that this particular attestation is referencing, if any.
- **`data`** - The ABI encoded data associated with the attestation.

## Example: On-Chain Attestation Record

Users can clearly view the structure of an on-chain attestation on [BASCAN](https://www.bascan.com).
![attestation_detail](../figures/attestation_detail.png)

## Example: OffChain Attestation Record

Here's an off-chain attestation record. Unlike the on-chain record, this attestation is public, and the server is unaware of it. Users can share the attestation URL with others to decode the data or publish it to GreenField. Once published or pinned to GreenField, the status icon will switch to "public.”

![off chain attestation](../figures/offchain_attestation.png)

## Make  Attestations

### Make Attestations through [BASCAN](https://www.bascan.io)

For non-developers seeking to leverage attestations, BAS provides no-code tools. These interfaces enable you to easily generate attestations through visual interface. See more information in [BASCAN](https://www.bascan.io).
Users can get more details on [here](../explorer/attestation.md#make-an-attestation).

### Make Attestations through SDK

Users can find out how to create an on-chain attestation [here](../sdk/js.md#creating-on-chain-attestations)

### Contract

The Contract on [Github](TODO: add link) contains all the smart contract interactions you’d want to find when making an attestation.
