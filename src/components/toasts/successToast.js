import { notification } from "antd";

const showSuccessToast = (title, message) => {
  notification["success"]({
    message: title,
    description: message,
    duration: 5.2,
  });
};

export default showSuccessToast;
