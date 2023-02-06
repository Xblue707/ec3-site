'use client';
import { useEffect, useState } from 'react';
import colorMap from '../colorMap';

export default function Settings() {
	const [color, setColor] = useState('green');

	// fetch current theme from localstorage
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			setColor(theme);
		}
	}, []);


	return (
		<div className='pt-36 text-center font-fira'>
			<h1 className='text-4xl font-bold'>
				Settings
			</h1>
			<p className='text-xl mt-10'>
				Select accent color:
			</p>
			<div className='flex flex-row justify-center mt-2'>
				{/* eslint-disable-next-line no-shadow */}
				{Object.keys(colorMap).map((color) => (
					<div
						key={color}
						className={'w-10 h-10 rounded-full m-2 cursor-pointer'}
						style={{ backgroundColor: (colorMap as any)[color].accent }}
						onClick={() => {
							localStorage.setItem('theme', color);
							setColor(color);
							document.documentElement.style.setProperty('--text-color', (colorMap as any)[color].accent);
							document.documentElement.style.setProperty('--neon-color', (colorMap as any)[color].accent);
						}}
					/>
				))}
			</div>
		</div>
	);
}