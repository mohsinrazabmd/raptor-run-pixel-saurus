import React, { useEffect, useState } from "react";
import { MainSection } from "./elements";
import Navbar from "./nav";
import Tabs from "./tabs";
import { Loader } from "components/common";
import LoginWithGoogle from "./loginWithGoogle";
import { AdminAuthService } from "services/adminAuthService";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "PIXEL SAURUS ADMIN PANEL";
  }, []);

  let [user, setUser] = useState(true);
  const getUser = async () => {
    try {
      const data = await AdminAuthService.getUserAuth();

      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   // getUser();
  }, []);
  if (loading) {
    return <Loader />;
  } else if (!user) {
    return <LoginWithGoogle />;
  } else {
    return (
      <MainSection>
        <Navbar />
        <Tabs />
      </MainSection>
    );
  }
};

export default AdminPanel;
