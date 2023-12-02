import Carousel from '@/components/Carousel2';
import Carousel5 from '@/components/Carousel5';
import React from 'react';
import crew from '../../../data/data.json';
import Tab from '@/components/Tab';

const page = () => {
	return (
		<main className="text-headline flex-grow pagessGrid">
			<div className="text-center justify-self-center z-10 md:mt-[2.5rem] md:justify-self-start lg:text-left lg:row-start-1 lg:row-span-1 lg:col-start-2 lg:col-span-2 ">
				<h1 className=" text-headline uppercase font-barlowCondensed  tracking-[0.16875rem]  md:text-[1.25rem] lg:text-[1.75rem]">
					<span className="text-[rgba(255,255,255,0.25)] ">02</span> Meet your
					crew
				</h1>
			</div>
			{/* <Carousel data={crew.crew} navigationType="dots" /> */}
			<Carousel5 name="crew" data={crew.crew} navigationType="dots" />
			{/* <Tab data={crew.crew} /> */}
		</main>
	);
};

export default page;
