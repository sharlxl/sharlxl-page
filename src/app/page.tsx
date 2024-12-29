import { BookmarkCard } from '@/components/BookmarkCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <p>home</p>
      <Link href='/bookmarks'>Bookmark</Link>
    </div>
  );
}
