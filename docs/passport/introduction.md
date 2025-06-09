# Introduction

Your BNB Passport authenticates your presence across Web2 and Web3, we are opening up numerous opportunities as you gather achievements and increase your proofs. Proofs boosts your credibility, allowing you to actively engage with the community. The  BNB Passport Score validates your identity, with each verifier providing unique confirmation of your participation.

## Work Flow

<div align="center" id="revoke">
    <img src="/figures/passport_work_flow.png" width="80%" />
</div>

1. User initiates verify requirement through SDK
2. SDK forwards verify requirement to issuers
3. Issuers generate (zero knowledge) proof through interaction with user
4. Generated proof is sent to passport verifier for verification via SDK
5. Passport verifier generates parameters for calling BNB passport contract
6. User calls passport contract to generate attestation
7. Other contracts such as Pancake v4 hook, RWA, airdrop etc. utilize through passport contract interface

## Support Schemas

**Binance KYC**: `0xc5cbba4e7ab56f715c9c40593a4f3c8acb3ee4de5d18e3dff954e2faa855c667`

**OKX KYC**: `0x271b951e9e9851b0d1a6054c6ba21df0b73e37577f6f0f762e8d17c2d8cfe7b1`

**Bybit KYC**: `0x27de23fb23ae89377be3cbb6af23d4b959a3511eb890d939eba5c608972b322b`

**Coinbase KYC**: `0x064cad2e7b020d4977d1eb6f056fca0171849914ed6c2ba456310912974bdd66`

**Upbit KYC**: `0x5713237076725616a0caf9a6e529de81db9ccd53ac0f7b777a02660c4749f006`

**Bithumb KYC**: `0x19a28ca02c46af715ad54babcdd1d45782065816b910964d8297b1aeebd75245`

More data will be supported in the future.

## Contracts

**Mainnet**: `0x97F0Ed637276907dcecbE49Bf08464Bdc7E46734`

**Testnet**: `0x63e7C33db44F3a14d27fd3E42B88FD8Cf6a5c953`
