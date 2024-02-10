import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef } from "react";
import Iconify from "../layout/iconify";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import moment from "moment";
import { TimePicker } from "@mui/x-date-pickers";
import shortid from "shortid";
const headers = [
  { title: "Week Day", key: "dayName" },

  { title: "Is Working", key: "isWorking" },
  { title: "Start Time", key: "startTime" },
  { title: "End Time", key: "endTime" },
];
const ScheduleModal = ({
  title,
  onClose = () => {},
  open,
  onConfirm,
  employee,
  confirmTitle = "Save",
  closeTitle = "Cancel",
  dialogWidth = "md",
  isLoading,
}) => {
  const btnRef = useRef();
  const headers = [
    { title: "Week Day", key: "dayName" },

    { title: "Is Working", key: "isWorking" },
    { title: "Start Time", key: "startTime" },
    { title: "End Time", key: "endTime" },
  ];

  const { control, register, setValue, handleSubmit, formState, reset } =
    useForm({ defaultValues: { schedule: [] } });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "schedule", // unique name for your Field Array
    }
  );

  const onSubmit = (data) => {
    onConfirm(data);
    reset({ schedule: [] });
  };

  useEffect(() => {
    if (employee?.schedule?.length > 0) {
      reset({ schedule: employee.schedule });
    } else {
      reset({
        schedule: moment.weekdays().map((d, i) => {
          return {
            id: shortid.generate(),
            dayName: d,
            dayIndex: i,
            isWorking: false,
            startTime: "10:00",
            endTime: "19:00",
          };
        }),
      });
    }
  }, [employee?.schedule]);
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
        <Typography variant="h6">{employee?.name}'s Schedule</Typography>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TableContainer>
            <Table
              size="small"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {headers.map((hEl) => (
                    <TableCell key={hEl.key}>{hEl.title}</TableCell>
                  ))}

                  {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {fields.map((el, elI) => {
                  return (
                    <TableRow key={el.id}>
                      <TableCell>{el.dayName}</TableCell>
                      <TableCell>
                        <Controller
                          name={`schedule.${elI}.isWorking`}
                          control={control}
                          render={({ field }) => (
                            <Switch
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell>
                        <Controller
                          name={`schedule.${elI}.startTime`}
                          control={control}
                          render={({ field }) => {
                            return (
                              <TimePicker
                                ampm
                                format="HH:mm"
                                value={moment(field.value, "HH:mm")}
                                onChange={(time) => {
                                  const envent = {
                                    target: {
                                      name: `schedule.${elI}.startTime`,
                                      value: time.format("HH:mm"),
                                    },
                                  };

                                  field.onChange(envent);
                                }}
                              />
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Controller
                          name={`schedule.${elI}.endTime`}
                          control={control}
                          render={({ field }) => {
                            return (
                              <TimePicker
                                ampm
                                format="HH:mm"
                                value={moment(field.value, "HH:mm")}
                                onChange={(time) => {
                                  const envent = {
                                    target: {
                                      name: `schedule.${elI}.endTime`,
                                      value: time.format("HH:mm"),
                                    },
                                  };

                                  field.onChange(envent);
                                }}
                              />
                            );
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <input type="submit" style={{ display: "none" }} ref={btnRef} />
        </form>
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
              onClick={() => btnRef.current.click()}
            >
              {confirmTitle}
            </LoadingButton>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleModal;
