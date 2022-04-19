import { styled } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atoms/typography/Typography";
import IconWithTypography from "../../molecules/IconTypography/IconTypography";
import { ReactComponent as Time } from "../../../images/time.svg";
import BeyondEntrepreneur from "../../../images/coverImages/beyondEntrepreneurship.svg";
import Button from "../../molecules/Buttons/Buttons";
import { ReactComponent as Side } from "../../../images/side.svg";
import Constants from "../../../data/Constants";
import { createTheme, ThemeProvider } from "@mui/material";
import AboutBook from "../AboutBook/AboutBook";

interface Props {
  id?: number;
  title?: string;
  author?: string;
  image?: string;
  time?: string;
  read?: string;
  state?: {
    isFinished: boolean;
    isTrending: boolean;
    justAdded: boolean;
    isFeatured: boolean;
  };
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
        h1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "36px",
          lineHeight: "45px",
          color: "#03314B",
        },
        subtitle1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "25px",
          color: "#03314B",
        },
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#6D787E",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
        },
      },
    },
  },
});

const LeftSection = styled("div")({
  height: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const LeftBottom = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "45px",
  gap: "30px",
});

const WrapStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const RightSection = styled("div")({
  height: "100px",
  marginTop: "50px",
});

const BottomTab = styled("div")({
  marginTop: "60px",
});

const BookDescription = (props: Props) => {
  const [bookData, setBookData] = useState<Props>({
    id: 0,
    title: "",
    author: "",
    image: "",
    time: "",
    read: "",
    state: {
      isFinished: false,
      isTrending: false,
      isFeatured: false,
      justAdded: false,
    },
  });

  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseEnter = () => {
    setButtonHover(true);
  };

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  let hoverStyle;
  if (buttonHover) {
    hoverStyle = { backgroundColor: "#00C263" };
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "912px",
              height: "660px",
              margin: "0 auto",
              borderBottom: "1px solid #E1ECFC",
            }}
          >
            <LeftSection>
              <Typography variant="body2">
                {Constants.bookDetails.title}
              </Typography>
              <Typography variant="h1">
                {Constants.bookDetails.heading}
              </Typography>
              <Typography variant="subtitle1">
                {Constants.bookDetails.description}
              </Typography>
              <Typography variant="body1">
                {Constants.bookDetails.author}
              </Typography>
              <IconWithTypography
                iconSrc={<Time />}
                variant="caption"
                title="15-minute read"
              />
              <WrapStyled>
                <LeftBottom>
                  <Button
                    style={{
                      width: "122px",
                      height: "44px",
                      color: "#22C870",
                      border: "1px solid #042330",
                      textTransform: "none",
                    }}
                  >
                    <Typography variant="body1">
                      {Constants.bookDetails.buttons.read}
                    </Typography>
                  </Button>
                  <Button
                    style={{
                      width: "170px",
                      height: "44px",
                      backgroundColor: "#2CE080",
                      color: "black",
                      textTransform: "none",
                      ...hoverStyle,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography variant="body1">
                      {Constants.bookDetails.buttons.finish}
                    </Typography>
                  </Button>
                  <Button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "11px",
                      color: "#6D787E",
                      textTransform: "none",
                    }}
                  >
                    <Typography variant="body1">
                      {Constants.bookDetails.buttons.send}
                    </Typography>
                    <Side />
                  </Button>
                </LeftBottom>
                <BottomTab>
                  <AboutBook />
                </BottomTab>
              </WrapStyled>
            </LeftSection>
            <RightSection>
              <img src={BeyondEntrepreneur} alt="" />
            </RightSection>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default BookDescription;
