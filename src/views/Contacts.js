import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const Contacts = () => {
	return (
		<div>
			<div className="w-screen h-96"></div>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Contacts;
