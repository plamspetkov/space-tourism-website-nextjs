import React from 'react';
import destinations from '../../../data/data.json';
import Tab from '@/components/Tab';

const page = () => {
	return (
		<main className="text-headline flex-grow pagessGrid">
			<div className="text-center  justify-self-center md:mt-[2.5rem] md:justify-self-start lg:text-left lg:row-start-1 lg:row-span-1 lg:col-start-2 lg:col-span-2 ">
				<h1 className=" text-headline uppercase font-barlowCondensed  tracking-[0.16875rem] md:text-[1.25rem] lg:text-[1.75rem]">
					<span className="text-[rgba(255,255,255,0.25)] ">01</span> Pick your
					destination
				</h1>
			</div>
			<Tab data={destinations.destinations} />
		</main>
	);
};

export default page;
