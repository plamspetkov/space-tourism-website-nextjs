'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const MobileNavBar = () => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);

	const open = '/shared/icon-close.svg';
	const close = '/shared/icon-hamburger.svg';

	return (
		<nav className=" relative w-[40px] h-auto md:hidden">
			<button
				className=" absolute top-[1.5rem] right-[1rem] w-[40px] h-[40px] flex items-center justify-center z-20"
				onClick={() => setIsOpen(!isOpen)}
			>
				<Image
					src={isOpen ? open : close}
					alt="close"
					width={19.09}
					height={19.09}
				/>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ x: '100%' }}
						animate={{ x: '0%' }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', stiffness: 30, damping: 10 }}
						className="fixed top-0 right-0  w-[15.875rem] h-screen bg-nav-bg backdrop-blur text-nav text-headline pt-[7.38rem] pl-[2rem] flex flex-col gap-[2rem] uppercase tracking-spacenav overflow-auto"
					>
						<li>
							<Link
								href="/"
								className={`flex gap-[0.69rem] ${
									pathname === '/' ? 'active' : ''
								}`}
								onClick={() => setIsOpen(!isOpen)}
							>
								<span className="font-bold">00</span>Home
							</Link>
						</li>
						<li>
							<Link
								href="/destination"
								className={`flex gap-[0.69rem] ${
									pathname === '/destination' ? 'active' : ''
								}`}
								onClick={() => setIsOpen(!isOpen)}
							>
								<span className="font-bold">01</span>Destination
							</Link>
						</li>
						<li>
							<Link
								href="/crew"
								className={`flex gap-[0.69rem] ${
									pathname === '/crew' ? 'active' : ''
								}`}
								onClick={() => setIsOpen(!isOpen)}
							>
								<span className="font-bold">02</span>Crew
							</Link>
						</li>
						<li>
							<Link
								href="/technology"
								className={`flex gap-[0.69rem] ${
									pathname === '/technology' ? 'active' : ''
								}`}
								onClick={() => setIsOpen(!isOpen)}
							>
								<span className="font-bold">03</span>Technology
							</Link>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileNavBar;
