import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex-grow pageGrid">
			<div className="text-center lg:text-left lg:col-start-2 lg:col-span-1 lg:justify-self-start  lg:align-self-start">
				<h5 className="text-text text-[1rem] font-barlowCondensed uppercase tracking-[0.16875rem] md:text-[1.25rem] 1xl:text-[1.75rem] ">
					So, you want to travel to
				</h5>
				<h1 className="text-headline text-[5rem] font-bellefair font-normal uppercase  md:text-[9.375rem] lg:text-[6.25rem] 1xl:text-[9.375rem]">
					Space
				</h1>
				<p className="text-text font-barlow text-[0.9375rem] max-w-[50ch] leading-[1.5625rem] md:max-w-[27.75rem] md:text-[1rem] 1xl:text-[1.125rem] lg:max-w-[35ch] lg:leading-[2rem] lg:w-[45ch] 1xl:max-w-[50ch]">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className=" lg:col-start-3 lg:col-span-1 lg:place-self-end">
				<Link
					href="/destination"
					className="flex justify-center items-center uppercase bg-headline font-bellefair text-[1.25rem] w-[9.375rem] h-[9.375rem] rounded-full md:w-[15.125rem] md:h-[15.125rem] lg:text-[2rem] 1xl:w-[17.125rem] 1xl:h-[17.125rem] relative exploreHover"
				>
					Explore
				</Link>
			</div>
		</main>
	);
}
