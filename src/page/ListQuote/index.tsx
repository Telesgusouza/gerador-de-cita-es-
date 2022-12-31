import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import Quote from "../../components/Quote";
import { quotesAuthor } from "../../Data/quotes";

import * as Styled from "./style";

type PropsQuote = {
  text: string,
  author: string
}

export default function ListQuote() {
  const [listQuote, setListQuote] = useState<PropsQuote[]>([]);
  const [backPage, setBackPage] = useState(false);
  const { author } = useParams();

  useEffect(() => {
    async function getQuotesApi() {
      const data = await quotesAuthor(String(author));
      setListQuote(data);
    }

    getQuotesApi();
  }, []);

  function handleBackPage() {
    setBackPage(true);
    <Navigate to='/' replace={true}/>
  }

  console.log(listQuote)

  return (
    <Styled.Container>
      <Header onClick={handleBackPage} />

      {backPage && (<Navigate to='/' replace={true} />)}

      <Styled.ContainerQuotes>
        <h1>{author} </h1>

        <Styled.ListQuotes>
          {Object.keys(listQuote).length > 0 &&
            listQuote.map((resp) => <Quote key={resp.text}>{resp.text}</Quote>)}
        </Styled.ListQuotes>
      </Styled.ContainerQuotes>
    </Styled.Container>
  );
}
