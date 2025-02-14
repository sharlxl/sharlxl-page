'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className='flex flex-col flex-1 h-full justify-center items-center'>
      <div className='text-7xl font-bold animate-text-gradient'>
        Hello World
      </div>
      <div className='font-bold text-center w-full max-w-screen-sm space-y-2'>
        <p>
          Hi! I'm Sharlyn, I'm a software developer specializing in frontend.
        </p>
        <button className='border p-2'>
          Click here to know more about me!
        </button>
      </div>
    </div>
  );
}
//
