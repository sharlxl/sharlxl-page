interface BookmarkCardProps {
  bgColor: string; // Color value as a string
  label: string; // Label of the bookmark as a string
  notes?: string; // Notes are optional (might be undefined)
  url: string; // URL of the bookmark as a string
}

export const BookmarkCard: React.FC<BookmarkCardProps> = ({
  bgColor,
  label,
  notes,
  url,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='flex flex-col rounded-md'
    >
      <p>{label}</p>
      <p>{notes}</p>
      <p>{url}</p>
    </div>
  );
};
