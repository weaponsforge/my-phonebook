import ContactsComponent from "@/components/contacts";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { useEffect } from "react";

function Contacts() {

  useEffect(() => {
    FirebaseFirestore.subscribeCol(
      `users/${user_uid}/contacts`,
      async (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        updateAsyncV("contacts", data);
      }
    );
  }, []);

  const eventsHandler = () => {};
  return (
    <>
      <ContactsComponent eventsHandler={eventsHandler} />
    </>
  );
}

export default Contacts;
