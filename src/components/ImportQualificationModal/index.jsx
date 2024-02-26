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
import { getAllQualifications } from "../../redux/actions/qualificiationActions";

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
const ImportQualificationModal = ({
  open,
  onClose,
  onConfirm,
  title = "Import Qualification",

  confirmTitle = "Save",
  closeTitle = "Cancel",
  dialogWidth = "md",
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const { allQualifications, qualifications = [] } = useSelector(
    (state) => state.common
  );
  useEffect(() => {
    open && dispatch(getAllQualifications());
  }, [open]);

  const [selectedQualification, setSelectedQualification] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log("eventval", event.target.value);
    setSelectedQualification(value);
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
        <Typography variant="h6">Import Qualification</Typography>
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
          <InputLabel id="demo-multiple-chip-label">
            Choose Qualification
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedQualification}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Choose Qualification"
              />
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
            {allQualifications
              // .filter(
              //   (s) => (qualifications?.data?.map((el) => el.name).includes(s.name))
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
              onClick={() => onConfirm(selectedQualification)}
            >
              {confirmTitle}
            </LoadingButton>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ImportQualificationModal;
