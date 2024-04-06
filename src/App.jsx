import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/store";
import { updateAccount } from "store/redux/slices/wallet3Connect/web3ConnectSlice";
import { useEffect } from "react";
import GlobalStyle from "globalStyles";
import { Home } from "pages";
import Admin from "pages/admin";

function App() {
  const dispatch = useAppDispatch();

  const { web3 } = useAppSelector((state) => state.web3Connect);

  // account switch
  useEffect(() => {
    web3 &&
      window.ethereum.on("accountsChanged", async (data) => {
        dispatch(updateAccount({ account: data[0] }));
      });
  }, [web3]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
