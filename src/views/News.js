import React from 'react';

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
		<div className=" flex lg:flex-row  flex-col justify-center  w-screen pt-10">
			<div className="lg:w-[500px]  flex justify-center">
				<div className="pt-20">
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
			</div>
			<div className="lg:w-[800px]  flex justify-center flex-col items-center gap-5 ">
				<div className="">
					<h1 className="font-FjallaOne text-3xl uppercase ">
						{' '}
						Facebook Updates
					</h1>
				</div>

				<div className="flex items-center flex-col gap-10 ">
					<div className="drop-shadow-2xl">
						<Iframe
							src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmunicipalityofayungon&tabs=timeline&width=1000&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
							className="lg:w-[500px] w-[400px] h-96"
							scrolling="no"
							frameborder="0"
							allowfullscreen="true"
							allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></Iframe>
					</div>
				</div>
				<div className="flex items-center flex-col ">
					<div className="drop-shadow-2xl">
						<Iframe
							src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100087737546288&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
							width="500"
							height="400"
							className="border:none;overflow:hidden"
							scrolling="no"
							frameborder="0"
							allowfullscreen="true"
							allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						></Iframe>
					</div>
				</div>
			</div>
			<div className="lg:w-[500px]  flex justify-center text-center">
				<div className="flex flex-col gap-5 font-serif ">
					<h1 className="font-FjallaOne text-3xl uppercase ">
						Youtube Updates
					</h1>
					{VideoLinks?.map((item, index) => {
						return (
							<div
								className=" pb-10 flex justify-center"
								key={index}
							>
								<Iframe
									className="lg:w-80 w-72"
									width={item?.width}
									height={item?.height}
									src={item?.src}
								></Iframe>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default News;
