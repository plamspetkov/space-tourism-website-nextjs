'use client';
import { BackgroundContext } from '@/context/BackgroundContext';
import React, { useContext, useEffect, useState } from 'react';

const BackgroundProvider = ({ children }) => {
	const { bgColor } = useContext(BackgroundContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		return (
			<div
				className={` flex flex-col min-h-[100vh] items-center
			 ${bgColor}`}
			>
				{children}
			</div>
		);
	}
};

export default BackgroundProvider;
