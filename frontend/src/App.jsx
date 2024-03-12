import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:bookId" element={<ShowBook />} />
      <Route path="/books/edit/:bookId" element={<EditBook />} />
      <Route path="/books/delete/:bookId" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
