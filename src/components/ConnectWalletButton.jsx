"use client"

import Link from "next/link";

export default function ConnectWalletButton() {
	function handleConnect() {
		console.log("put wallet connect stuff here");
	}

	return (<>
		<button className="nav-link px-lg-3 py-3 py-lg-4 border rounded" onClick={handleConnect}>Connect Wallet</button>
	</>);
}