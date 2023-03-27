import { createContact } from "@/lib/services/contacts";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createSyncV, readSyncV, useSyncV } from "use-sync-v";

export const ViewContactComponent = () => {
  const activeContact = readSyncV("ui.activeContact");
  const { editContact, createContact } = useSyncV("ui.phase");
  const [form, setForm] = useState(activeContact);
  const [isFormChanged, setIsFormChanged] = useState(activeContact);

  const editContactHandler = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;
    const updatedValue = {
      ...form,
      [fieldID]: fieldValue,
    };
    setForm(updatedValue);
    if (JSON.stringify(updatedValue) === JSON.stringify(activeContact)) {
      setIsFormChanged(false);
    } else {
      setIsFormChanged(true);
    }
  };

  const saveHandler = () => {
    switch (true) {
      case editContact: {
        const updatedContact = {
          first_name: form.first_name,
          middle_name: form.middle_name,
          last_name: form.last_name,
          phone_number: form.phone_number,
          email_address: form.email_address,
          // TODO: profile picture upload to storage and upload url to firestore
        };
        const doc_id = form.doc_id;
        const response = FirebaseFirestore.updateDoc(`users/test/contacts/${doc_id}`,updatedContact)
        createSyncV("ui.activeContact", response)
        setForm(activeContact)
        setIsFormChanged(false);
        break;
      }
      case createContact: {
        const createdContact = form
        const response = FirebaseFirestore.createDoc(`users/test/contacts/`,createdContact)
        setForm(readSyncV("ui.activeContact"))
        break;
      }
    }
  };
  console.log('rener')
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
          {editContact && "Edit Contact"}
          {createContact && "Create Contact"}
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
        />
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
            value={form.first_name}
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
            value={form.middle_name}
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
            value={form.last_name}
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
            value={form.phone_number}
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
            value={form.email_address}
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
