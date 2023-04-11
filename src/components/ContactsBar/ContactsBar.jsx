import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { ContactCounter } from 'components/ContactCounter/ContactCounter';
import { Section, Title, Wrapper } from './ContactsBar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteAllBlocked } from 'redux/contactsSlice';

export const ContactsBar = () => {
  const dispatch = useDispatch();

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
        <Button onClick={() => dispatch(deleteAllBlocked())}>
          Delete blocked
        </Button>
      </Section>
    </Wrapper>
  );
};
