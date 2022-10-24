import React from 'react';
import { useNavigate } from 'react-router-dom';
import AyungonHeader from '../assets/AyungonHeader.png';
import AbanteAyungon from '../assets/AbanteAyungon.png';

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
		label: 'Officials',
		route: 'officials',
	},
	// x`
	{
		label: 'About Town',
		route: '#',
	},
];

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen bg-green-600">
			<div className="flex lg:flex-row flex-col justify-between items-center w-10/12 m-auto ">
				<div className="p-2">
					<img
						className="w-[550px] "
						src={AyungonHeader}
						alt=""
					/>
				</div>

				<div className="p-3">
					<div>
						<img
							className="w-52 drop-shadow-4xl"
							src={AbanteAyungon}
							alt="AbanteAyungon"
						/>
					</div>
				</div>
			</div>

			{/* Navigation bar */}
			<div className="">
				<div className="flex lg:flex-row flex-col justify-center uppercase  items-center lg:gap-20 gap-3 font-Cinzel text-sm bg-white drop-shadow-lg p-3 z-20">
					{routeInformation?.map((item, key) => {
						return (
							<div
								key={key}
								className="cursor-pointer hover:scale-105 p-2 "
								onClick={() => {
									let dropBar = document.getElementById('nav-drop');
									if (item.route === '#') {
										if (dropBar.offsetParent === null) {
											return (dropBar.style.display = 'initial');
										} else {
											console.log('Hello');
											return (dropBar.style.display = null);
										}
									}
									navigate(item?.route);
									dropBar.style.display = null;
								}}
							>
								{item?.label}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

export const DropBarNavigation = () => {
	const more = [
		{
			label: 'History',
			route: '/about-town/history',
		},
		{
			label: 'Culture',
			route: '/about-town/culture',
		},
		{
			label: 'Tradition',
			route: '/about-town/tradition',
		},
		{
			label: 'Barangays',
			route: '/about-town/barangays',
		},
	];
	const Offices = [
		{
			label: "Mayor's Office",
			route: '/offices/mayors-office',
		},
		{
			label: 'Tourism Office',
			route: '/office/tourism-office',
		},
	];

	const navigate = useNavigate();

	return (
		<div
			id="nav-drop"
			className="hidden"
		>
			<div className="bg-white shadow-md w-full ">
				<div className="flex lg:flex-row flex-col justify-center  gap-10">
					<div>
						<div className="font-Cinzel text-xl flex justify-center">
							<h1>ABOUT THE TOWN</h1>
						</div>
						<div className="w-9/12 m-auto grid grid-rows-3 justify-start g pt-2 font-Cinzel">
							{more?.map((item, i) => {
								return (
									<div
										key={i}
										onClick={() => {
											navigate(item.route);
											document.getElementById('nav-drop').style.display = null;
										}}
										className="cursor-pointer hover:underline decoration-green-600 decoration-2 shadow-sm p-1"
									>
										{item.label}
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<div className="font-Cinzel flex justify-center text-xl">
							<h1>Offices</h1>
						</div>
						<div className="w-9/12 m-auto grid grid-rows-3 lg:grid-flow-col justify-start g pt-2 font-Cinzel">
							{Offices?.map((item, i) => {
								return (
									<div
										key={i}
										onClick={() => {
											navigate(item.route);
											document.getElementById('nav-drop').style.display = null;
										}}
										className="cursor-pointer hover:underline decoration-green-600 decoration-2 shadow-sm p-1"
									>
										{item.label}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
