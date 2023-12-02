import React from 'react';
import destinations from '../../../data/data.json';
import Tab from '@/components/Tab';

const page = () => {
	return (
		<main className="w-full max-w-[1440px] h-full flex flex-col items-center  px-[1.5rem] py-[1.5rem] md:px-[2.41rem] md:py-[2.5rem] lg:px-[10.41rem] lg:pt-[4.75rem] lg:gap-[4rem] ">
			<div className="w-full text-center md:text-left   ">
				<h1 className="h1 !text-headline">
					<span className="text-[rgba(255,255,255,0.25)] ">01</span> Pick your
					destination
				</h1>
			</div>
			<Tab data={destinations.destinations} />
		</main>
	);
};

export default page;
