import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import ListQuote from "../page/ListQuote";
import CurrentQuote from "../page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrentQuote />} />
        <Route path="/quote/:author" element={<ListQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
