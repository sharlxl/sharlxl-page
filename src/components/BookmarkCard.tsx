import { WhiteEdit, WhiteTrashBin } from '@/asset/icons';
import Image from 'next/image';

export interface BookmarkCardProps {
  id: string;
  bgColor: string;
  title: string;
  category?: string; // cat are optional (might be undefined)
  url: string;
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  id,
  bgColor,
  title,
  category,
  url,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='flex items-center rounded-md p-3 gap-5'
    >
      <div className='flex flex-col'>
        <p>{title}</p>
        <p>{category}</p>
        <p>{url}</p>
      </div>
      <Image
        src={WhiteEdit}
        alt='edit'
        onClick={() => console.log('edit', id)}
      />
      <Image
        src={WhiteTrashBin}
        alt='bin'
        onClick={() => console.log('delete', id)}
      />
    </div>
  );
};
