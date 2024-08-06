# Special Attestations

BAS provides some official schemas to help users better describe their schemas and projects

## Name Schema

The name schema is used to describe the name of a schema. When the attester of this schema matches the creator of the schema corresponding to the `schemaId` field in the name schema data, BASCAN will parse and display the name of the schema as `name`.

```solidity
    bytes32 schemaId,
    string name 
```

## Description Schema

The description schema is used to describe a brief introduction of a schema. When the attester of this schema matches the creator of the schema corresponding to the `schemaId` field in the Description schema data, BASCAN will parse and display the description of the schema in the detail corresponding to `schemaId`.

```solidity
   bytes32 schemaId,
   string description
```

## Context Schema

The context schema is used to describe the context of a schema.

```solidity
    bytes32 schemaId,
    string context 

```

## Valid Attesters Schema

The Valid Attesters Schema is used to describe a valid list of attesters for a schema. In the Valid Attesters Schema data, the attestation corresponding to `schemaId` will only be displayed by BASCAN if the attestor belongs to an address listed in the `attestors` field."

```solidity
    bytes32 schemaId,
    []address attestors 

```
