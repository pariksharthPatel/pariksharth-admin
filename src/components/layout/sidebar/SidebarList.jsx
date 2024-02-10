import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItemText,
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
  if (children && children.length > 0) {
    return (
      <StyledNavItemAccordion>
        <AccordionSummary
          expandIcon={<Iconify name="ic:baseline-expand-more" color="red" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
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
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      {!shrink && <ListItemText disableTypography primary={title} />}

      {info && info}
    </StyledNavItem>
  );
}
