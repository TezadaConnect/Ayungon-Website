import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ayungon_municipality from '../assets/imgslider/ayungon_municipality.jpg';
import ayungon_municipality_1 from '../assets/imgslider/ayungon_municipality_1.jpg';
import ayungon_municipality_2 from '../assets/imgslider/ayungon_municipality_2.jpg';
import ayungon_municipality_3 from '../assets/imgslider/ayungon_municipality_3.jpg';
import ayungon_municipality_4 from '../assets/imgslider/ayungon_municipality_4.jpg';
import ayungon_municipality_5 from '../assets/imgslider/ayungon_municipality_5.jpg';
const fadeImages = [
	{
		url: ayungon_municipality,
		alt: 'ayungon_municipality',
	},
	{
		url: ayungon_municipality_1,
		alt: 'ayungon_municipality_1',
	},

	{
		url: ayungon_municipality_2,
		alt: 'ayungon_municipality_2',
	},
	{
		url: ayungon_municipality_3,
		alt: 'ayungon_municipality_3',
	},
	{
		url: ayungon_municipality_4,
		alt: 'ayungon_municipality_4',
	},
	{
		url: ayungon_municipality_5,
		alt: 'ayungon_municipality_5',
	},
];

const CarouselSlider = () => {
	return (
		<div
			id="carousel-id"
			className="w-full"
		>
			<Fade>
				{fadeImages.map((fadeImage, index) => (
					<div
						className="each-fade"
						key={index}
					>
						<img
							className=""
							src={fadeImage.url}
							alt={fadeImage.alt}
						/>
					</div>
				))}
			</Fade>
		</div>
	);
};
export default CarouselSlider;
