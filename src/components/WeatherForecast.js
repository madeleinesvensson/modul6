import { Box, Heading, Paragraph } from "theme-ui";
import { useAppContext } from "../App";
import { BsWind } from "react-icons/bs";
import { WiThermometer } from "react-icons/wi";
import Motion from "./Motion";
import { AnimatePresence } from "framer-motion";

export const WeatherForecast = () => {
  const { forecast, weather } = useAppContext();
  const weekday = (day) =>
    new Date(day).toLocaleDateString("en-US", {
      weekday: "long",
    });
  return (
    <AnimatePresence mode="wait">
      {forecast.map((day, idx) => {
        const delay = idx / 20;
        return (
          <Motion
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay }}
            key={day.dt_txt + weather.name}
            exit={{ y: 200, opacity: 0 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginY: 3,
              backgroundColor: "rgba(73, 88, 103, 0.5)",
              borderRadius: "20px",
              padding: 3,
              color: "white",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Heading>{weekday(day.dt_txt)}</Heading>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <WiThermometer size="1.5rem" />
                <Paragraph>{Math.round(day?.main?.temp)}°</Paragraph>
              </Box>
              <Paragraph sx={{ textTransform: "capitalize" }}>
                {day?.weather?.[0]?.description}
              </Paragraph>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <BsWind />
                <Paragraph sx={{ marginLeft: 2 }}>
                  {Math.round(day?.wind?.speed)} m/s
                </Paragraph>
              </Box>
            </Box>
          </Motion>
        );
      })}
    </AnimatePresence>
  );
};
