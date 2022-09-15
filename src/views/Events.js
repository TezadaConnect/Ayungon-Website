import React from 'react';

import { Fade } from 'react-slideshow-image';
import VolleyballClinic from '../assets/EventSlider/VolleyballClinic.jpg';
import VolleyballClinic_2 from '../assets/EventSlider/VolleyballClinic_2.jpg';
import YouthSports from '../assets/EventSlider/YouthSports.jpg';

const Events = () => {
	const fadeImages = [
		{
			url: VolleyballClinic,
			alt: 'VolleyballClinic',
		},

		{
			url: YouthSports,
			alt: 'YouthSports',
		},
		{
			url: VolleyballClinic_2,
			alt: 'VolleyballClinic_2',
		},
	];
	// const septemberEvents = [
	// 	{
	// 		eventName: 'Abat-Abat sa Plaza',
	// 		eventDate: 'October 31 ,2022',
	// 		eventTime: '8:00 pm ',
	// 	},
	// ];

	const upcomingEvents = [
		{
			eventImage: VolleyballClinic,
			eventName: 'VolleyBall Clinic',
			alt: 'Volleyball',
			link: 'https://www.facebook.com/municipalityofayungon/photos/a.110456941295820/368222965519215/',
			target: '_blank',
			caption:
				"Part of the local government's wellness program,Volleyball Clinic will be launched on Tuesdayafternoon, September 13, 2022, at Ayungon TownSquare. There will be exhibition games, too. TheAyungon Volleyball Clinic is open to allvolleyball enthusiasts of the municipality. Toregister, please contact Coach Bea Pastor viaMessenger. See you there.",
		},
		{
			eventImage: YouthSports,
			eventName: 'Youth Sports Jeet Kuno Dokata, Arnis and Chako',
			alt: 'Volleyball',
			link: 'https://www.facebook.com/municipalityofayungon/photos/a.110456941295820/368253645516147/',
			target: '_blank',
			caption:
				"Part of the local government's wellness program,Volleyball Clinic will be launched on Tuesdayafternoon, September 13, 2022, at Ayungon TownSquare. There will be exhibition games, too. TheAyungon Volleyball Clinic is open to allvolleyball enthusiasts of the municipality. Toregister, please contact Coach Bea Pastor viaMessenger. See you there.",
		},
	];

	return (
		<div className="w-screen bg-white	">
			<div className="flex justify-center items-center p-5">
				<div className="flex justify-center drop-shadow-2xl py-5 bg-white text-3xl w-9/12 font-Cinzel font-bold items-center">
					<h1>Events</h1>
				</div>
			</div>

			<Fade>
				{fadeImages?.map((fadeImage, index) => (
					<div
						className="each-fade"
						key={index}
					>
						<div className="flex ">
							<img
								src={fadeImage?.url}
								alt={fadeImage?.alt}
							/>
						</div>
					</div>
				))}
			</Fade>

			<div>
				<div className="flex flex-col bg-slate-200 w-10/12 m-auto pb-36	">
					<div className="flex justify-center items-center px-3 pt-5">
						<div className="flex font-Cinzel text-3xl justify-center items-center text-white text-center w-3/4 p-5 bg-green-600 ">
							<h1> UPCOMING EVENTS</h1>
						</div>
					</div>
					{upcomingEvents?.map((item, key) => {
						return (
							<React.Fragment key={key}>
								<div className="flex flex-row justify-center drop-shadow-lg  items-center px-3">
									<div className="bg-white w-3/4 p-10 flex flex-row justify-center gap-20 items-center font-inter">
										<a
											href={item?.link}
											target={item?.target}
										>
											<div className="flex flex-row justify-center items-center gap-5 hover:scale-105">
												<div>
													<img
														className="w-[1700px] "
														src={item?.eventImage}
														alt={item?.alt}
													/>
												</div>
												<div className="gap-2 flex flex-col ">
													<div>
														<h1 className="uppercase font-bold">
															<u> {item?.eventName}</u>
														</h1>
													</div>
													<div>
														<p className="uppercase text-sm ">
															{item?.caption}
														</p>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Events;
