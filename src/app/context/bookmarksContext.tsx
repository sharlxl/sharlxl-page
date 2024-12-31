'use client';
import { LocalStorageKeys } from '@/config/common';
import { createContext, useContext, useEffect, useState } from 'react';

interface BookmarkType {
  [key: string]: string;
}

interface BookmarksContextType {
  bookmarks: BookmarkType[];
  setBookmarks: (bookmarks: BookmarkType[]) => void;
}

interface BookmarksProviderProps {
  children: React.ReactNode;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(
  undefined
);

export const BookmarksProvider: React.FC<BookmarksProviderProps> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(LocalStorageKeys.BOOKMARKS);
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = (): BookmarksContextType => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
};
