import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEachMovieCast } from '../../api/data';

export const Cast = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchEachMovieCast(movieId).then(response => {
      setData(response);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {data.cast?.length === 0 ? (
          <p>{`There is no cast of this movie`}</p>
        ) : (
          data.cast?.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt="Actor"
                  />
                )}
                <p>{actor.original_name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
