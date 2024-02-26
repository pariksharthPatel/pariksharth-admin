import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
//
import Header from "../components/layout/navbar";
import Nav from "../components/layout/sidebar";
import { Divider } from "@mui/material";
import useResponsive from "../hooks/useResponsive";
import RoleSelectorModal from "../components/RoleSelectorModal";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const isMobile = useResponsive("down", "md", "sm");

  const { pathname } = useLocation();

  const isPosPage = !isMobile && pathname === "/pos";

  return (
    <StyledRoot>
      {!isPosPage && <Header onOpenNav={() => setOpen(true)} />}
      <RoleSelectorModal />
      <Nav
        openNav={open}
        onCloseNav={() => setOpen(false)}
        onOpenNav={() => setOpen(true)}
      />

      <Main shrunk={isPosPage}>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme, shrunk }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: shrunk ? 20 : APP_BAR_DESKTOP + 20,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------
