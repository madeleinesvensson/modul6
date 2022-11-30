import { Box, Heading, Paragraph } from "theme-ui";
import { useAppContext } from "../App";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { weatherIconSwitcher } from "./WeatherSwitch";

export const WeatherToday = () => {
  const { weather } = useAppContext();
  const timezoneOffset = new Date().getTimezoneOffset() * 60;

  const timeOfSunrise = new Date(
    (weather.sys.sunrise + weather.timezone + timezoneOffset) * 1000
  ).toLocaleTimeString("sv-GB", { hour: "2-digit", minute: "2-digit" });

  const timeOfSunset = new Date(
    (weather.sys.sunset + weather.timezone + timezoneOffset) * 1000
  ).toLocaleTimeString("sv-GB", { hour: "2-digit", minute: "2-digit" });

  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: "rgba(73, 88, 103, 0.5)",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        paddingY: 4,
      }}
    >
      <Heading sx={{ fontSize: 5 }}>{weather?.name}</Heading>
      <Paragraph sx={{ fontSize: 5 }}>
        {Math.round(weather?.main?.temp)}°
      </Paragraph>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box> {weatherIconSwitcher(weather)}</Box>
        <Paragraph
          sx={{ fontSize: 3, textTransform: "capitalize", marginLeft: 3 }}
        >
          {weather?.weather?.[0]?.description}
        </Paragraph>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paragraph sx={{ marginX: 2 }}>
          L: {Math.round(weather?.main?.temp_min)}°
        </Paragraph>
        <Paragraph sx={{ marginX: 2 }}>
          H: {Math.round(weather?.main?.temp_max)}°
        </Paragraph>
      </Box>
      <Paragraph>
        Feels like: {Math.round(weather?.main?.feels_like)}°
      </Paragraph>
      <Paragraph>Wind speed: {Math.round(weather?.wind?.speed)} m/s</Paragraph>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", marginTop: 4 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BsSunrise size={"2rem"} />
          <Paragraph sx={{ marginX: 2 }}>{timeOfSunrise}</Paragraph>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BsSunset size={"2rem"} />
          <Paragraph sx={{ marginX: 2 }}>{timeOfSunset}</Paragraph>
        </Box>
      </Box>
    </Box>
  );
};
