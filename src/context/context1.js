import { createContext, useState } from "react";
import { apiUrl } from "../data";

export const Appcontext = createContext();

function Appprovider({ children }) {
  const [quote, setquote] = useState([]);
  const [tag, settag] = useState("");
  const [index, setindex] = useState(0);
  const [loading, setloading] = useState(false);

  async function fetchquote() {
    try {
      setloading(true);
      let api = `${apiUrl}?tags=${tag}`;
      let response = await fetch(api);
      let data = await response.json();
      setquote(data);
      console.log(data);
      setloading(false);
    } catch (error) {
      console.log(error, "error at fetchquote");
    }
  }

  const quoteContent =
    quote.results && quote.results[0].length && quote.results[index]
      ? quote.results[index].content
      : "";

  const quoteAuthor =
    quote.results && quote.results[0].length && quote.results[index]
      ? quote.results[index].author
      : "";

  function handleleft() {
    if (index - 1 < 0) {
      setindex(quote.results.length - 1);
    } else setindex(index - 1);
  }
  function handleright() {
    if (index + 1 >= quote.results.length) {
      setindex(quote.results.length);
    } else setindex(index + 1);
    console.log("joo");
  }

  function handlesound() {
    const sound = quote.results[index].content;
    const speech = window.speechSynthesis;
    const voice = new SpeechSynthesisUtterance(sound);
    speech.speak(voice);
  }
  function handletag(e) {
    settag(e);
    console.log(e);
  }
  const value = {
    quote,
    setquote,
    fetchquote,
    handlesound,
    tag,
    settag,
    quoteAuthor,
    quoteContent,
    index,
    setindex,
    handleleft,
    handleright,
    handletag,
    loading,
    setloading,
  };

  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}
export default Appprovider;
