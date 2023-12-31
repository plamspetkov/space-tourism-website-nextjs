import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';
import { BackgroundContextProvider } from '@/context/BackgroundContext';
import Header from '@/components/Header';
import BackgroundProvider from './providers/BackgroundProvider';

const bellrfair = Bellefair({
	weight: ['400'],
	variable: '--font-bellefair',
	subsets: ['latin'],
});
const barlowCondensed = Barlow_Condensed({
	weight: ['400'],
	variable: '--font-barlow-condensed',
	subsets: ['latin'],
});

const barlow = Barlow({
	weight: ['400'],
	variable: '--font-barlow',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${bellrfair.variable} ${barlowCondensed.variable} ${barlow.variable} `}
			>
				<BackgroundContextProvider>
					<BackgroundProvider>
						<Header />
						{children}
					</BackgroundProvider>
				</BackgroundContextProvider>
			</body>
		</html>
	);
}
