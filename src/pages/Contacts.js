import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Filter } from 'components/ContactFilter/ContactFilter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      </HelmetProvider>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
