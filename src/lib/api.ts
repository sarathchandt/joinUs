import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import client, {addAuthHeader} from './client';

const apiEndPoints = {
  SENTOTP: '/sentOtp',
  VERIFYOTP: '/verifyOtp',
};

export const getTokens = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    const tokens = JSON.parse(credentials.password);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  } else {
    return {
      accessToken: '',
      refreshToken: '',
    };
  }
};

export const sentOtp = async (body: any) => {
  const response = await client.post(apiEndPoints.SENTOTP, body);
  return response.data;
};

export const verifyOtp = async (body: any) => {
  const response = await client.post(apiEndPoints.VERIFYOTP, body);
  return response.data;
};

export const getUser = async () => {
  const {accessToken} = (await getTokens()) 
  addAuthHeader(accessToken);
  const response = await client.get('/getUser');
  return response.data;
};
