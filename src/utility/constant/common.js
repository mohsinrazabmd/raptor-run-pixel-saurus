// import { Images } from 'images'

export const CommonConstant = {
  defaultPageSize: 20,
  mode: process.env.REACT_APP_MODE,
  maxBonus: 10 ** 18,
  totemChart: "https://coinmarketcap.com/currencies/totem-new-earth-systems/",
};

export const UserRoles = {
  Admin: "admin",
  User: "user",
};

export const AdminWallets = [
  "0x6397c85634AEa4ea9536721fc884CD3bF6b9DA0c",
  "0x578D229734B1BBAED38e79d470461692263BC5b0",
  "0xE2de4A890b68054e897147c17Afe0c2177F4f9bc",
  "0x8e665eaa7551c42b94feca5c52977d22d77d508b",
  "0x8D91D1Bb6A67ed5e105355CAf1436e517E1293Fd",
  "0x3963a46c134b962100496B16Fcd21c12d164b0B7",
  "0x40EC13DC211bD727EE8f7DF50bE9F635809b9dD1",
];

export const ErrorConstant = {
  default: "Something went wrong",
};

export const StorageConstant = {
  token: "token",
  termsAndCondition: "termsAndCondition",
  versionUpdate: "versionUpdate",
};

export const AuthType = {
  ADMIN_PAGE: "ADMIN_PAGE",
  LOGIN_PAGE: "LOGIN_PAGE",
};

export const LoginState = {
  init: "init",
  processing: "processing",
  error: "error",
  success: "success",
};

export const Ipfs = {
  PATH: "https://ipfs.infura.io/ipfs",
  ADDRESS: "https://ipfs.infura.io:5001/api/v0",
};

export const TransactionType = {
  Flexible: 0,
  Locked: 1,
};
export const app = {
  IPFS_PATH: "https://ipfs.infura.io/ipfs",
};

export const Protocols = {
  ethereum: {
    name: "ethereum",
    chainId: {
      mainnet: "0x1",
      testnet: "0x5",
    },

    assetUrl: {
      mainnet: "https://etherscan.io/address",
      testnet: "https://goerli.etherscan.io/address",
    },
    tokenUrl: {
      mainnet: "https://etherscan.io/token",
      testnet: "https://goerli.etherscan.io/token",
    },
    txUrl: {
      mainnet: "https://etherscan.io/tx",
      testnet: "https://goerli.etherscan.io/tx",
    },
  },
  bsc: {
    name: "bsc",
    chainId: {
      mainnet: "0x38",
      testnet: "0x61",
    },
    assetUrl: {
      mainnet: "https://bscscan.com/address",
      testnet: "https://testnet.bscscan.com/address",
    },
    tokenUrl: {
      mainnet: "https://bscscan.com/token",
      testnet: "https://testnet.bscscan.com/token",
    },
    txUrl: {
      mainnet: "https://bscscan.com/tx",
      testnet: "https://testnet.bscscan.com/tx",
    },
  },
  polygon: {
    name: "polygon",
    chainId: {
      mainnet: "0x89",
      testnet: "0x89",
    },
    assetUrl: {
      mainnet: "https://polygonscan.com/address",
      testnet: "https://mumbai.polygonscan.com/address",
    },
    tokenUrl: {
      mainnet: "https://polygonscan.com/token",
      testnet: "https://mumbai.polygonscan.com/token",
    },
    txUrl: {
      mainnet: "https://polygonscan.com/tx",
      testnet: "https://mumbai.polygonscan.com/tx",
    },
  },
  avax: {
    name: "avax",
    chainId: {
      mainnet: "0xa86a",
      testnet: "0xa86a",
    },
  },
};

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};
