import React from 'react';
import technology from '../../../data/data.json';
import Tab from '@/components/Tab';
import crew from '../../../data/data.json';
import Swap from '@/components/Swap';

const page = () => {
	return (
		<main className="w-full lg:max-w-[1440px] h-full flex flex-col items-center  pt-[1.5rem]  md:pt-[2.5rem]  lg:pl-[10.41rem] lg:pt-[4.75rem] lg:pb-[7rem] ">
			<div className="w-full text-center md:text-left md:px-[2.41rem] lg:md:px-0">
				<h1 className=" text-headline uppercase font-barlowCondensed  tracking-[0.16875rem]  md:text-[1.25rem] lg:text-[1.75rem]">
					<span className="text-[rgba(255,255,255,0.25)] ">03</span> Space
					launch 101
				</h1>
			</div>
			<Swap data={technology.technology} tech />
		</main>
	);
};

export default page;
