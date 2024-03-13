import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {books.map((book) => (
        <div
          key={book.id}
          className="border-2 border-gray-500 px-4 py-2 m-4 relative hover:shadow-xl rounded-lg"
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {book.publicationYear}
          </h2>
          <h2 className="absolute top-1/2 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {book.genre}
          </h2>
          <h4 className="my-2 text-gray-500">{book.id}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-2xl text-red-300" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-2xl text-red-300" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 p-4 mt-4">
            <Link to={`/books/details/${book.id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${book.id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${book.id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
