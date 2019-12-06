# collections-wa-perk-test

Using this app to test `colls-wa` library.

## Build and Serve

```sh
# Global install Parcel
parcel serve index.html
```

## Problems

1. Parcel does not include two required `colls-wa` files in `dist` (`1.js` and `[hash].module.wasm`).
   Would like to solve this in the `colls-wa` build. Assume it's due to Parcel not able to figure out
   to bring files over because of "obfuscated" Webpack code.
