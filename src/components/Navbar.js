import React, { useEffect, useRef } from 'react';
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
		route: '#',
		more: [
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
		],
	},
	{
		label: 'Offices',
		route: 'offices',
	},
	{
		label: 'Officials',
		route: 'officials',
	},
];

const classnameOne =
	'cursor-pointer absolute bg-white w-full flex-col gap-2 hidden';

const Navbar = () => {
	const navigate = useNavigate();
	const drop = useRef([]);

	const openDropDown = (index) => {
		const div = drop.current[index];

		if (div.className === classnameOne) {
			div.className =
				'cursor-pointer absolute bg-white w-full flex-col gap-2 flex';
		} else {
			div.className = classnameOne;
		}
	};

	const removeSelected = () => {
		// MAKE A MOCK ARRAY
		// MODIFY CLASSNAME OF ALL INDEX

		routeInformation.forEach((value, i) => {
			if (value.route === '#') {
				const div = drop?.current[i];
				div.className = classnameOne;
			}
		});
	};
	return (
		<div className="w-screen bg-green-600">
			<div className="flex lg:flex-row flex-col justify-between items-center w-10/12 m-auto">
				<div className="p-2">
					<img
						className="w-[550px] "
						src={AyungonHeader}
						alt=""
					/>
				</div>

				<div className="p-3">
					<h2 className="font-Cinzel flex flex-col lg:items-end items-center">
						<span>Philippine Standard Time</span>
						<br />
						<span>Wednesday, August 29, 2022, 12:54:16 PM</span>
					</h2>
				</div>
			</div>

			{/* Navigation bar */}
			<div className="">
				<div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-5 font-Cinzel font bg-white drop-shadow-lg  p-3 ">
					{routeInformation?.map((item, key) => {
						if (item.route !== '#') {
							return (
								<div
									key={key}
									className="cursor-pointer hover:scale-105 p-2"
									onClick={() => {
										removeSelected();
										navigate(item.route);
									}}
								>
									{item.label}
								</div>
							);
						}

						return (
							<DropDownComponent
								key={key}
								item={item}
								reference={drop}
								iteration={key}
								remove={removeSelected}
								openDropDown={openDropDown}
								navigate={navigate}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

const DropDownComponent = ({
	item,
	reference,
	iteration,
	remove,
	openDropDown,
	navigate,
}) => {
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			// If the menu is open and the clicked target is not within the menu, then close the menu
			if (
				reference.current[iteration] &&
				!reference.current[iteration].contains(e.target)
			) {
				remove(iteration);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
		// eslint-disable-next-line
	}, [reference]);

	return (
		<div className="relative">
			<div
				className="cursor-pointer hover:scale-105 p-2"
				onClick={(e) => {
					openDropDown(iteration);
				}}
			>
				{item?.label}
			</div>
			<div
				ref={(el) => (reference.current[iteration] = el)}
				className="cursor-pointer absolute bg-white w-full flex-col gap-2 hidden"
			>
				{item?.more?.map((element, i) => {
					return (
						<div
							key={i}
							className="hover:bg-slate-200 p-2"
							onClick={() => {
								remove();
								navigate(element.route);
							}}
						>
							{element.label}
						</div>
					);
				})}
			</div>
		</div>
	);
};
