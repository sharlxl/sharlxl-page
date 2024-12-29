import { BookmarkCard } from '@/components/BookmarkCard';

export default function Home() {
  return (
    <div className='p-4 w-[20%]'>
      <BookmarkCard
        bgColor='#2a0140'
        label='label abc'
        notes='notes abce'
        url='https://example.com'
      />
    </div>
  );
}
