---
sidebar_position: 3
---

# BNB Passport JS SDK

BAS SDK is a toolkit designed for blockchain interaction, providing convenient interfaces to handle wallet connections, transaction signing, and smart contract interactions. It supports various blockchain networks and wallet connection methods.

## Installation

Install BAS SDK using npm or yarn:

```shell
npm install bnb-passport-attestation
```

## Usage

In your component where you need to use BAS SDK, import and use the `usePassportAttention` hook:

```javascript
import { usePassportAttention } from 'bnb-passport-attestation';

function MyComponent() {
  const address = 'your_wallet_address';
  const inviteCode = 12345;
  // env: 'testnet' or 'mainnet'
  const env = 'testnet';

  const { loaded, handleMint, isLoading } = usePassportAttention({ address, inviteCode,env });

  const handleClick = async (type: string) => {
    try {
      const result = await handleMint(type);
      console.log('Mint successful:', result);
    } catch (error) {
      console.error('Mint failed:', error);
    }
  };

  return (
    <div>
      <p> loaded: {loaded ? 'Yes' : 'No'}</p>
      <button onClick={() => handleClick('example_type')} disabled={isLoading}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
    </div>
  );
}

export default MyComponent;
```
