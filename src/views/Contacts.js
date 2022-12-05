import React from 'react';

import Footer from '../components/Footer';
import {
	BsFillChatDotsFill,
	BsFillTelephoneFill,
	BsGeoAltFill,
} from 'react-icons/bs';

const Contacts = () => {
	const OfficeAddress = [
		{
			name: 'Municipality Of Ayungon',
			address: 'Poblacion, Ayungon Negros Oriental, Philippines 6210',
		},
		{
			name: 'Municipal Gymnasium',
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
			name: 'Human Resource Management Office(HRMO)',
			contact: '09157930157',
			SocMed: 'https://www.facebook.com/municipalityofayungon',
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
			name: 'Human Resource Management Office(HRMO)',
			email: 'hrmoayungon@gmail.com',
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
			<div className="gap-10 flex flex-col items-center justify-center">
				<div className="flex justify-center pt-20">
					<h1 className="text-6xl font-FjallaOne font-bold text-white">
						CONTACT US
					</h1>
				</div>
				<div className="flex lg:flex-row flex-col gap-20 justify-center">
					<div className="flex flex-col gap-7 items-center  w-96">
						<div className="flex flex-col items-center">
							<div>
								<BsGeoAltFill
									size={40}
									color="white"
								/>
							</div>
							<div>
								<h1 className="font-FjallaOne text-2xl text-white">ADDRESS</h1>
							</div>
						</div>
						<div>
							<div className="flex flex-col gap-10">
								{OfficeAddress?.map((item, key) => {
									return (
										<div
											key={key}
											className=" flex flex-col items-center text-white"
										>
											<div>
												<h1 className="font-FjallaOne font-bold ">
													{item.name}
												</h1>
											</div>
											<div>
												<h2 className="font-FjallaOne ">{item.address}</h2>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-7 text-center  w-96">
						<div className="flex flex-col items-center">
							<div>
								<BsFillTelephoneFill
									size={40}
									color="white"
								/>
							</div>
							<div>
								<h1 className="font-FjallaOne text-2xl text-white">CONTACT</h1>
							</div>
						</div>
						<div>
							<div className="gap-10 flex flex-col  ">
								{OfficeContact?.map((item, key) => {
									return (
										<div
											key={key}
											className="flex flex-col items-center text-white "
										>
											<div>
												<h1 className="font-FjallaOne font-bold ">
													{item.name}
												</h1>
											</div>
											<div>
												<h1 className="font-FjallaOne">
													<b>Contact No.: </b>
													{item.contact}
												</h1>
											</div>
											<div>
												<h1 className="font-FjallaOne ">{item.SocMed}</h1>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-7 items-center  w-96">
						<div className="flex flex-col items-center ">
							<div>
								<BsFillChatDotsFill
									size={40}
									color="white"
								/>
							</div>
							<div>
								<h1 className="font-FjallaOne text-2xl text-white">EMAIL</h1>
							</div>
						</div>
						<div>
							<div className="flex flex-col gap-7">
								{OfficeEmail?.map((item, key) => {
									return (
										<div
											key={key}
											className="flex flex-col items-center text-white"
										>
											<div>
												<h1 className="font-FjallaOne font-bold">
													{item.name}
												</h1>
											</div>
											<div className="font-FjallaOne">
												<h1>
													<b>EMAIL: </b>
													{item.email}
												</h1>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contacts;
