'use client';
import React from 'react';
import { ModalWrapper } from './ModalWrapper';
import { useBookmarks } from '@/app/context/bookmarksContext';

export interface ConfirmDeletionModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmDeletionModal: React.FC<ConfirmDeletionModalProps> = ({
  id,
  isOpen,
  onClose,
}) => {
  const { bookmarks, setBookmarks } = useBookmarks();

  const onClickDelete = (id: string) => {
    const filteredBookmarks = bookmarks.filter((bm) => bm.bmId !== id);
    setBookmarks(filteredBookmarks);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={'Confirm Delete Bookmark?'}
    >
      <button onClick={() => onClickDelete(id)} className='hover:text-cyan-400'>
        Delete
      </button>
      <button onClick={onClose} className='hover:text-cyan-400'>
        Cancel
      </button>
    </ModalWrapper>
  );
};
