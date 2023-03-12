import React, { useState } from 'react'
import "./styles/main.css";
import Icon from "../../components/Icon/index";
import useCookie from '../../hooks/useCookie'
import introImgLight from "../../assets/images/intro-connection-light.jpg";
import introImgDark from "../../assets/images/intro-connection-dark.jpg";
import { sendOtp, verifyLoginOtp } from '../../actions/login';
import constant from '../../constant';
const Login = () => {
    const [token, setToken, deleteToken] = useCookie(constant.keys.token);

    const darkTheme = document.body.classList.contains("dark-theme");
    const [otpSended, setOtpSended] = useState(false)
    const [state, setState] = useState(
        {
            mobile: { name: 'mobile', value: '', isRequired: true, error: '' },
            otp: { name: 'otp', value: '', isRequired: true, error: '' }
        }
    )
    const onSubmit = (e) => {
        e.preventDefault();
        if (!otpSended) {
            sendOtp({ mobile: state.mobile.value }).then(res => {
                if (res.status) {
                    setOtpSended(true)
                    alert(`${res.result.OTP} is your OTP for registration/access at Whatsapp Clone. OTP will be valid for 7 min only. Do not disclose it to anyone.`)
                }
                else {
                    console.error(res.error)
                }
            })
        }
        else {
            verifyLoginOtp({ mobile: state.mobile.value, otp: state.otp.value }).then(res => {
                if (res.status) {
                    setToken(res.result.token)
                    window.location.reload()
                }
                else {
                    console.error(res.error)
                }
            })
        }
    }
    const onChange = (e) => {
        const { value, name } = e.target;
        setState({ ...state, [name]: { ...state[name], value: value } })
    }
    return (
        <div className="home">
            <div className="home__img-wrapper">
                <div className="search-wrapper">
                    {/* <div className="search-icons"> */}
                    {/* <Icon id="search" className="search-icon" /> */}
                    {/* <button className="search__back-btn"> */}
                    {/* <Icon id="back" /> */}
                    {/* </button> */}
                    {/* </div> */}
                    <h2 > Verify your phone number</h2>
                    {!otpSended &&
                        <form onSubmit={onSubmit}>
                            <input className="search" placeholder="9999999999" name={state.mobile.name} value={state.mobile.value} onChange={(e) => onChange(e)} />
                            <button className='next' type='submit' disabled={state.mobile.value.length < 10 ? true : false}>Next </button>
                        </form>
                    }
                    {otpSended &&
                        <form onSubmit={onSubmit}>
                            <input className="search" placeholder="xxxxxx" name={state.otp.name} value={state.otp.value} onChange={(e) => onChange(e)} />
                            <button className='next' type='submit' disabled={state.mobile.value.length < 6 ? true : false}>Verify</button>
                        </form>
                    }

                </div>
                {/* <img
					src={darkTheme ? introImgDark : introImgLight}
					alt=""
					className="home__img"
				/> */}
            </div>

            <h1 className="home__title"> Keep your phone connected </h1>
            <p className="home__text">
                WhatsApp connects to your phone to sync messages. To reduce data usage,
                connect your phone to Wi-Fi.
            </p>
            <p className="home__text">
                <Icon id="laptop" className="home__icon" />
                <span>
                    WhatsApp is available for Mac.{" "}
                    <a
                        href="https://www.whatsapp.com/download"
                        target="_blank"
                        className="home__link"
                    >
                        {" "}
                        Get it here
                    </a>
                    .
                </span>
            </p>
        </div>
    );
}

export default Login