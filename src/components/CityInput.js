import { Button, Input, Box } from "theme-ui";
import { useAppContext } from "../App";
import { WEATER_TODAY, WEATHER_FORECAST } from "../utils/API";
import { useState } from "react";

export const CityInput = () => {
  const { setWeather, city, setCity, setForecast } = useAppContext();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let city = event.target.City.value;
    fetch(WEATER_TODAY(city))
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setError("");
          setWeather(data);
          localStorage.setItem("city", JSON.stringify(city));
          localStorage.setItem("weather", JSON.stringify(data));
        } else {
          setError(data.message);
        }
      });

    fetch(WEATHER_FORECAST(city))
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "200") {
          setError("");
          const filteredForecast = data.list.filter((item) =>
            item.dt_txt.includes("12:00")
          );
          setForecast(filteredForecast);
          localStorage.setItem("forecast", JSON.stringify(filteredForecast));
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
        <Input
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            borderColor: "green.9",
            border: "2px solid",
            marginRight: 0,
            flexGrow: 1,
            fontSize: "20px",
          }}
          type="text"
          placeholder="City"
          name="City"
          id={"City"}
          defaultValue={city}
          onChange={(event) => setCity(event.target.value)}
        ></Input>
        <Button
          type="submit"
          sx={{
            backgroundColor: "green.9",
            textAlign: "center",
            marginLeft: 2,
            borderRadius: "12px",
            flexShrink: 0,
          }}
        >
          Save
        </Button>
      </Box>
      {error && (
        <>
          <Box sx={{ fontSize: 2, margin: "20px 0 0 10px", fontWeight: 600 }}>
            {error}
          </Box>
        </>
      )}
    </>
  );
};
