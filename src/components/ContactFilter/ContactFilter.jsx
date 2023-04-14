import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice'; 
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { FilterInput } from './Filter.style';
import { FilterLabel } from './Filter.style';


export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
      <FilterLabel>Find contacts by Name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter contact"
        value={filter}
        onChange={handleFilterChange}
      />
     </FilterLabel>
  );

};
