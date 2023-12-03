# Referenced Attestation

Unlocking the full potential of composability in BAS attestations, the refUID feature allows seamless referencing between attestations, establishing a hierarchy or chain of interdependent attestations. This organized structure fosters a clearer understanding of the relationships between attestations.

## Concept

Incorporating refUID involves one attestation referencing another by utilizing its unique identifier (UID) as the refUID field in the new attestation. This establishes a relationship where the referenced attestation acts as a foundation or prerequisite for the new one, indicating dependencies between attestations. As a practical example, when posting on social media, your main attestation is the post UID, others can attest by liking or sharing, referencing the original UID in their new attestation.

## Examples of Referenced Attestations Usage

1. Chain of Record: In real estate, track title transfers by linking attestations of previous and current owners.
2. Comprehensive View: Create a structured data view, where one attestation provides broader context to information in another, e.g., Comprehensive Digital Identities.
3. Approval Systems: Track multiple party approvals by using referenced attestations, each referencing the original proposal attestation.
4. Disputes: Indicate disagreements by creating a new attestation referencing the original in case of disputes.
5. Version Control: Update or revise attestation data, creating a clear history by referencing the previous version.

## Creating a Referenced Attestation

To reference an attestation, include its UID in the `refUID` field of the new attestation. BAS validates existence of the  `refUID`, ensuring the new attestation references the specified attestation.

## Referencing Multiple Attestations

For multiple references in a single attestation, use a schema with a bytes32 field as an array, accepting an array of `UIDs`` for the previous attestations you wish to reference. By passing an array of UIDs as the value, you can now efficiently reference multiple attestations in a single new attestation.
