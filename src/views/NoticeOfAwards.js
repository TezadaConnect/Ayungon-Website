import React from 'react';
import downloadIcon from '../assets/downloadIcon.png';
import NOTICEOFAWARD1 from '../files/BidsAndAwards/NoticeOfAwards/NOTICEOFAWARD1.pdf';
import NOTICEOFAWARD2 from '../files/BidsAndAwards/NoticeOfAwards/NOTICEOFAWARD2.pdf';
import BIDID20221054 from '../files/BidsAndAwards/NoticeOfAwards/BIDID20221054.pdf';
const NoticeOfAwards = () => {
	const noaData = [
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
								<div className="bg-white lg:w-[935px] p-10 ">
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
