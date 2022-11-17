import React from 'react';

import Footer from '../components/Footer';
import {
	BsFillChatDotsFill,
	BsFillTelephoneFill,
	BsGeoAltFill,
} from 'react-icons/bs';
const Contacts = () => {
	const ContactIcons = [
		{ icon: <BsGeoAltFill size={40} />, name: 'Address' },
		{ icon: <BsFillTelephoneFill size={40} />, name: 'Contact' },
		{ icon: <BsFillChatDotsFill size={40} />, name: 'Email' },
	];

	const OfficeAddress = [
		{
			name: 'Municipality Of Ayungon',
			address: 'Poblacion, Ayungon Negros Oriental, Philippines 6210',
		},
	];
	const OfficeContact = [
		{
			name: 'Disaster Risk Reduction and Management Office',
			contact: '09751831366',
			SocMed: 'facebook.com/ldrrmo.ayungon',
		},
		{
			name: 'DILG Ayungon',
			contact: '09984417509',
			SocMed: 'https://www.facebook.com/profile.php?id=100086701433603',
		},
		{
			name: 'Department of Agrarian Reform (DAR)',
			contact: '09298794050',
			SocMed: '',
		},
		{
			name: 'Bureau of Internal Revenue (BIR)',
			contact: '09355881578 / 09183570570',
			SocMed: '',
		},

		{
			name: 'National Bureau of Investigation (NBI)',
			contact: '09754901553',
			SocMed: '',
		},
		{
			name: 'MPDC Ayungon',
			contact: '09178952561',
			SocMed: '',
		},
		{
			name: 'OFFICE OF THE MAYOR',
			contact: '09173200557',
			SocMed: '',
		},
		{
			name: 'Accounting Office',
			contact: '09173206005',
			SocMed: '',
		},
		{
			name: 'Accounting Office',
			contact: '09173206005',
			SocMed: '',
		},

		{
			name: 'Rural Health Unit (RHU)',
			contact: '09279581436',
			SocMed: 'https://www.facebook.com/profile.php?id=100019460505027',
		},
	];

	const OfficeEmail = [
		{
			name: 'Office Of The Mayor',
			email: 'ayungon_mayorsoffice@yahoo.com',
		},
		{
			name: 'DILG Ayungon',
			email: 'dilgayungon@gmail.com',
		},
		{
			name: 'Office Of the Engineer',
			email: 'ayungon.engineeringoffice@gmail.com',
		},
		{
			name: 'National Bureau of Investigation (NBI)',
			email: 'nbiayungonso@gmail.com',
		},

		{
			name: 'MPDC Ayungon',
			email: 'mpdcayungon@gmail.com',
		},

		{
			name: 'CBMS Office',
			email: 'bmatthew826@gmail.com',
		},
		{
			name: "Assessor's Office",
			email: 'butchmahinaypatricio@gmail.com',
		},
		{
			name: 'Tourism Office',
			email: 'ayungontourism@gmail.com',
		},
		{
			name: 'Accounting Office',
			email: 'joycarendeguit@yahoo.com',
		},

		{
			name: 'Rural Health Unit (RHU)',
			email: 'rhu.ayungon@gmail.com',
		},
		{
			name: 'Bureau of Internal Revenue (BIR)',
			email: 'jacjabel@gmail.com',
		},
	];

	return (
		<div className="flex flex-col bg-green-400 gap-20">
			<div className="w-screen flex flex-col item">
				<div className="flex justify-center p-20">
					<h1 className="font-FjallaOne font-bold text-6xl text-white">
						CONTACT US
					</h1>
				</div>
				<div className=" flex flex-col gap-10 ">
					<div className="flex flex-row justify-center gap-20">
						{ContactIcons?.map((item, key) => {
							return (
								<div
									className="w-80 flex justify-center flex-col items-center text-white font-FjallaOne gap-1"
									key={key}
								>
									<div>{item.icon}</div>
									<div className="text-xl">{item.name}</div>
								</div>
							);
						})}
					</div>
					<div className="flex flex-row justify-center  gap-20">
						<div className="w-80 flex flex-col gap-8">
							{OfficeAddress?.map((item, key) => {
								return (
									<div
										className="text-center text-white"
										key={key}
									>
										<div className="font-bold">{item.name}</div>
										<div>{item.address}</div>
									</div>
								);
							})}
						</div>
						<div className="w-80 flex flex-col gap-8">
							{OfficeContact?.map((item, key) => {
								return (
									<div
										className="text-center text-white"
										key={key}
									>
										<div className="font-bold">{item.name}</div>
										<div>
											<b>Contact No.: </b>
											{item.contact}
										</div>
										<div>{item.SocMed}</div>
									</div>
								);
							})}
						</div>
						<div className="w-80 flex flex-col gap-8">
							{OfficeEmail?.map((item, key) => {
								return (
									<div
										className="text-center text-white"
										key={key}
									>
										<div className="font-bold">{item.name}</div>

										<div>{item.email}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Contacts;
