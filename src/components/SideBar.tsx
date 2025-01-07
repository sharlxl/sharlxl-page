'use client';
import Link from 'next/link';

export const SideBar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='flex flex-col w-[25svw] h-full p-4 gap-4 backdrop-blur-sm bg-gradient-to-b from-[#FFFFFF1A] to-transparent'>
        <p>WIP</p>
        <div className='w-full h-[10rem] border'>
          Future user account details
        </div>
        <div
          // onClick={() => setIsModalOpen(true)}
          className='my-4'
        >
          + New Category
        </div>
        <div>
          <Link href='/bookmarks'>Category 1</Link>
        </div>
        <div>
          <Link href='/bookmarks'>Category 2</Link>
        </div>
      </div>
      {/* {isModalOpen && ( */}
      {/* <CreateBookmarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
      {/* )} */}
    </>
  );
};
