import React from 'react'
import { MovieCard } from '../components/MovieCard';
import { useFetchTrending } from '../hooks/useFetchTrending'

export const Trending = () => {

  const { movies } = useFetchTrending();

  return (
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      { movies.map((movie) => 
        <MovieCard 
          key={movie.id}
          { ...movie }
        />
      )}
    </div>
  )
}
