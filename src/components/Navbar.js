import React from 'react';
import { useNavigate } from 'react-router-dom';
import AyungonHeader from '../assets/AyungonHeader.png';

const routeInformation = [
	{
		label: 'Home',
		route: 'home',
	},
	{
		label: 'Full Disclosure',
		route: 'disclosure',
	},
	{
		label: 'Bids and Awards',
		route: 'bids-rewards',
	},
	{
		label: 'About Town',
		route: 'NA',
	},
	{
		label: 'Offices',
		route: 'NA',
	},
	{
		label: 'Officials',
		route: 'officials',
	},
];

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen bg-green-600 ">
			<div className="flex lg:flex-row flex-col justify-between items-center w-screen">
				<div>
					<img
						className="w-[550px] py-3 "
						src={AyungonHeader}
						alt=""
					/>
				</div>
			</div>

			{/* Navigation bar */}
			<div className="">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-5 font-Cinzel font bg-white drop-shadow-lg  p-3 ">
					{routeInformation?.map((item, key) => {
						return (
							<div
								key={key}
								className="cursor-pointer hover:scale-105  "
								onClick={() => {
									if (item.route === 'NA') {
										return null;
									}
									navigate(item.route);
								}}
							>
								{item.label}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
