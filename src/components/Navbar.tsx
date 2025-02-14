'use client';
import { CreateBookmarkModal } from './Modal/CreateBookmarkModal';
import { useState } from 'react';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='flex items-center w-full h-[4rem] p-4 space-x-4 backdrop-blur-sm bg-gradient-to-b from-[#FFFFFF1A] to-transparent'>
        <div className='flex justify-end flex-1 px-4'>
          <div className='w-fit' onClick={() => setIsModalOpen(true)}>
            + New Bookmark
          </div>
        </div>
      </div>
      <CreateBookmarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
