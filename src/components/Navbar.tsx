'use client';
import Link from 'next/link';
import { CreateBookmarkModal } from './Modal/CreateBookmarkModal';
import { useState } from 'react';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='flex items-center w-full h-[4rem] p-4 space-x-4 border'>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <Link href='/bookmarks'>Bookmarks</Link>
        </div>
        <div>Settings</div>
        <div onClick={() => setIsModalOpen(true)}>+</div>
      </div>
      {/* {isModalOpen && ( */}
      <CreateBookmarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* )} */}
    </>
  );
};
