import React from "react";
import "../styles/Donate.css";

function Donate() {
  async function donate() {
    const wa: any = window;
    const ethereum = wa.ethereum;

    if (ethereum) {
      const transactionParameters = {
        gasPrice: "0x2540BE400",
        gas: "0xC350",
        to: "0x81F35AddfD52da15f227bc803725de3bBcb96743",
        from: ethereum.selectedAddress,
        value: "0x16345785D8A0000",
      };

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
    }
  }

  return (
    <div className="donate-container">
      <button onClick={donate}>Donate to the party</button>
    </div>
  );
}

export default Donate;
