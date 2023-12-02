'use client';
import { createContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const BackgroundContext = createContext();

export function BackgroundContextProvider({ children }) {
	const pathname = usePathname();
	const [bgColor, setBgColor] = useState('homeBg');

	useEffect(() => {
		switch (pathname) {
			case '/':
				setBgColor('homeBg');
				break;
			case '/destination':
				setBgColor('destinationBg');
				break;
			case '/crew':
				setBgColor('crewBg');
				break;
			case '/technology':
				setBgColor('technologyBg');
				break;
			default:
				setBgColor('homeBg');
		}
	}, [pathname]);

	return (
		<BackgroundContext.Provider value={{ bgColor }}>
			{children}
		</BackgroundContext.Provider>
	);
}
