## Overview
This project sets up a private Ethereum network using Clique PoA consensus.

## Folder Structure
- `configs/`: Configuration files for genesis and static nodes.
- `kubernetes/`: Kubernetes manifests for deploying the network.
- `contracts/`: Smart contracts to deploy on the network.
- `scripts/`: JavaScript files for contract deployment.

## Instructions
Deploy the Kubernetes resources:
   ```bash
   kubectl apply -f kubernetes/
   ```