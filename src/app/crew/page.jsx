import Carousel from '@/components/Carousel';
import React from 'react';
import crew from '../../../data/data.json';
import Swap from '@/components/Swap';

const page = () => {
	return (
		<main className="w-full lg:max-w-[1440px] h-full flex flex-col items-center px-[1.5rem] pt-[1.5rem]  md:px-[2.41rem] md:pt-[2.5rem] lg:px-[10.41rem] lg:pt-[4.75rem]">
			<div className="w-full text-center md:text-left  ">
				<h1 className="h1 !text-headline  ">
					<span className="text-[rgba(255,255,255,0.25)] ">02</span> Meet your
					crew
				</h1>
			</div>
			{/* <Carousel data={crew.crew} /> */}
			<Swap data={crew.crew} />
		</main>
	);
};

export default page;
