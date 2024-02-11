import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../api/data';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      setData(response.results);
    });
  }, []);

  return (
    <>
      {data && (
        <ul>
          {data.map(trendingMovie => {
            return (
              trendingMovie.original_title && (
                <li key={trendingMovie.id}>
                  <Link
                    to={`movies/${trendingMovie.id}`}
                    id={trendingMovie.id}
                    state={{ from: location }}
                  >
                    {trendingMovie.original_title}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Home;
