import React from 'react';
import ayungonLogo from '../assets/ayungonLogo.png';
import MayorDennis from '../assets/MayorDennis.png';
import ViceMayorNelda from '../assets/ViceMayorNelda.png';

import SBchristian from '../assets/SBchristian.png';
import SBlee from '../assets/SBlee.png';
import SBdensio from '../assets/SBdensio.png';
import SBkeith from '../assets/SBkeith.png';

import SBesay from '../assets/SBesay.png';
import SBjoseph from '../assets/SBJoseph.png';
import SBroger from '../assets/SBroger.png';
import SBromulo from '../assets/SBromulo.png';

import ABCchona from '../assets/ABCchona.png';
import SKjasper from '../assets/SKjasper.png';
import Footer from '../components/Footer';

const Mayors = [
	{
		name: 'Hon. Dennis N. Amancio',
		image: MayorDennis,
		alter: 'MayorDennis',
		title: 'LOCAL CHIEF Executive',
	},
	{
		name: 'Hon. Nelda A. Favillaran',
		image: ViceMayorNelda,
		alter: 'ViceMayorNelda',
		title: 'VICE MAYOR',
	},
];

const SBmembers = [
	{
		name: 'Hon. Christian T. Opada',
		image: SBchristian,
		alter: 'SBchristian',
		title: 'SB MEMBER',
	},
	{
		name: 'Hon. Lee F. Dy',
		image: SBlee,
		alter: 'VSBlee',
		title: 'SB MEMBER',
	},

	{
		name: 'Hon. DENNIS ANTHONY M. DENSING',
		image: SBdensio,
		alter: 'SBdensio',
		title: 'SB MEMBER',
	},
	{
		name: 'Hon. Keith B. Enardecido',
		image: SBkeith,
		alter: 'SBkeith',
		title: 'SB MEMBER',
	},
];

const SBMembers = [
	{
		name: 'Hon. Tessa Claire M. Olveros',
		image: SBesay,
		alter: 'SBesay',
		title: 'SB MEMBER',
	},
	{
		name: 'Hon. Joseph Dayahan',
		image: SBjoseph,
		alter: 'SBjoseph',
		title: 'SB MEMBER',
	},

	{
		name: 'Hon. Roger O. Baldado',
		image: SBroger,
		alter: 'SBroger',
		title: 'SB MEMBER',
	},
	{
		name: 'Hon. Romulo R. Alforque',
		image: SBromulo,
		alter: 'SBromulo',
		title: 'SB MEMBER',
	},
];

const SKmembers = [
	{
		name: 'Hon. Chona A. Agustino',
		image: ABCchona,
		alter: 'ABCchona',
		title: 'ABC MEMBER',
	},
	{
		name: 'Hon. Jasper Jacob M. Nusan',
		image: SKjasper,
		alter: 'SKjasper',
		title: 'SK CHAIRMAN',
	},
];

const Officials = () => {
	return (
		<div>
			{/* Ayungon Logo */}
			<div className="flex flex-col itme bg-slate-200 lg:w-[1267px]  m-auto pb-36">
				<div className="bg-hero-pattern flex lg:w-fit  bg-no-repeat bg- drop-shadow-lg">
					<div className="flex flex-col  items-center  w-[1267px] h-[330px] lg:justify-start justify-center p-2 -z-0">
						<div className="items-center text-center  relative">
							<img
								className="w-40 relative"
								src={ayungonLogo}
								alt="Ayungon Logo"
							/>
						</div>
						<div className="flex  pt-5 font-Cinzel text-center font-bold lg:text-4xl text-2xl flex-col items-center">
							<h1>Municipality Of Ayungon</h1>
							<h1>Officials</h1>
						</div>
					</div>
				</div>

				{/* Ayungon Logo */}

				{/* MayorDennis */}
				<div className=" flex lg:flex-row  pt-6 flex-col justify-center items-center text-center  gap-5	">
					{Mayors?.map((item, key) => {
						return (
							<React.Fragment key={key}>
								<div className="flex flex-row justify-center items-center">
									<div className="">
										<img
											className="w-72 h-72 object-contain"
											src={item?.image}
											alt={item?.alter}
										/>
										<div className="font-Cinzel flex flex-col justify-center items-center ">
											<div className=" justify-center items-center text-lg ">
												<h1 className="font-bold text-xl ">
													<u>{item?.name}</u>
												</h1>
											</div>

											<div>
												<h1>{item?.title}</h1>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>

				<div className=" flex justify-center items-center pt-20 lg:text-5xl text-center text-2xl">
					<h1 className="font-Cinzel ">Sangguniang Bayan Members </h1>
				</div>

				<div className=" flex lg:flex-row  flex-col justify-center gap-2 m-5 text-center items-center	">
					{SBmembers?.map((item, key) => {
						return (
							<React.Fragment key={key}>
								<div className="flex flex-row justify-center items-center">
									<div className="flex flex-col justify-center items-center">
										<img
											className="w-72 h-72 object-contain"
											src={item?.image}
											alt={item?.alter}
										/>
										<div className="font-Cinzel flex flex-col justify-center items-center ">
											<div className=" justify-center items-center text-lg ">
												<h1 className="font-bold text-xl ">
													<u>{item?.name}</u>
												</h1>
											</div>

											<div>
												<h1>{item?.title}</h1>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>

				<div className=" flex lg:flex-row  flex-col justify-center gap-2 m-5 text-center	">
					{SBMembers?.map((item, key) => {
						return (
							<React.Fragment key={key}>
								<div className="flex flex-row justify-center items-center">
									<div className="">
										<img
											className="w-72 h-72 object-contain"
											src={item?.image}
											alt={item?.alter}
										/>
										<div className="font-Cinzel flex flex-col justify-center items-center ">
											<div className=" justify-center items-center text-lg ">
												<h1 className="font-bold text-xl ">
													<u>{item?.name}</u>
												</h1>
											</div>

											<div>
												<h1>{item?.title}</h1>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>
				<div className=" flex lg:flex-row  flex-col justify-center gap-2 m-5 text-center	">
					{SKmembers?.map((item, key) => {
						return (
							<React.Fragment key={key}>
								<div className="flex flex-row justify-center items-center">
									<div className="">
										<img
											className="w-72 h-72 object-contain"
											src={item?.image}
											alt={item?.alter}
										/>
										<div className="font-Cinzel flex flex-col justify-center items-center ">
											<div className=" justify-center items-center text-lg ">
												<h1 className="font-bold text-xl ">
													<u>{item?.name}</u>
												</h1>
											</div>

											<div>
												<h1>{item?.title}</h1>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Officials;
