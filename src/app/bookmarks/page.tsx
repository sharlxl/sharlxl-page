'use client';
import { BookmarkCard } from '@/components/BookmarkCard';
import { useBookmarks } from '../../context/bookmarksContext';

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();
  return (
    <div className=' flex flex-col gap-2 p-4 w-fit'>
      {bookmarks.map((bookmark) => {
        return (
          <BookmarkCard
            key={bookmark.bmId}
            id={bookmark.bmId}
            bgColor=''
            title={bookmark.bmTitle}
            category={bookmark.bmCategory}
            url={bookmark.bmUrl}
          />
        );
      })}
    </div>
  );
}
