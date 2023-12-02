'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Swap = ({ data, tech }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [startPos, setStartPos] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const [offset, setOffset] = useState(0);

	// Use hooks to check the screen width for each breakpoint
	const isMobile = useMediaQuery({ maxWidth: 375 });
	const isTablet = useMediaQuery({ minWidth: 376, maxWidth: 768 });
	const isDesktop = useMediaQuery({ minWidth: 769 });

	const handleStart = (pos) => {
		setStartPos(pos);
		setIsDragging(true);
	};

	const handleMove = (pos) => {
		if (!startPos || !isDragging) {
			return;
		}
		const distance = startPos - pos;

		// Update the offset based on the distance
		setOffset((prevDistance) => prevDistance + distance);
	};

	const handleEnd = () => {
		const newIndex =
			offset > 50
				? (currentIndex + 1) % data.length
				: offset < -50
				? (currentIndex - 1 + data.length) % data.length
				: currentIndex;

		setCurrentIndex(newIndex);
		setStartPos(null);
		setIsDragging(false);
		setOffset(0);
	};

	const carouselInfinityScroll = () => {
		if (currentIndex === data.length - 1) {
			return setCurrentIndex(0);
		}
		return setCurrentIndex(currentIndex + 1);
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		carouselInfinityScroll();
	// 	}, 3000);
	// 	return () => clearInterval(interval);
	// });
	console.log(tech);
	return (
		<div
			className={`relative w-full h-full  ${
				tech ? 'md:max-w-[100vw] lg:pl-[10rem]' : 'max-w-[87vw]'
			} mx-auto pt-[3rem] `}
		>
			<div
				className={` flex flex-nowrap overflow-hidden w-full h-full flex-1   ${
					isDragging ? 'cursor-move' : 'cursor-pointer'
				} user-select-none`}
				onMouseDown={(e) => handleStart(e.clientX)}
				onMouseMove={(e) => handleMove(e.clientX)}
				onMouseUp={handleEnd}
				onMouseLeave={handleEnd}
				onTouchStart={(e) => handleStart(e.touches[0].clientX)}
				onTouchMove={(e) => handleMove(e.touches[0].clientX)}
				onTouchEnd={handleEnd}
			>
				{data.map((item, index) => {
					return (
						<div
							className={`min-w-full w-full h-full flex flex-col items-center gap-[5rem] justify-start py-transition-all duration-1000 ease-custom   lg:flex-row-reverse lg:items-start lg:gap-0 ${
								!tech
									? 'md:flex-col-reverse md:justify-between'
									: 'md:gap-[11rem] '
							}`}
							key={index}
							style={{
								transform: `translateX(calc(-${
									currentIndex * 100
								}% - ${offset}px  ))`,
							}}
						>
							{!tech ? (
								<div className="relative h-[13.875rem]  w-full border-line border-b-[1px] md:h-[33.25rem] md:border-none lg:flex-1 lg:h-full">
									<Image
										src={item.images.png}
										alt={item.name}
										fill
										style={{ objectFit: 'contain' }}
										onDragStart={(e) => e.preventDefault()}
									/>
								</div>
							) : (
								<div className="relative h-[10.625rem] max-w-screen-sm w-full border-line border-b-[1px] md:h-[19.375rem] md:max-w-screen-md md:border-none lg:w-[32.1875rem] lg:h-full">
									<Image
										src={
											isMobile || isTablet
												? item.images.landscape
												: isDesktop
												? item.images.portrait
												: item.images.landscape
										}
										alt={item.name}
										fill
										style={{ objectFit: 'cover' }}
										onDragStart={(e) => e.preventDefault()}
									/>
								</div>
							)}
							{!tech ? (
								<div className="text-center text-headline  lg:flex-1 lg:text-left lg:mt-[9.62rem]">
									<h2 className="font-bellefair uppercase opacity-[0.5] md:text-[1.5rem] lg:text-[2rem]">
										{item.role}
									</h2>
									<h1 className="font-bellefair uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] lg:whitespace-nowrap">
										{item.name}
									</h1>
									<p className="mt-[1rem] leading-[1.5625rem] text-[0.9375rem] font-barlow md:text-[1rem] md:w-[37rem] lg:text-[1.125rem] lg:leading-[2rem] lg:w-[27.75rem]">
										{item.bio}
									</p>
								</div>
							) : (
								<div className="text-center text-headline max-w-[87vw]  lg:flex-1 lg:text-left lg:mt-[9.62rem] ">
									<h2 className="font-barlowCondensed uppercase opacity-[0.5] md:text-[1.5rem] lg:text-[1rem] lg:tracking-[0.16875rem]">
										The terminology...
									</h2>
									<h1 className="font-bellefair uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] lg:whitespace-nowrap">
										{item.name}
									</h1>
									<p className="mt-[1rem] leading-[1.5625rem] text-[0.9375rem] font-barlow md:text-[1rem] md:w-[28.625rem] lg:text-[1.125rem] lg:leading-[2rem] lg:w-[27.75rem] lg:mt-0">
										{item.description}
									</p>
								</div>
							)}
						</div>
					);
				})}
			</div>
			{!tech ? (
				<div className="absolute top-[19rem] left-[50%] translate-x-[-50%] flex justify-center space-x-3 Z-10 md:top-[17rem] lg:left-[5%] lg:top-[87%] lg:space-x-5 cursor-pointer">
					{data.map((_, index) => (
						<div
							key={index}
							className={`h-3 w-3 rounded-full bg-headline ${
								currentIndex === index ? 'opacity-1' : 'opacity-[0.17]'
							}`}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			) : (
				<div className="absolute top-[15rem] left-[50%] translate-x-[-50%] flex justify-center space-x-3 Z-10 md:top-[26rem] lg:left-[5%] lg:top-[37%] lg:space-y-[2rem] lg:space-x-0 lg:flex-col lg:items-center lg:justify-center cursor-pointer">
					{data.map((_, index) => (
						<div
							key={index}
							className={`flex justify-center items-center h-[2.5rem] w-[2.5rem] rounded-full font-bellefair md:w-[3.75rem] md:h-[3.75rem] md:text-[1.5rem] lg:text-[2rem] lg:w-[5rem] lg:h-[5rem] ${
								currentIndex === index
									? 'bg-headline text-bg'
									: 'bg-transparent text-headline border-[1px] border-headline border-opacity-[0.25]'
							}`}
							onClick={() => setCurrentIndex(index)}
						>
							{index + 1}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default Swap;
