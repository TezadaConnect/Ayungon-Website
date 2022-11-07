import React from 'react';
import downloadIcon from '../assets/downloadIcon.png';
import RCJandalamanonAyungonNegrosOriental from '../files/BidsAndAwards/publicbidding/RCJandalamanonAyungonNegrosOriental.pdf';
import BIDID20220102 from '../files/BidsAndAwards/publicbidding/BIDID20220102.pdf';
import BIDID20220103 from '../files/BidsAndAwards/publicbidding/BIDID20220103.pdf';
import BIDID20220204 from '../files/BidsAndAwards/publicbidding/BIDID20220204.pdf';
import BIDID20220205 from '../files/BidsAndAwards/publicbidding/BIDID20220205.pdf';
import BIDID20220206 from '../files/BidsAndAwards/publicbidding/BIDID20220206.pdf';
import BIDID20220207 from '../files/BidsAndAwards/publicbidding/BIDID20220207.pdf';
import BIDID20220208 from '../files/BidsAndAwards/publicbidding/BIDID20220208.pdf';
import BIDID20220209 from '../files/BidsAndAwards/publicbidding/BIDID20220209.pdf';
import BIDID20220210 from '../files/BidsAndAwards/publicbidding/BIDID20220210.pdf';
import BIDID20220211 from '../files/BidsAndAwards/publicbidding/BIDID20220211.pdf';
import BIDID20220212 from '../files/BidsAndAwards/publicbidding/BIDID20220212.pdf';
import BIDID20220213 from '../files/BidsAndAwards/publicbidding/BIDID20220213.pdf';
import BIDID20220214 from '../files/BidsAndAwards/publicbidding/BIDID20220214.pdf';
import BIDID20220215 from '../files/BidsAndAwards/publicbidding/BIDID20220215.pdf';
import BIDID20220216 from '../files/BidsAndAwards/publicbidding/BIDID20220216.pdf';
import BIDID20220217 from '../files/BidsAndAwards/publicbidding/BIDID20220217.pdf';
import BIDID20220218 from '../files/BidsAndAwards/publicbidding/BIDID20220218.pdf';
import BIDID20220219 from '../files/BidsAndAwards/publicbidding/BIDID20220219.pdf';
import BIDID2022042120220425 from '../files/BidsAndAwards/publicbidding/BIDID2022042120220425.pdf';
import BIDID2022042620220428 from '../files/BidsAndAwards/publicbidding/BIDID2022042620220428.pdf';
import BIDBULLETINNO1 from '../files/BidsAndAwards/publicbidding/BIDBULLETINNO1.pdf';
const PublicBidding = () => {
	const publicBidding = [
		{
			bidId: 'BID BULLETIN NO. 1 BID ID NO. 2022-10-55',
			name: '',
			file: BIDBULLETINNO1,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-05-26 (REBIDDING) & BID ID # 2022-05-28 ',
			name: 'Procurement of One (1) Package of Rice Seeds and Corn Seeds for Enhancing the Sustainable Agricultural Productivity of Ayungon Farmers of Special Area Agricultural Development (SAAD Project) at Municipality of Ayungon, Negros Oriental, Repair of Municipal Vehicle (Self-loader Truck) at Ayungon, Negros Oriental',
			file: BIDID2022042620220428,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-04-21 - 2022-04-25  ',
			name: 'Procurement of One (1) Package Medicines for RHU-Ayungon, Negros Oriental , Procurement of One (1) Package Medicines for Lifestyle Disease Program of RHU-Ayungon, Negros Oriental , Procurement of One (1) Package of Medical Supplies for Laboratory Service of RHU-Ayungon , Negros Oriental , Procurement of One (1) Package of Livestock Supplies of Municipal Agriculture Office at Municipality of  Ayungon, Negros Oriental , Procurement of One (1) Package of Vegetable seeds for Vegetable Prodcution of Municipal Agriculture Office at Municipality of  Ayungon, Negros Oriental',
			file: BIDID2022042120220425,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-19',
			name: 'Procurement of One (1) Package of Brand New Tires  for use at Municipality  Ayungon, Negros Oriental',
			file: BIDID20220219,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-18',
			name: 'Procurement of One (1) Package Office Supplies for Municipality  Ayungon, Negros Oriental',
			file: BIDID20220218,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-17',
			name: 'Procurement of Two (2) Units Dump truck for use at Municipality of Ayungon, Negros Oriental',
			file: BIDID20220217,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-16',
			name: 'Procurement of One (1) unit Backhoe with Dozer for Municipality  of Ayungon, Negros Oriental',
			file: BIDID20220216,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-15',
			name: 'Procurement of Municipal Rescue Vehicle, Ayungon, Negros Oriental',
			file: BIDID20220215,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-14',
			name: 'Procurement of One (1) Package of Construction materials for the Improvement of Municipal Multi-Purpose and Evacuation Center Poblacion Ayungon, Negros Oriental',
			file: BIDID20220214,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-13',
			name: 'Road Opening/Widening: Kilaban Proper - Sitio Basak (Gilimongan Trail) Barangay Kilaban, Ayungon, Negros Oriental',
			file: BIDID20220213,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-12',
			name: 'Road Concreting: Portion of Tampocon II Municipal Streets (Starting at Front of Negros College), Ayungon, Negros Oriental',
			file: BIDID20220212,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-11',
			name: 'Procurement of One (1) Package Construction Materials for the Improvement of Municipal Cemetery, Ayungon, Negros Oriental',
			file: BIDID20220211,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-10',
			name: 'Procurement of Medicines for Mental Health Program of RHU - Ayungon, Negros Oriental',
			file: BIDID20220210,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-09',
			name: 'Procurement of Vaccine for Dog Catchers, Animal Bites & Human Bites - Rabies Program of RHU - Ayungon, Negros Oriental',
			file: BIDID20220209,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-08',
			name: 'Cluster of Construction Projects Cluster 5 at Ayungon, Negros Oriental',
			file: BIDID20220208,
			type: 'appication/pdf',
			target: '_blank',
		},

		{
			bidId: 'BID ID # 2022-02-07',
			name: 'Cluster of Construction Projects Cluster 4 at Ayungon, Negros Oriental',
			file: BIDID20220207,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-06',
			name: 'Cluster of Construction Projects Cluster 3 at Ayungon, Negros Oriental',
			file: BIDID20220206,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-05  ',
			name: 'Cluster of Construction Projects Cluster 2 at Ayungon, Negros Oriental',
			file: BIDID20220205,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-02-04 ',
			name: 'Cluster of Construction Projects Cluster 1 at Ayungon, Negros Oriental',
			file: BIDID20220204,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-01-03',
			name: 'Road Concreting: Portion of Tiguib - Manogtong Road, Ayungon, Negros Oriental',
			file: BIDID20220103,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-01-02 ',
			name: 'Road Concreting: Portion of Jandalamanon - Gomentoc Road, Ayungon, Negros Oriental  ',
			file: BIDID20220102,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'BID ID # 2022-01-01 ',
			name: 'Road Concreting: Portion of Jandalamanon Barangay Road, Ayungon, Negros Oriental ',
			file: RCJandalamanonAyungonNegrosOriental,
			type: 'appication/pdf',
			target: '_blank',
		},
	];
	return (
		<div>
			<div className="flex flex-col pb-10	">
				{publicBidding?.map((item, key) => {
					return (
						<React.Fragment key={key}>
							<div className="flex flex-row justify-center drop-shadow-lg  items-center pt-5 ">
								<div className="bg-white lg:w-[935px] p-10 ">
									<div className="font-Cinzel flex flex-row justify-between items-center  rounded-xl">
										<div className="flex justify-center items-center text-sm  ">
											<h1 className="font-Cinzel text-sm ">
												<h2>{item?.bidId}</h2>
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
		</div>
	);
};

export default PublicBidding;
