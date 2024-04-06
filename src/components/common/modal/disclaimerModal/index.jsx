import React from "react";
import { ModelsData, ProfileBtn, Text, Title } from "./elements";
import { IoClose } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const DisclaimerModal = ({ handleCancel }) => {
  return (
    <div>
      <ModelsData>
        <div className="icon">
          <IoClose
            fontSize={20}
            color="rgba(179, 252, 131, 1)"
            cursor="pointer"
            onClick={handleCancel}
          />
        </div>
        <Title>Disclaimer</Title>
        <Text>
          In order to receive your prize, please fill out the details in your profile. Your details are kept strictly private and will not be sent to any third party.
        </Text>
        <Link to="/profile">
          <ProfileBtn>
            <FaRegCircleUser />
            &nbsp; Profile
          </ProfileBtn>
        </Link>
      </ModelsData>
    </div>
  );
};

export default DisclaimerModal;
