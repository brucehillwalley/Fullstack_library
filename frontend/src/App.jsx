import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.result.rows))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {books.map((book) => (
        <p
          className="text-black
    font-bold text-center"
          id={book.id}
          key={book.id}
        >
          {book.title}
        </p>
      ))}
    </div>
  );
}

export default App;
