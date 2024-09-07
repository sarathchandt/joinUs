import axios from "axios";
import * as Keychain from 'react-native-keychain';
import client, { addAuthHeader } from "./client";


const apiEndPoints = {
    SENTOTP: "/sentOtp",
}


export const sentOtp = async (body: any) => {

    const response = await client.post(apiEndPoints.SENTOTP, body);
    return response.data;
  };
  