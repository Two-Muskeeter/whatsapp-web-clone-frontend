import React, { useEffect, useState } from "react";
import Icon from "../Icon/index";

const alerts = [
	<div className="sidebar__alert sidebar__alert--info">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Get notified of new messages </p>
			<p className="sidebar__alert-text"> Turn on your notifications </p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--danger">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone battery low </p>
			<p className="sidebar__alert-text">
				Charge your phone to keep using Whatsapp.
			</p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--warning">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="noWifi" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone Not Connected</p>
			<p className="sidebar__alert-text">
				Make sure your phone has an active internet connection.{" "}
				<a
					className="underline"
					href="https://faq.whatsapp.com/web/troubleshooting/cant-connect-to-whatsapp-web-or-desktop/"
					target="_blank"
				>
					{" "}
					Learn more.{" "}
				</a>
			</p>
		</div>
	</div>,
];
const randomAlert = alerts.sort(() => 0.5 - Math.random())[0];

const Alert = () => {
	const [battery, setBattery] = useState({ level: 0, charging: false });

	const handleChange = ({ target: { level, charging } }) => {
		setBattery({ level, charging });
	}
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	useEffect(() => {
		// Update network status
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine);
		};
		let battery;
		navigator.getBattery().then(bat => {
			battery = bat;
			handleChange({ target: battery });
		});
		// Listen to the online status
		window.addEventListener('online', handleStatusChange);

		// Listen to the offline status
		window.addEventListener('offline', handleStatusChange);

		// Specify how to clean up after this effect for performance improvment
		return () => {
			window.removeEventListener('online', handleStatusChange);
			window.removeEventListener('offline', handleStatusChange);
		};

	}, [isOnline]);

	return <React.Fragment>
		{battery.level * 100 < 21 ? alerts[1] : !isOnline ? alerts[0] : alerts[2]}

	</React.Fragment>;
};

export default Alert;
