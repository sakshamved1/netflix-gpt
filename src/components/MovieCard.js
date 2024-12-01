import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({poster_path}) => {

  if(!poster_path) return null
  
  return (
    <div className='w-32 md:w-40 mr-4'>
      <img alt='Movie-card' src= {IMG_CDN_URL + poster_path} />
    </div>
  )
}

export default MovieCard;