import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
//
import {
  StyledNavItem,
  StyledNavItemAccordion,
  StyledNavItemIcon,
} from "./styles";
import Iconify from "../iconify/Iconify";

// ----------------------------------------------------------------------

SidebarList.propTypes = {
  data: PropTypes.array,
};

export default function SidebarList({ shrink, data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} shrink={shrink} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item, shrink }) {
  const { title, path, icon, info, children } = item;
  if (children && children.length > 0 && !shrink) {
    return (
      <StyledNavItemAccordion>
        <AccordionSummary
          expandIcon={<Iconify name="ic:baseline-expand-more" color="red" />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "&.active": {
              color: "text.primary",
              bgcolor: "action.selected",
              fontWeight: "fontWeightBold",
            },
          }}
          // sx={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}
        >
          {/* <ListItemButton  sx={{ padding: 0, margin: 0 }}>
            <ListItemIcon>{icon && icon}</ListItemIcon>
            <ListItemText
              primary={title}
              sx={{ paddingTop: 0, paddingBottom: 0 }}
            />
          </ListItemButton> */}
          <StyledNavItem
            component={RouterLink}
            to={path}
            sx={{
              "&.active": {
                color: "text.primary",
                bgcolor: "action.selected",
                fontWeight: "fontWeightBold",
              },
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flex={1}
            >
              <Stack
                component={RouterLink}
                to={path}
                direction={"row"}
                alignItems={"center"}
                spacing={2.5}
              >
                {icon && icon}
                <Typography variant="body2">{title}</Typography>
              </Stack>
              <Iconify icon="ic:baseline-expand-more" />
            </Stack>
          </StyledNavItem>
        </AccordionSummary>
        <AccordionDetails>
          {children.map((item) => (
            <NavItem key={item.title} item={item} shrink={shrink} />
          ))}
        </AccordionDetails>
      </StyledNavItemAccordion>
    );
  }
  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <Tooltip title={title} arrow>
        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      </Tooltip>

      {!shrink && <ListItemText disableTypography primary={title} />}

      {info && info}
    </StyledNavItem>
  );
}
