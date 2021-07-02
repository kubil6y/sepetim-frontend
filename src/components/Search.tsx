import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  query: string;
}

export const Search: FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <form
      className='hidden bg-white sm:block sm:flex-1'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('query', { required: 'Can not be empty' })}
        type='text'
        className='p-2 px-3 text-sm cst-input '
        placeholder='Search for restaurants'
      />
    </form>
  );
};
