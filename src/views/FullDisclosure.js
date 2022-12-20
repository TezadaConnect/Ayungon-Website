import React from 'react';
import AgencyProcurement from '../files/FullDisclosure/AgencyProcurement.pdf';
import downloadIcon from '../assets/downloadIcon.png';
import BidOut1stQuarter from '../files/FullDisclosure/BIDOUT1STQUARTER.pdf';
import Footer from '../components/Footer';
import PMRJanuaryJune2022 from '../files/FullDisclosure/PMRJanuary-June2022.pdf';
import BIDOUTPROJECTSFORGOODSANDCIVILWORKS2ndQUARTERCY2022 from '../files/FullDisclosure/BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (2nd QUARTER CY 2022).pdf';
import App2022 from '../files/FullDisclosure/App2022.pdf';
import App2021 from '../files/FullDisclosure/App2021.pdf';
import PMRJuly_December2021 from '../files/FullDisclosure/PMRJuly_December2021.pdf';
import BOPGoodsAndCivilWorks4THQUARTERCY2021 from '../files/FullDisclosure/BOPGoodsAndCivilWorks4THQUARTERCY2021.pdf';
import APPCSE_2021 from '../files/FullDisclosure/APPCSE_2021.pdf';
import BOPGCW_3rdQUARTERCY2021 from '../files/FullDisclosure/BOPGCW_3rdQUARTERCY2021.pdf';
import BOPGCW_2ndQUARTERCY2021 from '../files/FullDisclosure/BOPGCW_2ndQUARTERCY2021.pdf';
import BOPGCW_4THQUARTERCY2020 from '../files/FullDisclosure/BOPGCW_4THQUARTERCY2020.pdf';
import BOPGCW_1STQUARTERCY2021 from '../files/FullDisclosure/BOPGCW_1STQUARTERCY2021.pdf';
import AppSUPPLEMENTALNO10CY2021 from '../files/FullDisclosure/AppSUPPLEMENTALNO10CY2021.pdf';
import AppSUPPLEMENTALNO7CY2021 from '../files/FullDisclosure/AppSUPPLEMENTALNO7CY2021.pdf';
import AppSUPPLEMENTALNOCY2021 from '../files/FullDisclosure/AppSUPPLEMENTALNOCY2021.pdf';
import AppSUPPLEMENTALNO5CY2021 from '../files/FullDisclosure/AppSUPPLEMENTALNO5CY2021.pdf';
import AppSUPPLEMENTALNO4CY2021 from '../files/FullDisclosure/AppSUPPLEMENTALNO4CY2021.pdf';
import BIDOUTPROJECTSFORGOODSANDCIVILWORKS from '../files/FullDisclosure/BIDOUTPROJECTSFORGOODSANDCIVILWORKS.pdf';
import Projects from './Projects';
const fullDisclosure = [
	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (3rd QUARTER CY 2022)',
		file: BIDOUTPROJECTSFORGOODSANDCIVILWORKS,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (2nd QUARTER CY 2022)',
		file: BIDOUTPROJECTSFORGOODSANDCIVILWORKS2ndQUARTERCY2022,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'PROJECT MONITORING REPORT January- June 2022',
		file: PMRJanuaryJune2022,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (1st QUARTER CY 2022)',
		file: BidOut1stQuarter,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'Agency Procurement  Compliance and Performance Indicators 2022',
		file: AgencyProcurement,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN 2022',
		file: App2022,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'PROJECT MONITORING REPORT JULY - DECEMBER 2021',
		file: PMRJuly_December2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (4TH QUARTER CY 2021)',
		file: BOPGoodsAndCivilWorks4THQUARTERCY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN 2021',
		file: App2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (3rd QUARTER CY 2021)',
		file: APPCSE_2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN-COMMON USE SUPPLIES AND EQUIPMENT (APP-CSE 2021)',
		file: BOPGCW_3rdQUARTERCY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (2nd QUARTER CY 2021)',
		file: BOPGCW_2ndQUARTERCY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (4TH QUARTER CY 2020)',
		file: BOPGCW_4THQUARTERCY2020,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'BID OUT PROJECTS FOR GOODS AND CIVIL WORKS (1ST QUARTER CY 2021)',
		file: BOPGCW_1STQUARTERCY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN-SUPPLEMENTAL NO. 10 CY 2021',
		file: AppSUPPLEMENTALNO10CY2021,
		type: 'appication/pdf',
		target: '_blank',
	},
	{
		name: 'ANNUAL PROCUREMENT PLAN-SUPPLEMENTAL NO. 7 CY 2021',
		file: AppSUPPLEMENTALNO7CY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN-SUPPLEMENTAL NO. 6 CY 2021',
		file: AppSUPPLEMENTALNOCY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN-SUPPLEMENTAL NO. 5 CY 2021',
		file: AppSUPPLEMENTALNO5CY2021,
		type: 'appication/pdf',
		target: '_blank',
	},

	{
		name: 'ANNUAL PROCUREMENT PLAN-SUPPLEMENTAL NO. 4 CY 2021',
		file: AppSUPPLEMENTALNO4CY2021,
		type: 'appication/pdf',
		target: '_blank',
	},
];

const FullDisclosure = () => {
	return (
		<div>
			<div className="flex flex-col  lg:w-10/12 w-screen m-auto pb-36	">
				<div className="flex justify-center items-center px-3 pt-5">
					<div className="flex font-Cinzel text-3xl justify-center items-center text-center lg:w-[935px] w-screen p-5 drop-shadow-xl bg-green-600 ">
						<h1> FULL DISCLOSURE</h1>
					</div>
				</div>
				{fullDisclosure?.map((item, key) => {
					return (
						<React.Fragment key={key}>
							<div className="flex flex-row justify-center drop-shadow-lg  items-center p-3">
								<div className="bg-white drop-shadow-xl w-[935px] p-10 ">
									<div className="font-Cinzel flex flex-row justify-between items-center  rounded-xl">
										<div className="flex justify-center items-center text-sm  ">
											<h1 className="font-Cinzel text-sm ">
												<h2>{item?.name}</h2>
											</h1>
										</div>

										<div className="">
											<a
												href={item?.file}
												type={item?.type}
												target={item?.target}
											>
												<div className="w-10">
													<img
														src={downloadIcon}
														alt="downloadIcon"
													/>{' '}
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</div>
			<Projects fullDisclosure={fullDisclosure} />
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default FullDisclosure;
