import { FC } from 'react';

interface IButtonProps {
  inner: string;
  isDisabled: boolean;
  isLoading?: boolean;
}

export const Button: FC<IButtonProps> = ({ inner, isDisabled, isLoading }) => {
  const innerText = isLoading ? 'Loading...' : inner;
  return (
    <button className='cst-btn' disabled={isDisabled}>
      {innerText}
    </button>
  );
};
