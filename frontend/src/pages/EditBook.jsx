import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [image, setImage] = useState("");
  const [ISBN, setISBN] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { bookId } = useParams();
  console.log(bookId);
  // frontend in belirlediği id değeri bookId olarak tutuluyor

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}books/${bookId}/`)
      .then((res) => {
        const oldData = res.data.result;
        setTitle(oldData.title);
        setAuthor(oldData.author);
        setPublicationYear(oldData.publicationYear);
        setImage(oldData.image);
        setISBN(oldData.ISBN);
        setGenre(oldData.genre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publicationYear,
      image,
      ISBN,
      genre,
    };
    setLoading(true);
    axios
      .put(`http://127.0.0.1:8000/books/${bookId}/`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        enqueueSnackbar("Book updated successfully", { variant: "success" });
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
      <h1 className="text-3xl my-8 font-bold text-center">Update Book</h1>
      {loading ? <Spinner /> : ""}
      {/* put işleminde spinner yap */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            Publish Year
          </label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            ISBN
          </label>
          <input
            type="text"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="">
            Genre
          </label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-sky-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8 " onClick={handleEditBook}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditBook;
