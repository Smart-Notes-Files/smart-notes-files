# Notes

The application will consist of two distinct layers:

- Smart contract (in web2 we may refer to this as server-side or back-end)
- Web app (in web2 we may refer to this as client-side or front-end)

## Working

**Contracts: `/smart-contract-notes/`**
1. install dependencies `cd smart-contract-notes && yarn`
2. run tests - `yarn test`
3. compile the contract - `yarn build`
4. deploy the contract - `yarn deploy`
 
**App Tests: `/smart-contract-notes/`**
1. install dependencies `cd smart-contract-notes-web && yarn`
2. start the server - `yarn start`

## Notes

- If you deploy the contract, make sure to edit the `CONTRACT_NAME` found in `smart-contract-notes-web/src/config.js` to match your deployed contract. 
- You must be logged in to interact with the app. If you don't have a NEAR wallet, click [here](https://wallet.testnet.near.org/) to make one.
