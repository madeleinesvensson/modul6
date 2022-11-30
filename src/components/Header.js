import { Heading, Box, Paragraph } from "theme-ui";

export const Header = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const formattedToday = today.toLocaleDateString("en-US", options);
  return (
    <Box sx={{ textAlign: "center", paddingY: 4 }}>
      <Heading sx={{ fontFamily: "Roboto", color: "white", fontSize: "36px" }}>
        Weather
      </Heading>
      <Paragraph
        sx={{ fontFamily: "Roboto", color: "white", fontSize: "26px" }}
      >
        {formattedToday}
      </Paragraph>
    </Box>
  );
};
