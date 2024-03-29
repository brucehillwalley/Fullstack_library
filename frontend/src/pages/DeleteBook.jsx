import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { enqueueSnackbar } from "notistack";

const DeleteBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}books/${bookId}/`)
      .then((res) => {
        console.log(res);
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened, please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-8 font-bold text-center">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-3xl my-8 font-bold text-center">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="bg-red-600 p-4 rounded-lg text-white text-xl w-full"
          onClick={handleDeleteBook}
        >
          Yes, delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
