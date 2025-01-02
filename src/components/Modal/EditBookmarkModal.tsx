'use client';
import React, { useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { useBookmarks } from '@/app/context/bookmarksContext';
import { InputLabelWrapper } from '../InputWrapper';

export interface EditBookmarkModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditBookmarkModal: React.FC<EditBookmarkModalProps> = ({
  id,
  isOpen,
  onClose,
}) => {
  const { bookmarks, setBookmarks } = useBookmarks();
  const [newBookmark, setNewBookmark] = useState({
    bmUrl: '',
    bmTitle: '',
    bmCategory: '',
    bmId: '',
  });

  useEffect(() => {
    const selectedBookmark = bookmarks.find((bm) => bm.bmId === id);
    setNewBookmark({ ...newBookmark, ...selectedBookmark });
  }, [id]);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBookmark((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredBookmarks = bookmarks.filter(
      (bm) => bm.bmId !== newBookmark.bmId
    );
    setBookmarks([newBookmark, ...filteredBookmarks]);
    setNewBookmark({
      bmUrl: '',
      bmTitle: '',
      bmCategory: '',
      bmId: '',
    });
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={'Create a New Bookmark'}
    >
      <form onSubmit={onSubmit} className='flex flex-col gap-2'>
        <InputLabelWrapper fieldSetCss='' label='URL:'>
          <input
            type='url'
            name='bmUrl'
            id='bmUrl'
            value={newBookmark.bmUrl}
            onChange={onChangeInput}
            placeholder='https://example.com'
            pattern='https://.*'
            required
            className='text-black'
          />
        </InputLabelWrapper>
        <InputLabelWrapper fieldSetCss='' label='Name:'>
          <input
            type='text'
            name='bmTitle'
            id='bmTitle'
            value={newBookmark.bmTitle}
            onChange={onChangeInput}
            placeholder='Name/Title of Bookmark'
            className='text-black'
            required
          />
        </InputLabelWrapper>
        <InputLabelWrapper fieldSetCss='' label='Category:'>
          <select
            name='bmCategory'
            id='bmCategory'
            value={newBookmark.bmCategory}
            onChange={onChangeInput}
            className='text-black'
          >
            <option value=''>Select a category</option>
            <option value='important'>Important</option>
            <option value='manhwa'>Manhwa</option>
            <option value='Manga'>Manga</option>
            <option value='Novels'>Novels</option>
            <option value='School'>School</option>
          </select>
        </InputLabelWrapper>
        <button type='submit'>Submit</button>
      </form>
    </ModalWrapper>
  );
};
