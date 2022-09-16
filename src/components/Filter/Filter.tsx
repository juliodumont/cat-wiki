import { Select } from 'antd';
import { Breed } from '../../types';
import { useGetBreedsQuery } from '../../services/catApi';
import './Filter.scss';
import Loader from '../Loader/Loader';

const { Option } = Select;

type FilterProps = {
  onSelect: (item: string) => void;
};

const Filter = ({ onSelect }: FilterProps) => {
  const { data, isFetching } = useGetBreedsQuery({});

  if (isFetching) return <Loader />;

  const catBreeds: Breed[] = data;

  return (
    <>
      <Select
        showSearch
        popupClassName="breed-filter-popup"
        className="breed-filter"
        onChange={(breed) => onSelect(breed)}
        placeholder="Search"
      >
        {catBreeds.map((cat) => (
          <Option key={cat.name} value={cat.name}>
            {cat.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default Filter;
