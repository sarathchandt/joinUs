import axios from 'axios'
import * as Keychain from 'react-native-keychain';
import { getTokens } from './api';

const instance = axios.create({
    baseURL: 'http://999999:3000',
})

export const refreshToken = async () => {

    
    const credentials = await getTokens();    
    const token = credentials.refreshToken;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await instance.get("/getNewAccessToken");
    const accessToken = response?.data?.token;
    if (!accessToken) {
      await Keychain.resetGenericPassword();
      return;
    }
    const tokens = {
      accessToken: accessToken,
      refreshToken: credentials.refreshToken,
  };
  await Keychain.setGenericPassword("tokens", JSON.stringify(tokens));
    return accessToken;
  };
  
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      let originalRequest = error.config;
  
      if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        try {
          const accessToken: any = await refreshToken();
        
          if (!accessToken) return;
  
          instance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  
  export const addAuthHeader = (token: string) => {
    if (token) {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };
  
  export const deleteAuthHeader = () => {
    delete instance.defaults.headers.common.Authorization;
  };
  
  export default instance;