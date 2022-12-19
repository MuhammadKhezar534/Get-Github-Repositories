import React, { useState, useEffect } from "react";
import "./index.css";

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, ...formProps }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <form {...formProps} onSubmit={handleSubmit}>
      <input
        id="search"
        name="search"
        value={query}
        className="input-serach"
        placeholder="Search Repos"
        onChange={(event) => setQuery(event.target.value)}
        required
      />
    </form>
  );
};

export default SearchForm;
