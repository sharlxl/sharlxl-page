interface BookmarkCardProps {
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
      className='flex flex-col rounded-md p-3'
    >
      <p>{title}</p>
      <p>{category}</p>
      <p>{url}</p>
    </div>
  );
};
