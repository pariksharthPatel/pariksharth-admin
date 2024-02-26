import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Iconify from "../layout/iconify";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals } from "../../redux/actions/goalActions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const ImportGoalModal = ({
  open,
  onClose,
  onConfirm,
  title = "Import Goal",

  confirmTitle = "Save",
  closeTitle = "Cancel",
  dialogWidth = "md",
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const { allGoals, goals = [] } = useSelector((state) => state.common);
  useEffect(() => {
    open && dispatch(getAllGoals());
  }, [open]);

  const [selectedGoal, setSelectedGoal] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log("eventval", event.target.value);
    setSelectedGoal(value);
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
        <Typography variant="h6">Import Goal</Typography>
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
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Choose Goal</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedGoal}
            onChange={handleChange}
            input={
              <OutlinedInput id="select-multiple-chip" label="Choose Goal" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value._id + "chip"} label={value.name} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {allGoals
              // .filter(
              //   (s) => (goals?.data?.map((el) => el.name).includes(s.name))
              // )
              .map((el, elI) => {
                return (
                  <MenuItem value={el} key={el.name}>
                    {el.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
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
              onClick={() => onConfirm(selectedGoal)}
            >
              {confirmTitle}
            </LoadingButton>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ImportGoalModal;
