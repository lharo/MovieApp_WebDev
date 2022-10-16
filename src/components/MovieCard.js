import React from 'react'
import { Link } from 'react-router-dom';

export const MovieCard = (props) => {

  const {
    id,
    title,
    name,
    overview,
    poster_path,
    media_type,
    vote_average,
  } = props;

  const myTitle = name ? name : title
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`
  const myOverview = overview.length > 100 ? `${overview.substring(0, 99)}...` : overview;

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              className='card-img'
              src={poster}
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{myTitle}</h5>
              <p className='card-text'>{myOverview}</p>
              <p className='card-text'>
                <small className='text-muted'>Rating: {vote_average}</small>
              </p>
              <Link
                to={`/movie/${id}`}
              >
                ... See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
