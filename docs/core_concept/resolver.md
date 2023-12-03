# Resolver

User can use resolver to introduce any logic to their attestations. Picture them as gatekeepers or hooks, playing a crucial role in ensuring that attestations fulfill predetermined criteria before being accepted. Without resolver, anyone can generate arbitrary attestation. For example, anyone can generate a “twitter record” claiming his is Musk.

## How to implement resolver

Resolve contract is external smart contract that implement the interface `attest` which acts as a hook function for schema. Developers can add arbitrary logic in `attest` function to restrict the generation of attestations. For examples, only the owner of certain NFT can generate an attestation or user should pay some BNB before create an attestation.

## How to use resolver

When you create a schema, you can specify which resolver you want to use upon the schema by filling the resolver contract address in `resolver` filed in schema.

## Practical Examples

Coming soon.
