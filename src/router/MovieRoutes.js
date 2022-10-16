import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Trending, Home, Top10, Login, Movie } from '../pages'

export const MovieRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/top10' element={<Top10 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movie/:movieId' element={<Movie />} />
      </Routes>
    </>
  )
}
