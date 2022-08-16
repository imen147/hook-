
import React from 'react'

import MovieCard from './MovieCard'
export const Movieliste = ({Data}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {Data.map(
        (movie)=><MovieCard movie={movie}/>

      )}
    </div>
  )
}






