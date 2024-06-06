import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ChallengeTableDiv } from "./elements";
import { AdminChallengesService } from "services/adminChallengesService";

const ChallengeRewardsTab = () => {
  const [challenges, setChallenges] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [page, setPage] = useState(1);

  const onSearch = async (id) => {
    try {
      // Change this api, to return only rewards, with gameId in them.
      const result = await AdminChallengesService.challengeWinners(id);

      if (result.error) throw result.error;

      setRewards(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const getAllChallenges = async () => {
    try {
      const response = await AdminChallengesService.allChallenges(page);
      console.log(response);
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
    } catch (error) {
      console.log(error);
    }
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
                      onSearch(item._id);
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
