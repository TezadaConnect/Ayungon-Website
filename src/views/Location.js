import React from 'react';
import Iframe from 'react-iframe';
const Location = () => {
	return (
		<div>
			<div className="flex p-5">
				<div className="flex">
					<Iframe
						width="1350"
						height="700"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=ayungon&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></Iframe>
				</div>
			</div>
		</div>
	);
};

export default Location;
