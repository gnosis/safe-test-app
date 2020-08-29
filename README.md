# Gnosis Safe App Starter

## How to start developing your Gnosis Safe App

Clone this repo. Install dependencies and start a local dev server.

```
yarn install
yarn start
```

Then:

- Go to Rinkeby version of Gnosis Safe [https://rinkeby.gnosis-safe.io/app](https://rinkeby.gnosis-safe.io/app)
- Create your test safe
- Go to Apps -> Manage Apps -> Add Custom App
- Paste your localhost URL, default is http://localhost:3003/
- You should see Gnosis Safe App Starter as a new app
- Develop your app from there

## Features

You can use `useSafeApp` React hook to get Gnosis Safe data and access SDK functions

```
const { appsSdk, safeInfo } = useSafeApp();
```

Safe React Components are also integrated and ready to use. [See all components](https://github.com/gnosis/safe-react-components#storybook).

**Important!**
There are known issues with safe-apps-sdk. Feel free to downgrade on your own (v0.1.1 works nice for me).

Reported bugs:

- [onSafeInfo is triggered in a loop](https://github.com/gnosis/safe-apps-sdk/issues/38)

## Dependencies

Gnosis Safe App Starter combines recommendations described in the following repositories:

- [Safe Apps SDK](https://github.com/gnosis/safe-apps-sdk)
- [safe-react-components](https://github.com/gnosis/safe-react-components)

It also includes recommended web3 libraries.

- [ethers](https://github.com/ethers-io/ethers.js/)
- [bignumber.js](https://github.com/MikeMcl/bignumber.js/)

## License

Built by Kris Urbas ([@krzysu](https://twitter.com/krzysu)).

The code in this repository is available under the MIT License.
