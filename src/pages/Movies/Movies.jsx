import React, { useState, useEffect } from 'react';
import { fetchMoviesBySearchQuery } from 'api/data';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('q') ?? '';

  const updateData = () => {
    fetchMoviesBySearchQuery(searchData).then(response => {
      setData(response);
    });
  };

  useEffect(() => {
    fetchMoviesBySearchQuery(movieQuery).then(response => {
      setData(response);
    });
  }, [movieQuery]);

  const handleInputChange = e => {
    setSearchData(e.target.value);
    const nextParams = e.target.value !== '' ? { q: e.target.value } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="search"
            onChange={handleInputChange}
            value={movieQuery}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {data.results?.length === 0 ? (
            <p>{`There is no movies`}</p>
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
