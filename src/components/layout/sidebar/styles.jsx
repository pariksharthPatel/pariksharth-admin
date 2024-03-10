// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton, Accordion } from "@mui/material";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  ":hover": {
    color: theme.palette.primary.pariksharthPrimary,
    // color: theme.palette.primary.main,
  },
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledNavItemAccordion = styled((props) => (
  <Accordion disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  // height: 48,
  // position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));
