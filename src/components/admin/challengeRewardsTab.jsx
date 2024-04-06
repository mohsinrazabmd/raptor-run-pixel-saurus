import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ChallengeTableDiv } from "./elements";
import { AdminChallengesService } from "services/adminChallengesService";

const ChallengeRewardsTab = () => {
  const [challenges, setChallenges] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const Tabledata = [
    {
      game: "Clumsy Pepe",
      walletaddress: "0x578d229734b1bbaed38e79d470461692263bc5b0",
      score: "22",
      duration: "10",
    },
    {
      game: "Clumsy Pepe",
      walletaddress: "0x578d229734b1bbaed38e79d470461692263bc5b0",
      score: "22",
      duration: "10",
    },
    {
      game: "Clumsy Pepe",
      walletaddress: "0x578d229734b1bbaed38e79d470461692263bc5b0",
      score: "22",
      duration: "10",
    },
  ];
  const onSearch = async () => {
    try {
      // Change this api, to return only rewards, with gameId in them.
      const result = await AdminChallengesService.challengeWinners(search);

      if (result.error) throw result.error;

      setRewards(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };
  useEffect(() => {
    onSearch();
  }, [search]);

  const gamedata = [
    {
      name: "Clumsy Pepe",
      status: "Ended",
      starttime: "Start: 4/1/2024, 12:22:16 PM",
      endtime: "End: 4/2/2024, 12:18:22 PM",
    },
    {
      name: "Clumsy Pepe",
      status: "Ended",
      starttime: "Start: 4/1/2024, 12:22:16 PM",
      endtime: "End: 4/2/2024, 12:18:22 PM",
    },
    {
      name: "Clumsy Pepe",
      status: "Ended",
      starttime: "Start: 4/1/2024, 12:22:16 PM",
      endtime: "End: 4/2/2024, 12:18:22 PM",
    },
  ];

  const getAllChallenges = async () => {
    const response = await AdminChallengesService.allChallenges(page);
    setChallenges(response.data);
    setChallenges(
      response.data.challenges.map((challenge) => {
        return {
          ...challenge,
          startTime: new Date(challenge.startTime).toLocaleString(),
          endTime: new Date(challenge.endTime).toLocaleString(),
        };
      })
    );
  };

  useEffect(() => {
    getAllChallenges();
  }, [page]);

  return (
    <div>
      <ChallengeTableDiv>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="table-top-header text-center">S.NO</th>
              <th className="table-top-header text-center">Name</th>
              <th className="table-top-header text-center">Status</th>
              <th className="table-top-header text-center">Start Time</th>
              <th className="table-top-header text-center">End Time</th>
              <th className="table-top-header text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((item, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">Raptor Run</td>
                <td style={{ cursor: "pointer" }} className="text-center">
                  {item.status}
                </td>
                <td className="text-center">
                  <div>{item.startTime.toString()}</div>
                </td>
                <td className="text-center">
                  <div>{item.endTime.toString()}</div>
                </td>
                <div className="table-btn-div">
                  <button
                    onClick={() => {
                      setSearch(item._id);
                      onSearch();
                    }}
                  >
                    Select
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={() => setPage((prev) => prev + 1)}>Next page</button>
        <div style={{ color: "white" }}>{page}</div>
        <button onClick={() => setPage((prev) => prev - 1)}>Prev page</button>
      </ChallengeTableDiv>

      <ChallengeTableDiv>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="table-top-header text-center">Position</th>
              <th className="table-top-header text-center">Game</th>
              <th className="table-top-header text-center"> Wallet Address</th>
              <th className="table-top-header text-center">Score</th>
              {/* <th className="table-top-header text-center">Seconds Duration</th> */}
            </tr>
          </thead>
          <tbody>
            {rewards.length > 0 &&
              rewards.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">Raptor Run</td>
                  <td style={{ cursor: "pointer" }} className="text-center">
                    {item.user_id}
                  </td>
                  <td className="text-center">{item.score}</td>
                  {/* <td className="text-center">{item.duration}</td> */}
                </tr>
              ))}
            {rewards.length === 0 && (
              <div
                style={{ color: "white", textAlign: "center", padding: "12px" }}
              >
                Nobody played this challenge
              </div>
            )}
          </tbody>
        </Table>
      </ChallengeTableDiv>
    </div>
  );
};

export default ChallengeRewardsTab;
