import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Iconify from "../layout/iconify";
import { useDispatch, useSelector } from "react-redux";
import { closeRoleSelector } from "../../redux/actions/commonActions";
import {
  getUserByToken,
  setActiveUserRole,
} from "../../redux/actions/authActions";

const RoleSelectorModal = ({
  title = "Choose Your Role",

  confirmTitle = "Save",
  closeTitle = "Cancel",
  dialogWidth = "md",
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.common.isRoleSelectorOpen);
  const { roles: availableRoles, _id } = useSelector((state) => state.auth);
  const onClose = () => {
    dispatch(closeRoleSelector());
  };
  const [selected, setSelected] = React.useState();

  const onConfirm = () => {
    dispatch(
      setActiveUserRole({
        userId: _id,
        activeRole: selected,
        callBack: () => {
          dispatch(getUserByToken());
          onClose();
        },
      })
    );
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={dialogWidth}
    >
      <DialogTitle
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Confirm Your Role</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[700],
            }}
          >
            <Iconify icon="eva:close-circle-outline" width={30} />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ width: "100%" }}>
        {/* <Typography>
          Are you sure you want to delete {title.toUpperCase()}
        </Typography> */}
        <Stack direction={"row"} spacing={1}>
          {availableRoles.map((el) => {
            return (
              <Button
                variant="outlined"
                color={selected === el ? "primary" : "inherit"}
                key={"role-" + el}
                onClick={() => setSelected(el)}
              >
                {el}
              </Button>
            );
          })}
        </Stack>
      </DialogContent>
      <Divider />

      <DialogActions
        sx={{ padding: (theme) => `${theme.spacing(2)} ${theme.spacing(3)}` }}
      >
        <Stack direction={"row"} spacing={2}>
          {onClose && (
            <Button variant="outlined" onClick={onClose}>
              {closeTitle}
            </Button>
          )}
          {onConfirm && (
            <LoadingButton
              loading={isLoading}
              variant="contained"
              onClick={() => onConfirm()}
            >
              {confirmTitle}
            </LoadingButton>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default RoleSelectorModal;
