import ProtectedPage from "@/common/auth/protectedpage";
import Page from "@/common/layout/page";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { updateSyncV, useSyncV } from "use-sync-v";

const Add = () => {
  const activeContact = useSyncV("ui.activeContact");
  const { editContact, createContact } = useSyncV("ui.phase");
  const [form, setForm] = useState({
    first_name:'',
    middle_name:'',
    last_name:'',
    phone_number:'',
    email_address:'',
    profile_picture_url:''
  });
  const [isFormChanged, setIsFormChanged] = useState(false);
  const user = useSyncV("auth");

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
          first_name: form?.first_name ?? "",
          middle_name: form?.middle_name ?? "",
          last_name: form?.last_name ?? "",
          phone_number: form?.phone_number ?? "",
          email_address: form?.email_address ?? "",
          profile_picture_url: form?.profile_picture_url ?? "",
        };
        const doc_id = activeContact.doc_id;
        FirebaseFirestore.updateDoc(
          `users/${user_uid}/contacts/${doc_id}`,
          updatedContact
        );
        setIsFormChanged(false);
        break;
      }
      case createContact: {
        const createdContact = form;
        FirebaseFirestore.createDoc(
          `users/${user_uid}/contacts/`,
          createdContact
        );
        setForm(activeContact);
        break;
      }
    }
  };

  const deleteContactHandler = () => {
    FirebaseFirestore.deleteDoc(`users/${user_uid}/contacts/${doc_id}`);
    updateSyncV("ui.activeContact", null);
    updateSyncV("ui.phase", null);
  };
  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          justifyContent:'center',
          gap: "10px",
          width:'100%',
          height: "100%",
          border:'1px solid red'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ alignSelf: "start" }}>
            {editContact && "Edit Contact"}
            {createContact && "Create Contact"}
          </Typography>
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
          {editContact && (
            <Button
              variant="contained"
              fullWidth
              onClick={deleteContactHandler}
            >
              Delete
            </Button>
          )}
        </Box>
      </Box>
    </Page>
  );
};

export default ProtectedPage(Add);
