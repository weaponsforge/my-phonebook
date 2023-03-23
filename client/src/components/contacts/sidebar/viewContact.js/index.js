import { setSyncStore, useSyncStore } from "@/lib/hooks/useSync";
import { createContact } from "@/lib/services/contacts";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { Test } from "@/lib/utils/test";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useDeferredValue, useEffect, useRef, useState } from "react";

export const ViewContactComponent = ({ actionType }) => {
  const [
    displayedContact,
    setDisplayedContact,
    uneditedContact,
    updateContact,
    createContact,
    setPhase,
    setUneditedContact,
  ] = useContactsStore((state) => [
    state.displayedContact,
    state.setDisplayedContact,
    state.uneditedContact,
    state.updateContact,
    state.createContact,
    state.setDisplayedContactPhase,
    state.setUneditedContact,
  ]);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const editContactHandler = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;
    const updatedValue = {
      ...displayedContact,
      [fieldID]: fieldValue,
    };
    setDisplayedContact(updatedValue);
    if (JSON.stringify(updatedValue) === JSON.stringify(uneditedContact)) {
      setIsFormChanged(false);
    } else {
      setIsFormChanged(true);
    }
  };

  const saveHandler = () => {
    switch (actionType) {
      case "Edit contact": {
        console.log("edit contact", displayedContact.doc_id);
        const updatedContact = {
          first_name: displayedContact.first_name,
          middle_name: displayedContact.middle_name,
          last_name: displayedContact.last_name,
          phone_number: displayedContact.phone_number,
          email_address: displayedContact.email_address,
          // TODO: profile picture upload to storage and upload url to firestore
        };
        const doc_id = displayedContact.doc_id;
        const response = updateContact(
          `wtghuScAMuaWp0AKI7OKTBEwKb02`,
          doc_id,
          updatedContact
        );
        setUneditedContact(displayedContact);
        setIsFormChanged(false);
        break;
      }
      case "Create contact": {
        console.log("create contact", displayedContact.doc_id);
        const createdContact = displayedContact;
        const response = createContact(
          "wtghuScAMuaWp0AKI7OKTBEwKb02",
          createdContact
        );
        setPhase("create");
        break;
      }
    }
  };
  return (
    <Box
      sx={{
        display: "grid",
        gap: "10px",
        width: "100%",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          width: "100%",
          // padding: "30px",
        }}
      >
        <Typography variant="h4" sx={{ alignSelf: "start" }}>
          {actionType}
        </Typography>
        <Avatar
          sx={{
            width: "50vw",
            maxWidth: "200px",
            maxHeight: "200px",
            height: "50vw",
            justifySelf: "center",
            gridColumn: "1/-1",
            border: "5px dashed gray",
            margin: "10px",
          }}
        ></Avatar>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h8">First Name :</Typography>
          <TextField
            id="first_name"
            value={displayedContact.first_name}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h8">Middle Name :</Typography>
          <TextField
            id="middle_name"
            value={displayedContact.middle_name}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h8">Last Name:</Typography>
          <TextField
            id="last_name"
            value={displayedContact.last_name}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h8">Phone Number:</Typography>
          <TextField
            id="phone_number"
            value={displayedContact.phone_number}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h8">Email Address:</Typography>
          <TextField
            id="email_address"
            value={displayedContact.email_address}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Button
          variant="contained"
          fullWidth
          disabled={!isFormChanged}
          onClick={saveHandler}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
