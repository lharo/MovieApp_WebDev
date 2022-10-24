import React, {useState} from 'react'
import { MovieCard } from '../components/MovieCard';
import { useFetchTrending } from '../hooks/useFetchTrending'

export const Trending = () => {

  const [type, setType] = useState('')
  const [timeLapse, setTimeLapse] = useState('')

  const { movies } = useFetchTrending();

  return (
    <>
      <div  className='select media'>
        <label>Elige el tipo de contenido</label>
        <select name="media type">
        <option vale={type} onChange={setType("all")} >all</option>
        <option vale={type} onChange={setType("movie")} >movie</option>
        <option vale={type} onChange={setType("tv")} >tv</option>
        </select>
      </div>

      <div className='timeLapse'>
        <labe>Elegir un periodo:</labe>
        <select>
          <option value={timeLapse} onChange={ setTimeLapse('day')  } >day</option>
          <option value={timeLapse} onChange={ setTimeLapse('week')  } >week</option>
        </select>
      </div>

      <div className='container row row-cols-1 row-cols-md-3 g-3'>
        { movies.map((movie) => 
          <MovieCard 
            key={movie.id}
            { ...movie }
          />
        )}
      </div>
    </>
  
  )
}
