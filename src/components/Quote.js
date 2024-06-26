import React from "react";
import { useContext } from "react";
import { Appcontext } from "../context/context1";
import { AiOutlineSound } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Quote = () => {
  const {
    
    handlesound,
    quoteContent,
    quoteAuthor,
    handleright,
    handleleft,
    handletag,
    loading,
    handlecopy,
    handlewquote,
    quotecontent,
    author,
    tag
    
  } = useContext(Appcontext);

  const israndom = !tag;
  return (
    <div className=" w-full h-screen bg-[#1c2841] grid place-items-center ">
      <div className=" w-[90%] h-auto rounded-md bg-white mx-2 p-4 sm:w-[500px] ">
        <h2 className=" text-xl font-extrabold text-center border-b-4 pb-2 mx-10  px-5 py-1 bg-black rounded-full text-white flex justify-evenly items-center sm:text-3xl">
          <FaQuoteLeft />
          <span className="text-[#33FF00] ">Quote</span> of the day
          <FaQuoteRight />
        </h2>
        {loading ? (
          <h1 className="text-3xl font-bold text-center my-6">loading</h1>
        ) : (
          <div>
            <p className=" text-lg font-medium py-4 text-center">
              "{quoteContent || quotecontent}"
            </p>
            <p className="text-right font-medium "> — {quoteAuthor || author}</p>
          </div>
        )}
        <div className="flex justify-center items-center gap-32">
          {
            !israndom &&<button onClick={() => handleleft()} className=" text-3xl font-light">
            <IoArrowBackCircleOutline />
          </button>
          }
          {
            !israndom&&  <button
            onClick={() => handleright()}
            className=" text-3xl font-light"
          >
            <IoArrowForwardCircleOutline />
          </button>
          }
          
        
        </div>
        <div className=" w-[90%] h-[2px] bg-gray-400 mx-auto mt-4"></div>
        <div className="flex justify-between items-center m-3">
          <form>
            <label htmlFor="tag" className=" font-extrabold text-[#33FF00]">
              Select Category
            </label>
            <br></br>
            <select
              className=" px-4 py-1 rounded-lg bg-[#1c2841] text-[#33FF00]"
              id="tag"
              onChange={(e) => handletag(e.target.value)}
            >
             
              <option value="life">Life</option>
              <option value="technology">Technology</option>
              <option value="happiness">Happiness</option>
              <option value="jobs">Jobs</option>
              <option value="education">Education</option>
              <option value="nature">Nature</option>
              <option value="love">Love</option>
              <option value="inspiration">Inspiration</option>
              <option value="motivation">Motivation</option>
              <option value="success">Success</option>
              <option value="health">Health</option>
              <option value="creativity">Creativity</option>
              <option value="friendship">Friendship</option>
              <option value="wisdom">Wisdom</option>
              <option value="positivity">Positivity</option>
              <option value="growth">Growth</option>
              <option value="art">Art</option>
              <option value="knowledge">Knowledge</option>
              <option value="challenge">Challenge</option>
              <option value="adventure">Adventure</option>
            </select>
          </form>
          <div>
            <button
              className=" px-4 py-2 bg-[#1c2841] text-white font-bold border-gray-400 rounded-full"
              onClick={() => handlewquote()}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span
            className="p-3 rounded-full border-2 border-gray-400 text-blue-900 font-extrabold cursor-pointer hover:bg-blue-700 hover:text-white duration-300"
            onClick={() => handlesound()}
          >
            <AiOutlineSound />
          </span>
          <span
            className="p-3 rounded-full border-2 border-gray-400 text-blue-900 font-extrabold cursor-pointer hover:bg-blue-700 hover:text-white duration-300"
            onClick={() => handlecopy(quoteContent || quotecontent)}
          >
            <FaRegCopy />
          </span>
         
        </div>
      </div>
    </div>
  );
};

export default Quote;
