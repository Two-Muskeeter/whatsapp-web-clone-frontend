import * as Axios from "axios";
export const sendOtp = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/send-login-otp`;
    console.log(url)
    return Axios.post(url, model).then((res) => {
        return res.data;
    })
};

export const verifyLoginOtp = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/verify-login-otp`;
    console.log(url)
    return Axios.post(url, model).then((res) => {
        return res.data;
    })
};