import logo from './logo.svg';
import './App.css';
import { TonConnectUIProvider, TonConnectButton, useTonWallet, useTonConnectUI} from '@tonconnect/ui-react';

function App() {

  const wallet = useTonWallet()
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
       
        {
          address: "EQD8TJ8xEWB1SpnRE4d89YO3jl0W0EiBnNS4IBaHaUmdfizE",
          amount: "320",
          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
        },
        {
          address: "UQCCJjwbdw9gXLnV9jOmNspqYKhzcVKVlUxShkTHLisynVrW",
          amount: "100",
          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
      },
    ]
}

  async function signDataTest() {

    const dappUrl = "https://app.uniswap.org/";
    const encodedDappUrl = encodeURIComponent(dappUrl);
    const deepLink = "gate://wallet/dapp/url?dappUrl=" + encodedDappUrl;
    const encodedUrl = "https://www.okx.com/download?deeplink=" + encodeURIComponent(deepLink);
    console.log(encodedUrl);
    window.location.href = encodedUrl;
  }

  async function openTc() {
    var link = "tc://?v=2&id=a96f81cd1a39fdbeb42bfd4b0e33de8e2e2a3c5fdfdff9bb8300b2f804d37471&r=%7B%22manifestUrl%22%3A%22https%3A%2F%2Fgame.catizen.ai%2FtgCat%2Fgame%2Fmanifests%2Fton-release.json%22%2C%22items%22%3A%5B%7B%22name%22%3A%22ton_addr%22%7D%5D%7D&ret=none";
    window.location.href = link;
  }

  async function openGateUniversal() {
    const dappUrl = "https://app.uniswap.org/";
    const encodedDappUrl = encodeURIComponent(dappUrl);
    const deepLink = "gate://wallet/dapp/url?dappUrl=" + encodedDappUrl;
    const encodedUrl = "https://www.gateweb3.org/download?deeplink=" + encodeURIComponent(deepLink);
    console.log(encodedUrl);
    window.location.href = encodedUrl;
  }

  async function openOkxUniversal() {
    const dappUrl = "https://app.uniswap.org/";
    const encodedDappUrl = encodeURIComponent(dappUrl);
    const deepLink = "okx://wallet/dapp/url?dappUrl=" + encodedDappUrl;
    const encodedUrl = "https://www.okx.com/download?deeplink=" + encodeURIComponent(deepLink);
    console.log(encodedUrl);
    window.location.href = encodedUrl;
  }

  async function openDeepLink() {
    window.location.href = "http://myownpersonaldomain.com";
  }

  async function signTransactionTest() {
    try {
      var res = await tonConnectUI.sendTransaction(myTransaction)
      console.log(res);
    } catch(e) {
      console.log(e)
    }
  }


    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TonConnectButton />
        <br/>
        <button onClick={signDataTest}>go to webView</button>
        <br/>
        <button onClick={openTc}>open tc</button>
        <br/>
        <button onClick={openGateUniversal}>gate universal link</button>
        <br/>
        <button onClick={openDeepLink}>OKX universal link</button>
      </header>
    </div>
  );
}

export default App;
