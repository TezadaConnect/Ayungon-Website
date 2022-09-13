import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ayungon_municipality from '../assets/imgslider/ayungon_municipality.jpg';
import duma from '../assets/imgslider/duma.jpg';
const fadeImages = [
	{
		url: duma,
		alt: 'sample',
	},
	{
		url: ayungon_municipality,
		alt: 'ayungon_municipality',
	},
];

const CarouselSlider = () => {
	return (
		<div className="w-screen">
			<Fade>
				{fadeImages.map((fadeImage, index) => (
					<div
						className="each-fade"
						key={index}
					>
						<div className="flex ">
							<img
								src={fadeImage.url}
								alt={fadeImage.alt}
							/>
						</div>
					</div>
				))}
			</Fade>
		</div>
	);
};
export default CarouselSlider;
