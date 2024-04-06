import React, { useState } from "react";
import { Image, Table } from "react-bootstrap";
import { TableDiv, UserTabSection } from "./elements";

const UsersTab = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "unblock",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
    {
      walletaddress: "0xd2...1b95",
      particpated: "1",
      won: "0",
      btntext: "block",
    },
  ];

  return (
    <UserTabSection>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          value={search}
          placeholder="Search by ID...."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <TableDiv
        id="usersDiv"
        style={{ overflowY: "scroll", maxHeight: "700px" }}
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="table-top-header text-center">Sr#</th>
              <th className="table-top-header text-center">Wallet Address</th>
              <th className="table-top-header text-center">
                Tournaments participated
              </th>
              <th className="table-top-header text-center">Tournaments Won</th>
              <th className="table-top-header text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td className="text-center table-top-header">{index + 1}</td>
                <td
                  style={{ cursor: "pointer" }}
                  className="text-center table-top-header"
                >
                  {item.walletaddress}
                </td>
                <td className="text-center table-top-header">
                  {item.particpated}
                </td>
                <td className="text-center table-top-header"> {item.won}</td>
                <td className="text-center table-top-header">
                  <div className="table-btn-div">
                    <button>{item.btntext}</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableDiv>
    </UserTabSection>
  );
};

export default UsersTab;
