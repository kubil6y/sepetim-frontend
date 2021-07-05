import { FC } from 'react';
import { Circle } from '../components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: any;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  setPage,
}) => {
  return (
    <div className='mx-auto flex items-center justify-center space-x-6'>
      {currentPage > 1 ? (
        <Circle onClick={() => setPage((prev: number) => prev - 1)}>
          <AiOutlineArrowLeft className='cursor-pointer' />
        </Circle>
      ) : (
        <div className='w-10 h-10'></div>
      )}

      <div className='w-32 text-center'>
        {currentPage} of {totalPages} Pages
      </div>

      {currentPage < totalPages ? (
        <Circle onClick={() => setPage((prev: number) => prev + 1)}>
          <AiOutlineArrowRight />
        </Circle>
      ) : (
        <div className='w-10 h-10'></div>
      )}
    </div>
  );
};
