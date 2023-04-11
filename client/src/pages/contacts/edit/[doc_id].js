import ProtectedPage from "@/common/auth/protectedpage";
import Page from "@/common/layout/page";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAsyncV, useSyncV } from "use-sync-v";

const initialState = {
  sorting:"",
  first_name: "",
  middle_name: "",
  last_name: "",
  phone_number: "",
  email_address: "",
  profile_picture_url: "",
};

const EditContact = () => {
  const router = useRouter();
  const { doc_id } = router.query;
  const { authUser } = useSyncV("auth");
  const contacts = useAsyncV("contacts");
  const editedContact = contacts.data.filter((el) => el.doc_id === doc_id);

  useEffect(()=>{
    if (!editedContact[0]) return
    setForm(editedContact[0])
  },[editedContact[0]])

  const [form, setForm] = useState(initialState);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const editContactHandler = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;
    const updatedValue = {
      ...form,
      [fieldID]: fieldValue,
    };
    setForm(updatedValue);
    if (JSON.stringify(updatedValue) === JSON.stringify(editedContact[0])) {
      setIsFormChanged(false);
    } else {
      setIsFormChanged(true);
    }
  };

  const saveHandler = () => {
    const createdContact = {
      ...form,
      sorting:
        `${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase(),
    };
    FirebaseFirestore.updateDoc(
      `users/${authUser.uid}/contacts/${doc_id}`,
      createdContact
    );
    router.push('/contacts')
  };

  const deleteHandler = () => {
    FirebaseFirestore.deleteDoc(`users/${authUser.uid}/contacts/${doc_id}`)
    setForm(initialState)
    router.push('/contacts')
  }
  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
          height: "100%",
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
            Edit Contact
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
              src: `${form?.profile_picture_url}`,
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
              value={form?.first_name}
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
              value={form?.middle_name}
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
              value={form?.last_name}
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
              value={form?.phone_number}
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
              value={form?.email_address}
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
          <Button
            variant="contained"
            fullWidth
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default ProtectedPage(EditContact);
