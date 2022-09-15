import React from 'react';
import SocialMediaPlugin from '../components/SocialMediaPlugin';
import Iframe from 'react-iframe';
const News = () => {
	const VideoLinks = [
		{
			width: '420',
			height: '315',
			src: 'https://www.youtube.com/embed/YFZZJ2CCG_A?autoplay=1&mute=1',
		},
		{
			width: '420',
			height: '315',
			src: 'https://www.youtube.com/embed/Ec06D0YTArU?autoplay=1&mute=1',
		},
	];
	return (
		<div className="w-screen bg-slate-300 flex justify-center flex-col items-center">
			<div className="pt-5 w-full flex justify-center ">
				<div className="flex justify-center drop-shadow-xl py-5 bg-white text-3xl w-9/12 font-Cinzel font-bold">
					<h1>News And Updates</h1>
				</div>
			</div>

			<div className="flex lg:flex-row flex-col justify-center gap-6  ">
				<div className="flex flex-col pt-7">
					<a
						rel="noreferrer"
						target="_blank"
						href="https://www.booked.net/weather/ayungon-w127206"
					>
						<img
							src="https://w.bookcdn.com/weather/picture/32_w127206_1_1_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=19409"
							alt="booked.net"
						/>
					</a>
				</div>
				<div></div>
				<div className="pt-7 flex flex-col gap-5 ">
					{VideoLinks?.map((item, index) => {
						return (
							<div
								className=" pb-10"
								key={index}
							>
								<Iframe
									width={item?.width}
									height={item?.height}
									src={item?.src}
								></Iframe>
							</div>
						);
					})}
				</div>
				<div>
					<SocialMediaPlugin />
				</div>
			</div>
		</div>
	);
};

export default News;
