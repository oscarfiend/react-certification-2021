import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { VideosContext } from '../../../context/videoContext';
import { Form, Search } from './SearchForm.styled';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const videoContext = useContext(VideosContext);
  const { setQueryVideo } = videoContext;
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === '') {
      return;
    }
    setQueryVideo(query);
    if (history.location.pathname !== '/') {
      history.push('/');
    }
    setQuery('');
  };
  return (
    <Form data-testid="search_form" autoComplete="off" onSubmit={handleSubmit}>
      <Search
        id="search"
        value={query}
        placeholder="Search"
        data-testid="search_field"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
};

export default SearchForm;
