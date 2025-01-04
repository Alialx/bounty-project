# StudyLah: Study Group Reward System

## Overview
StudyLah is a decentralized platform that encourages productive group study sessions by integrating blockchain technology and smart contracts. The system allows students to create study rooms, set goals, and stake SOL (Solana tokens) as a commitment. Participants are rewarded when they achieve their goals, fostering accountability and collaboration.

---

## Key Features

### Backend
1. **Smart Contract**
   - Implements Anchor framework.
   - Manages:
     - Room creation with stake requirements.
     - Participant joining with SOL staking.
     - Goal completion verification.
     - Automated reward distribution.
   - Stores study room data on-chain for transparency and immutability.

2. **SPL Token Integration**
   - Reward participants with SPL tokens upon successful goal completion.

3. **Solana Transactions**
   - Handles wallet interactions and SOL staking securely.

---

### Frontend
1. **Wallet Integration**
   - Supports Phantom wallet connection.
   - Displays study rooms associated with the connected wallet.
   - Changes display dynamically based on the wallet connected.

2. **Room Creation Interface**
   - Enables users to create study rooms with:
     - Staking requirements.
     - Goal definitions.
     - Deadline selection using a calendar interface.

3. **Goal Management**
   - Users can tick off completed goals.
   - Progress is visualized with:
     - A progress bar.
     - A timer counting down to the deadline.

4. **Interactive Room Display**
   - Shows the layout of the study room.
   - Displays goals and their completion status.
   - Clears the room once all goals are completed.

5. **User Interface**
   - Built with Next.js for fast and scalable frontend.
   - Styled with Tailwind CSS for modern and responsive design.

---

## Workflow
1. **Room Creation**
   - A user creates a study room.
   - Defines goals and sets a deadline.
   - Stakes a small amount of SOL as a commitment.

2. **Participant Joining**
   - Other users join the study room by staking SOL.

3. **Goal Completion**
   - Goals can be marked as completed over time.
   - A progress bar tracks the overall progress.
   - The timer displays the time remaining until the deadline.

4. **Reward Distribution**
   - When all goals are completed before the deadline:
     - The staked SOL is released to participants.
     - Additional SPL token rewards are distributed.

5. **Wallet-based Room Management**
   - Users can create multiple study rooms.
   - Rooms are associated with the creator's wallet address.
   - Switching wallets changes the displayed rooms accordingly.

---

## Future Enhancements
- **Enhanced Analytics:** Add charts to show study progress trends over time.
- **Mobile App Support:** Build a mobile app for easier accessibility.
- **Social Features:** Allow participants to chat and share study resources within the room.
- **Reputation System:** Introduce a scoring system to rank participants based on completion rates.

---

## Tech Stack
- **Frontend:**
  - Framework: Next.js
  - Styling: Tailwind CSS
  - Wallet Integration: Phantom Wallet

- **Backend:**
  - Blockchain: Solana
  - Framework: Anchor
  - Token Standard: SPL

- **Other Tools:**
  - Rust (for smart contract development)
  - TypeScript (for frontend development)
  - Solana CLI (for blockchain operations)

---

### Installation

#### Clone the repo

```shell
git clone <repo-url>
cd <repo-name>
```

#### Install Dependencies

```shell
pnpm install
```

#### Start the web app

```
pnpm dev
```

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/counter-exports.ts` to match the new program id.

```shell
pnpm anchor keys sync
```

#### Build the program:

```shell
pnpm anchor-build
```

#### Start the test validator with the program deployed:

```shell
pnpm anchor-localnet
```

#### Run the tests

```shell
pnpm anchor-test
```

#### Deploy to Devnet

```shell
pnpm anchor deploy --provider.cluster devnet
```

### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

#### Commands

Start the web app

```shell
pnpm dev
```

Build the web app

```shell
pnpm build
```

