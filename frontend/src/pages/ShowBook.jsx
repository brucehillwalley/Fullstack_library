import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { bookId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/books/${bookId}`)
      .then((res) => setBook(res.data.result))
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(book);

  return (
    <div className="p-4 flex flex-col justify-center">
      <BackButton />
      <h1 className="text-3xl my-8 font-bold text-center">Show Book</h1>
      {loading ? (
        <div className="mt-32 flex justify-center items-center ">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="flex justify-center">
              <img
                className="w-96 h-96 border-2 border-sky-400 rounded-xl w-fit "
                src={book.image}
                alt=""
              />
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 ">Id</span>
              <span>{book.id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publicationYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Genre</span>
              <span>{book.genre}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">ISBN</span>
              <span>{book.ISBN}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
