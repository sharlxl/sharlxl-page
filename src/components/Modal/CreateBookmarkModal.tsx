'use client';
import React from 'react';
import { ModalWrapper } from './ModalWrapper';
import { v4 as uuidv4 } from 'uuid';
import { formDataToObj } from '@/utils/localStorage';
import { useBookmarks } from '@/app/context/bookmarksContext';

export interface CreateBookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface InputLabelWrapperProps {
  label: string;
  children: React.ReactNode;
}

export const CreateBookmarkModal: React.FC<CreateBookmarkModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { bookmarks, setBookmarks } = useBookmarks();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('bmId', uuidv4());
    // const newBookmarkObj = formDataToObj(formData);
    setBookmarks([formDataToObj(formData), ...bookmarks]);
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={'Create a New Bookmark'}
    >
      <form onSubmit={onSubmit} className='flex flex-col gap-2'>
        <InputLabelWrapper label='URL:'>
          <input
            type='url'
            name='bmUrl'
            id='bmUrl'
            placeholder='https://example.com'
            pattern='https://.*'
            required
            className='text-black'
          />
        </InputLabelWrapper>
        <InputLabelWrapper label='Name:'>
          <input
            type='text'
            name='bmTitle'
            id='bmTitle'
            placeholder='Name/Title of Bookmark'
            className='text-black'
            required
          />
        </InputLabelWrapper>
        <InputLabelWrapper label='Category:'>
          <select name='bmCategory' id='bmCategory' className='text-black'>
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

const InputLabelWrapper: React.FC<InputLabelWrapperProps> = ({
  label,
  children,
}) => {
  return (
    <fieldset className='border p-2'>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};
