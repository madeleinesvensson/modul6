import { Box, Heading, Paragraph } from "theme-ui";
import { useAppContext } from "../App";
import { BsWind } from "react-icons/bs";
import { WiThermometer } from "react-icons/wi";

export const WeatherForecast = () => {
  const { forecast } = useAppContext();
  const weekday = (day) =>
    new Date(day).toLocaleDateString("en-US", {
      weekday: "long",
    });
  return (
    <Box>
      {forecast.map((day, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginY: 3,
            backgroundColor: "darkGray",
            borderRadius: "20px",
            padding: 3,
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
        </Box>
      ))}
    </Box>
  );
};
