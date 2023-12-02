import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="w-full max-w-[1440px] h-full flex flex-col items-center  px-[1.5rem] py-[1.5rem] md:px-[2.41rem] md:py-[2.41rem] lg:px-[10.41rem] lg:flex-row lg:pb-[8.1875rem] ">
			<div className="w-full flex-grow-[2] flex flex-col items-center  text-center md:pt-[2.20rem] lg:text-left lg:h-full lg:items-start lg:justify-end ">
				<h1 className="h1">So, you want to travel to</h1>
				<h2 className="text-headline text-[5rem] font-bellefair font-normal uppercase  md:text-[9.375rem] lg:text-[9.375rem]">
					Space
				</h2>
				<p className="text-text font-barlow text-[0.9375rem] max-w-[50ch] leading-[1.5625rem] md:max-w-[27.75rem] md:text-[1rem] 1xl:text-[1.125rem] lg:max-w-[35ch] lg:leading-[2rem] lg:w-[45ch] 1xl:max-w-[50ch]">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className=" w-full flex-grow-[1] flex justify-center items-center lg:h-full lg:items-end lg:justify-end">
				<Link
					href="/destination"
					className="flex justify-center items-center uppercase bg-headline font-bellefair text-[1.25rem] w-[9.375rem] h-[9.375rem] rounded-full md:w-[15.125rem] md:h-[15.125rem] md:text-[2rem] 1xl:w-[17.125rem] 1xl:h-[17.125rem] relative exploreHover"
				>
					Explore
				</Link>
			</div>
		</main>
	);
}
