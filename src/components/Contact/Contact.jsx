import { Button, Input, Label, LabelText } from './Contact.styled';
// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import {
  deleteContact,
  toggleBlocked,
  toggleChoosen,
} from 'redux/contactsSlice';

import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BsPersonLock } from 'react-icons/bs';
import { BsPersonFillLock } from 'react-icons/bs';

export const Contact = ({ contact }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  // const handleDelete = () => dispatch(deleteContact(contact.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  // const handleToggle = () => dispatch(toggleChoosen(contact.id));
  return (
    <>
      <Label>
        <Input
          type="checkbox"
          onChange={() => dispatch(toggleChoosen(contact.id))}
          checked={contact.choosen}
          // checked
        />
        {contact.choosen ? (
          <AiFillStar color="#bce8f8" />
        ) : (
          <FiStar color="#bce8f8" />
        )}
        <LabelText>
          Name: {contact.name}: <p>Number: {contact.number}</p>
        </LabelText>
      </Label>
      <Label>
        <Input
          type="checkbox"
          onChange={() => dispatch(toggleBlocked(contact.id))}
          checked={contact.blocked}
        />
        {contact.blocked ? (
          <BsPersonFillLock color="red" />
        ) : (
          <BsPersonLock color="#bce8f8" />
        )}
      </Label>

      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </>
  );
};
