import { Box, Heading, Paragraph } from "theme-ui";
import { useAppContext } from "../App";

export const Quote = () => {
  const { quote } = useAppContext();

  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: "rgba(73, 88, 103, 0.5)",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        color: "white",
        padding: 4,
      }}
    >
      <Heading sx={{ fontSize: 3, textAlign: "center" }}>
        Word of the day
      </Heading>
      <Heading sx={{ fontSize: 4, paddingY: 2, textAlign: "center" }}>
        "{quote?.word}"
      </Heading>
      <Paragraph>{quote?.note}</Paragraph>
      <Box>
        {quote?.definitions?.slice(0, 3)?.map((definition) => {
          return (
            <Paragraph
              key={definition.text}
              sx={{
                fontSize: 2,
                paddingY: 2,
              }}
            >
              {definition?.partOfSpeech}: {definition?.text}
            </Paragraph>
          );
        })}
      </Box>
      <Box>
        <Paragraph
          sx={{
            fontSize: 2,
            paddingY: 2,
          }}
        >
          Example: {quote?.examples?.[0]?.text}
        </Paragraph>
      </Box>
    </Box>
  );
};
