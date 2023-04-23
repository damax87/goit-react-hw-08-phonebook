import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice'; 
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { FilterInput } from './ContactFilter.style';
import { FilterLabel } from './ContactFilter.style';


export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <FilterLabel>Find contacts
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter contact"
        value={filter}
        onChange={handleFilterChange}
      />
     </FilterLabel>
    </div>
  );

};
