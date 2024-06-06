// import Game from "components/game";
import Game from "components/game";
import Navbar from "components/navbar";
import { useEffect } from "react";
import { setSocketInstance } from "store/redux/slices/socket/socketSlice";
import { useAppDispatch } from "store/store";
import { PackagesUtility } from "utility/packagesUtility";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if (!user) return;

    const socket = PackagesUtility.socketIO();

    dispatch(setSocketInstance(socket));

    return () => {
      console.log("socket disconnected");
      socket?.disconnect();
    };
  });

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
