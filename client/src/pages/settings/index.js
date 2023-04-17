import Page from "@/common/layout/page";
import ProtectedPage from "@/common/auth/protectedpage";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSyncV } from "use-sync-v";
import {
  AuthCredential,
  EmailAuthCredential,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import SimpleSnackbar from "@/common/snackbars/simpleSnackbar";
import TransparentTextfield from "@/common/ui/transparentfield";
import { Validate } from "@/lib/utils/textValidation";

const initialState = {
  form: {
    old_password: {
      error: true,
      value: "",
      helperText: "",
    },
    new_password: {
      error: true,
      value: "",
      helperText: "",
    },
    password_confirmation: {
      error: true,
      value: "",
      helperText: "",
    },
  },
  show: {
    changePassword: false,
    snackbar: false,
    save: false,
  },
  message: {
    snackbar: "",
  },
};

const Settings = () => {
  const auth = useSyncV("auth");
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (
      !state.form.old_password.error &&
      !state.form.new_password.error &&
      !state.form.password_confirmation.error
    ) {
      setState((p) => ({
        ...p,
        show: {
          ...p.show,
          save: true,
        },
      }));
    }
  }, [state.form.password_confirmation.error]);

  const formHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    switch (key) {
      case "old_password": {
        const { error, helperText, color } = Validate.password(value);
        setState((p) => ({
          ...p,
          form: {
            ...p.form,
            [key]: {
              ...p.form[key],
              value: value,
              error: error,
              color: color,
              helperText: helperText,
            },
          },
        }));
        break;
      }
      case "new_password": {
        const { error, helperText, color } = Validate.password(value);
        setState((p) => ({
          ...p,
          form: {
            ...p.form,
            [key]: {
              ...p.form[key],
              value: value,
              error: error,
              color: color,
              helperText: helperText,
            },
          },
        }));
        break;
      }
      case "password_confirmation": {
        const { error, helperText, color } = Validate.passwordConfirmation(
          state.form.new_password,
          value
        );
        setState((p) => ({
          ...p,
          form: {
            ...p.form,
            [key]: {
              ...p.form[key],
              value: value,
              error: error,
              color: color,
              helperText: helperText,
            },
          },
        }));
        break;
      }
    }
  };

  const saveHandler = () => {
    const user = getAuth().currentUser;
    const reAuth = async () => {
      try {
        const authCredential = EmailAuthProvider.credential(
          user.email,
          state.form.old_password.value
        );
        await reauthenticateWithCredential(
          user,
          authCredential
        );
        await updatePassword(
          user,
          state.form.new_password.value
        );
        setState((p) => ({
          ...initialState,
          show: {
            ...p.show,
            snackbar: true,
            changePassword:false
          },
          message: {
            ...p.message,
            snackbar: "Password Changed !",
          },
        }));
        setTimeout(() => {
          setState(initialState);
        }, 6000);
      } catch (err) {
        setState((p) => ({
          ...p,
          show: {
            ...p.show,
            snackbar: true,
          },
          message: {
            ...p.message,
            snackbar: `${err.message}`,
          },
        }));
        setTimeout(() => {
          setState(p=>({
            ...p,
            show:{
              ...p.show,
              snackbar:false
            }
          }));
        }, 6000);
      }
    };
    reAuth()
  };

  const showChangePasswordHandler = () => {
    setState((p) => ({
      ...p,
      show: {
        ...p.show,
        changePassword: true,
      },
    }));
  };

  return (
    <Page>
      {state.show.snackbar && (
        <SimpleSnackbar message={state.message.snackbar} />
      )}
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            padding: "30px",
            borderRadius: "20px",
            backgroundColor: "inherit",
            backdropFilter: "contrast(120%)",
            maxWidth: "300px",
          }}
        >
          {!state.show.changePassword && (
            <Button variant="contained" onClick={showChangePasswordHandler}>
              Change Password
            </Button>
          )}
          {state.show.changePassword && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <TransparentTextfield
                label="Old Password"
                id="old_password"
                size="small"
                type="password"
                fullwidth="true"
                required={true}
                color={state.form.old_password.color}
                helperText={state.form.old_password.helperText}
                value={state.form.old_password.value}
                error={state.form.old_password.error}
                onInput={formHandler}
              />
              <TransparentTextfield
                label="New Password"
                id="new_password"
                size="small"
                type="password"
                fullwidth="true"
                required={true}
                color={state.form.new_password.color}
                helperText={state.form.new_password.helperText}
                value={state.form.new_password.value}
                error={state.form.new_password.error}
                onInput={formHandler}
              />
              <TransparentTextfield
                label="Password Confirmation"
                id="password_confirmation"
                size="small"
                type="password"
                fullwidth="true"
                required={true}
                color={state.form.password_confirmation.color}
                helperText={state.form.password_confirmation.helperText}
                value={state.form.password_confirmation.value}
                error={state.form.password_confirmation.error}
                onInput={formHandler}
              />
            </Box>
          )}
          {state.show.save && (
            <Button variant="contained" fullWidth onClick={saveHandler}>
              Save
            </Button>
          )}
        </Paper>
      </Box>
    </Page>
  );
};

export default Settings;
