import React from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
const BidsAndAwards = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex flex-col bg-slate-200 w-10/12 m-auto pb-36	">
				<div className="flex flex-col justify-center items-center px-3 pt-5">
					<div className="flex font-Cinzel text-3xl justify-center items-center text-center w-3/4 p-5 bg-green-600 ">
						<h1> BIDS AND AWARDS</h1>
					</div>

					<div className="flex bg-white justify-center p-5 gap-32 w-3/4 drop-shadow-lg font-Cinzel ">
						<div
							className="hover:scale-105 uppercase"
							onClick={() => {
								navigate('PubblicBidding');
							}}
						>
							Public Bidding
						</div>
						<div
							className="hover:scale-105 uppercase"
							onClick={() => {
								navigate('SmallValue');
							}}
						>
							Small Value
						</div>
						<div
							className="hover:scale-105 uppercase"
							onClick={() => {
								navigate('NoticeOfAwards');
							}}
						>
							Notice Of Awards
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BidsAndAwards;
