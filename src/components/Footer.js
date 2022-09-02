import React from 'react';
import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
const Footer = () => {
	return (
		<div>
			<div>
				<div className="flex flex-row justify-center text-white bg-green-600 gap-24 pt-2 font-inter">
					<div>
						<div>
							<div className=" flex w-96 flex-col">
								<div>
									<h1 className="font-bold text-lg ">About Ayungon</h1>
								</div>
								<p className="flex justify-content text-sm text-justify">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the{' '}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className=" flex w-80 flex-col text-sm">
							<div>
								<h1 className="font-bold text-lg ">Location </h1>
							</div>
							<div className="flex justify-content flex-col">
								<div>
									<b>Address:</b> Poblacion, Ayungon Negros Oriental,
									Philippines 6210
								</div>

								<div>
									<b>Phone:</b> 0917 - 3200 - 557 (035) - 400 - 5276
								</div>
								<div>
									<b>Email:</b>ayungon_mayorsoffice@yahoo.com
								</div>
							</div>
						</div>
					</div>
					<div className=" flex flex-col text-sm ">
						<div>
							<div className="flex flex-row justify-start pl-2 gap-5 items-center">
								<div>
									<img
										className="w-10"
										src={facebookIcon}
										alt="facebook Icon"
									/>
								</div>
								<div>
									<a href="https://web.facebook.com/municipalityofayungon">
										facebook.com/municipalityofayungon
									</a>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="flex flex-row justify-center gap-3 items-center">
									<div>
										<img
											className="w-14"
											src={instagramIcon}
											alt="facebook Icon"
										/>
									</div>
									<div>
										<a href="https://www.instagram.com/municipalityofayungon/">
											instagram.com/municipalityofayungon/
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
