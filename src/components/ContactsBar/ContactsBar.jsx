import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { ContactCounter } from 'components/ContactCounter/ContactCounter';
import { Section, Title, Wrapper } from './ContactsBar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllBlocked } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactsBar = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  return (
    <Wrapper>
      <Section>
        <Title>Counter contacts:</Title>
        <ContactCounter />
      </Section>
      <Section>
        <Title>Filter by status:</Title>
        <StatusFilter />
      </Section>
      <Section>
        <Title>Delete all blocked:</Title>
        <Button onClick={() => dispatch(deleteAllBlocked({ contacts }))}>
          Delete blocked
        </Button>
      </Section>
    </Wrapper>
  );
};
