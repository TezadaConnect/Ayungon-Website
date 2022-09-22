import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import AboutTheTown from '../views/AboutTheTown';
import BidsAndAwards from '../views/BidsAndAwards';
import FullDisclosure from '../views/FullDisclosure';
import HomePage from '../views/HomePage';
import Offices from '../views/Offices';
import Officials from '../views/Officials';
import PublicBidding from '../views/PublicBidding';
import SmallValue from '../views/SmallValue';
import NoticeOfAwards from '../views/NoticeOfAwards';
import News from '../views/News';
import Projects from '../views/Projects';
import Events from '../views/Events';
import Location from '../views/Location';
import History from '../views/AboutTownDropDown/History';
import Culture from '../views/AboutTownDropDown/Culture';
import Tradition from '../views/AboutTownDropDown/Tradition';
import Barangays from '../views/AboutTownDropDown/Barangays';
import OfficeoftheMayor from '../views/OfficesDropDown/OfficeOfthe_Mayor';
import TourismOffice from '../views/OfficesDropDown/TourismOffice';

const MainRouter = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route
					path="/"
					element={<App />}
				>
					<Route
						index
						element={<Navigate to="/home" />}
					/>
					<Route
						path="/home"
						element={<HomePage />}
					>
						<Route
							index
							element={<Navigate to="/home/news" />}
						/>
						<Route
							path="/home/news"
							element={<News />}
						/>
						<Route
							path="/home/projects"
							element={<Projects />}
						/>
						<Route
							path="/home/events"
							element={<Events />}
						/>
						<Route
							path="/home/location"
							element={<Location />}
						/>
					</Route>
					<Route
						path="/disclosure"
						element={<FullDisclosure />}
					/>
					<Route
						path="/bids-rewards"
						element={<BidsAndAwards />}
					>
						<Route
							index
							element={<Navigate to="/bids-rewards/public-bid" />}
						/>
						<Route
							path="/bids-rewards/public-bid"
							element={<PublicBidding />}
						/>
						<Route
							path="/bids-rewards/small-value"
							element={<SmallValue />}
						/>
						<Route
							path="/bids-rewards/notice-of-awards"
							element={<NoticeOfAwards />}
						/>
					</Route>

					<Route
						path="/officials"
						element={<Officials />}
					>
						<Route
							index
							element={<Navigate to="/home" />}
						/>
					</Route>
					<Route
						path="/offices"
						element={<Offices />}
					>
						<Route
							index
							element={<Navigate to="/offices/office-of-the-mayor" />}
						/>
						<Route
							path="/offices/office-of-the-mayor"
							element={<OfficeoftheMayor />}
						/>
						<Route
							path="/offices/tourism-office"
							element={<TourismOffice />}
						/>
					</Route>
					<Route
						path="/about-town"
						element={<AboutTheTown />}
					/>
					<Route
						path="/about-town/history"
						element={<History />}
					/>
					<Route
						path="/about-town/culture"
						element={<Culture />}
					/>
					<Route
						path="/about-town/tradition"
						element={<Tradition />}
					/>
					<Route
						path="/about-town/barangays"
						element={<Barangays />}
					/>
				</Route>
			</Routes>
		</React.Fragment>
	);
};

export default MainRouter;
