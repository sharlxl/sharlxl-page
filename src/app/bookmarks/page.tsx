'use client';
import { BookmarkCard } from '@/components/BookmarkCard';
import { LocalStorageKeys } from '@/config/common';
import { useEffect, useState } from 'react';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(LocalStorageKeys.BOOKMARKS);
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
  }, []);

  console.log('xl', bookmarks);
  return (
    <div className=' flex flex-col gap-2 p-4 w-fit'>
      {bookmarks.map((bookmark) => {
        return (
          <BookmarkCard
            id={bookmark['bm-id']}
            bgColor='#2a0140'
            title={bookmark['bm-title']}
            category={bookmark['bm-category']}
            url={bookmark['bm-url']}
          />
        );
      })}
    </div>
  );
}
