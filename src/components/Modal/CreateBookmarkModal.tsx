'use client';
import React, { useEffect, useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { v4 as uuidv4 } from 'uuid';
import { useBookmarks } from '@/app/context/bookmarksContext';
import { InputLabelWrapper } from '../InputWrapper';

export interface CreateBookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateBookmarkModal: React.FC<CreateBookmarkModalProps> = ({
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

  const onCloseForm = () => {
    setNewBookmark({
      bmUrl: '',
      bmTitle: '',
      bmCategory: '',
      bmId: '',
    });
    onClose();
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (newBookmark.bmUrl) {
        fetch(`/api/get-title?url=${encodeURIComponent(newBookmark.bmUrl)}`)
          .then((res) => res.json())
          .then((data: any) => {
            if (data.title) {
              setNewBookmark({ ...newBookmark, bmTitle: data.title });
            } else {
              console.log('No Title found');
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }, 500);

    // Clean up the timeout on each render (when the input changes)
    return () => clearTimeout(debounceTimeout);
  }, [newBookmark.bmUrl]);

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
    setBookmarks([{ ...newBookmark, bmId: uuidv4() }, ...bookmarks]);
    onCloseForm();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onCloseForm}
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
