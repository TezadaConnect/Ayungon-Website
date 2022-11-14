import React from 'react';
import Footer from '../../components/Footer';
import AyungonTwinFalls from '../../assets/AyungonTwinFalls.jpg';
import TamboFalls from '../../assets/TamboFalls.jpg';
import MtQuisaw from '../../assets/MtQuisaw.jpg';
import BanbanEcoPark from '../../assets/BanbanEcoPark.jpg';
const Culture = () => {
	return (
		<div className="w-screen">
			<div className="flex justify-center flex-col items-center w-screen ">
				<div className="flex justify-center items-center text-center bg-green-600 lg:w-3/4 w-screen">
					<h1 className="font-bold text-5xl py-10 font-serif text-white ">
						{' '}
						CULTURE
					</h1>
				</div>

				<div className=" lg:w-3/4  flex lg:flex-row flex-col justify-center pb-16 pt-5 gap-5">
					<div className="lg:w-[550px] m-2">
						<img
							className="w-60 float-left m-3"
							src={BanbanEcoPark}
							alt="BanbanEcoPark"
						/>

						<p className="font-serif lg:text-justify lg:text-lg pt-1">
							<b>BANBAN ECO PARK</b> Small Water Impounding Project (SWIP)
							consider as man-made lake; surrounded with the tree for food and
							tree for leisure (150 hectare Indigenous species of trees, 200
							hectare rubber trees).
						</p>

						<br></br>

						<img
							className="w-60 float-right m-3"
							src={MtQuisaw}
							alt="MtQuisaw"
						/>

						<p className="font-serif lg:text-justify lg:text-lg pt-1">
							<b>MT. QUISAW</b> Small Water Impounding Project (SWIP) consider
							as man-made lake; surrounded with the tree for food and tree for
							leisure (150 hectare Indigenous species of trees, 200 hectare
							rubber trees).
						</p>
						<br></br>

						<h1 className="font-serif lg:text-2xl font-bold">
							THE FORE’ (VIRGIN FOREST)
						</h1>

						<p className="font-serif lg:text-justify lg:lg:text-lg pt-1">
							The municipality is gifted with lush rainforest. It still has
							virgin forest, untouched, unexplored. With the big forest
							protected area, the National Greening Program put up the
							mechanized nursery facilities to cater the whole of Visayas and
							part of Mindanao.
						</p>
					</div>
					<div className="lg:w-[550px] m-5">
						<img
							className="w-60 float-left m-3"
							src={AyungonTwinFalls}
							alt="AyungonTwinFalls"
						/>

						<p className="font-serif lg:text-justify lg:text-lg pt-5">
							<b>Ayungon Twin Falls</b> used to be called Pagsalsalan Falls.
							Twin falls that flows over silica deposits & Sulphur while the
							falls is shaded with lush flora.
						</p>

						<br></br>

						<img
							className="w-60 float-right m-3"
							src={TamboFalls}
							alt="TamboFalls"
						/>

						<p className="font-serif lg:text-justify lg:lg:text-lg pt-5">
							<b>Tambo Water Falls</b> the free-flow water serves the Barangay’s
							rice fields and Tilapia ponds.
						</p>
						<br></br>
						<h1 className="font-serif lg:text-2xl font-bold pt-32">
							INIBAN MARINE SANCTUARY
						</h1>

						<p className="font-serif lg:text-justify lg:lg:text-lg pt-1">
							Finalist for NAPA EL AMAR Award. One of the Top 10 best marine
							protected area in the Philippines.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Culture;
