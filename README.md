# Ethersee

Simple Ethereum Explorer build on web3 and infura using React.

## Run
Clone the project then install dependencies.
``` shell
npm install
npm run dev
```
### Caution
If you want to run it in windows system, you maybe do it like this
```shell
npm install
npm install cross-env --save-dev
npm run dev
```
**And you maybe also change line 7 of package.json like this**  
`"dev": "cross-env NODE_ENV=development node --harmony tools/server"`  
Because Windows does not support the setup like 'NODE_ENV=development'  
Then you can aslo access it at localhost:9000   
## More
Last block number.
<img src="./ethersee1.png">
Scan a ETH address.
<img src="./ethersee2.png">
Scan a Transaction.
<img src="./ethersee3.png">

## License
MIT
