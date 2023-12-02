'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<nav className="hidden md:flex items-center justify-centerh-[96px] min-w-[450px] bg-nav-bg backdrop-blur h-[6rem] md:px-[2.5rem] lg:w-max lg:px-[7.69rem]">
			<ul className=" justify-center items-center  text-headline flex w-full h-full gap-[2rem] uppercase tracking-spacenav  lg:gap-[3.13rem] ">
				<li className="h-full">
					<Link
						href="/"
						className={`navLink navHover ${pathname === '/' ? 'active' : ''}`}
					>
						<span className="font-bold md:hidden lg:flex">00</span>Home
					</Link>
				</li>
				<li className="h-full">
					<Link
						href="/destination"
						className={`navLink navHover ${
							pathname === '/destination' ? 'active' : ''
						}`}
					>
						<span className="font-bold md:hidden lg:flex">01</span>Destination
					</Link>
				</li>
				<li className="h-full">
					<Link
						href="/crew"
						className={`navLink navHover ${
							pathname === '/crew' ? 'active' : ''
						}`}
					>
						<span className="font-bold md:hidden lg:flex">02</span>Crew
					</Link>
				</li>
				<li className="h-full">
					<Link
						href="/technology"
						className={`navLink navHover ${
							pathname === '/technology' ? 'active' : ''
						}`}
					>
						<span className="font-bold md:hidden lg:flex">03</span>Technology
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
