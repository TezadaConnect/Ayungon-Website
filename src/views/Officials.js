import React from 'react';
import ayungonLogo from '../assets/ayungonLogo.png';
import MayorDennis from '../assets/MayorDennis.png';
import ViceMayorNelda from '../assets/ViceMayorNelda.png';

import SBchristian from '../assets/SBchristian.png';
import SBlee from '../assets/SBlee.png';
import SBdensio from '../assets/SBdensio.png';
import SBkeith from '../assets/SBkeith.png';

const Officials = () => {
	return (
		<div>
			{/* Ayungon Logo */}
			<div className="relative bg-slate-200 mx-20">
				<div className="flex flex-row justify-start gap-5 p-10">
					<div className="flex justify-start">
						<img
							className="w-32"
							src={ayungonLogo}
							alt="Ayungon Logo"
						/>
					</div>
					<div className="flex  pt-5 font-Cinzel font-bold text-4xl flex-col  	">
						<h1>Municipality Of Ayungon</h1>
						<h1>Officials</h1>
					</div>
				</div>
				{/* Ayungon Logo */}

				{/* MayorDennis */}
				<div className=" flex flex-row justify-center  gap-40	">
					<div className="flex flex-row justify-center pt-14 items-center">
						<div className="">
							<img
								className="w-64"
								src={MayorDennis}
							/>
							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center text-lg ">
									<h1 className="font-bold text-xl ">
										<u>Hon. Dennis N. Amancio</u>
									</h1>
								</div>

								<div>
									<h1>MAYOR</h1>
								</div>
							</div>
						</div>
					</div>

					{/* ViceMayorNelda */}

					<div className="flex flex-row justify-center items-center">
						<div className="">
							<img
								className="w-64"
								src={ViceMayorNelda}
							/>
							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl ">
										<u>Hon. Nelda A. Favillaran</u>
									</h1>
								</div>

								<div>
									<h1>VICE MAYOR</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className=" flex justify-center pt-20 text-5xl">
					<h1 className="font-Cinzel ">Sangguniang Bayan Members </h1>
				</div>

				<div className="flex flex-row justify-center pt-10 gap-7">
					{/* SBchristian */}
					<div className="flex flex-row justify-center items-center pt-11">
						<div className="">
							<img
								className="w-64"
								src={SBchristian}
							/>
							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Christian T. Opada</u>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>
					{/* SBchristian */}

					{/* SBlee */}
					<div className="flex flex-row justify-center items-center pt-2">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SBlee}
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Lee F. Dy</u>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>

					{/* SBlee */}

					{/* SBdensio */}
					<div className="flex flex-row justify-center items-center pt">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SBdensio}
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Dennis Anthony M. Densing</u>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>
					{/* SBdensio */}

					{/* SBkeith */}
					<div className="flex flex-row justify-center items-center pt-4">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SBkeith}
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Keith B. Enardecido</u>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>
					{/* Sbkeith */}
				</div>
			</div>
		</div>
	);
};

export default Officials;
