import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import { create } from "zustand";

export const useContactsStore = create((set, get) => ({
  contacts: [],
  setContacts: (newContacts) => {
    set((state) => ({ contacts: newContacts }));
  },
  subscribeContacts: (user_uid) => {
    const response = FirebaseFirestore.subscribeCol(
      `users/${user_uid}/contacts`,
      (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        set((state) => ({ contacts: data }));
      }
    );
    return response;
  },
  updateContact: async (user_uid, doc_id, updatedContact) => {
    const response = await FirebaseFirestore.updateDoc(
      `users/${user_uid}/contacts/${doc_id}`,
      updatedContact
    );
    return response;
  },
  createContact: async (user_uid, newContact) => {
    const response = await FirebaseFirestore.createDoc(`users/${user_uid}/contacts`, newContact)
    return response
  },
  deleteContact: async(user_uid, doc_id) => {
    const response = await FirebaseFirestore.deleteDoc(`users/${user_uid}/contacts/${doc_id}`)
    return response
  },

  displayedContactPhase: null,
  displayedContact: null,
  uneditedContact: null,
  setUneditedContact: (contact) => {
    set((state) => ({ uneditedContact: contact }));
  },
  setDisplayedContact: (contact) => {
    set((state) => ({ displayedContact: contact }));
  },
  setDisplayedContactPhase: (phase) => {
    if (phase === "create") {
      const emptyContactForm = {
        first_name: "",
        middle_name: "",
        last_name: "",
        phone_number: "",
        email_address: "",
      };
      set((state) => ({ displayedContact: emptyContactForm }));
      set((state) => ({ uneditedContact: emptyContactForm }));
    }
    set((state) => ({ displayedContactPhase: phase }));
  },

  searchKeyword: null,
  searchResults: null,
  setSearchKeyword: (keyword) => {
    set((state) => ({ searchKeyword: keyword }));

    const filterContacts = (searchText) => {
      const filteredContactsByField = get().contacts.reduce((prev, curr) => {
        for (let [key, value] of Object.entries(curr)) {
          if (new RegExp(String.raw`${searchText}`, "i").test(value)) {
            if (!prev[key]) {
              prev[key] = [];
            }
            prev[key] = [...prev[key], curr];
          }
        }
        return prev;
      }, {});
      return filteredContactsByField;
    };

    const searchResults = filterContacts(keyword);
    set((state) => ({
      searchResults: searchResults
    }));
  },
}));
