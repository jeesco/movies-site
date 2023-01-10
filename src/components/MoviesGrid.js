
import MoviesCard from "./MoviesCard"
import Data from '../data.json'
import styles from './MoviesGrid.module.css'


export function MoviesGrid() { 

  return (
    <ul className={styles.moviesGrid}>
      {Data.map(movie => (
        <MoviesCard key={movie.id} movie={movie.title} poster_path={movie.poster_path}/>
      ))}
    </ul>
  )
}
