---
sidebar_position: 4
---
# On-chain vs Off-chain

Users can create on-chain & off-chain attestations. As for on-chain attestation, they are stored directly on the BNB chain and can be accessed to by anyone. Once user create an on-chain attestation, he/she relinquishes the ownership of the attestation. While off-chain attestations often are stored by user themselves or in Greenfield. User has the ownership of the attestations in Greenfield and manage the permissions.

## On- chain vs Off-chain attestations vs Off-chain attestations in Greenfield

| Feature          | On-chain Attestations                      | Off-chain Attestations in Greenfield                  | Off-chain Attestations                                |
|------------------|--------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| Visibility       | Public                                     | Full access control                                   | More control over data visibility                     |
| Ownership        | No ownership                               | User holds ownership                                  | No ownership                                          |
| Interoperability | Access by contracts directly               | Requires additional steps for smart contracts         | Requires additional steps for smart contracts         |
| Storage Location | Directly on the blockchain                 | Stored in Greenfield                                  | Anywhere.                                             |
| Privacy          | Need additional methods to ensure privacy. | Ensured by Greenfield                                 | Depend on users                                       |
| Cost             | Gas fee                                    | Storage fee & Gas fee                                 | Free                                                  |
| Immutability     | Immutable                                  | Cannot be modified by can be deleted                  | Cannot be modified by can be deleted                  |
| Verification     | Verify on chain directly                   | Additional steps base on the method defined in schema | Additional steps base on the method defined in schema |
| Timestamps       | Depend on the blockchain                   | Depend on Greenfield                                  | Depend on the attestors                               |
| Security         | Depend on blockchain consensus             | Depend on cryptography algorithm                      | Depend on cryptography algorithm                      |

### Making the Right Choice: On-chain vs. Off-chain vs. Off-chain in Greenfield

- **Privacy**: If you’re handling the data that you want to control who can see when and what, off-chain could be a better choose. Moreover, if the data is extremely sensitive, you’d better no store it directly into Greenfield. Because the SP (storage provider) in Greenfield can get your data. Moreover, with techniques like zero knowledge proof or full homomorphic encryption you can also ensure privacy of off-chain data.
- **Smart Contract Interaction**: If your project requires smart contracts to frequently access or verify attestation data, on-chain is your best bet. It ensures that the data is always available on the BNB/OpBNB blockchain for smart contracts to interact with. But this does not mean contracts can not access to off-chain attestations. Just there are need some additional steps.
- **Ownership & Access Control**: If you want to get the ownership of data and get full access control on them, you could store data in Greenfield. There are ownership and various access control in Greenfield. Moreover, you also can mirror the permission to BNB chain or control the data in greenfield through smart contract on BNB chain.
- **Capitalizing Data**: If you want to capitalize you data, you’d better choose off-chain attestation in Greenfield. As Greenfield can mirror the objects  (attestations) to BNB chain, manager them through contract. Users can issue mirror of attestations on BNB chain as assets that can be traded on chain.

### Store Attestations into Greenfield

User can store attestations directly in Greenfield, but to be indexed by BAS and show brief information of attestations 
in [BASCAN](https://bascan.io/), users should store their attestations with format `{$schema_uid}.{$attestation_uid}` in the 
bucket called 'bas'.