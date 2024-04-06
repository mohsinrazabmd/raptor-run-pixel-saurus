import { notification } from "antd";

const showErrorToast = (title, message) => {
  notification["error"]({
    message: title,
    description: message,
    duration: 5.2,
  });
};

export default showErrorToast;
