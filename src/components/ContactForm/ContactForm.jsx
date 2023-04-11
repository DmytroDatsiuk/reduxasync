import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Form, FormField, ErrorMessage, Field } from './ContactForm.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const Schema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Too Short')
    .max(14, 'Too Long')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formName = event.nativeEvent.srcElement.elements.name.value;
    const formNumber = event.nativeEvent.srcElement.elements.number.value;

    dispatch(addContact(formName, formNumber));
    form.reset();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={Schema}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <FormField htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Jacob Blanc"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="+380939998877"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
