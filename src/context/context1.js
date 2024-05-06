import { createContext, useState } from "react";
import { apiUrl } from "../data";
import toast, { Toaster } from 'react-hot-toast';
export const Appcontext = createContext();

function Appprovider({ children }) {
  const [quote, setquote] = useState('');
  const [tag, settag] = useState("");
  const [index, setindex] = useState(0);
  const [loading, setloading] = useState(false);

  async function fetchquote() {
   
    
    try {
      setloading(true);
      let api;
    if (tag) {
      api = `${apiUrl}?tags=${tag}`;
    } else {
      api = `${apiUrl}random?minLength=100`;
    }
      
      let response = await fetch(api);
      let data = await response.json();
      setquote(data);
      // console.log(data);
      
      setloading(false);
    } catch (error) {
      console.log(error, "error at fetchquote");
    }
  }
  if (quote.results && quote.results.length && quote === 0) {
    return (
      <h1 className="w-full h-screen grid place-items-center font-bold text-3xl bg-[#1c2841] ">
        <h2 className=" p-4 bg-white rounded-full">
          no post found for{" "}
          <span className="text-[#33FF00] px-3 py-2 bg-black rounded-full">
            {tag}
          </span>
        </h2>
      </h1>
    );
  }
  

  let quotecontent = quote[0] && quote[0].length ? quote[0].content : ""
  let author = quote[0] && quote[0].length ? quote[0].author : ""
  const quoteContent =
    quote.results && quote.results[0].length && quote.results[index]
      ? quote.results[index].content
      : "";

  const quoteAuthor =
    quote.results && quote.results[0].length && quote.results[index]
      ? quote.results[index].author
      : "";

quotecontent = quoteContent || quotecontent
author = quoteAuthor || author
      

  function handleleft() {
    if (index - 1 < 0) {
      setindex(quote.results.length - 1);
    } else setindex(index - 1);
  }
  function handleright() {
    if (index + 1 >= quote.results.length) {
      setindex(0);
    } else setindex(index + 1);
  }

  function handlesound() {
let sound;
    if(quotecontent){
      sound = quotecontent
    }
else{
  sound = quote.results[index].content
}
    // const sound = quote.results[index].content || quotecontent ;
    const speech = window.speechSynthesis;
    const voice = new SpeechSynthesisUtterance(sound);
    speech.speak(voice);
    toast.success("speaking started")
  }
  function handletag(e) {
    settag(e);
  }
  function handlecopy(text) {
    window.navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("copy to clickboard")
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard:", err);
        toast.error("Unable to copy text to clipboard")
      });
  }
function handlewquote(){
  fetchquote()
  toast.success('New quote fetched successfully');
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
    handlecopy,
    handlewquote,
    quotecontent,
    author
    
  };

  return <Appcontext.Provider value={value}><Toaster />{children}</Appcontext.Provider>;
}
export default Appprovider;
