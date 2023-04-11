// Імпортуємо хук
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Div } from './ContactCounter.styled';

export const ContactCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const contacts = useSelector(getContacts);

  // На базі стану Redux отримуємо похідні дані

  const count = contacts.reduce(
    (acc, contact) => {
      if (contact.choosen) {
        acc.choosen += 1;
      }
      if (contact.blocked) {
        acc.blocked += 1;
      }
      acc.all += 1;

      return acc;
    },
    { all: 0, choosen: 0, blocked: 0 }
  );

  return (
    <Div>
      <span>All: {count.all}</span>
      <span>Choosen: {count.choosen}</span>
      <span>Blocked: {count.blocked}</span>
    </Div>
  );
};
