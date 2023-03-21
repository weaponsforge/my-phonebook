import {
  setSyncStore,
  useSyncStore,
} from "@/lib/hooks/useSync";
import { Test } from "@/lib/utils/test";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";




export const ViewContact = ({ type }) => {
  const viewContact = useSyncStore("viewContact");
  const fetchTest = useSyncStore('test')
  console.log('rerender')
  const editContactHandler = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;
    const updatedValue = {
      ...viewContact,
      [fieldID]: fieldValue,
    };
    // setSyncStore("viewContact", updatedValue);
    fetchTest.init()
    console.log(fetchTest.count)
  };
  
  useEffect(()=>{
    setSyncStore('test',Test)
  },[])
  
  if (!viewContact) return;
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
          padding: "30px",
        }}
      >
        <Avatar
          sx={{
            width: "50vw",
            maxWidth: "200px",
            maxHeight: "200px",
            height: "50vw",
            justifySelf: "center",
            gridColumn: "1/-1",
            border: "5px dashed gray",
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
            value={viewContact.first_name}
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
            value={viewContact.middle_name}
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
            value={viewContact.last_name}
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
            value={viewContact.phone_number}
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
            value={viewContact.email_address}
            size="small"
            sx={{ width: "100%" }}
            onChange={editContactHandler}
          />
        </Box>
        <Button variant="contained" fullWidth disabled>
          Save
        </Button>
      </Box>
    </Box>
  );
};
