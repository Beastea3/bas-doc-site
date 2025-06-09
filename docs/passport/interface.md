# BNB Passport Interface

通过BNB passport contract interface 其他合约可以方便的验证用户的数据，并基于此构建诸如pancake v4 hook, RAW, token allocation等应用

## Interface

**Mainnet**: `0x97F0Ed637276907dcecbE49Bf08464Bdc7E46734`

**Testnet**: `0x63e7C33db44F3a14d27fd3E42B88FD8Cf6a5c953`

```solidity

enum AttestationType{
    ONCHAIN,
    OFFCHAIN
}

struct AttestationRecord {
    bytes32 attestation_id;
    bytes32 proof_hash;
    uint64 timestamp;
    AttestationType _type;
}

interface IPAssport {
    /// @notice Get all schema IDs that a user has attested to
    /// @param user The address of the user to check
    /// @return Array of schema IDs that the user has attested to
    function get_user_attested_schemas(address user) external view returns (bytes32[] memory);

    /// @notice Get the list of schemas that a user has attested to within a given set of schemas
    /// @param user The address of the user to check
    /// @param schemas Array of schema IDs to check against
    /// @return Array of schema IDs that the user has attested to from the given set
    function get_user_attested_schemas_in_given_schema_set(address user, bytes32[] calldata schemas) external view returns (bytes32[] memory);

    /// @notice Check if a user has completed at least one attestation from the given schemas
    /// @param user The address of the user to check
    /// @param schemas Array of schema IDs to check against
    /// @return True if user has completed at least one attestation, false otherwise
    function user_finished_one_of_attestation(address user, bytes32[] calldata schemas) external view returns (bool);

    /// @notice Check if a user has completed all attestations from the given schemas
    /// @param user The address of the user to check
    /// @param schemas Array of schema IDs to check against
    /// @return True if user has completed all attestations, false otherwise
    function user_finished_all_attestation(address user, bytes32[] calldata schemas) external view returns (bool);

    /// @notice Check if a user has completed all attestations from the given schemas after a specific timestamp
    /// @param user The address of the user to check
    /// @param schemas Array of schema IDs to check against
    /// @param timestamp The timestamp to check against
    /// @return True if user has completed all attestations after the timestamp, false otherwise
    function user_finished_all_attestations_after(address user, bytes32[] calldata schemas, uint64 timestamp) external view returns (bool);

    /// @notice Check if a user has completed at least one attestation from the given schemas after a specific timestamp
    /// @param user The address of the user to check
    /// @param schemas Array of schema IDs to check against
    /// @param timestamp The timestamp to check against
    /// @return True if user has completed at least one attestation after the timestamp, false otherwise
    function user_finished_one_of_attestation_after(address user, bytes32[] calldata schemas, uint64 timestamp) external view returns (bool);

    /// @notice Get the last attestation record for a user and specific schema
    /// @param user The address of the user to check
    /// @param schema_id The schema ID to check
    /// @return The attestation record and a boolean indicating if the record exists
    function get_user_last_attestation_record(address user, bytes32 schema_id) external view returns (AttestationRecord memory, bool);
}
```
