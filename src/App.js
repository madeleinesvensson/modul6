import { useState, createContext, useContext, useEffect } from "react";
import { Box } from "theme-ui";
import { CityInput } from "./components/CityInput";
import { Quote } from "./components/Quote";
import { WeatherForecast } from "./components/WeatherForecast";
import { WeatherToday } from "./components/WeatherToday";
import { Header } from "./components/Header";
import { WEATER_TODAY, WEATHER_FORECAST } from "./utils/API";
import { weatherBackgroundSwitcher } from "./components/WeatherSwitch";

export const AppContext = createContext({
  city: "",
  setCity: () => null,
  weather: undefined,
  setWeather: () => null,
  forecast: undefined,
  setForecast: () => null,
  quote: "",
  setQuote: () => null,
});
const getCityFromStorage = () => {
  const savedCity = localStorage.getItem("city");
  return JSON.parse(savedCity) ?? "";
};

export const useAppContext = () => useContext(AppContext);
function App() {
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather"))
  );
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem("forecast"))
  );
  const [city, setCity] = useState(getCityFromStorage());
  const [weatherFavourites, setWeatherFavourites] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://taylorswiftapi.herokuapp.com/get")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        forecast,
        setForecast,
        weather,
        setWeather,
        quote,
        setQuote,
      }}
    >
      <Box sx={{ backgroundColor: weatherBackgroundSwitcher(weather) }}>
        <Box
          sx={{
            paddingX: 4,
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Header />
          <CityInput />
          <Box>
            {weather && <WeatherToday />}
            {forecast && <WeatherForecast />}
          </Box>
          <Quote />
        </Box>
      </Box>
    </AppContext.Provider>
  );
}

export default App;
