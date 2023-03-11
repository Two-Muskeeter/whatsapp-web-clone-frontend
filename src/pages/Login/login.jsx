import React, { useState } from 'react'
import "./styles/main.css";
import Icon from "../../components/Icon/index";
import introImgLight from "../../assets/images/intro-connection-light.jpg";
import introImgDark from "../../assets/images/intro-connection-dark.jpg";
const Login = () => {
    const darkTheme = document.body.classList.contains("dark-theme");
    const [otpSended, setOtpSended] = useState(false)
    const onSubmit = () => {
        if (otpSended) {

        }
        else {

        }
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
                            <input className="search" placeholder="9999999999" />
                            <button className='next' type='submit'>Next </button>
                        </form>
                    }
                    {otpSended &&
                        <form onSubmit={onSubmit}>
                            <input className="search" placeholder="xxxxxx" />
                            <button className='next' type='submit'>Verify</button>
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