import axios from "axios";
import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [image, setImage] = useState("");
  const [ISBN, setISBN] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleSaveBook = () => {
 const data ={
  title,
  author,
  publicationYear,
  image,
  ISBN,
  genre
 }
  setLoading(true);
  axios
    .post("http://127.0.0.1:8000/books/", data)
    .then((res) => {
      console.log(res);
      setLoading(false);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      alert('An error happened, please check the console');
      setLoading(false);
    });
}

  return <div className="p-4">
    <BackButton />
  </div>;
};

export default CreateBook;
