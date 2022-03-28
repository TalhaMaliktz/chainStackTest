# Querying Pending Transactions using Chainstack & web3.js
Pending transactions stay inside Ethereum's mempool. To access these transactions, a **Chainstack** node and **web3.js** can be used. This repository 
contains the code and instructions to retrieve _pending transactions_.
## Pre-requisites
- Install NodeJS on your system
- A text editor
- Command-line interface (CLI)

## Setup
Once all the pre-requisites are met, clone the repository on your computer. The `node_modules` and project files will be downloaded to your computer.

## Run
- Open the repository in a text editor.
- Inside the `index.js` file, take a look at the second line of code: `var url = "ADD_YOUR_ETHEREUM_NODE_WSS_URL";`
- Replace `ADD_YOUR_ETHEREUM_NODE_WSS_URL` with your **WSS URL** for the Ethereum node.
- Save changes and then open CLI in the project directory.
- Type `node index` in the CLI and hit enter.
- The code will execute, and a stream of *pending transactions* will appear on the CLI as shown below:

![image](https://user-images.githubusercontent.com/13951043/160352785-f208e22d-f220-4509-9049-bde5b23e1f5b.png)
