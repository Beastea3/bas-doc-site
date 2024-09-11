# BAS DAO

Co-Building Data Standard for BNB Ecosystem.  

## Problems

As a permissionless attestation infrastructure, BAS allows anyone, organization, or company to register their own schema. Consequently, different schemas (data definitions) may be generated for the same data.  

For example, different applications have each created three schemas for the data of X account based on their respective needs.

```solidity
x_uid string,
x_handle string
```

```solidity
x_name string
```

```solidity
linked_to_x_id bool
```

These three schemas each to some extent express a relationship between an address and X account, but it's clearly unreasonable for all three schemas to coexist simultaneously. Therefore, the openness of BAS leads to two problems:

- Data redundancy: Users generate multiple attestations for the same data.
- Data fragmentation: No single schema can cover all users.

This situation hampers data compatibility and fluidity.

## Solution of BAS DAO

To reduce data redundancy and enhance data compatibility across different applications, we need to establish widely accepted data standards for each data type. Therefore, we require a DAO system aimed at governance to negotiate data standards for various use cases, meeting the needs and expectations of more applications and users.

Here, we utilize the VeToken model, where users can lock $BAS to generate $veBAS, participate in voting, and share BAS rewards.

## Work Flow of BAS DAO

### Stake $BAS get veBAS

$$
\text{veBAS} = \text{\$BAS} \cdot \frac{t}{t_{max}} \ \ \ \ \ \text{where}\ \  \ t_{min} \le t \le t_{max}
$$

where   $t_{max}$ represents the maximum lock-up period, and $t_{min}$ denotes the minimum lock-up period.

The value of veBAS decline with time goes on and we have:

$$
\text{veBAS} = \text{veBAS}_{\text{init}} \cdot (1-\frac{t_{pass}}{t_{lock}})
$$

### Propose Voting for Data Type

Users can propose two types of proposals:

#### Propose Data Type

A Data Type refers to a specific type of data, such as 'steam achievement.' Each data type can have multiple data standards (schemas). A proposal can introduce a new Data Type or propose an existing one.

#### Propose a Schema Into a Data Type

Users submit schemas that must already exist; the same schema can belong to different Data Types.

It's important to note that to prevent sybil attacks, submitting a proposal requires payment of a propose fee. Anyone with `x` veBAS can (pays $BAS to) propose a proposal.

## 2-Dimensionality Voting for Data Type

Unlike traditional governance, the goal of BAS DAO is to establish a data standard, which involves two parts: proactive and reactive. Proactive refers to establishing a data standard before data generation, which is then widely adopted. Reactive means that after data generation, the most widely accepted data format becomes the standard. In BAS DAO, both scenarios must be considered, so voting results consist of two parts.

### 2-Dimensionality Voting

#### veBAS Voting

The amount of veBAS represents the voting weight of the user,

$$
\text{Point1} = f_1(\text{Array(veBAS}_i))
$$

where  $\text{$veBAS_i$}$  is the voting of user $i$ for a particular schema. $veBAS_i$  could be a sum function or a quadratic voting function. $f_1$ can be adjusted based on community feedback.

#### Foot Voting

$$
\text{Point2} = f_2(\text{Array}(timestamp,attestation,uniq\_addr))
$$

where attestation is the number of attestations under a schema at a given timestamp, and $uniq\_addr$  is the number of unique addresses under a schema at a given time.

The market share of a schema should be evaluated based on two criteria:

- Total number of attestations
- Number of unique addresses

To prevent Sybil attacks, addresses participating in the unique address count need to pass BAS's KYC process.

Additionally, to prevent unfair advantages for schemas established early with a numerical advantage, the calculation of $Point2$ involves assigning different weights to attestation counts and unique address counts at different time points, promoting updates to the data protocol.

#### Final Result for Each Schema

$$
\text{Point} = Balance(\text{Point1},\text{Point2})
$$

By combining the results from veBAS voting and foot voting, calculate the final score for each schema.

### Voting Succeed & Results

#### Voting Succeed
For a data type proposal to be accepted, it must meet the following two conditions:

1. The sum of Point2 for all schemas under that data type protocol exceeds a threshold:i∈Schemas∑Point2i  
    $$
    \sum_{i \in Schemas} \text{Point2}_i
    $$  
2. The sum of Point1 for all schemas under that data type protocol exceeds a threshold:i∈Schemas∑Point1i

    $$
    \sum_{i \in Schemas} \text{Point1}_i
    $$

The primary reason for this design is that veBAS votes can be reused in elections for each data type, motivating users to vote on all data proposals to maximize rewards. Without restrictions, users could submit any data type proposal and likely succeed. This could lead to two serious consequences:

- A proliferation of useless 'data standards': To earn rewards, users may vote indiscriminately, resulting in many invalid data standards. This contradicts the original intent of BAS DAO.
- $BAS rewards could be siphoned off by numerous invalid 'data standards,' leading to rapid inflation of $BAS.

We need to ensure that only data types with genuine demand and real production efforts succeed in the voting process. Considering that Point2 reflects the real-world usage of a schema in production environments, schemas with higher Point2 scores indicate widespread acceptance and use within the ecosystem, making it a rational criterion for determining the validity of a data type proposal.

#### Voting Result

The schema with the highest Point score ultimately wins and is widely promoted as the data standard for a specific data type.

## Earn

**Reward for each proposal:**

- Initially sourced from issuance:
    
    The reward function for each proposal, $f(t)$, is a function of time $t$. The reward for the m-th proposal is:
    
    $$
    \text{Reward}(m) = \int_{t_{m-1}}^{t_m} f(t) dt
    $$
    
    where $t_i$ denotes the time when the i-th proposal succeeded.
    
    <div align="center" id="emit_token">
    <img src="/figures/dao_token.png" width="70%" />
    </div>

    
    
- Subsequently sourced from BAS earnings.

**Distribution of voting rewards**

 Rewards for successful votes are divided into 3 types as follows:

1. Propose Type Data: **15%** reward to the proposer.
2. Propose Schema: **10%** reward to the proposer of the winning schema.
3. Vote: **75%** of rewards distributed among all participants based on their veBAS weights."

## Burn

`m%` of BAS earnings will be used to repurchase $BAS and burn it.

## Token Distribution

| Part | Percentage |
| --- | --- |
| Team | 15% |
| Investment | 15% |
| Ecosystem | 20% |
| Airdrop | 10% |
| Community | 40%   |
