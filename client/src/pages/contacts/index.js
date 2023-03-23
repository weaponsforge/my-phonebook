import ContactsComponent from "@/components/contacts";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { useEffect } from "react";

const defaultState = {
  contacts: [
    {
      first_name: "zirst",
      middle_name: "second",
      last_name: "third",
      phone_number: "somerandomnumber",
      email_address: "somerandomemail",
      user_uid: "ad2321414",
    },
  ],
};

function Contacts() {
  const subscribeContacts = useContactsStore((state) => state.subscribeContacts);

  useEffect(() => {
    subscribeContacts('wtghuScAMuaWp0AKI7OKTBEwKb02')
  }, []);
  
  const eventsHandler = () => {};
  return (
    <>
      <ContactsComponent eventsHandler={eventsHandler} />
    </>
  );
}

export default Contacts;
