const cryptocurrencies = [
	{
		name: 'Bitcoin',
		url: 'https://bitcoin.org/en/',
		description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer Bitcoin network.',
		explorer: 'https://btcscan.org/',
		ticker: 'BTC',
		keywords: ['bitcoin', 'btc', 'satoshi', 'coin', 'decentralized', 'digital currency', 'cryptocurrency', 'first cryptocurrency', 'first crypto', 'open source', 'crypto asset'],
	},
	{
		name: 'Ethereum',
		url: 'https://ethereum.org/en/',
		description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality.',
		explorer: 'https://etherscan.io/',
		ticker: 'ETH',
		keywords: ['ethereum', 'eth', 'token', 'decentralized', 'smart contracts', 'cryptocurrency', 'open source', 'blockchain' , 'nft', 'dapps'],
	},
	{
		name: 'Tether',
		url: 'https://tether.to/en/',
		description: 'Tether is a stablecoin cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains.',
		explorer: 'https://usdt.tokenview.com/',
		ticker: 'USDT',
		keywords: ['tether', 'usdt', 'stable coin', 'token', 'cryptocurrency', 'blockchain', 'stable', 'dollar'],
	},
	{
		name: 'USD Coin',
		url: 'https://www.circle.com/en/usdc',
		description: 'USD Coin is a digital stablecoin that is pegged to the United States dollar.',
		explorer: 'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		ticker: 'USDC',
		keywords: ['usd coin', 'usdc', 'stable coin', 'token', 'cryptocurrency', 'blockchain', 'stable', 'dollar'],
	},
	{
		name: 'Binance Coin',
		url: 'https://www.binance.com/en/bnb',
		description: 'Binance coin is the cryptocurrency coin that powers the BNB Chain ecosystem.',
		explorer: 'https://bscscan.com/',
		ticker: 'BNB',
		keywords: ['binance coin', 'bnb', 'coin', 'cryptocurrency', 'blockchain', 'fast', 'nft', 'smart contracts', 'decentralized', 'dapps'],
	},
	{
		name: 'Cardano',
		url: 'https://cardano.org/',
		description: 'Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods.',
		explorer: 'https://cardanoscan.io/',
		ticker: 'ADA',
		keywords: ['cardano', 'ada', 'coin', 'smart contracts', 'cryptocurrency', 'blockchain', 'decentralized', 'open source', 'nft', 'fast', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Ripple',
		url: 'https://ripple.com/',
		description: 'XRP is the native cryptocurrency of XRP Ledger, which is an open-source, public blockchain designed to facilitate faster and cheaper payments.',
		explorer: 'https://xrpscan.com/',
		ticker: 'XRP',
		keywords: ['ripple', 'xrp', 'coin', 'cryptocurrency', 'blockchain',],
	},
	{
		name: 'Solana',
		url: 'https://solana.com/',
		description: 'Solana is a public blockchain platform with smart contract functionality. Its native cryptocurrency is SOL.',
		explorer: 'https://explorer.solana.com/',
		ticker: 'SOL',
		keywords: ['solana', 'sol', 'coin', 'smart contracts', 'cryptocurrency', 'blockchain', 'open source', 'nft', 'fast', 'decentralized'],
	},
	{
		name: 'Doge',
		url: 'https://dogecoin.com/',
		description: 'Dogecoin is a meme cryptocurrency with the internet-famous Shiba Inu canine breed as a mascot.',
		explorer: 'https://dogechain.info/',
		ticker: 'DOGE',
		keywords: ['doge', 'shiba', 'meme coin', 'meme', 'coin', 'cryptocurrency', 'blockchain', 'open source', 'nft', 'decentralized'],
	},
	{
		name: 'OxygenX',
		url: 'https://oxygenx.live',
		description: 'OxygenX is a decentralized open source blockchain which provides ownership of NFTs with its native token OGX.',
		explorer: 'https://oxygenx.info/',
		ticker: 'OGX',
		keywords: ['oxygenx', 'ogx', 'coin', 'cryptocurrency', 'blockchain', 'open source', 'nft', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Nano',
		url: 'https://nano.org/news-resources',
		description: 'Nano is a peer-to-peer open-source cryptocurrency. Nano coin counts with instant transactions, zero transaction fees and a high degree of scalability.',
		explorer: 'https://nanolooker.com/',
		ticker: 'XNO',
		keywords: ['nano', 'xno', 'coin', 'cryptocurrency', 'blockchain', 'open source', 'decentralized', 'peer to peer', 'fast', 'raiblocks', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Algorand',
		url: 'https://www.algorand.com/',
		description: "Algorand is a proof-of-stake blockchain cryptocurrency protocol. Algorand's native cryptocurrency is called ALGO.",
		explorer: 'https://algoexplorer.io/',
		ticker: 'ALGO',
		keywords: ['algorand', 'algo', 'coin', 'cryptocurrency', 'blockchain', 'decentralized', 'dapps', 'open source', 'fast', 'nft', 'smart contracts', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Iota',
		url: 'https://www.iota.org/',
		description: "IOTA is an open-source distributed ledger and cryptocurrency designed for the Internet of things.",
		explorer: 'https://explorer.iota.org/',
		ticker: 'IOTA',
		keywords: ['iota', 'miota', 'coin', 'cryptocurrency', 'blockchain', 'decentralized', 'dapps', 'iot', 'internet of things', 'fast', 'nft', 'smart contracts', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Vite',
		url: 'https://www.vite.org/',
		description: "Vite is a zero-fee, lightning-fast blockchain for the decentralized economy.",
		explorer: 'https://vitescan.io/',
		ticker: 'VITE',
		keywords: ['vite', 'vitex', 'coin', 'cryptocurrency', 'blockchain', 'decentralized', 'dapps', 'fast', 'nft', 'smart contracts', 'eco-friendly', 'environment friendly'],
	},
	{
		name: 'Monero',
		url: 'https://www.getmonero.org/',
		description: 'Monero is a private, secure, untraceable, decentralised digital currency.',
		explorer: 'https://monerohash.com/explorer/',
		ticker: 'XMR',
		keywords: ['monero', 'xmr', 'private', 'coin', 'decentralized', 'digital currency', 'cryptocurrency', 'open source', 'crypto asset'],
	},
	{
		name: 'Filecoin',
		url: 'https://filecoin.io/',
		description: 'Filecoin is an open-source cloud storage marketplace, protocol, and incentive layer.',
		explorer: 'https://filfox.info/',
		ticker: 'FIL',
		keywords: ['filecoin', 'fil', 'private', 'coin', 'decentralized', 'digital currency', 'cryptocurrency', 'open source', 'crypto asset', 'cloud', 'storage'],
	},
	{
		name: 'Polygon',
		url: 'https://polygon.technology/',
		description: 'Polygon is an Ethereum token that powers the Polygon Network, a scaling solution for Ethereum.',
		explorer: 'https://polygonscan.com/',
		ticker: 'MATIC',
		keywords: ['polygon', 'matic', 'token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset'],
	},
	{
		name: 'Aave',
		url: 'https://aave.com/',
		description: 'Aave is a decentralized finance protocol that allows people to lend and borrow crypto',
		explorer: 'https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
		ticker: 'AAVE',
		keywords: ['aave', 'finance', 'token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset'],
	},
	{
			name:'uniswap',
			url:'https://uniswap.org/',
			description:'The Uniswap platform enables users to trade cryptocurrencies without any involvement with a centralized third party.',
			explorer:'https://info.uniswap.org/#/',
			ticker:'uniswap',
			keywords:['uniswap', 'finance', 'token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset'],
	},
	{
			name: 'Arbitrum',
			url: 'https://arbitrum.io/',
			description: 'Arbitrum is a Layer 2 scaling solution for the Ethereum blockchain that powers fast smart contract transactions while reducing transaction costs.',
			explorer: 'https://arbiscan.io/',
			ticker: 'ARB',
			keywords: ['arbitrum','ARB', 'finance', 'token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset'],
		},
		{
			name: 'Polkadot',
			url: 'https://www.polkadot.network/',
			description: 'Polkadot is a protocol that connects blockchains,thus allowing value and data to be sent across previously incompatible networks.',
			explorer: 'https://explorer.polkascan.io/polkadot',
			ticker: 'DOT',
			keywords: ['polkadot','DOT','finance', 'token','coin', 'decentralized', 'cryptocurrency','transparent','open source', 'crypto asset']
		},
			{
			name: 'Avalanche',
			url: 'https://www.avax.network/',
			description: 'Avalanche is a competitor to Ethereum that prioritizes scalability and transaction processing speed and AVAX is used to secure the Avalanche blockchain.',
			explorer: 'https://avascan.info/',
			ticker: 'AVAX',
			keywords: ['avalanche','AVAX','smart contracts','token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset']
		},
			{
			name: 'Cosmos',
			url: 'https://cosmos.network/',
			description: 'Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. Cosmos is a proof-of-stake chain.',
			explorer: 'https://atomscan.com/',
			ticker: 'ATOM',
			keywords: ['cosmos','ATOM','smart contracts','token', 'decentralized', 'cryptocurrency', 'open source', 'crypto asset']
		},
	// 	Resource Format - please follow the styling below.
	// 	{
	// 		name: '',
	// 		url: '',
	//		description: '',
	//		explorer: '',
	//		ticker: '',
	// 		keywords: ['']
	// 	},
];

exports.cryptocurrencies = cryptocurrencies;