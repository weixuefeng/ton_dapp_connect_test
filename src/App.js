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
            address: "UQCCJjwbdw9gXLnV9jOmNspqYKhzcVKVlUxShkTHLisynVrW",
            amount: "100",
            // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
        },
        {
          address: "UQCCJjwbdw9gXLnV9jOmNspqYKhzcVKVlUxShkTHLisynVrW",
          amount: "320",
          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
        },
    ]
}

  async function signDataTest() {
    tonConnectUI.openSingleWalletModal()

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
        <button onClick={signTransactionTest}>signTransactionTest</button>
        <button onClick={signDataTest}>signData</button>
      </header>
    </div>
  );
}

export default App;
