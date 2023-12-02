import Image from 'next/image';
import React from 'react';

import NavBar from '@/components/NavBar';
import MobileNavBar from '@/components/MobileNavBar';
import Link from 'next/link';

const Header = ({ children }) => {
	return (
		<header className="w-full z-40 max-w-[1440px] relative flex justify-between lg:mt-[1.5rem] ]">
			<div className="">
				<Link
					href="/"
					className="flex m-[1.5rem] relative h-[2.5rem] w-[2.5rem] md:w-[3rem] md:h-[3rem] md:ml-[2.5rem]"
				>
					<Image
						src="/shared/logo.svg"
						alt="Space Tourism logo"
						fill
						className=""
					/>
				</Link>
			</div>
			{/* <div className="hidden sm:hidden md:hidden lg:flex w-custom h-[0.0625rem] absolute top-[48%] left-[12%] z-10 bg-white opacity-[0.25]" /> */}
			<MobileNavBar />
			<NavBar />
		</header>
	);
};

export default Header;
