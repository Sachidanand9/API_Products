// contains all utility methods...
import { notification } from 'antd';

//display notification
export const openNotify = (type, desc, message) => {
  notification[type]({
    message: desc,
    description: message,
  });
};