# Revocation

On BAS, users can revoke either on-chain or off-chain attestations when they are no longer valid. Consider an attestation which claims Bob is a senior student. But when Bob graduate from school, the attestation should be revoked.

When user create an attestation, they can set if the attestation is revokable. Only the revokable attestation can be revoked.

As for on-chain attestations, attestors of attestations can call `revoke` function of BAS contract to mark an attestation as invalid. When an on-chain attestation is revoked, the `revoked` field will be set true.  While the attestor also can call `revokeOffchain(bytes32)` to revoke an off-chain attestation. Where the input of `revokeOffChain` is the uid of the attestation that you want to revoke. When an off-chain attestation is revoked, BAS contract will mark the attestation as revoked.

## Example

User gives name to a schema, but he finds a similar name has been used by another schema. So I can revoke current naming attestation and create a new one.

<div align="center" id="revoke">
    <img src=../figures/revoke.png width=70% />
</div>
