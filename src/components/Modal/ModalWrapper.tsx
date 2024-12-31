'use client';
import { WhiteCross } from '@/asset/icons';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  children: React.ReactNode;
}

export const ModalWrapper: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  modalTitle,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby='modal-title'
      aria-hidden={!isOpen}
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-all duration-300`}
    >
      <div className='flex flex-col rounded-md py-2 px-4 text-white'>
        <div className='flex justify-between items-center mb-2'>
          <h2 id='modal-title'>{modalTitle}</h2>
          <button onClick={onClose} className='p-2'>
            <Image src={WhiteCross} alt='close' className='w-4 h-4' />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
