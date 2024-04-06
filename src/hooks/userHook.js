import { UserService } from "services/userServices";
import { CommonUtility } from "utility/common";

const { CommonHook } = require("./commonHook");

export const CreateUserHook = () => {
  const { data, setData, error, setError, loading, setLoading } = CommonHook();

  const createUser = async (data) => {
    try {
      setLoading(true);
      const result = await UserService.createUser(data);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    createUser,
    data,
    loading,
    error,
  };
};

export const AddUserRewardHook = () => {
  const { data, setData, error, setError, loading, setLoading } = CommonHook();

  const addUserReward = async (data) => {
    try {
      setLoading(true);
      const result = await UserService.addUserReward(data);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    addUserReward,
    data,
    loading,
    error,
  };
};

export const AddUserProfileHook = () => {
  const { data, setData, error, setError, loading, setLoading } = CommonHook();

  const addUserProfile = async (data) => {
    try {
      setLoading(true);
      const result = await UserService.addUserProfile(data);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    addUserProfile,
    data,
    loading,
    error,
  };
};
export const GetUserProfileHook = () => {
  const { data, setData, error, setError, loading, setLoading } = CommonHook();

  const getUserProfile = async (walletAddress) => {
    try {
      setLoading(true);
      const result = await UserService.getUserProfile(walletAddress);
      setData(result.data);
      return result.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getUserProfile,
    data,
    loading,
    error,
  };
};
export const GetProbabilityRatioHook = () => {
  const { data, setData, error, setError, loading, setLoading } = CommonHook();

  const getProbabilityRatio = async () => {
    try {
      setLoading(true);
      const result = await UserService.getProbabilityRatio();
      let decryptedData = CommonUtility.decrypt(result.data);
      decryptedData = JSON.parse(decryptedData);
      setData(decryptedData);
      return decryptedData;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    getProbabilityRatio,
    data,
    loading,
    error,
  };
};
