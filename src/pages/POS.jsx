import {
  Alert,
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import { useTitle } from "react-use";
import { useClock } from "react-use-clock";
const POS = () => {
  const isMobile = useResponsive("down", "md", "sm");
  useTitle("POS");
  const clock = useClock();
  return isMobile ? (
    <MobilePosError />
  ) : (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      variant="outlined"
    >
      <CardContent sx={{ padding: 1 }}>
        <Stack direction={"row"} spacing={2} p={0}>
          <Stack direction={"column"} flex={1} spacing={1} p={0}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box border={1} borderColor={"lightgray"} borderRadius={1} p={1}>
              <Typography variant="body2" textAlign={"center"}>
                {clock.hours.toString().padStart(2, "0")}:
                {clock.minutes.toString().padStart(2, "0")}:
                {clock.seconds.toString().padStart(2, "0")}
              </Typography>
            </Box>
          </Stack>
          <Stack flex={7}>
            <Typography>hello</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardContent></CardContent>
      <Divider />
    </Card>
  );
};

const MobilePosError = () => {
  return <Alert severity="error">Pos can not be accessed on mobile</Alert>;
};

export default POS;
