import Link from 'next/link';
import React from 'react';

const GlobalNavBar = () => {
  return (
    <div className='fixed border-b w-full h-12 px-4 flex items-center gap-8 sm:text-lg'>
      <button>Home</button>
      <Link href='/about-me' className='hover:text-mainAccent'>
        About me
      </Link>
      <Link href='/bookmarks' className='hover:text-mainAccent'>
        Bookmarks
      </Link>
      <button>Contact</button>
    </div>
  );
};

export default GlobalNavBar;
