/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getServerSession } from 'next-auth';
import SignOut from './SignOut';
import { redirect } from 'next/navigation';
import type { DefaultSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


export default async function ProfilePage() {
	const session = await getServerSession(authOptions);
	// make the page 404 if the user is not logged in
	if (!session) {
		redirect('/');
	}

	return (
		<div className='w-4/5 md:w-2/5 pt-28 m-auto break-words font-fira'>
			<h2 className='text-4xl text-center'>Profile</h2>
			<img src={`${(session?.user?.image as string).split('=')[0]}=s576`} className='rounded-full w-48 h-48 mx-auto my-7' referrerPolicy='no-referrer' />
			{/* display email and name like a form */}

			<div className='my-5'>
				<label htmlFor='email'>Email:</label>
				<input type='text' id='email' value={session?.user?.email as string} className='w-full rounded-2xl p-2 bg-black border-2 border-[var(--neon-color)]' disabled />
			</div>

			<div className='my-5'>
				<label htmlFor='name'>Name:</label>
				<input type='text' id='name' value={session?.user?.name as string} className='w-full rounded-2xl p-2 bg-black border-2 border-[var(--neon-color)]' disabled />
			</div>

			<SignOut className='w-full text-white bg-[var(--text-color)] hover:bg-[var(--neon-color)] rounded-2xl p-2 duration-200' />
		</div>
	);
}