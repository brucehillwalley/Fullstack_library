import React, { useEffect, useState } from "react";
// import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.result.rows);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  //  console.log(books);

  return (
    <div className="p-4 ">
      <h1 className="text-3xl my-8 font-bold text-center">
        WELCOME TO LIBRARY APP
      </h1>
      <p className=" my-8 font-bold text-center">Let books enlighten you</p>
      <img
        className="mx-auto h-48"
        src="https://media.giphy.com/media/VJE5f22EQwaHjx5gTk/giphy.gif?cid=ecf05e47drsudc5cu1k29tncsjaxka6oi9asj4drj7nlbbtk&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
      />
      <div className="flex justify-center items-center mt-4 gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 font-bold">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-600" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType == "card" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
};

export default Home;
