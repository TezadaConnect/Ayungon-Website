import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Offices = () => {
	const navigate = useNavigate();

	const miniNavbar = [
		{ label: 'Office Of The Mayor', link: '/offices/office-of-the-mayor' },
		{ label: 'Tourism Office', link: '/offices/tourism-office' },
	];

	return (
		<div>
			<div className="flex flex-col bg-slate-200 w-screen  pb-36	">
				<div className="flex pt-2 ">
					<div className="flex flex-col  items-center bg-white w-40 gap-5	  py-4 font-serif text-sm">
						{miniNavbar?.map((item, key) => {
							return (
								<React.Fragment key={key}>
									<div>
										<button
											className="hover:scale-105 uppercase "
											onClick={() => {
												navigate(item?.link);
											}}
										>
											{item?.label}
										</button>
									</div>
								</React.Fragment>
							);
						})}
					</div>
					<div>
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Offices;
