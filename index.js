var Web3 = require("web3");
var url = "wss://ws-nd-722-543-164.p2pify.com/f0a6b29367ba8093fcc58329f4bf67a1";

var options = {
  timeout: 30000,
  clientConfig: {
    maxReceivedFrameSize: 1000000,
    maxReceivedMessageSize: 1000000,
  },
  reconnect: {
    auto: true,
    delay: 500,
    maxAttempts: 10,
    onTimeout: false,
  },
};

var web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));
const subscription = web3.eth.subscribe("pendingTransactions", (err, res) => {
  if (err) console.error(err);
});

var init = function () {
  subscription.on("data", (txHash) => {
    setTimeout(async () => {
      try {
        let tx = await web3.eth.getTransaction(txHash);
        console.log(tx);
      } catch (err) {
        console.error(err);
      }
    });
  });
};

init();