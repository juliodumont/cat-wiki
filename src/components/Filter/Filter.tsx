import { Select } from 'antd';
import { useState } from 'react';
import { Breed } from '../../types';
import { useGetBreedsQuery } from '../../services/catNewsApi';
import './Filter.scss';
import Loader from '../Loader/Loader';

const { Option } = Select;

const Filter = () => {
  const { data, isFetching } = useGetBreedsQuery({});

  if (isFetching) return <Loader />;

  const catBreeds: Breed[] = data;

  return (
    <select>
      {catBreeds.map((cat) => (
        <option key={cat.name} value={cat.name}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
