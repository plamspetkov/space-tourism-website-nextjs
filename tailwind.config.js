/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bellefair: ['var(--font-bellefair)', 'sans-serif'],
				barlowCondensed: ['var(--font-barlow-condensed)', 'sans-serif'],
				barlow: ['var(--font-barlow)', 'sans-serif'],
			},
			inset: {
				'30p': '30%',
			},
			fontSize: {
				h1: '150px',
				h2: '100px',
				h3: '56px',
				h4: '32px',
				h5: '28px',
				sub1: '28px',
				sub2: '14px',
				nav: '16px',
			},
			letterSpacing: {
				space5: '4.75px',
				spacesub2: '2.35px',
				spacenav: '2.7px',
			},
			colors: {
				bg: '#0B0D17',
				text: '#D0D6F9',
				headline: '#FFFFFF',
				line: '#383B4B',
				'nav-bg': 'rgba(255, 255, 255, 0.04)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'home-desktop': "url('/home/background-home-desktop.jpg')",
				'home-tablet': "url('/home/background-home-tablet.jpg')",
				'home-mobile': "url('/home/background-home-mobile.jpg')",
				'destination-desktop':
					"url('/destination/background-destination-desktop.jpg')",
				'destination-tablet':
					"url('/destination/background-destination-tablet.jpg')",
				'destination-mobile':
					"url('/destination/background-destination-mobile.jpg')",
				'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
				'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
				'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
				'technology-desktop':
					"url('/technology/background-technology-desktop.jpg')",
				'technology-tablet':
					"url('/technology/background-technology-tablet.jpg')",
				'technology-mobile':
					"url('/technology/background-technology-mobile.jpg')",
			},
			backdropFilter: {
				blur: 'blur(40.774227142333984px)',
			},
			width: {
				custom: 'clamp(30%, 29.5625rem,100%)',
			},
			gridTemplateColumns: {
				custom:
					'minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(1rem, 1fr)',
			},
			padding: {
				custom: 'max(6rem, 14vh)',
			},
			screens: {
				'1xl': '1440px',
			},
			transitionTimingFunction: {
				custom: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
			},
		},
	},
	plugins: [],
};
