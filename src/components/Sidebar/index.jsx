import React from "react";
import "./styles/main.css";
import Icon from "../Icon/index";
import Alert from "./Alert";
import Contact from "./Contact";
import OptionsBtn from "../OptionsButton/index";
import profilePicture from '../../assets/images/profile-picture-default.jpg' 

const Sidebar = () => {
	let contacts = []
	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">
					<img src={profilePicture} alt="Karen Okonkwo" className="avatar" />
				</div>
				<div className="sidebar__actions">
					<button className="sidebar__action" aria-label="Status">
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button>
					<button className="sidebar__action" aria-label="New chat">
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
					<OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/>
				</div>
			</header>
			<Alert />
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search or start a new chat" />
			</div>
			<div className="sidebar__contacts">
				{/* {contacts.map((contact, index) => ( */}
					<Contact key={1} contact={[]} />
				{/* ))} */}
			</div>
		</aside>
	);
};

export default Sidebar;
