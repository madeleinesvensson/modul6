import { Box, Heading, Paragraph } from "theme-ui";
import { useAppContext } from "../App";

export const Quote = () => {
  const { quote } = useAppContext();

  return (
    <Box sx={{ marginBottom: 4, color: "white" }}>
      <Heading sx={{ fontSize: 5 }}>{quote?.quote}</Heading>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Paragraph
          sx={{
            fontFamily: "'Caveat', cursive",
            fontSize: 3,
          }}
        >
          {quote?.song}, {quote?.album}
        </Paragraph>
      </Box>
    </Box>
  );
};
