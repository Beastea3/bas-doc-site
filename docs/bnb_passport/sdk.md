---
sidebar_position: 3
---
# BNB Passport JS SDK

BAS SDK is a toolkit designed for blockchain interaction, providing convenient interfaces to handle wallet connections, transaction signing, and smart contract interactions. It supports various blockchain networks and wallet connection methods.

## Features

- 🔗 Wallet Connection & Management
- 🔄 Network Switching (Mainnet/Testnet)
- 📝 Smart Contract Interaction
- 🛡️ Comprehensive Error Handling
- 📦 TypeScript Support
- ⚛️ React Hooks
- 🔍 Transaction Status Tracking

## Installation

Install BAS SDK using npm or yarn:

```shell
# Using npm
npm install bnb-passport-attestation

# Using yarn
yarn add bnb-passport-attestation

# Using pnpm
pnpm add bnb-passport-attestation
```

## Quick Start

Supported type values: `kyc_binance`, `kyc_bithumb`, `kyc_upbit`, `kyc_coinbase`, `kyc_okx`, `kyc_bybit`. [View Detail](https://www.npmjs.com/package/bnb-passport-attestation)

```javascript
import { usePassportAttention } from 'bnb-passport-attestation';

function YourComponent() {
  const {
    connect,
    handleMint,
    isLoading,
    account,
    currentNetwork,
    isCorrectNetwork,
    isConnected,
    txHash,
    isConfirmed
  } = usePassportAttention({
    inviteCode: 123,  // Invite code
    env: 'mainnet'    // 'mainnet' or 'testnet'
  });

  // Handle wallet connection
  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  // Handle minting
  const handleMintPassport = async () => {
    try {
      const receipt = await handleMint('kyc_binance');
      console.log('Mint successful:', receipt);
    } catch (error) {
      console.error('Mint failed:', error);
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={handleConnect}>Connect Wallet</button>
      ) : !isCorrectNetwork ? (
        <div>
          <p>Please switch to {env} network</p>
          <button onClick={handleConnect}>Switch Network</button>
        </div>
      ) : (
        <button 
          onClick={handleMintPassport}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Mint Passport'}
        </button>
      )}
      
      {txHash && (
        <p>Transaction Hash: {txHash}</p>
      )}
      
      {isConfirmed && (
        <p>Transaction confirmed!</p>
      )}
    </div>
  );
}
```

## API Documentation

### usePassportAttention Hook

A React hook for handling wallet connection, network switching, and passport minting operations. The hook automatically uses the currently connected wallet address for all operations.

### Parameters

```javascript
interface UsePassportAttentionProps {
  inviteCode: number;   // Invite code
  env?: 'mainnet' | 'testnet';  // Environment type (default: 'testnet')
}
```

### Return Value

```javascript

interface UsePassportAttentionReturn {
  // Connection state
  isConnected: boolean;        // Whether wallet is connected
  account: string | null;      // Connected account address
  currentNetwork: string;      // Current network ('mainnet', 'testnet', or 'unknown')
  isCorrectNetwork: boolean;   // Whether connected to the correct network
  
  // Loading states
  loaded: boolean;             // Whether iframe is loaded
  isLoading: boolean;          // Whether any operation is in progress
  
  // Transaction states
  txHash: string | null;       // Current transaction hash
  isConfirmed: boolean;        // Whether transaction is confirmed
  
  // Methods
  connect: () => Promise<string>;  // Connect wallet and switch network
  handleMint: (type: string) => Promise<any>;  // Handle minting process
}
```

### Methods

**connect()**

Connects the wallet and switches to the specified network. Returns the connected account address.

```javascript
const connect = async () => {
  try {
    const account = await connect();
    console.log('Connected account:', account);
  } catch (error) {
    console.error('Connection failed:', error);
  }
};
```

**handleMint(type: string)**

Handles the minting process for the specified type using the currently connected wallet address. Supported type values: `kyc_binance`, `kyc_bithumb`, `kyc_upbit`, `kyc_coinbase`, `kyc_okx`, `kyc_bybit`.

```javascript
const handleMintPassport = async () => {
  try {
    const receipt = await handleMint('kyc_okx');
    console.log('Mint successful:', receipt);
  } catch (error) {
    console.error('Mint failed:', error);
  }
};
```

### Error Handling

The hook provides comprehensive error handling for various scenarios:

- Wallet not installed
- Network switching failures
- Transaction rejections
- Contract interaction errors

Example error handling:

```javascript
try {
  await connect();
} catch (error: any) {
  if (error.code === 4001) {
    console.error('User rejected the connection');
  } else if (error.code === 4902) {
    console.error('Network not found');
  } else {
    console.error('Connection error:', error);
  }
}
```

## Hooks

### useAttestationQueries

A React hook for querying attestation data with wallet connection and network switching capabilities.

### Features

- Wallet connection management
- Network switching
- Attestation data querying
- Account and network change event handling

### Usage

```javascript
import { useAttestationQueries } from 'bnb-passport-attestation';

function MyComponent() {
  const {
    getUserAttestedSchemas,
    getUserLastAttestationRecord,
    isLoading,
    account,
    connect,
    isConnected,
    currentNetwork,
    isCorrectNetwork
  } = useAttestationQueries({
    env: 'testnet' // or 'mainnet'
  });

  // Query user's attested schemas
  const handleQuerySchemas = async () => {
    try {
      const schemas = await getUserAttestedSchemas(account!);
      console.log('User attested schemas:', schemas);
    } catch (error) {
      console.error('Query failed:', error);
    }
  };

  // Query user's last attestation record
  const handleQueryLastRecord = async () => {
    try {
      const [record, exists] = await getUserLastAttestationRecord(account!, 'schemaId');
      if (exists) {
        console.log('Last attestation record:', record);
      } else {
        console.log('No attestation record found');
      }
    } catch (error) {
      console.error('Query failed:', error);
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <div>
          <p>Current Account: {account}</p>
          <p>Current Network: {currentNetwork}</p>
          <button onClick={handleQuerySchemas}>Query Attested Schemas</button>
          <button onClick={handleQueryLastRecord}>Query Last Record</button>
        </div>
      )}
    </div>
  );
}
```

**Parameters**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| env | 'mainnet' \| 'testnet' | 'testnet' | Network environment |

**Return Value**

| Property | Type | Description |
|----------|------|-------------|
| getUserAttestedSchemas | `(user: string) => Promise<string[]>` | Get all attested schemas for a user |
| getUserAttestedSchemasInGivenSchemaSet | `(user: string, schemas: string[]) => Promise<string[]>` | Get user's attested schemas within a given schema set |
| getUserLastAttestationRecord | `(user: string, schemaId: string) => Promise<[AttestationRecord, boolean]>` | Get user's last attestation record |
| userFinishedAllAttestation | `(user: string, schemas: string[]) => Promise` | Check if user has completed all attestations |
| userFinishedAllAttestationsAfter | `(user: string, schemas: string[], timestamp: number) => Promise` | Check if user has completed all attestations after a timestamp |
| userFinishedOneOfAttestation | `(user: string, schemas: string[]) => Promise` | Check if user has completed at least one attestation |
| userFinishedOneOfAttestationAfter | `(user: string, schemas: string[], timestamp: number) => Promise` | Check if user has completed at least one attestation after a timestamp |
| switchNetwork | `(network: EnvType) => Promise` | Switch network |
| currentNetwork | `string` | Current network |
| isCorrectNetwork | `boolean` | Whether connected to the correct network |
| isLoading | `boolean` | Loading state |
| error | `Error \| null` | Error information |
| account | `string \| null` | Currently connected account address |
| isConnected | `boolean` | Whether wallet is connected |
| connect | `() => Promise` | Connect wallet |

### AttestationRecord Type

| Property | Type | Description |
|----------|------|-------------|
| attestation_id | string | Attestation ID |
| proof_hash | string | Proof hash |
| timestamp | number | Timestamp |
| _type | number | Attestation type |

## Development

### Prerequisites

- Node.js >= 14
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Available Scripts

- npm run build - Build the project
- npm run dev - Start development server
- npm run test - Run tests
- npm run lint - Run linter
- npm run format - Format code
