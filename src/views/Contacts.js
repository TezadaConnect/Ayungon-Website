import React from 'react';
import { Outlet } from 'react-router-dom';

const Contacts = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Contacts;
