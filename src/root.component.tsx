import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MapIcon from "@mui/icons-material/Map";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CarComponent } from "./components/Car/CarComponent";
import "./styles.css";
import { DestinationReceiverComponent } from "./components/DestinationReceiver/DestinationReceiverComponen";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Root() {
  const queryClient = new QueryClient();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#03a9f4",
            display: "flex",
            borderRadius: 4,
            paddingRight: 2,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              marginTop: "20px",
              marginLeft: "30px",
              color: "white",
            }}
          >
            Rail Road
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              ".MuiTab-textColorPrimary": {
                color: "#1565c0",
              },
              ".Mui-selected": {
                color: "#0d47a1 !important",
              },
            }}
          >
            <Tab icon={<DirectionsCarFilledIcon />} label="Cars" />
            <Tab icon={<MapIcon />} label="Destination" />
            <Tab icon={<FmdGoodIcon />} label="Receiver" />
          </Tabs>
        </Box>
        <Box>
          {value === 0 ? (
            <CarComponent />
          ) : value === 1 ? (
            <DestinationReceiverComponent />
          ) : (
            <DestinationReceiverComponent isReceiver={true} />
          )}
        </Box>
      </QueryClientProvider>
    </>
  );
}
