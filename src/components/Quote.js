import React from "react";
import { useContext } from "react";
import { Appcontext } from "../context/context1";
import { AiOutlineSound } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Quote = () => {
  const {
    fetchquote,
    handlesound,
    quoteContent,
    quoteAuthor,
    handleright,
    handleleft,
    handletag,
    loading,
  } = useContext(Appcontext);

  return (
    <div className=" w-full h-screen bg-[#1c2841] grid place-items-center">
      <div className=" w-[500px] h-[350px] rounded-md bg-white p-4">
        <h2 className=" text-3xl font-extrabold text-center border-b-4 pb-2 mx-10  px-5 py-1 bg-black rounded-full text-white flex justify-evenly items-center">
          <FaQuoteLeft />
          <span className="text-[#33FF00] ">Quote</span> of the day
          <FaQuoteRight />
        </h2>
        {loading ? (
          <h1 className="text-3xl font-bold text-center my-6">loading</h1>
        ) : (
          <div>
            <p className=" text-lg font-medium py-4 text-center">
              {quoteContent}
            </p>
            <p className="text-right font-medium ">--{quoteAuthor}</p>
          </div>
        )}
        <div className="flex justify-center items-center gap-32">
          <button onClick={() => handleleft()} className=" text-3xl font-light">
            <IoArrowBackCircleOutline />
          </button>
          <button
            onClick={() => handleright()}
            className=" text-3xl font-light"
          >
            <IoArrowForwardCircleOutline />
          </button>
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
              onClick={() => fetchquote()}
            >
              New Quote
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span
            className="p-3 rounded-full border-2 border-gray-400 text-blue-900 font-extrabold"
            onClick={() => handlesound()}
          >
            <AiOutlineSound />
          </span>
          <span className="p-3 rounded-full border-2 border-gray-400 text-blue-900 font-extrabold">
            <FaRegCopy />
          </span>
          <span className="p-3 rounded-full border-2 border-gray-400 text-blue-900 font-extrabold">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
