import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import Persik from './panels/Persik';
import Organization from './panels/Organization';
import School from './panels/School';
import Second from './panels/Second';
const simpleContractAddress = "0xbfff289e6099859c0d0f080ae95aa9045b6afff1";
const regitry = "0xDaF6e971ef5A50b96a62f9c2C5DaBFF2a3e4b846";
const certificate = "0xbfff289e6099859c0d0f080ae95aa9045b6afff1";



const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	var accaunts;
	

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	
	const reg = async e => {
		try {
			// Will open the MetaMask UI
			// You should disable this button while the request is pending!
			accaunts = await ethereum.request({ method: 'eth_requestAccounts' });
			console.log(accaunts);
		  } catch (error) {
			console.error(error);
		  }
	};

	const transaction_1 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: regitry, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xf82fd1c6000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000038cb7800c3fddb8dda074c1c650a155154924c7300000000000000000000000000000000000000000000000000000000000000074e65775573657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f4920616d2061206e657720757365720000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_2 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: regitry, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xa9f8134b00000000000000000000000038cb7800c3fddb8dda074c1c650a155154924c73', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_3 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: regitry, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xd31e5dc400000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000640000000000000000000000002e9d30761db97706c536a112b9466433032b28e300000000000000000000000000000000000000000000000000000000000000094e6577436f75727365000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024e4300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000114920616d2061206e657720636f75727365000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_4 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_5 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_6 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_7 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_8 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};
	const transaction_9 = async e => {
		console.log("tr");
		const transactionParameters = {
			nonce: '0x00', // ignored by MetaMask
			to: simpleContractAddress, // Required except during contract publications.
			from: accaunts[0], // must match user's active address.
			value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:
			  '0xe5071b8e0000000000000000000000000000000000000000000000000000000000000000', // Optional, but used for defining smart contract creation and interaction.
			chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		  };
		  
		  // txHash is a hex string
		  // As with any RPC call, it may throw an error
		  const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		  });
	};


	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} 
									go={go} 
									reg={reg} 
									transaction_1={transaction_1} 
									transaction_2={transaction_2} 
									transaction_3={transaction_3} 
									transaction_4={transaction_4} 
									transaction_5={transaction_5} 
									transaction_6={transaction_6} 
									transaction_7={transaction_7} 
									transaction_8={transaction_8} 
									transaction_9={transaction_9} 
									/>
								<Persik id='persik' go={go} />
								<Organization id='organization' go={go} />
								<School id='school' go={go} />
								<Second id='second' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
