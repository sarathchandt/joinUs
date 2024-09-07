import axios from 'axios'
import * as Keychain from 'react-native-keychain';

const instance = axios.create({
    baseURL: 'http://192.168.124.186:3000',
})

export const refreshToken = async () => {

    
    const credentials:any = (await Keychain.getGenericPassword()) || "";
    const token = credentials.refreshToken;
  
    const response = await instance.post("getNewAccessToken", {
      refreshToken: token,
    });
    const accessToken = response?.data?.token;
    if (!accessToken) {
      await Keychain.resetGenericPassword();
      return;
    }
    await Keychain.setGenericPassword("accessToken", accessToken);
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
          // const accessToken = response?.data?.message;
          // if (!accessToken) {
          //   await SecureStore.deleteItemAsync("UserAccessTokenToken");
          //   await SecureStore.deleteItemAsync("UserRefreshToken");
          //   return;
          // }
          // await SecureStore.setItemAsync("UserAccessTokenToken", accessToken);
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