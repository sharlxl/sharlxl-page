import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { SideBar } from '@/components/SideBar';
import { BookmarksProvider } from '@/context/bookmarksContext';

export const metadata: Metadata = {
  title: 'Bookmarks manager',
  description: '',
};

export default function BookmarksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BookmarksProvider>
      <div className='flex flex-1'>
        <SideBar />
        <div className='flex flex-col flex-1'>
          <Navbar />
          {children}
        </div>
      </div>
    </BookmarksProvider>
  );
}
