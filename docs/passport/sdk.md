## BNB Passport JS SDK

BAS SDK 是一个用于与区块链交互的工具包，提供了便捷的接口来处理钱包连接、交易签名和智能合约交互等功能。它基于 Wagmi 和 RainbowKit 构建，支持多种区块链网络和钱包连接方式。

## Install
使用 npm 或 yarn 安装 BAS SDK：

```shell 
npm install bnb-passport-attestation
```

## How to Use 

在需要使用 BAS SDK 的组件中，引入并使用 useBASSDK 钩子：

```javascript
import { usePassportAttention } from 'bnb-passport-attestation';

function MyComponent() {
  const address = 'your_wallet_address';
  const inviteCode = 12345;

  const { loaded, handleMint, isLoading } = usePassportAttention({ address, inviteCode });

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