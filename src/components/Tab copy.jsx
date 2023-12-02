'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Tab = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const renderNavigation = () => {
		return data.map((item, index) => (
			<button
				key={index}
				className={`cursor-pointer py-[0.94rem] tracking-[0.16875rem] border-b-[0.1875rem] uppercase font-barlowCondensed text-[rgba(255,255,255,0.5)]  hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.5)]  ${
					index === activeIndex
						? 'text-[rgba(255,255,255,1)] border-headline'
						: 'border-transparent '
				} transition-border duration-300 ease-in-out`}
				onClick={() => setActiveIndex(index)}
			>
				{item.name}
			</button>
		));
	};

	return (
		<div className="w-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-2">
			{data.map((item, index) => (
				<div
					key={index}
					className={`${
						index === activeIndex
							? ' grid grid-rows-[auto,1fr] grid-cols-1 place-items-center gap-y-6 mt-[2.44rem] lg:grid-rows-[auto] lg:grid-cols-2 lg:mt-0 lg:gap-x-[7rem] '
							: 'hidden'
					}`}
				>
					<div className="relative w-[10.375rem] h-[10.375rem]  md:w-[18.8rem] md:h-[18.8rem] lg:col-start-1 lg:col-span-1 1xl:w-[27.8rem] 1xl:h-[27.8rem]  ">
						<Image src={item.images.png} alt={item.name} fill />
					</div>
					<div className="grid grid-cols-1 grid-rows-[max-content, 1fr, auto] justify-items-center items-center lg:justify-self-end">
						<div className="flex justify-center space-x-3 md:gap-[2.25rem] lg:justify-self-start lg:gap-[2.19rem]">
							{renderNavigation()}
						</div>
						<h2 className="text-h3  uppercase font-bellefair md:text-[5rem] lg:justify-self-start lg:text-h2">
							{item.name}
						</h2>
						<p className="text-center text-text text-[0.9375rem] font-barlow leading-[1.5625rem] h-[7.8rem] md:w-[35.8125rem] md:h-max md:leading-[1.75rem] lg:text-[1.125rem] lg:leading-[2rem]  lg:w-full lg:max-w-[27.75rem] lg:text-left">
							{item.description}
						</p>

						<div className="flex flex-col w-full justify-evenly items-center py-[2rem] mt-[2rem] gap-8 border-t-[0.0625rem] border-line md:flex-row lg:justify-start lg:gap-[4.25rem] ">
							<div className="flex flex-col justify-center items-center uppercase lg:items-start">
								<h5 className="font-barlowCondensed text-[0.875rem] tracking-[0.14763rem] text-text">
									Avg. Distance
								</h5>
								<span className=" font-bellefair text-[1.75rem]">
									{item.distance}
								</span>
							</div>
							<div className="flex flex-col justify-center items-center uppercase lg:items-start">
								<h5 className="font-barlowCondensed text-[0.875rem] tracking-[0.14763rem] text-text">
									Est. Travel Time
								</h5>
								<span className=" font-bellefair text-[1.75rem]">
									{item.travel}
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Tab;
