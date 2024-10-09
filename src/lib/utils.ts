export const isValidEmail=(email:string)=> {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  

  export const isValidOTP=(otp:string)=> {
    const regex = /^[0-9]{4}$/; 
    return regex.test(otp)
  }

  