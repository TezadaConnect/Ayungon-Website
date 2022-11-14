import React from 'react';
import Iframe from 'react-iframe';

const FacebookPlugin = () => {
	return (
		<div className="">
			<h1 className="flex justify-center items-center uppercase font-serif font-bold pt-7 text-lg">
				Facebook Updates
			</h1>
			<Iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmunicipalityofayungon&tabs=timeline&width=1000&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				className="border:none overflow:hidden p-7 lg:w-[600px] w-[400px] h-[600px]"
				scrolling="no"
				frameborder="0"
				allowfullscreen="true"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></Iframe>
		</div>
	);
};

export default FacebookPlugin;
