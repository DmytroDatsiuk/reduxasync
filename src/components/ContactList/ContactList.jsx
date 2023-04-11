import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getContacts } from 'redux/selectors';
import { getContactsFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.all:
      return contacts.filter(contact => contact);

    case statusFilters.choosen:
      return contacts.filter(contact => contact.choosen);

    case statusFilters.blocked:
      return contacts.filter(contact => contact.blocked);

    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filtered = useSelector(getContactsFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered)
  );

  const statusFilter = useSelector(state => state.filters.status);

  const visibleContacts = getVisibleContacts(filteredContacts, statusFilter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
};
