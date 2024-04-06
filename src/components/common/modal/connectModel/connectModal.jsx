import { MainModel, ModelsData, Title, MainDiv } from "./connectModalElement";
import { Images } from "../../../../assets";
// import { useWalletConnectClient } from "services/walletServices";
import { IoClose } from "react-icons/io5";
import { Image } from "react-bootstrap";
import environment from "environment";

const ConnectModal = ({ closeModel }) => {
  // const { connect, connectWithInjected } = useWalletConnectClient();
  const handleWeb3MetaMask = async () => {
    // connectWithInjected(environment.DEFAULT_CHAIN);
    closeModel();
  };
  const handleWeb3WalletConnect = async () => {
    // connect(`eip155:${environment.DEFAULT_CHAIN}`);
    closeModel();
  };

  return (
    <MainModel>
      <ModelsData>
        <div className="icon">
          <IoClose
            onClick={closeModel}
            fontSize={20}
            color="rgba(179, 252, 131, 1)"
            cursor="pointer"
          />
        </div>
        <Title>connect WALLET</Title>
        <div className="main-div">
          <MainDiv onClick={handleWeb3MetaMask}>
            <Image src={Images.web3.metamask} />
            <h5>Metamask</h5>
          </MainDiv>
          <MainDiv onClick={handleWeb3WalletConnect}>
            <Image src={Images.web3.wallet} />
            <h5>wallet mobile connect</h5>
          </MainDiv>
        </div>
      </ModelsData>
    </MainModel>
  );
};

export default ConnectModal;
