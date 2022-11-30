import { WiCloudy, WiFog, WiDayLightWind } from "react-icons/wi";
import {
  BsCloudRain,
  BsCloudDrizzle,
  BsCloudSnow,
  BsSun,
} from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { RiMistFill, RiThunderstormsLine } from "react-icons/ri";
export const weatherIconSwitcher = (weather) => {
  const weatherShort = weather.weather[0];
  if (
    weatherShort.description === "broken clouds" ||
    weatherShort.description === "scattered clouds" ||
    weatherShort.description === "few clouds"
  ) {
    return <AiOutlineCloud size={"2rem"} />;
  } else if (weatherShort.main.includes("Clouds")) {
    return <WiCloudy size={"3rem"} />;
  } else if (weatherShort.main.includes("Rain")) {
    return <BsCloudRain size={"2rem"} />;
  } else if (weatherShort.main.includes("Thunderstorm")) {
    return <RiThunderstormsLine size={"2rem"} />;
  } else if (weatherShort.main.includes("Fog")) {
    return <WiFog size={"2rem"} />;
  } else if (weatherShort.main.includes("Mist")) {
    return <RiMistFill size={"2rem"} />;
  } else if (weatherShort.main.includes("Clear")) {
    return <WiDayLightWind size={"2rem"} />;
  } else if (weatherShort.main.includes("Drizzle")) {
    return <BsCloudDrizzle size={"2rem"} />;
  } else if (weatherShort.main.includes("Snow")) {
    return <BsCloudSnow size={"2rem"} />;
  } else {
    return <BsSun size={"2rem"} />;
  }
};

export const weatherBackgroundSwitcher = (weather) => {
  if (!weather) return null;
  const weatherShort = weather.weather[0];
  if (
    weatherShort.description === "broken clouds" ||
    weatherShort.description === "scattered clouds" ||
    weatherShort.description === "few clouds"
  ) {
    return "#62BFED";
  } else if (weatherShort.main.includes("Clouds")) {
    return "#598381";
  } else if (weatherShort.main.includes("Rain")) {
    return "#084C61";
  } else if (weatherShort.main.includes("Thunderstorm")) {
    return "#1E5C6F";
  } else if (weatherShort.main.includes("Fog")) {
    return "#9DA9A0";
  } else if (weatherShort.main.includes("Mist")) {
    return "#7A6174";
  } else if (weatherShort.main.includes("Clear")) {
    return "#6D9DC5";
  } else if (weatherShort.main.includes("Drizzle")) {
    return "#7CA982";
  } else if (weatherShort.main.includes("Snow")) {
    return "#AEECEF";
  } else {
    return "#FCF5C7";
  }
};
