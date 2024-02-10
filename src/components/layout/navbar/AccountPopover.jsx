import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
  Link,
  ButtonBase,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../redux/actions/authActions";
import styled from "@emotion/styled";
// mocks_
// import account from '../../../_mock/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  // {
  //   label: "Home",
  //   icon: "eva:home-fill",
  // },
  // {
  //   label: "Profile",
  //   icon: "eva:person-fill",
  // },
  // {
  //   label: "Settings",
  //   icon: "eva:settings-2-fill",
  // },
  
  {
    label: "Logout",
    icon: "solar:logout-line-duotone",
  },
];

// ----------------------------------------------------------------------
const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  const { name, email,role, photoURL } = useSelector((state) => state.auth);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
    dispatch(logOutUser());
  };
const handleLogout = ()=>{
  dispatch(logOutUser())
}
  return (
    <>
      {/* <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={photoURL} alt="photoURL" />
      </IconButton> */}
    <ButtonBase onClick={handleOpen}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {name}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {role}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </ButtonBase>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {/* <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
