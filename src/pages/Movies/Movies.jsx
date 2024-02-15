import React, { useState, useEffect } from 'react';
import { fetchMoviesBySearchQuery } from 'api/data';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      if (movieQuery !== '') {
        const response = await fetchMoviesBySearchQuery(movieQuery);
        setData(response);
      }
    };
    fetchData();
  }, [movieQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchData !== '') {
      const response = await fetchMoviesBySearchQuery(searchData);
      setData(response);
      setSearchParams({ q: searchData });
    }
  };

  const handleInputChange = e => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="search"
            onChange={handleInputChange}
            value={searchData}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {data.results?.length === 0 ? (
            <p>{`There are no movies`}</p>
          ) : (
            data.results?.map(movie => {
              return (
                <li key={movie.id}>
                  <Link
                    to={`${movie.id}`}
                    id={movie.id}
                    state={{ from: location }}
                  >
                    {movie.title}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default Movies;
