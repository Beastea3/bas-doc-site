# Revoking Attestation

Attestations within BAS can undergo revocation when their validity or accuracy diminishes, a process applicable both on-chain and off-chain. Marking an attestation as invalid becomes imperative in instances of errors during issuance or when the represented data becomes obsolete.

## Concept

Revocation fundamentally transforms an attestation's status from "valid" to "revoked" by updating the revoked field to true. This adjustment affords enhanced control and adaptability throughout the attestation's lifecycle.

## Reasons for Revocation

Several circumstances may necessitate the revocation of an attestation:

- The attestation loses its validity or relevance.
- Issuance occurred in error or was grounded in inaccurate information.
- The underlying conditions or requirements for the attestation have changed.

## Revoking On-chain Attestations through SDK

User can find out how to revoke an attestation [here](../sdk/js.md#revoking-on-chain-attestations)

## Revoking Attestations On [BASCAN](https://www.bascan.io)

For attestors accessing the BASCAN, manual revocation is possible by clicking the "revoke attestation" button on the unique attestation page. This option is exclusively visible to the attester.
![revoking](/figures/revoking.png)
