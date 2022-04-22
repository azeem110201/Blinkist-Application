import { render } from "@testing-library/react";
import BookDetail from "./index";
import Header from "../../organisms/Header/Header";
import BookDescription from "../../organisms/BookDescription/BookDescription";
import Footer from "../../organisms/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Book Detail test", () => {
  test("Should render", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <BookDetail
                header={<Header />}
                bookView={<BookDescription />}
                footer={<Footer />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
