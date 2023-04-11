// Імпортуємо хук
import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from 'redux/constants';
import { Button } from 'components/Button/Button';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/statusFilterSlice';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.choosen}
        onClick={() => handleFilterChange(statusFilters.choosen)}
      >
        Choosen
      </Button>
      <Button
        selected={filter === statusFilters.blocked}
        onClick={() => handleFilterChange(statusFilters.blocked)}
      >
        Blocked
      </Button>
    </Wrapper>
  );
};
