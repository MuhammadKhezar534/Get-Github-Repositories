import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import Debounce from "../CustomHooks/Debounce";
import { getRepos } from "../helpers/Parsers";
import Loader from "./../components/Loader";
import RepoListing from "./../components/RepoListing";
import "./index.css";

const SearchGitHubRespos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = Debounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      handleSearch(debouncedSearchTerm);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  const getSerachValue = (query: string) => {
    setSearchTerm(query);
  };

  const handleSearch = async (query: any) => {
    getRepos(query).then((repos) => {
      setResults(repos);
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <SearchForm onSearch={getSerachValue} />
      {results.length > 0 ? (
        <RepoListing listing={results} />
      ) : (
        <div className="repo-text">
          Search Repository .. No Repositpory Found
        </div>
      )}
      <Loader loading={loading} />
    </div>
  );
};

export default SearchGitHubRespos;
