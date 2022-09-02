import React from 'react';
import AyungonHeader from '../assets/AyungonHeader.png';
const Navbar = ({ setView }) => {
	const viewHandler = (status) => {
		setView(status);
	};
	return (
		<div>
			<div className="flex bg-green-600 w-screen justify-between items-center">
				<div>
					<img
						className="w-80 "
						src={AyungonHeader}
						alt=""
					/>
				</div>

				<div className="p-3">
					<h2 className="font-Cinzel">
						Philippine Standard Time: <br /> Wednesday, August 29, 2022,
						12:54:16 PM
					</h2>
				</div>
			</div>

			{/* Navigation bar */}
			<div className="">
				<div className="flex flex-row justify-center items-center gap-20 font-Cinzel font bg-white drop-shadow-lg  p-3 ">
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(1);
						}}
					>
						Home
					</div>
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(2);
						}}
					>
						Full Disclosure
					</div>
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(3);
						}}
					>
						Bids and Awards
					</div>
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(4);
						}}
					>
						About The Town
					</div>
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(5);
						}}
					>
						Offices
					</div>
					<div
						className="cursor-pointer hover:scale-105"
						onClick={() => {
							viewHandler(6);
						}}
					>
						Officials
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
