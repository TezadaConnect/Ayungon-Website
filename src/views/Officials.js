import React from 'react';
import ayungonLogo from '../assets/ayungonLogo.png';
import MayorDennis from '../assets/MayorDennis.png';
import ViceMayorNelda from '../assets/ViceMayorNelda.png';

import SBchristian from '../assets/SBchristian.png';
import SBlee from '../assets/SBlee.png';
import SBdensio from '../assets/SBdensio.png';
import SBkeith from '../assets/SBkeith.png';

import SBesay from '../assets/SBesay.png';
import SBjoseph from '../assets/SBjoseph.png';
import SBroger from '../assets/SBroger.png';
import SBromulo from '../assets/SBromulo.png';

import ABCchona from '../assets/ABCchona.png';
import SKjasper from '../assets/SKjasper.png';
import Footer from '../components/Footer';

const Officials = () => {
	return (
		<div>
			{/* Ayungon Logo */}
			<div className="flex flex-col bg-slate-200 mx-20 pb-36">
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
								alt="MayorDennis"
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
								alt="ViceMayorNelda"
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
								alt="SBchristian"
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
									alt="SBlee"
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
					<div className="flex flex-row justify-center items-center pt-7">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SBdensio}
									alt="SBdensio"
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl flex flex-col justify-center items-center  ">
										<div>
											<u>Hon. Dennis Anthony</u>
										</div>
										<div>
											<u> M. Densing</u>
										</div>
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
									alt="SBkeith"
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

				<div className="flex flex-row justify-center pt-10 gap-7">
					{/* SBesay */}
					<div className="flex flex-row justify-center items-center pt-20">
						<div className="">
							<img
								className="w-64"
								src={SBesay}
								alt="SBesay"
							/>
							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl flex justify-center ">
										<div className="flex flex-col justify-center items-center">
											<div>
												<u>Hon. TESSA CLAIRE </u>
											</div>
											<div>
												<u> M. OLVEROS</u>
											</div>
										</div>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>
					{/* SBesay */}

					{/* SBjoseph */}
					<div className="flex flex-row justify-center items-center pt-2">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SBjoseph}
									alt="SBjoseph"
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Joseph Dayahan</u>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>

					{/*SBjoseph*/}

					{/* SBroger */}
					<div className="flex flex-row justify-center items-center pt-7">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-64"
									src={SBroger}
									alt="Hon. ROGER O. BALDADO"
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl flex flex-col justify-center items-center  ">
										<div>
											<u>Hon. ROGER O. BALDADO</u>
										</div>
									</h1>
								</div>

								<div>
									<h1>SB MEMBER</h1>
								</div>
							</div>
						</div>
					</div>
					{/* SBdroger */}

					{/* SBkeith */}
					<div className="flex flex-row justify-center items-center pt-10">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-64"
									src={SBromulo}
									alt="SBromulo"
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. ROMULO R. ALFORQUE</u>
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

				<div className="flex flex-row justify-center pt-10 gap-7">
					{/* ABCchona */}
					<div className="flex flex-row justify-center items-center pt-11">
						{' '}
						<div className="flex flex-col">
							<div className="flex justify-center">
								<img
									className="w-52"
									src={ABCchona}
									alt="ABCchona"
								/>
							</div>
							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. CHONA A. AGUSTINO</u>
									</h1>
								</div>

								<div>
									<h1>ABC PRESIDENT</h1>
								</div>
							</div>
						</div>
					</div>
					{/* ABCchona */}

					{/* SBlee */}
					<div className="flex flex-row justify-center items-center pt-2">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img
									className="w-52"
									src={SKjasper}
									alt="SKjasper"
								/>
							</div>

							<div className="font-Cinzel flex flex-col justify-center items-center ">
								<div className=" justify-center items-center">
									<h1 className="font-bold text-xl  ">
										<u>Hon. Jasper Jacob M. Nusan</u>
									</h1>
								</div>

								<div>
									<h1>SK CHAIRMAN</h1>
								</div>
							</div>
						</div>
					</div>

					{/* SBlee */}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Officials;
