import React from 'react';
import AyungonDalupapa from '../../assets/AyungonDalupapa.jpg';
import taboTownshipAnivv from '../../assets/taboTownshipAnivv.jpg';
import pinato from '../../assets/pinato.jpg';
import humayan from '../../assets/humayan.jpg';
import Footer from '../../components/Footer';
const Tradition = () => {
	return (
		<div>
			<div className="flex justify-center items-center text-center flex-col">
				<div className="flex justify-center items-center text-center bg-green-600 lg:w-3/4 w-screen">
					{' '}
					<h1 className="font-bold text-5xl py-10 font-serif text-white ">
						TRADITION
					</h1>
				</div>
				<div className=" w-screen flex justify-center flex-col items-center pb-20 pt-7">
					<div className="flex lg:flex-row flex-col w-screen justify-center gap-5  text-center ">
						<div className="lg:w-[550px] flex justify-center items-center ">
							<div>
								<h1 className=" font-serif text-2xl pb-2 font-bold">
									CULINARY TOURISM
								</h1>
								<div>
									<img
										className="w-60 float-left p-2  "
										src={AyungonDalupapa}
										alt="AyungonDalupapa"
									/>
									<p className="clear-none text-justify text-lg font-serif">
										Ayungon is known for its DALUPAPA of giant squid. No one can
										compare to the cooking style of dalupapa by the Ayunganons.
										The tenderness and juiciness of the meat retains with just
										the simple ingredients to spice up the dalupapa barbecue.
										Sooooo, yummy
									</p>
									<br></br>
									<img
										className="w-60 float-right p-2  "
										src={pinato}
										alt="pinato"
									/>
									<p className="clear-none text-justify text-lg font-serif">
										PIÑATO is a “panghimagas” or sweets made basically of
										peanuts and a concoction of washed sugar and virgin coconut
										milk. This delicacy has reached the other end of the world
										for they are good as pasalubong. The crunchiness of the
										peanuts blended with the heavenly taste of the “latik”.
									</p>
									<br></br>
									<p className="clear-none text-justify text-lg font-serif">
										COATED PULVORON best for “pasalubong” a chocolate coated
										pulvoron in any flavor.
									</p>
									<br></br>

									<h1 className="font-serif text-2xl pb-2 font-bold">
										MISSION
									</h1>
									<ul>
										<li>
											<p className="clear-none text-justify text-lg font-serif">
												• To engender an Ayunganon community of productive human
												resources nurtured with high-quality education and
												excellent health services.
											</p>
										</li>
										<li>
											<p className="clear-none text-justify text-lg font-serif">
												• To establish strategic growth-centers and provide
												infrastructure support that promote service-delivery
												efficiency, strengthen agricultural productivity support
												and promote Agri-based industries while conserving the
												environment.
											</p>
										</li>
									</ul>
									<br></br>
								</div>
							</div>
						</div>
						<div className="lg:w-[550px] flex justify-center ">
							<div>
								<div>
									<h1 className="font-serif text-2xl pb-1 font-bold">
										ANNUAL TOWNSHIP COMMEMORATION
									</h1>
									<img
										className="w-60 float-right p-2  "
										src={taboTownshipAnivv}
										alt="taboTownshipAnivv"
									/>
									<p className="clear-none text-justify text-lg font-serif">
										TABO-BANAY participated by the 24 barangays showcasing their
										best practices, reliving our culture (a look in the past)
										like indigenous games, old-time culinary.
									</p>
									<br></br>
									<br></br>
									<h1 className="font-serif text-2xl pb-1 font-bold">
										HUMAYAN FESTIVAL OF BANBAN
									</h1>

									<img
										className="w-60 float-left p-2  "
										src={humayan}
										alt="humayan"
									/>
									<p className="clear-none text-justify text-lg font-serif">
										Humayan in Banban speaks the life and main source of living
										of barangay folks. The tastiest Ayungon rice is found in
										this Barangay. The festival portrays from rice planting to
										harvesting-family based, their best practices, the ups and
										downs, trials and success encountered.
									</p>
									<br></br>
									<h1 className="font-serif text-2xl pb-1 font-bold">
										TILAPIA FESTIVAL OF TAMBO
									</h1>
									<p className="clear-none text-justify text-lg font-serif">
										Accordingly, the festival is celebrated by way of promoting
										Tilapia raising to address the low supply of fish in the
										market. At present, the barangay has big hatchery if Tilapia
										fir many locals have tilapia ponds in their homes.
									</p>
									<br></br>
									<h1 className="font-serif text-2xl pb-2 font-bold">
										SHARED VISION
									</h1>

									<p className="clear-none text-justify text-lg font-serif">
										• AYUNGON: The rice bowl if central negros a peaceful
										community of healthy and god-fearing people, moving ahead in
										a sustainably-managed and ecologically-balanced environment.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Tradition;
