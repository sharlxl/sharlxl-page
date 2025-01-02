import { useBookmarks } from '@/app/context/bookmarksContext';
import { WhiteEdit, WhiteTrashBin } from '@/asset/icons';
import Image from 'next/image';
import { ConfirmDeletionModal } from './Modal/ConfirmDeletionModal';
import { useState } from 'react';
import { EditBookmarkModal } from './Modal/EditBookmarkModal';

export interface BookmarkCardProps {
  id: string;
  bgColor: string;
  title: string;
  category?: string; // cat are optional (might be undefined)
  url: string;
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  id,
  bgColor,
  title,
  category,
  url,
}) => {
  const [isDelete, setIsDelete] = useState('');
  const [isEdit, setIsEdit] = useState('');

  return (
    <>
      <ConfirmDeletionModal
        id={isDelete}
        isOpen={!!isDelete}
        onClose={() => setIsDelete('')}
      />
      <EditBookmarkModal
        id={isEdit}
        isOpen={!!isEdit}
        onClose={() => setIsEdit('')}
      />
      <div
        style={{ backgroundColor: bgColor }}
        className='flex items-center rounded-md p-3 gap-5'
      >
        <div className='flex flex-col'>
          <p>{title}</p>
          <p>{category}</p>
          <p>{url}</p>
        </div>
        <Image src={WhiteEdit} alt='edit' onClick={() => setIsEdit(id)} />
        <Image src={WhiteTrashBin} alt='bin' onClick={() => setIsDelete(id)} />
      </div>
    </>
  );
};
