import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
    } else {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <>
      <header className={css["header"]}>
        <form className={css["header-form"]} onSubmit={handleSubmit}>
          <input
            className={css["header-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={css["header-btn"]} type="submit">
            <FaSearch className={css["header-btn-ikon"]} />
          </button>
        </form>
      </header>
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
