import React, { useState } from "react";
import { TabsBtmWrappers, TabsButton } from "./elements";
import CreateChallengeTab from "./createChallengeTab";
import ChallengeRewardsTab from "./challengeRewardsTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("create-challenge");

  return (
    <div className="container">
      <TabsBtmWrappers>
        <TabsButton
          onClick={() => setActiveTab("create-challenge")}
          className={`${activeTab === "create-challenge" ? "active" : ""}`}
        >
          Create Challenge
        </TabsButton>
        <TabsButton
          onClick={() => setActiveTab("challenge-rewards")}
          className={`${activeTab === "challenge-rewards" ? "active" : ""}`}
        >
          CHALLENGE REWARDS
        </TabsButton>
      </TabsBtmWrappers>

      <div className="mt-5">
        {activeTab === "users" ? (
          <>{/* <UsersTab /> */}</>
        ) : activeTab === "create-challenge" ? (
          <>
            <CreateChallengeTab />
          </>
        ) : (
          <>
            <ChallengeRewardsTab />
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
