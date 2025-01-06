import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

const createAxiosInstance = async () => {
  const userAgent = await DeviceInfo.getUserAgent();
  const deviceId = await DeviceInfo.getUniqueId();

  return axios.create({
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      'user-agent': userAgent,
      'TOK-DEVICE-ID': deviceId,
    },
  });
};

export default createAxiosInstance;
