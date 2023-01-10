import styles from './MoviesCard.module.css'

export default function MoviesCard(props) {

  const imageUrl = 'https://image.tmdb.org/t/p/w300' + props.poster_path;

  return (

    <li className={styles.moviesCard}>
      <img className={styles.moviesImage} src={imageUrl} alt={props.title}/>
      <div>{props.movie}</div>
    </li>
  )
}