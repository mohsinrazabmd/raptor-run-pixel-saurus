import React, { useEffect, useMemo, useState } from "react";
import { FormWrapper, MainHeader } from "./elements";
import { Col, Form, Row } from "react-bootstrap";
import { DatePicker } from "antd";
import { getUnixTime, isBefore } from "date-fns";
import MultipleValueTextInput from "react-multivalue-text-input";
import { GetLiveChallengesHookAdmin } from "hooks/adminChallengesHook";
import showErrorToast from "components/toasts/errorToast";
import showSuccessToast from "components/toasts/successToast";
import { AdminChallengesService } from "services/adminChallengesService";
const CreateChallengeTab = () => {
  const initialValues = {
    rewardPercentages: [],
    endTime: null,
    startTime: null,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const {
    loading,
    setLoading,
    upcomingChallenges,
    liveChallenge,
    insertChallenge,
  } = GetLiveChallengesHookAdmin();

  const rewardPercentages = useMemo(() => {
    const rewardPercentages = formValues.rewardPercentages.map((item) =>
      item.toString()
    );
    return rewardPercentages;
  }, [formValues.rewardPercentages]);
  const submitForm = async (e) => {
    e.preventDefault();

    const startTime = new Date(formValues.startTime?.valueOf() || 0);
    const endTime = new Date(formValues.endTime?.valueOf() || 0);
    try {
      const rewards = rewardPercentages.map((p) => {
        const reward = Number(p);

        if (isNaN(reward) || reward === 0) {
          throw "Enter valid Reward percentages";
        }

        return reward;
      });

      if (rewards.length === 0) {
        throw "Enter valid reward percentages";
      } else if (!formValues.startTime) {
        throw "Please select a start time";
      } else if (isBefore(startTime, Date.now())) {
        throw "Challenge start time is in past";
      } else if (!formValues.endTime) {
        throw "Please select an end time";
      } else if (isBefore(endTime, Date.now())) {
        throw "Challenge end time is in past";
      } else if (isBefore(endTime, startTime)) {
        throw "Challenge end time is before start time";
      }

      const challenge = {
        rewards: rewards,
        startTime,
        endTime,
        gameId: 1,
      };

      const result = await AdminChallengesService.createChallenge(challenge);

      if (result.data) insertChallenge({ _id: result.data._id, ...challenge });

      if (result.error) throw result.error;

      setFormValues(initialValues);

      showSuccessToast("Success", "Challenge Created");
    } catch (error) {
      if (error?.error) {
        console.log("handle submit error", error?.error);
        showErrorToast("Error", error?.error);
      } else {
        showErrorToast("Error", error);
      }

      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MainHeader>Create Challenge</MainHeader>
      {upcomingChallenges &&
        upcomingChallenges.length > 0 &&
        upcomingChallenges.map((challenge) => (
          <div
            style={{
              background: "white",
              borderRadius: "0.5rem",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>Upcoming challenge</div>
            <div>Start: {challenge?.startTime?.toString()}</div>

            <div>End: {challenge?.endTime?.toString()}</div>
          </div>
        ))}

      {liveChallenge && (
        <div
          style={{
            background: "white",
            borderRadius: "0.5rem",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>Live challenge</div>
          <div>Start: {liveChallenge.startTime.toString()}</div>

          <div>End: {liveChallenge.endTime.toString()}</div>
        </div>
      )}

      <FormWrapper>
        <Form>
          <Row className="main-row">
            <Form.Group>
              <Form.Label>Rewards:</Form.Label>

              <MultipleValueTextInput
                values={formValues.rewardPercentages}
                className="form-control"
                name="item-input"
                type="number"
                placeholder=""
                onItemAdded={(item, allItems) => {
                  setFormValues({
                    ...formValues,
                    rewardPercentages: allItems,
                  });
                }}
                onItemDeleted={(item, allItems) => {
                  setFormValues({
                    ...formValues,
                    rewardPercentages: allItems,
                  });
                }}
              />
            </Form.Group>
          </Row>

          <Row className="main-row">
            <Col className="main-col" lg={4}>
              <Form.Group>
                <Form.Label> Start Time:</Form.Label>
              </Form.Group>
              <DatePicker
                value={formValues.startTime}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                disabledDate={(currentDate) =>
                  currentDate.isSameOrBefore(new Date().setHours(0, 0, 0))
                }
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    startTime: e,
                  });
                }}
              />
            </Col>
            <Col className="main-col" lg={4}>
              <Form.Group>
                <Form.Label> End Time:</Form.Label>
              </Form.Group>
              <DatePicker
                value={formValues.endTime}
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                disabledDate={(currentDate) =>
                  currentDate.isSameOrBefore(new Date().setHours(0, 0, 0))
                }
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    endTime: e,
                  });
                }}
              />
            </Col>
          </Row>

          <div className="btn-div">
            <button onClick={submitForm}>Create</button>
          </div>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default CreateChallengeTab;
