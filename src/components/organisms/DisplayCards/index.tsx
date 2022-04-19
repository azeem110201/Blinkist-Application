import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
import Card from "../Card/Card";
import Typography from "../../atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

interface Props{
  id: number;
  title: string;
  author: string;
  time: string;
  read: string;
  image: string;
  state: {
    isTrending: boolean;
    isFinished: boolean;
    justAdded: boolean;
    isFeatured: boolean;
  };
};

interface CardProps {
  title: string;
  data: Array<Props>;
  state?: string;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          color: "#03314B",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  card: {
    "&:hover": {
      backgroundColor: "#F1F6F4",
      cursor: "pointer",
    },
  },
});

const BookStyled = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "25px 19.9px",
  width: "922px",
  position: "relative",
  top: "25px",
});

const DisplayCard = (props: CardProps) => {
  const [showData, setShowData] = useState(props.data);

  useEffect(() => {
    if (props.state === "trending") {
      setShowData(showData.filter(item => item.state.isTrending));
    } else {
      props.state === "featured"
        ? setShowData(showData.filter(item => item.state.isFeatured))
        : setShowData(showData.filter(item => item.state.justAdded));
    }
  }, [showData, props.state]);

  const navigate = useNavigate();

  const style = useStyles();

  const showBookDetails = (index: number) => {
    // if (index === 1) {
       navigate("/book-details");
    // } else {
    //   navigate("/");
    // }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">{props.title}</Typography>
        <BookStyled>
          {showData
            .slice(0)
            .reverse()
            .map((book, index) => {
              return (
                <Card
                  key={index}
                  className={style.card}
                  title={book.title}
                  author={book.author}
                  time={book.time}
                  read={book.read}
                  image={book.image}
                  addToLibrary={true}
                  onClick={() => showBookDetails(index)}
                  value={index}
                />
              );
            })}
        </BookStyled>
      </ThemeProvider>
    </>
  );
};

export default DisplayCard;
