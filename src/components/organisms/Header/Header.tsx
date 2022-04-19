import React from "react";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "@mui/styles/styled/styled";
import { useState } from "react";
import Typography from "../../atoms/typography/Typography";
import Dropdown from "../../molecules/DropDown/DropDown";
import Constants from "../../../data/Constants";
import Icon from "../../atoms/IconButton/IconButton";
import Logo from "../../atoms/icons/Icons";
import SearchIcon from "../../../images/search.svg";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
      },
    },
  },
});

const RootContainer = styled("div")({
  width: "100%",
  height: "86px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});

const useStyles = makeStyles({
  logo: {
    width: "124.09px",
    height: "26px",
    alignSelf: "center",
  },
  library: {
    alignSelf: "center",
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20.11px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  explore: {
    alignSelf: "center",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    alignSelf: "center",
  },
});

type Props = {};

const Header = (props: Props) => {
  const [showExplore, setShowExplore] = useState<boolean>(false);
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [exploreIconStyle, setExploreIconStyle] = useState({
    transform: "rotate(0deg)",
  });
  const [accountIconStyle, setAccountIconStyle] = useState({
    transform: "rotate(0deg)",
  });

  const showExploreDropdown = () => {
    showExplore ? setShowExplore(false) : setShowExplore(true);

    if (showExplore) {
      setExploreIconStyle({ transform: "rotate(0deg)" });
    } else {
      setExploreIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const showAccountDropdown = () => {
    showAccount ? setShowAccount(false) : setShowAccount(true);

    if (showAccount) {
      setAccountIconStyle({ transform: "rotate(0deg)" });
    } else {
      setAccountIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <RootContainer>
            <Logo className={style.logo} />
            <Icon>
              <img src={SearchIcon} alt="icon" />
            </Icon>
            <Dropdown
              title={Constants.header.link1}
              className={style.explore}
              onClick={showExploreDropdown}
              style={exploreIconStyle}
            />
            <Typography variant="body1" className={style.library}>
              {Constants.header.link2}
            </Typography>

            <Dropdown
              title="Account"
              className={style.account}
              onClick={showAccountDropdown}
              style={accountIconStyle}
            />
          </RootContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Header;
