import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import fetchSearchResults from './Services/Api';
import { Container } from 'react-bootstrap';
import NavigationBar from './Components/Navbar';
import HeaderSection from './Components/HeaderSection'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterSection from './Components/FooterSection';

const App = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState({});
  const [query, setQuery] = useState('');
  const [hasMoreResults, setHasMoreResults] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setPage(1);
    setQuery(query);

    if (cache[query]) {
      setResults(cache[query].slice(0, 5));
      setHasMoreResults(cache[query].length > 5);
    } else {
      const res = await fetchSearchResults(query);
      setResults(res.slice(0, 5));
      setHasMoreResults(res.length > 5);
      setCache((prevCache) => ({
        ...prevCache,
        [query]: res,
      }));
    }
  }, [cache]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const nextResults = cache[query].slice((nextPage - 1) * 5, nextPage * 5);
    setResults((prevResults) => [...prevResults, ...nextResults]);
    setHasMoreResults(cache[query].length > nextPage * 5);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchResults = async () => {
      if (query.length >= 3 && !cache[query]) {
        const res = await fetchSearchResults(query);
        if (!abortController.signal.aborted) {
          setResults(res.slice(0, 5));
          setHasMoreResults(res.length > 5);
          setCache((prevCache) => ({
            ...prevCache,
            [query]: res,
          }));
        }
      }
    };

    fetchResults();

    return () => {
      abortController.abort();
    };
  }, [query, cache]);

  return (
    <div>
      <NavigationBar />
      <HeaderSection />
      <Container className="mt-4">
        <SearchBar onSearch={handleSearch} />
        <SearchResults
          results={results}
          onLoadMore={handleLoadMore}
          hasMoreResults={hasMoreResults}
        />
      </Container>
      <FooterSection />
    </div>
  );
};

export default App;
