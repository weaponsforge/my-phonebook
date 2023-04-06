import Page from "@/common/layout/page";
import { LoadingLinear } from "@/common/ui/loadingLinear";
import { Box } from "@mui/material";
import { useAsyncV } from "use-sync-v";
import { ContactListDisplay } from "./display";
import { SidebarComponent } from "./sidebar";

function ContactsComponent() {
  const { loading } = useAsyncV("contacts");

  return (
    <Page>
      {loading && <LoadingLinear />}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          overflowY: "scroll",
          userSelect: "none",
          justifyContent: "center",
        }}
      >
        <ContactListDisplay />
      </Box>
    </Page>
  );
}

export default ContactsComponent;
