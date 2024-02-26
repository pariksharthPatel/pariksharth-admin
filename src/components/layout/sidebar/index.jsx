import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Logo from "../logo";
import Scrollbar from "../scrollbar";
import NavSection from "./SidebarList";
//
import { useDispatch, useSelector } from "react-redux";
import sidebarConfig from "../../../configs/Sidebar.config";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Sidebar.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Sidebar({ openNav, onCloseNav, onOpenNav }) {
  // const dispatch = useDispatch()
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "md", "sm");

  const { name, role, photoURL } = useSelector((state) => state.auth);
  const isPosPage = !isMobile && openNav;

  const NAV_WIDTH = isPosPage ? 70 : 280;

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // if(pathname ==='/pos'){
    //   dispa
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ px: 2.5, py: 3, display: "inline-flex" }}
      >
        <Logo />
        {isDesktop && (
          <IconButton onClick={openNav ? onCloseNav : onOpenNav}>
            <Iconify icon={!openNav ? "mdi:menu-open" : "mdi:menu-close"} />
          </IconButton>
        )}
      </Stack>

      <NavSection shrink={isPosPage} data={sidebarConfig[role]} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          }}
          variant="permanent"
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
