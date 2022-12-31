import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";

import Quote from "../Quote";
import * as Styled from "./style";

import arrowImg from "../../assets/arrow.png";
import { getQuotes } from "../../Data/quotes";
import { Header } from "../Header";

type propsQuote = {
  text: string;
  author: string;
};

export default function Main() {
  const [currentQuote, setCurrentQuote] = useState<propsQuote>({
    text: "",
    author: "",
  });

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const dataQuote = await getQuotes();
    const randomIndex = Math.floor(Math.random() * dataQuote.length);

    setCurrentQuote(dataQuote[randomIndex]);
  }

  function NavigatePage() {
    return <Navigate to="/quote" replace={true} />;
  }

  return (
    <>
      <Header onClick={getQuote} />
      <Styled.Container>
        {currentQuote.text !== "" && <Quote>“ {currentQuote.text} ”</Quote>}

        <Link to={`/quote/${currentQuote.author}`}>
          <Styled.MostUseful>
            <div>
              <p>{currentQuote.author}</p>
            </div>

            <img src={arrowImg} alt="ver mais citações" />
          </Styled.MostUseful>
        </Link>
      </Styled.Container>
    </>
  );
}
