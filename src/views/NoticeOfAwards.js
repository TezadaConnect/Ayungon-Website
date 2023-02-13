import React from 'react';
import downloadIcon from '../assets/downloadIcon.png';
import NOTICEOFAWARD1 from '../files/BidsAndAwards/NoticeOfAwards/NOTICEOFAWARD1.pdf';
import NOTICEOFAWARD2 from '../files/BidsAndAwards/NoticeOfAwards/NOTICEOFAWARD2.pdf';
import BIDID20221054 from '../files/BidsAndAwards/NoticeOfAwards/BIDID20221054.pdf';
import BIDIDNo20221271 from '../files/BidsAndAwards/NoticeOfAwards/BIDIDNo20221271.pdf';
import BIDIDNo20221272 from '../files/BidsAndAwards/NoticeOfAwards/BIDIDNo20221272.pdf';
import BIDIDNo20221268 from '../files/BidsAndAwards/NoticeOfAwards/BIDIDNo20221268.pdf';
import BIDIDNo20221275 from '../files/BidsAndAwards/NoticeOfAwards/BIDIDNo20221275.pdf';
import BIDIDNo20221274 from '../files/BidsAndAwards/NoticeOfAwards/BIDIDNo20221274.pdf';
import NOA20230208002 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230208002.pdf';
import NOA20230208003 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230208003.pdf';
import NOA20230208004 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230208004.pdf';
import NOA20230208005 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230208005.pdf';
import NOA20230209001 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209001.pdf';
import NOA20230209002 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209002.pdf';
import NOA20230209003 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209003.pdf';
import NOA20230209004 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209004.pdf';
import NOA20230209010 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209010.pdf';
import NOA20230209011 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209011.pdf';
import NOA20230209012 from '../files/BidsAndAwards/NoticeOfAwards/NOA20230209012.pdf';
const NoticeOfAwards = () => {
	const noaData = [
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-12-70',
			file: NOA20230209012,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-64',
			file: NOA20230209011,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-65',
			file: NOA20230209010,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-60',
			file: NOA20230209004,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-57',
			file: NOA20230209003,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-62',
			file: NOA20230209002,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-12-58',
			file: NOA20230209001,
			type: 'appication/pdf',
			target: '_blank',
		},

		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-61',
			file: NOA20230208005,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-61',
			file: NOA20230208004,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-67',
			file: NOA20230208003,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID NO.2022-11-59',
			file: NOA20230208002,
			type: 'appication/pdf',
			target: '_blank',
		},

		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID No. 2022-12-74',
			file: BIDIDNo20221274,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID No. 2022-12-75',
			file: BIDIDNo20221275,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID No. 2022-12-68',
			file: BIDIDNo20221268,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID No. 2022-12-72',
			file: BIDIDNo20221272,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID No. 2022-12-71',
			file: BIDIDNo20221271,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID # 2022-10-54',
			file: BIDID20221054,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/PROCEED',
			name: 'BID ID # 2021-12-57 ,BID ID # 2021-12-58',
			file: NOTICEOFAWARD2,
			type: 'appication/pdf',
			target: '_blank',
		},
		{
			bidId: 'NOTICE OF AWARD/Small Value Procurement',
			name: '',
			file: NOTICEOFAWARD1,
			type: 'appication/pdf',
			target: '_blank',
		},
	];
	return (
		<div>
			<div className="flex flex-col pb-10	">
				{noaData?.map((item, key) => {
					return (
						<React.Fragment key={key}>
							<div className="flex flex-row justify-center drop-shadow-lg  items-center pt-5 ">
								<div className="bg-white drop-shadow-xl lg:w-[935px] p-10 ">
									<div className="font-Cinzel flex flex-row justify-between items-center  rounded-xl">
										<div className="flex justify-center items-center text-sm  ">
											<div className="font-Cinzel text-sm gap-5 flex flex-col">
												<div className="text-lg">
													<h2>{item?.bidId}</h2>
												</div>
												<div>
													<h2>{item?.name}</h2>
												</div>
											</div>
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

export default NoticeOfAwards;
