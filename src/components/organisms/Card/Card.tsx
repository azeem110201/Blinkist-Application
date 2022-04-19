import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import Typography from "../../atoms/typography/Typography";
import IconTypography from "../../molecules/IconTypography/IconTypography";
import Button from "../../molecules/Buttons/Buttons";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Add } from "../../../images/add.svg";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontFamily: "Cera Pro",
          fontlWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
          color: "#03314B",
        },
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "20px",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
        },
      },
    },
  },
});

const RootContainer = styled("div")({
  width: "284px",
  height: "466px",
  background: "#FFFFFF",
  border: "1px solid #E1ECFC",
  boxSizing: "border-box",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflow: "hidden",
});

const useStyles = makeStyles({
  image: {
    position: "relative",
    height: "292px",
    width: "294.1px",
  },
  title: {
    position: "relative",
    top: "23px",
    left: "16px",
    bottom: "80px",
    height: "23px",
    fontFamily: "Cera Pro",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#03314B",
  },
  author: {
    position: "relative",
    top: "16px",
    left: "16px",
    height: "20px",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E",
  },
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    top: "17px",
  },
  time: {
    position: "relative",
    left: "5px",
    top: "16px",
    fontFamily: "Cera Pro",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
  },
  read: {
    position: "relative",
    top: "16px",
    left: "47.33px",
    fontFamily: "Cera Pro",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
  },
  finished: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#0365F2",
    textAlign: "center",
    position: "relative",
    top: "15px",
    cursor: "pointer",
  },
  addButton: {
    width: "100%",
    height: "52px",
  },
});

interface Props {
  children?: React.ReactNode;
  className?: string;
  image?: string;
  title: string;
  author: string;
  time: string;
  read: string;
    isFinished?: boolean;
    addToLibrary?: boolean;
    readAgain?: boolean;
  onClick?: () => void;
  value: number;
  id?: number;
}

const Card = (props: Props) => {
  const [mouseState, setMouseState] = useState(false);
  const [linkStyle, setLinkStyle] = useState({});
  const [iconStyle, setIconStyle] = useState({});

  const handleMouseEnter = () => {
    setMouseState(true);
    setLinkStyle({
      backgroundColor: "#0365F2",
      color: "white",
    });

    setIconStyle({
      fill: "white",
      stroke: "white",
    });
  };

  const handleMouseLeave = () => {
    setMouseState(false);
    setLinkStyle({
      backgroundColor: "#FFFFFF",
    });
    setIconStyle({});
  };

  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <RootContainer onClick={props.onClick}>
          <img src={props.image} alt="img" className={style.image} />
          <Typography variant="subtitle1" className={style.title}>
            {props.title}
          </Typography>
          <Typography variant="body1" className={style.author}>
            {props.author}
          </Typography>
          <div className={style.rowFlex}>
            <div className={style.time}>
              <IconTypography
                iconSrc={<Time />}
                variant="caption"
                title={props.time}
              />
            </div>
            <div className={style.read}>
              {props.read === "" ? null : (
                <IconTypography
                  iconSrc={<User />}
                  variant="caption"
                  title={props.read}
                />
              )}
            </div>
          </div>

          {props.isFinished ? (
            <Typography variant="body1" className={style.finished}>
              Finished
            </Typography>
          ) : null}

          {props.readAgain ? (
            <Typography variant="body1" className={style.finished}>
              Read Again
            </Typography>
          ) : null}

          {props.addToLibrary ? (
            <Button
              style={linkStyle}
              className={style.addButton}
              onMouseEnter={() => handleMouseEnter}
              onMouseLeave={() => handleMouseLeave}
            >
              <IconTypography
                iconSrc={<Add style={iconStyle} />}
                variant="body1"
                title="Add to library"
              />
            </Button>
          ) : null}
        </RootContainer>
      </ThemeProvider>
    </>
  );
};

export default Card;
