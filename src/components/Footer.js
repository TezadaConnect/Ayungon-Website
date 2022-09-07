import React from 'react';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare,
	AiFillYoutube,
} from 'react-icons/ai';
import { outsiteWebHelper } from '../router/outer_router';
const Footer = () => {
	return (
		<div className="text-white bg-green-600 font-inter">
			<div className="flex lg:flex-row flex-col lg:w-8/12 w-10/12 m-auto justify-between py-10 gap-10">
				<div className="flex lg:w-96 flex-col">
					<div>
						<h1 className="font-bold text-2xl mb-4">About Ayungon</h1>
					</div>
					<p className="flex text-sm text-justify">
						Ayungon was under Tayasan for twenty three years. The town of
						Ayungon was founded in 1924 through the efforts of the following
						prominent men: Mr. Pablo Tiongco, Buenaventura Borromeo, Benito
						Sanches, Apolonio Deguit, Gregorio Emperado, Esteban Mahinay,
						Salvador Emperado, Victoriano Embalsado, Ireneo Pael, Isidoro
						Mahinay, Nicolas Calumba, Juan Taburaza, Raymundo Pastor, Basilio
						Villegas and Antera Romano.
					</p>
				</div>

				<div className="flex flex-col text-sm">
					<div>
						<h1 className="font-bold text-2xl mb-4">Location </h1>
					</div>
					<div className="flex flex-col justify-start gap-3">
						<div>
							<strong>Address:</strong> Poblacion, Ayungon Negros Oriental,
							Philippines 6210
						</div>

						<div>
							<strong>Phone:</strong> 0917 - 3200 - 557 (035) - 400 - 5276
						</div>
						<div className="cursor-pointer">
							<strong>Email:</strong> ayungon_mayorsoffice@yahoo.com
						</div>
					</div>
				</div>

				<div>
					<div>
						<h1 className="font-bold text-2xl mb-4">Social Media</h1>
					</div>
					<div className="flex flex-col text-sm gap-3">
						{socialMediaAccounts?.map((item, key) => {
							return (
								<div
									key={key}
									onClick={() => outsiteWebHelper(item.link)}
									className="flex flex-row gap-3 items-center"
								>
									<div className="hover:scale-105">{item.icon}</div>
									<div className="cursor-default hover:underline">
										{item.label}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const socialMediaAccounts = [
	{
		label: '@municipalityofayungonFacebook',
		link: 'https://web.facebook.com/municipalityofayungon',
		icon: <AiFillFacebook size={30} />,
		alt: 'facebook',
	},
	{
		label: '@municipalityofayungonInstagram',
		link: 'https://www.instagram.com/municipalityofayungon/',
		icon: <AiFillInstagram size={30} />,
		alt: 'instagram',
	},
	{
		label: '@municipalityofayungonTwitter',
		link: 'https://twitter.com/ayungonnegor?lang=en',
		icon: <AiFillTwitterSquare size={30} />,
		alt: 'Twitter',
	},

	{
		label: '@municipalityofayungonyoutube',
		link: 'https://www.youtube.com/channel/UCPTzpEy5xRIT0guQRN8R5aw',
		icon: <AiFillYoutube size={30} />,
		alt: 'youtube',
	},
];
