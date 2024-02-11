import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEachMovieReviews } from 'api/data';

export const Reviews = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchEachMovieReviews(movieId).then(response => {
      setData(response);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {data.results?.length === 0 ? (
          <p>{`There is no reviews`}</p>
        ) : (
          data.results?.map(result => {
            return (
              <li key={result.id}>
                <h3>Author: {result.author}</h3>
                <p>{result.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
