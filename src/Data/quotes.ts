import axios from "axios";
import { useState } from "react";

type propsQuote = {
  text: string;
  author: string;
};



type propsListQuote = [
  { 
    text: string,
    author: string 
  }
];

export async function getQuotes() {
  const listQuote = await axios.get("https://type.fit/api/quotes");

  return listQuote.data;
}

export async function quotesAuthor(author: string) {
  const dataQuotes = await getQuotes();
  var data: propsListQuote | {text: string, author: string} | [] = [];

  dataQuotes.forEach((element: propsQuote) => {
    if (element.author === author) {
      data.push(element);
    }
  });
  return data;
}
