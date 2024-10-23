# Manage attestation in greenfield on BNB Chain

In BAS, users can store off-chain attestations in Greenfield and manage their access control permissions. This requires users to have tokens on Greenfield and switch to the Greenfield network when managing, which is a terrible user experience. No one wants to repeatedly switch between different chains when using Web3 applications.

Therefore, BAS provides a method to create and manage off-chain attestations through smart contracts. Users don't need to have BNB on Greenfield in advance, and can manage the permissions of off-chain attestations without switching networks.

<div align="center">
    <img src="/figures/offchain_delegate.jpg" width="70%" />
</div>

***BNB Chain Mainnet***

```yaml
Bucket Factory Contract: ""
Bucket Registry Contract: ""
```

***BNB Chain Testnet***

```yaml
Bucket Factory Contract: ""
Bucket Registry Contract: ""
```

## System Architecture
Off-chain attestation primarily involves three contracts: `factory contract`, `registry contract`, and `manager contract`. They are responsible for creating the manager contract, registering the manager contract and bucket, and managing the permissions of off-chain attestations on Greenfield, respectively.


### Factory Contract

User can deploy their own manager contract through factory contract to create their bucket on greenfield and manager the permission of buckets and objects.

### Manager Contract

The Manager contract is the main entity for users to manage their attestations stored in Greenfield, and is the true owner of the data in Greenfield. Through the manager contract, users can create their own buckets and manage the access control conditions for off-chain attestations in the created buckets.

#### Create Bucket

First, users can create buckets through the manager contract to store off-chain attestations. There are two types of buckets:

- **General Bucket**: A manager contract can create any number of schema buckets that can store any off chain attestation named in Greenfield as bas-${tag}-${mangaer.address}.

- **Schema Bucket**: A manager contract can create any number of schema buckets. Each schema bucket stores attestations belonging to that schema. Additionally, users can add a tag to the schema bucket for easier identification. Its name in Greenfield is bas-${tag}-${schemaId[:20]}. It's important to note that due to the length limitation of bucket names in Greenfield, the tag length cannot exceed 18 characters.

All buckets in Greenfield share the same namespace, so the names of newly created buckets will be registered in the registry contract. If a bucket name is already taken, it cannot be created.

#### Create Policy

Users can set up bucket access permissions for other users through the manager contract.User can call 'createPolicy' function to set the access permission for the bucket. schemaId=bytes32(0) is used to set the general bucket.

#### Top Up BNB

Users can recharge manager's account on greenfield through manager's topUpBNB functions

### Registry Contract

Registry contract is used for registering managers & created buckets. The Registry records each user's controlled manager contract, as well as all created buckets.
The main functions of the Factory contract are:

1. Create a manager contract
2. Top up a certain amount of BNB for this manager contract address on Greenfield
3. Transfer the ownership of the manager contract to the user
4. Register the newly created manager contract in the Registry contract