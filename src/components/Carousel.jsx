'use client';
import React, { useState } from 'react';

const Carousel = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	let startPos = 0;

	const slide = (index) => {
		setCurrentIndex(index);
	};

	const handleSwipeStart = (e) => {
		console.log(e);
		startPos = e.touches[0].clientX;
	};

	const handleSwipeMove = (e) => {
		const currentPos = e.touches[0].clientX;
		const deltaX = currentPos - startPos;

		if (deltaX > 50 && currentIndex > 0) {
			slide(currentIndex - 1);
		} else if (deltaX < -50 && currentIndex < data.length - 1) {
			slide(currentIndex + 1);
		}
	};

	return (
		<div className="relative w-full h-full max-w-md mx-auto overflow-hidden">
			<div
				className="flex h-full w-full transition-transform duration-300 transform"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				onTouchStart={handleSwipeStart}
				onTouchMove={handleSwipeMove}
			>
				{data.map((item, index) => (
					<div key={index} className="w-full  flex flex-col flex-shrink-0">
						<div className="flex-1 h-[20%] overflow-hidden">
							<img
								src={item.images.webp}
								alt={item.name}
								className="w-full h-full object-contain"
							/>
						</div>
						<div className="flex-1">
							<h2>{item.role}</h2>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-4 z-10">
				{data.map((_, index) => (
					<span
						key={index}
						onClick={() => slide(index)}
						className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
							index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
