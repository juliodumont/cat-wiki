import { Select } from 'antd';
import { useState } from 'react';
import { Breed } from '../../types';
import { useGetBreedsQuery } from '../../services/catNewsApi';
import './Filter.scss';
import Loader from '../Loader/Loader';

const { Option } = Select;

type FilterProps = {
  onSelect: (item: string) => void;
};

const Filter = ({ onSelect }: FilterProps) => {
  const { data, isFetching } = useGetBreedsQuery({});
  const [selectedBreed, setSelectedBreed] = useState('');
  if (isFetching) return <Loader />;

  const handleBreedSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = event.target.value;
    setSelectedBreed(breed);
    onSelect(breed);
  };

  const catBreeds: Breed[] = data;

  return (
    <select className="breed-filter" value={selectedBreed} onChange={handleBreedSelect}>
      {catBreeds.map((cat) => (
        <option key={cat.name} value={cat.name}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
